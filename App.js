
import React,{useState,useEffect, Component} from 'react';
import {StyleSheet,View,Text, Image, BackHandler,StatusBar ,AsyncStorage} from 'react-native';
import {Router, Scene, Tabs,Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';


import List from './src/List';
import Geren from './src/Geren';
import Home from './src/Home';
import Mylist from './src/Mylist';
import SwiperPage from './src/SwiperPage';
import Login from './src/common/Login'
import Register from './src/common/Register';
console.disableYellowBox = true;

export default class App extends Component{
	constructor(){
		super();
		this.state = {
			isLogin:true,
			isInstall:true
		}
	}

	componentDidMount(){
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log('isinstall',res)
			if(res){
				this.setState({
					isInstall:false
				})
				// setInstall(false);
			}
		})
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user)
			if(!user){
				SplashScreen.hide();
			}
			if(user&&user.token){
				this.setState({
					isLogin:false
				})
				SplashScreen.hide();
			}
		})
	}

	afterInstall = ()=>{
		console.log('after install')
		this.setState({
			isInstall:false
		})
	}
	
	render(){
		var now = 0;
		if(this.state.isInstall){
			return <View style={{flex:1}}>
				<SwiperPage afterInstall={this.afterInstall}/>
			</View>
		}
		return(
			<Router hideNavBar
				backAndroidHandler={()=>{	
					if(Actions.currentScene == 'login' || Actions.currentScene == null){
						if(new Date().getTime()-now<2000){
							BackHandler.exitApp();
						}else{
							ToastAndroid.show('确定要退出吗',100);
							now = new Date().getTime();
							return true;
						}
					}
					else if(Actions.currentScene != 'home'){
						Actions.pop();
						return true;
					}
					else{
						if(new Date().getTime()-now<2000){
							BackHandler.exitApp();
						}else{
							ToastAndroid.show('确定要退出吗',100);
							now = new Date().getTime();
							return true;
						}
					}
				}}
			>
				<Scene key="root">
				<Tabs 
								key='tabbar'
                                hideNavBar
								activeTintColor="red"
								inactiveTintColor="#969696"
								tabBarStyle={{backgroundColor:'white'}}
							>
                                <Scene 
                                    key='home' 
                                    initial={true}   
                                    hideNavBar={true}                               
                                    component={Home} 
                                    title='首页'
                                    icon={
                                      ({focused})=><Icon 
                                        size={32}
                                        color={focused?'red':'#969696'} 
                                        name="home"
                                      />
                                    }>
								</Scene>
                                    



                                <Scene 
                                    key='list' 
                                    component={List} 
                                    hideNavBar={true} 
                                    title='商品分类'
                                    icon={
                                      ({focused})=><Icon 
                                        size={25}
                                        color={focused?'red':'#969696'} 
                                        name="file"
                                      />
                                    }>
								</Scene>
                                <Scene 
                                    key='geren'  
                                    
                                    icon={
                                      ({focused})=><Icon 
                                        size={31}
                                        color={focused?'red':'#969696'} 
                                        name="user"
                                      />
                                      
                                    }>
                                     <Scene key='peo' hideNavBar={true}
                                     component={Geren}/>
 									<Scene 
                     key='mylist' 
                     title='我的发布'
                     tabBarStyle={{ overflow: 'hidden' }}
 										component={Mylist}
 									/>
								</Scene>
								
							</Tabs>
					<Scene initial={this.state.isLogin} key="login" component={Login} hideNavBar/>
					<Scene key="register" component={Register} hideNavBar/>
				</Scene>
		</Router>
		)
	}
}



