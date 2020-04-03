import React, { Component } from 'react'
import {
    View, 
    Text, 
    StyleSheet,
    Dimensions,
    Image,
    StatusBar,
    TextInput,
    ScrollView,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Router, Scene, Tabs} from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import Button from 'react-native-button';
import ImagePicker from 'react-native-image-picker';
import Mylist from './Mylist';

const {width,height} = Dimensions.get('window');
const s = width / 640;
const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};



export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
        avatarSource: require('../imgs/c3.png')
    };
}
back = () => {
  Actions.login();
  AsyncStorage.clear();
}

componentDidMount(){
    AsyncStorage.getItem('uri')
    .then((res)=>{
        if(res){
            let temp = {uri:res}
            this.setState({
                avatarSource:temp
            })
            console.log(this.state.avatarSource);
        }
    })
}

//选择图片设置属性
selectPhotoTapped() {
    const options = {
        title: '选择图片', 
        cancelButtonTitle: '取消',
        takePhotoButtonTitle: '拍照', 
        chooseFromLibraryButtonTitle: '选择照片', 
        cameraType: 'back',
        mediaType: 'photo',
        videoQuality: 'high', 
        durationLimit: 10, 
        maxWidth: 300,
        maxHeight: 300,
        quality: 0.8, 
        angle: 0,
        rotation:90,
        allowsEditing: false, 
        noData: false,
        storageOptions: {
            skipBackup: true  
        }
    };

    ImagePicker.showImagePicker(options, (response) => {
        // console.log('Response = ', response);
        if (response.didCancel) {
            console.log('User cancelled photo picker');
        }
        else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
        }
        else {
            let source = { uri: response.uri };
            // console.log(source);
            this.setState({
                avatarSource: source
            });
            AsyncStorage.setItem('uri',response.uri,
                ()=>{console.log("store success");}
            );
        }
    });
}

    render() {
        return (
          <ScrollView  style={styles.height}>
            <View style={{flex: 1,backgroundColor: '#f5f5f5'}}>
                <StatusBar backgroundColor='#f23030'/>
                {/*<View style={{height:220,backgroundColor:'#f23030'}}>
                  <View style={{marginLeft:127,marginTop:27}}>
                  <Button 
                    onPress={()=>{this.takephoto()}}

                ><Image style={{width:100,height:100,borderRadius:70,}} resizeMode='contain' source={this.state.avatarSource}  /> </Button>
                             
                  </View>
                  <View style={{marginLeft:110,marginTop:7}}>
                    <Text style={{fontSize:18,color:'white'}}>BINNU DHILLON</Text>
                  </View>
        </View>*/}
        <View style={{
                    backgroundColor:'#f23030',
                    width:'100%',
                    height:220,
                    alignContent:'center',
                    justifyContent:'center'
                }}>


                    <TouchableOpacity onPress={()=>this.selectPhotoTapped()}>
                        <Image source={this.state.avatarSource} style={{width:170*s,height:170*s,marginLeft:220*s,marginTop:-30*s,borderRadius:100}}/>
                    </TouchableOpacity>



                    <Text style={{color:'white',fontSize:18,fontWeight:'bold',paddingLeft:200*s,paddingTop:20*s}}>BINNU DHILLON</Text>
                </View>
                <View style={styles.box}>
                  <Image style={{width:30,height:30,marginLeft:13,marginTop:18}} resizeMode='contain' source={require('../imgs/c1.png')}/>
                  <Text style={{marginLeft:13,marginTop:20,fontSize:17,color:"#727171"}}>我的个人中心</Text>
                </View>
                <View style={styles.box1}>
                  <View style={styles.box2}>
                    <Image style={{width:30,height:30,marginTop:30}} resizeMode='contain' source={require('../imgs/c3.png')}/>
                    <Text style={{marginTop:3,fontSize:17,color:"#727171"}}>账户管理</Text>
                  </View>
                  <View style={styles.box2}>
                    <Image style={{width:30,height:30,marginTop:30}} resizeMode='contain' source={require('../imgs/c3.png')}/>
                    <Text style={{marginTop:3,fontSize:17,color:"#727171"}}>收货地址</Text>
                  </View>
                  <View style={styles.box2}>
                    <Image style={{width:30,height:30,marginTop:30}} resizeMode='contain' source={require('../imgs/c3.png')}/>
                    <Text style={{marginTop:3,fontSize:17,color:"#727171"}}>我的信息</Text>
                  </View>
                </View>
                <View style={styles.box1}>
                  <View style={styles.box2}>
                    <Image style={{width:30,height:30,marginTop:30}} resizeMode='contain' source={require('../imgs/c3.png')}/>
                    <Text style={{marginTop:3,fontSize:17,color:"#727171"}}>我的订单</Text>
                  </View>
                  <View style={styles.box2}>
                    <Image style={{width:30,height:30,marginTop:30}} resizeMode='contain' source={require('../imgs/c3.png')}/>
                    <Text style={{marginTop:3,fontSize:17,color:"#727171"}}>我的二维码</Text>
                  </View>
                  <View style={styles.box2}>
                    <Image style={{width:30,height:30,marginTop:30}} resizeMode='contain' source={require('../imgs/c3.png')}/>
                    <Text style={{marginTop:3,fontSize:17,color:"#727171"}}>我的积分</Text>
                  </View>
                </View>
                <View style={styles.box3}>
                  <View style={styles.box2}>
                    <Image style={{width:30,height:30,marginTop:30}} resizeMode='contain' source={require('../imgs/c3.png')}/>
                    <Text style={{marginTop:3,fontSize:17,color:"#727171"}}>我的收藏</Text>
                  </View>
                </View>
              </View>
              <View style={styles.box}>
                  <Image style={{width:30,height:30,marginLeft:13,marginTop:18}} resizeMode='contain' source={require('../imgs/c2.png')}/>
                  <Text style={{marginLeft:13,marginTop:20,fontSize:17,color:"#727171"}}>E族活动</Text>
                </View>
                <View style={styles.box1}>
                  <View style={styles.box2}>
                    <Image style={{width:30,height:30,marginTop:30}} resizeMode='contain' source={require('../imgs/c3.png')}/>
                    <Text style={{marginTop:3,fontSize:17,color:"#727171"}}>居家维修保养</Text>
                  </View>
                  <View style={styles.box2}>
                    <Image style={{width:30,height:30,marginTop:30}} resizeMode='contain' source={require('../imgs/c3.png')}/>
                    <Text style={{marginTop:3,fontSize:17,color:"#727171"}}>出行接送</Text>
                  </View>
                  <View style={styles.box2}>
                    <Image style={{width:30,height:30,marginTop:30}} resizeMode='contain' source={require('../imgs/c3.png')}/>
                    <Text style={{marginTop:3,fontSize:17,color:"#727171"}}>我的受赠人</Text>
                  </View>
                </View>
                <View style={styles.box1}>
                  <View style={styles.box2}>
                    <Image style={{width:30,height:30,marginTop:30}} resizeMode='contain' source={require('../imgs/c3.png')}/>
                    <Text style={{marginTop:3,fontSize:17,color:"#727171"}}>我的住宿优惠</Text>
                  </View>
                  <View style={styles.box2}>
                    <Image style={{width:30,height:30,marginTop:30}} resizeMode='contain' source={require('../imgs/c3.png')}/>
                    <Text style={{marginTop:3,fontSize:17,color:"#727171"}}>我的活动</Text>
                  </View>
                  <Button 
                    onPress={()=>Actions.mylist()}

                >
                  <View style={styles.box2}>
                  <Image style={{width:30,height:30,marginTop:30}} resizeMode='contain' source={require('../imgs/c3.png')}/><Text style={{marginTop:3,fontSize:17,color:"#727171"}}>我的发布</Text>
                  </View></Button>
                </View>
                <View
                  style={{
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:35,
                    marginBottom:28
                  }}
                  >
                  <TouchableOpacity onPress={this.back}>
                    <View style={styles.back}>
                      <Text style={{color:'#a9a9a9',fontSize:14}}>BINNU DHILLON  |  退出</Text>
                    </View>
                  </TouchableOpacity>
                </View>
          </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
  box:{
    width:width,
    height:60,
    backgroundColor:'white',
    marginBottom:1,
    flexDirection:'row',
  },
  box1:{
    width:width,
    height:100,
    backgroundColor:'white',
    flexDirection:'row',
  },
  box2:{
    width:width/3,
    height:100,
    backgroundColor:'white',
    alignItems:"center",

  },
  box3:{
    width:width,
    height:100,
    backgroundColor:'white',
    marginBottom:10
  }
});