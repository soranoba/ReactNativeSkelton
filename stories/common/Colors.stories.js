import React from 'react';
import { storiesOf } from '@storybook/react';

import { AppleColors, MaterialDesignColors } from 'common/Colors';
import { Text, StyleSheet } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

storiesOf('Colors', module)
  .add('AppleColors', () => (
    <Grid>
      {[
        { text: 'red', style: AppleColors.red },
        { text: 'yellow', style: AppleColors.yellow },
        { text: 'green', style: AppleColors.green },
        { text: 'tealBlue', style: AppleColors.tealBlue },
        { text: 'blue', style: AppleColors.blue },
        { text: 'purple', style: AppleColors.purple },
        { text: 'pink', style: AppleColors.pink },
      ].map(({ text, style }) => (
        <Row key={text} style={{ height: 50 }}>
          <Col style={{ width: 100 }}>
            <Text>{text}</Text>
          </Col>
          <Col style={{ backgroundColor: StyleSheet.flatten([style]).color }} />
        </Row>
      ))}
    </Grid>
  ))
  .add('MaterialDesignColors', () => (
    <Grid>
      {[
        { text: 'red-200', style: MaterialDesignColors.red200 },
        { text: 'red-500', style: MaterialDesignColors.red500 },
        { text: 'red-700', style: MaterialDesignColors.red700 },
        { text: 'pink-200', style: MaterialDesignColors.pink200 },
        { text: 'pink-500', style: MaterialDesignColors.pink500 },
        { text: 'pink-700', style: MaterialDesignColors.pink700 },
        { text: 'purple-200', style: MaterialDesignColors.purple200 },
        { text: 'purple-500', style: MaterialDesignColors.purple500 },
        { text: 'purple-700', style: MaterialDesignColors.purple700 },
        { text: 'deepPurple-200', style: MaterialDesignColors.deepPurple200 },
        { text: 'deepPurple-500', style: MaterialDesignColors.deepPurple500 },
        { text: 'deepPurple-700', style: MaterialDesignColors.deepPurple700 },
        { text: 'indigo-200', style: MaterialDesignColors.indigo200 },
        { text: 'indigo-500', style: MaterialDesignColors.indigo500 },
        { text: 'indigo-700', style: MaterialDesignColors.indigo700 },
        { text: 'blue-200', style: MaterialDesignColors.blue200 },
        { text: 'blue-500', style: MaterialDesignColors.blue500 },
        { text: 'blue-700', style: MaterialDesignColors.blue700 },
        { text: 'lightBlue-200', style: MaterialDesignColors.lightBlue200 },
        { text: 'lightBlue-500', style: MaterialDesignColors.lightBlue500 },
        { text: 'lightBlue-700', style: MaterialDesignColors.lightBlue700 },
        { text: 'cyan-200', style: MaterialDesignColors.cyan200 },
        { text: 'cyan-500', style: MaterialDesignColors.cyan500 },
        { text: 'cyan-700', style: MaterialDesignColors.cyan700 },
        { text: 'teal-200', style: MaterialDesignColors.teal200 },
        { text: 'teal-500', style: MaterialDesignColors.teal500 },
        { text: 'teal-700', style: MaterialDesignColors.teal700 },
        { text: 'green-200', style: MaterialDesignColors.green200 },
        { text: 'green-500', style: MaterialDesignColors.green500 },
        { text: 'green-700', style: MaterialDesignColors.green700 },
        { text: 'lightGreen-200', style: MaterialDesignColors.lightGreen200 },
        { text: 'lightGreen-500', style: MaterialDesignColors.lightGreen500 },
        { text: 'lightGreen-700', style: MaterialDesignColors.lightBlue700 },
        { text: 'lime-200', style: MaterialDesignColors.lime200 },
        { text: 'lime-500', style: MaterialDesignColors.lime500 },
        { text: 'lime-700', style: MaterialDesignColors.lime700 },
        { text: 'yellow-200', style: MaterialDesignColors.yellow200 },
        { text: 'yellow-500', style: MaterialDesignColors.yellow500 },
        { text: 'yellow-700', style: MaterialDesignColors.yellow700 },
        { text: 'amber-200', style: MaterialDesignColors.amber200 },
        { text: 'amber-500', style: MaterialDesignColors.amber500 },
        { text: 'amber-700', style: MaterialDesignColors.amber700 },
        { text: 'orange-200', style: MaterialDesignColors.orange200 },
        { text: 'orange-500', style: MaterialDesignColors.orange500 },
        { text: 'orange-700', style: MaterialDesignColors.orange700 },
        { text: 'deepOrange-200', style: MaterialDesignColors.deepOrange200 },
        { text: 'deepOrange-500', style: MaterialDesignColors.deepOrange500 },
        { text: 'deepOrange-700', style: MaterialDesignColors.deepOrange700 },
        { text: 'brown-200', style: MaterialDesignColors.brown200 },
        { text: 'brown-500', style: MaterialDesignColors.brown500 },
        { text: 'brown-700', style: MaterialDesignColors.brown700 },
        { text: 'gray-200', style: MaterialDesignColors.gray200 },
        { text: 'gray-500', style: MaterialDesignColors.gray500 },
        { text: 'gray-700', style: MaterialDesignColors.gray700 },
        { text: 'blueGray-200', style: MaterialDesignColors.blueGray200 },
        { text: 'blueGray-500', style: MaterialDesignColors.blueGray500 },
        { text: 'blueGray-700', style: MaterialDesignColors.blueGray700 },
      ].map(({ text, style }) => (
        <Row key={text} style={{ height: 50 }}>
          <Col style={{ width: 150 }}>
            <Text>{text}</Text>
          </Col>
          <Col style={{ backgroundColor: StyleSheet.flatten([style]).color }} />
        </Row>
      ))}
    </Grid>
  ));
