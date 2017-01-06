/**
 * 每个页面头部组件
 */
import React,{Component} from 'react';
import {
    View,Navigator,Text,TouchableOpacity,
    Image,StyleSheet,Platform
} from 'react-native';
import {APP_MAIN_COLOR,APP_HEADER_HEIGHT} from '../GlobalConst';
const IMAGE_BACK_SRC = require('../img/icon/ic_back.png');
const IMAGE_DRAWER_SRC = require('../img/icon/ic_drawer_toggle.png');
export default class HeaderComp extends Component{
    constructor(props){
        super(props);
        this.isMainPage = this.props.isMainPage;
    }
    render(){
        let leftView;
        let rightView;
        if(this.props.onLeftButtonClick){
            leftView = (
                <TouchableOpacity
                onPress={this.props.onLeftButtonClick}>
                    <View style={styles.buttonImage}>
                    <Image  source={this.isMainPage ? IMAGE_DRAWER_SRC : IMAGE_BACK_SRC} />
                    </View>
                </TouchableOpacity>  
            );
        }else{
            leftView = <View style={styles.placeholderView} />;
        }
        if(this.props.onRightButtonClick){
            rightView = (
                <Text>1231</Text>
            );
        }else{
            rightView = <View style={styles.placeholderView} />;
        }
        return(
            <View style={[styles.headerContainer,styles.container]}>
                {leftView}  
                <Text style={styles.titleStyle}>{this.props.title}</Text>
                {rightView}
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        paddingTop: (Platform.OS === 'android' && Platform.Version < 19) ? 0 : (Platform.OS === 'android' ? 24 : 20),
    },
    titleStyle:{
        flex:1,
        alignSelf:'center',
        color:'#ffffff',
        fontSize:17,
        fontWeight:'bold',
        textAlign:'center'
    },
    headerContainer:{
        backgroundColor:APP_MAIN_COLOR,
        height:APP_HEADER_HEIGHT,
        flexDirection: 'row'
    },
    buttonImage:{
    width: APP_HEADER_HEIGHT,
    height: APP_HEADER_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    },
    placeholderView: {
        width: APP_HEADER_HEIGHT,
    }
});