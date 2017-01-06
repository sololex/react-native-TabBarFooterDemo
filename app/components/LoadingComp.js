import React,{Component} from 'react';
import {
    View,Text,ProgressBarAndroid,StyleSheet
    ,ActivityIndicator

} from 'react-native';

export default class LoadingComp extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
            <ActivityIndicator
                    animating={this.props.animating}
                    style={[styles.centering]}
                    size="large"
                        />
             <Text style={{color:'#fff',height:25}}>{this.props.title?this.props.title:'数据加载中...'}</Text>
            </View>    
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:0,
        alignItems:'center',
        width:90,
        height:80,
        flexDirection:'column',
        justifyContent:'center',
        backgroundColor:'#000',
        borderRadius:10
    }
});