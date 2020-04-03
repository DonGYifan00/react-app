import React,{ Component } from 'react';
import { View ,Text ,StatusBar} from 'react-native';

export default class Server extends Component {
  render() {
    return(
      <View style={{flex:1,backgroundColor:'#fff'}}>
        <StatusBar backgroundColor='red'/>
        <Text>服务</Text>
      </View>
    )
  }
}