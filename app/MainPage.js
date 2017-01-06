import React,{Component} from 'react';
import {
    View,Text,Navigator,
    Platform
} from 'react-native';
import HomePage from './pages/HomePage';
export default class MainPage extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        
    }
    render(){
        return(
            <Navigator
                ref={component => this.navigator = component}
                navigator = {this.props.navigator}
                configureScene={this._handlerConfigureScene}
                initialRoute={{component:HomePage,params:{}}}
                renderScene={this._renderScene.bind(this)}
                >
                </Navigator>
        );
    }
    _handlerConfigureScene(){
         if (Platform.OS === 'android') {
            return Navigator.SceneConfigs.PushFromRight;
        } else {
            return Navigator.SceneConfigs.FloatFromBottomAndroid;
        }
    }
    _renderScene(route,navigator){
        return <route.component navigator={navigator} {...this.props}  {...route.params} />;
    }

}