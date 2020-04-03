import React, { Component } from 'react'
import {
    View, 
    Text, 
    StyleSheet,
    Dimensions,
    Button,
    Image,
    StatusBar,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';
const {width,height} = Dimensions.get('window');
const s = width / 640;

import Swiper from 'react-native-swiper';

export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            tits: []
        }
    }
    render() {
        return (
          <ScrollView  style={styles.height}>
            <View style={{flex: 1,backgroundColor: '#f5f5f5'}}>
                <StatusBar backgroundColor='red'/>
                <View style={{flexDirection:'row',height:60,paddingTop:10,paddingBottom:10,paddingLeft:10,backgroundColor:'red'}}>
                    <View style={{width:'82%',height:42,backgroundColor:'#fcc5c5',borderRadius:25,marginLeft:5,flexDirection:'row'}}>
                        <Image style={{width:25,height:25,marginLeft:23,marginTop:8,}} source={require('../imgs/search1.png')}/>
                        <TextInput style={{marginLeft:7,fontSize:16,paddingTop:14,height:42}} placeholderTextColor="#fef3f3" placeholder='请输入您要搜索的关键字'/>                      
                    </View>
                    <View>
                      <Image style={{width:25,height:25,marginLeft:10,marginTop:8,}} source={require('../imgs/gouwu.png')}/>
                    </View>
                </View> 
                <View style={styles.container}>
                  <Swiper
                    dot={<View style={{ backgroundColor: 'white', width: 8, height: 8, borderRadius: 4, marginLeft: 5, marginRight: 5, marginTop: 3 }} />}
                    activeDot={<View style={{ backgroundColor: 'red', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3}} />} 
                    autoplay = {true}>
                    <View style={styles.slide}>
                      <Image resizeMode='stretch' style={styles.image} source={require('../imgs/a1.png')} />
                    </View>
                    <View style={styles.slide}>
                      <Image resizeMode='stretch' style={styles.image} source={require('../imgs/a1.png')} />
                    </View>
                    <View style={styles.slide}>
                      <Image resizeMode='stretch' style={styles.image} source={require('../imgs/a4.png')} />
                    </View>
                  </Swiper>
                </View>
                <View style={styles.box}>
                  <View style={styles.box1}>
                    <Image style={{width:35,height:35}} resizeMode='contain' source={require('../imgs/b1.png')}/>                  
                  </View>
                  <View style={{marginLeft:26,marginTop:34}}>
                    <Text style={{fontSize:16,color:'#7e7d7d'}}>居家维修保养</Text>
                  </View>
                  <View style={{marginLeft:110,marginTop:37}}>
                    <Image style={{width:17,height:17}} resizeMode='contain' source={require('../imgs/jiantou.png')}/> 
                  </View>
                </View>
                <View style={styles.box}>
                  <View style={styles.box2}>
                    <Image style={{width:35,height:35}} resizeMode='contain' source={require('../imgs/b2.png')}/>
                  </View>
                  <View style={{marginLeft:26,marginTop:34}}>
                    <Text style={{fontSize:16,color:'#7e7d7d'}}>住宿优惠</Text>
                  </View>
                  <View style={{marginLeft:142,marginTop:37}}>
                    <Image style={{width:17,height:17}} resizeMode='contain' source={require('../imgs/jiantou.png')}/> 
                  </View>
                </View>
                <View style={styles.box}>
                  <View style={styles.box3}>
                    <Image style={{width:35,height:35}} resizeMode='contain' source={require('../imgs/b3.png')}/>
                  </View>
                  <View style={{marginLeft:26,marginTop:34}}>
                    <Text style={{fontSize:16,color:'#7e7d7d'}}>出行接送</Text>
                  </View>
                  <View style={{marginLeft:142,marginTop:37}}>
                    <Image style={{width:17,height:17}} resizeMode='contain' source={require('../imgs/jiantou.png')}/> 
                  </View>
                </View>
                <View style={styles.box}>
                  <View style={styles.box4}>
                    <Image style={{width:35,height:35}} resizeMode='contain' source={require('../imgs/b4.png')}/>
                  </View>
                  <View style={{marginLeft:26,marginTop:34}}>
                    <Text style={{fontSize:16,color:'#7e7d7d'}}>E族活动</Text>
                  </View>
                  <View style={{marginLeft:146,marginTop:37}}>
                    <Image style={{width:17,height:17}} resizeMode='contain' source={require('../imgs/jiantou.png')}/> 
                  </View>
                </View>

                <TouchableOpacity
                  style={{width:310,
                    height:45,
                    marginTop:30,
                    backgroundColor:'#f23030',
                    alignItems:"center",
                    justifyContent:"center",
                    borderRadius:8,
                    marginLeft:26
                  }}
                ><Text style={{color:'#fff',fontSize:16}}>发布需求</Text></TouchableOpacity>
                <View
                  style={{
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:35,
                    marginBottom:28
                  }}
                  >
                  <Text style={{color:'#a9a9a9'}}>©E族之家 版权所有</Text>
                </View>
            </View>
          </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
  container: {
    height: 185,
    width:width,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  image: {
    width,
    height: 120,
    flex: 1
  },
  box:{
    width:width,
    height:90,
    backgroundColor:'white',
    marginTop:8,
    flexDirection:'row',
  },
  height:{
    height:height,
    backgroundColor:'#eeeeee'
  },
  box4:{
    width:78,
    height:78,
    marginTop:6,
    backgroundColor:'#c3ddf2',
    alignItems:"center",
    justifyContent:"center",
    borderRadius:39,
    marginLeft:16
  },
  box1:{
    width:78,
    height:78,
    marginTop:6,
    backgroundColor:'#ffcccc',
    alignItems:"center",
    justifyContent:"center",
    borderRadius:39,
    marginLeft:16
  },
  box2:{
    width:78,
    height:78,
    marginTop:6,
    backgroundColor:'#ffe1b1',
    alignItems:"center",
    justifyContent:"center",
    borderRadius:39,
    marginLeft:16
  },
  box3:{
    width:78,
    height:78,
    marginTop:6,
    backgroundColor:'#bfe6a8',
    alignItems:"center",
    justifyContent:"center",
    borderRadius:39,
    marginLeft:16
  }
});