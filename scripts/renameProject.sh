#!/bin/bash

if [ $# -ne 1 ]; then
    echo "Bad Arguemnts: $0 <PROJECT_NAME>" 1>&2
    exit 1
fi

SED="sed"
DST_NAME=${1}
SRC_NAME="ReactNativeSkelton"
LOWER_SRC_NAME=$(echo ${SRC_NAME} | awk '{print tolower($0)}')
LOWER_DST_NAME=$(echo ${DST_NAME} | awk '{print tolower($0)}')

for SRC_FILE in $(find . -type d -name ${SRC_NAME}* -or -name ${LOWER_SRC_NAME}*); do
  DST_FILE=$(echo ${SRC_FILE} | ${SED} -e "s|${SRC_NAME}|${DST_NAME}|g" -e "s|${LOWER_SRC_NAME}|${LOWER_DST_NAME}|g")
  mv ${SRC_FILE} ${DST_FILE}
done
for SRC_FILE in $(find . -type f -name ${SRC_NAME}* -or -name ${LOWER_SRC_NAME}*); do
  DST_FILE=$(echo ${SRC_FILE} | ${SED} -e "s|${SRC_NAME}|${DST_NAME}|g" -e "s|${LOWER_SRC_NAME}|${LOWER_DST_NAME}|g")
  mv ${SRC_FILE} ${DST_FILE}
done

export LANG=C
IFS=$'\n'
for TARGET_FILE in $(grep --exclude "*/node_modules/*" --exclude "*/vendor/*" --exclude "*/.git/*" -r -l -e ${SRC_NAME} -e ${LOWER_SRC_NAME} $(dirname $0)/..); do
  TMP=$(mktemp)
  cat "${TARGET_FILE}" | ${SED} -e "s|${SRC_NAME}|${DST_NAME}|g" -e "s|${LOWER_SRC_NAME}|${LOWER_DST_NAME}|g" > ${TMP}
  rm "${TARGET_FILE}"
  mv ${TMP} "${TARGET_FILE}"
done
