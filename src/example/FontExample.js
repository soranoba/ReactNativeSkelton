import React from 'react';
import { View, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

class Row extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        {this.props.children}
      </View>
    );
  }
}

export default class FontExample extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Row>
          <Text>AntDesign</Text>
          <AntDesign name="heart" size={30} color="gray" />
        </Row>
        <Row>
          <Text>Entypo</Text>
          <Entypo name="adjust" size={30} color="red" />
        </Row>
        <Row>
          <Text>EvilIcons</Text>
          <EvilIcons name="heart" size={30} color="pink" />
        </Row>
        <Row>
          <Text>Feather</Text>
          <Feather name="archive" size={30} color="blue" />
        </Row>
        <Row>
          <Text>FontAwesome</Text>
          <FontAwesome name="download" size={30} color="skyblue" />
        </Row>
        <Row>
          <Text>FontAwesome5</Text>
          <FontAwesome5 name="apple" size={30} color="purple" light={false} solid={false} />
        </Row>
        <Row>
          <Text>Foundation</Text>
          <Foundation name="anchor" size={30} color="green" />
        </Row>
        <Row>
          <Text>Ionicons</Text>
          <Ionicons name="ios-alert" size={30} color="yellow" />
        </Row>
        <Row>
          <Text>MaterialCommunityIcons</Text>
          <MaterialCommunityIcons name="account-edit" size={30} color="yellowgreen" />
        </Row>
        <Row>
          <Text>MaterialIcons</Text>
          <MaterialIcons name="add-location" size={30} color="purple" />
        </Row>
        <Row>
          <Text>Octicons</Text>
          <Octicons name="briefcase" size={30} color="purple" />
        </Row>
        <Row>
          <Text>SimpleLineIcons</Text>
          <SimpleLineIcons name="user" size={30} color="purple" />
        </Row>
        <Row>
          <Text>Zocial</Text>
          <Zocial name="amazon" size={30} color="purple" />
        </Row>
      </View>
    );
  }
}
