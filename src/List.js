import React, { Component } from 'react'
import {
    View, 
    Text, 
    StyleSheet,
    Dimensions,
    FlatList,
    Image,
    StatusBar,
    TextInput,
    TouchableOpacity
} from 'react-native';
const {width,scale} = Dimensions.get('window');
const s = width / 640;

const goods = [
    {
        title: 'Oishi/上好佳玉米卷20包膨化休 闲食品Oishi/上好佳',
        price: 36.00,
        img: require('../imgs/11.png')
    },
    {
        title: 'Oishi/上好佳玉米卷20包膨化休 闲食品Oishi/上好佳',
        price: 36.00,
        img: require('../imgs/22.png')
    },
    {
        title: 'Oishi/上好佳玉米卷20包膨化休 闲食品Oishi/上好佳',
        price: 36.00,
        img: require('../imgs/11.png')
    },
    {
        title: 'Oishi/上好佳玉米卷20包膨化休 闲食品Oishi/上好佳',
        price: 36.00,
        img: require('../imgs/22.png')
    },
    {
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: 36.00,
        img: require('../imgs/11.png')
    },
    {
        title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
        price: 36.00,
        img: require('../imgs/22.png')
    },
]

export default class Test extends Component {
    constructor(){
        super();
        this.state = {
            tits: []
        }
    }
    render() {
        return (
            <View style={{flex: 1,backgroundColor: '#fff'}}>
                <StatusBar backgroundColor='white'/>
                <View style={{flexDirection:'row',height:42,justifyContent:'center',marginTop:10}}>
                    <View style={{width:'82%',backgroundColor:'#eeeeee',borderRadius:5,alignItems:'center',flexDirection:'row'}}>
                    <   TextInput style={{marginLeft:10,fontSize:16}} placeholder='请输入商品名称'/>
                        <Image style={{width:26,height:26,marginLeft:125}} source={require('../imgs/search.png')}/>
                    </View>
                </View> 
                <View style={styles.nav}>
                    <TouchableOpacity>
                        <Text>综合</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>销量</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>新品</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>价格</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>信用</Text>
                    </TouchableOpacity>
                </View>
                <FlatList 
                    style={{backgroundColor: '#F4F4F4'}}
                    data={goods}
                    numColumns={2}
                    renderItem={({item})=>(
                        <View style={styles.good}>
                            <Image 
                                resizeMode="contain"
                                source={item.img}
                                style={{height:180*s,marginTop: 60*s}}
                            />
                            <Text
                                style={{marginTop: 20}}
                            
                            >{item.title}</Text>
                            <Text 
                                style={{width:'100%',color: 'red'}}
                            >{item.price}</Text>
                        </View>
                    )}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header:{
        height: 70*s,
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 1/3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    search:{
        width: 544*s,
        height: 50*s,
        backgroundColor: '#EEEEEE',
        flexDirection: 'row',
        alignItems: 'center'
    },
    nav:{
        height: 73*s,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    good:{
        width: 290*s,
        backgroundColor: '#fff',
        marginLeft: 20*s,
        marginTop: 20*s,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 20,
        alignItems: 'center'
    }
})