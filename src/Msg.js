import React,{ Component } from 'react';
import { View ,Text,Button} from 'react-native';
import { Actions} from 'react-native-router-flux';

export default class Msg extends Component {
  constructor(){
    super();
    this.state = {
      count:0
    }
  }
  render() {
    return(
      <View>
        <Button 
          title='跳转到MsgDetall页面' 
          onPress={()=>Actions.msgdetall()}
        />
        <Text style={{fontSize:30}}>消息数：{this.state.count}</Text>
        <Button 
          title='消息数加1' 
          onPress={()=>this.setState({count:1})}
        />
        <Button 
          title='打开lightbox' 
          onPress={()=>Actions.light()}
        />
        <Button 
          title='登陆' 
          onPress={()=>Actions.login()}
        />
      </View>
    )
  }
}