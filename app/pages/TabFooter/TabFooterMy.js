import React,{Component} from 'react';
import {
    View,Text,TouchableOpacity,Alert,
    StyleSheet
} from 'react-native';
import {APP_MAIN_COLOR} from '../../GlobalConst';
import HeaderComp from '../../components/HeaderComp';

export default class TabFooterMy extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <HeaderComp title='我' />
                <Text>this is  new my  center page</Text>
                <TouchableOpacity onPress={this._logOut.bind(this)}>
                    <View style={styles.form_commint}>
                        <Text style={{color:'#fff'}}>退出</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    _logOut(){
        Alert.alert(
            '提示',
            '确定注销用户吗?',
            [
                {text:'确定',onPress:()=>this.props.onAniming && this.props.onAniming()},
                {text:'取消'}
            ]
        );
    }
}
const styles = StyleSheet.create({
    form_commint:{
        marginTop:15,
        marginLeft:10,
        marginRight:10,
        backgroundColor:APP_MAIN_COLOR,
        height:35,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    }
});