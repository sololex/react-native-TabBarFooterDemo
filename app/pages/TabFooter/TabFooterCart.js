import React,{Component} from 'react';
import {
    View,Text
} from 'react-native';
import HeaderComp from '../../components/HeaderComp';

export default class TabFooterCart extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <HeaderComp title='购物车' />
                <Text>this is  new cart page</Text>
            </View>
        );
    }
}