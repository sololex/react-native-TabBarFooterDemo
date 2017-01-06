import React,{Component} from 'react';
import{
    View,Text
} from 'react-native';
import HeaderComp from '../../components/HeaderComp';
export default class SecondPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <HeaderComp 
                    onLeftButtonClick = {()=>this.props.navigator.pop()}
                    title="Second"
                />
                <Text>this is second page</Text>
            </View>
        );
    }
}