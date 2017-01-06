import React,{Component} from 'react';
import{
    View,Text,TouchableOpacity,
    AsyncStorage,StyleSheet,Dimensions,
    TextInput,ToastAndroid
} from 'react-native';
import {APP_MAIN_COLOR} from '../GlobalConst';
import LoadingComp from '../components/LoadingComp';
import {Icon} from 'react-native-elements';
export default class LoginPage extends Component{
    constructor(props){
        super(props);
        this.screenWidth = Dimensions.get('window').width/2-45;
        this.screenHeight = Dimensions.get('window').height/2-40;
        this.state = {
            isloading:false,
            Mobile:'',
            Password:''
        }
    }

    render(){
        let loadingView;
        if(this.state.isloading){
            loadingView = (
                <View style={{position:'absolute',flex:1,top:this.screenHeight,left:this.screenWidth}}>
                        <LoadingComp title='登录中...' />
                </View>
            )
        }else{
            loadingView = null;
        }
        return(
            <View>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Icon  name='user' reverse  type='font-awesome'  color={`${APP_MAIN_COLOR}`} />
                </View>
                <View>  
                   <TextInput style={styles.user_input}
                        placeholder='手机号/邮箱'
                        numberOfLines={1}
                        autoFocus={true}
                        underlineColorAndroid={'transparent'}
                        textAlign='center'
                        onChangeText = {(Mobiletext)=>this.setState({Mobile:Mobiletext})}
                     />
                     <View style={{height:1,backgroundColor:'#f4f4f4'}}></View>
                     <TextInput style={styles.user_pass}
                        placeholder="密码"
                        numberOfLines={1}
                        autoFocus={false}
                        secureTextEntry={true}
                        underlineColorAndroid={'transparent'}
                        textAlign='center'
                        onChangeText = {(PasswordText)=>this.setState({Password:PasswordText})}
                      />
                </View>
                <View>
                    <TouchableOpacity onPress={this._loginStorage.bind(this,1)}>
                        <View style={styles.form_commint}>
                            <Text style={{color:'#fff'}}>点我进行模拟登录</Text>
                        </View>     
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{marginTop:10}} onPress={this._loginStorage.bind(this,2)}>
                    <View style={styles.form_commint}>
                        <Text style={{color:'#fff'}}>点这个登录，下次不需再登录</Text>
                    </View>     
                </TouchableOpacity>
                {loadingView}
            </View>
        );
    }
    _loginStorage(type){
        if(this.state.Mobile == '' || this.state.Password == ''){
            ToastAndroid.show('请输入用户名或密码!',ToastAndroid.SHORT,'center');
            return;
        }
        if(type == 2){
            AsyncStorage.setItem('loginUserID','11');
        }
        this.setState({isloading:true});
        setTimeout(()=>{
            this.setState({isloading:false});
            this.props.onLoginEd && this.props.onLoginEd();
        },4000);
    }
}
const styles = StyleSheet.create({
    user_input:{
        backgroundColor:'#fff',
        height:40,
        marginTop:10
    },
    user_pass:{
        backgroundColor:'#fff',
        height:40
    },
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