import React,{Component} from 'react';
import {
    View,Text
} from 'react-native';
import HeaderComp from '../../components/HeaderComp';

export default class TabFooterOrder extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <HeaderComp title='订单' />
                <Text>this is  new Order page</Text>
            </View>
        );
    }
}