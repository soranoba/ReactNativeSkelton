#!/bin/bash

if [ $# -ne 1 ]; then
    echo "Bad Arguemnts: $0 <PROJECT_NAME>" 1>&2
    exit 1
fi

SED="sed"
DST_NAME=${1}
SRC_NAME="ReactNativeSkelton"

for SRC_FILE in $(find . -name ${SRC_NAME}* -type d); do
  DST_FILE=$(echo ${SRC_FILE} | ${SED} "s|${SRC_NAME}|${DST_NAME}|g")
  mv ${SRC_FILE} ${DST_FILE}
done
for SRC_FILE in $(find . -name ${SRC_NAME}* -type f); do
  DST_FILE=$(echo ${SRC_FILE} | ${SED} "s|${SRC_NAME}|${DST_NAME}|g")
  mv ${SRC_FILE} ${DST_FILE}
done

export LANG=C
for TARGET_FILE in $(grep --exclude "*/node_modules/*" --exclude "*/vendor/*" --exclude "*/.git/*" -r ${SRC_NAME} -l $(dirname $0)/..); do
  DUMP="$(cat ${TARGET_FILE} | ${SED} "s|${SRC_NAME}|${DST_NAME}|g")"
  rm ${TARGET_FILE}
  echo "${DUMP}" > ${TARGET_FILE}
done
