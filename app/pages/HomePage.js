import React,{Component} from 'react';
import {
    View,Text,StyleSheet
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import HeaderComp from '../components/HeaderComp';
import {Icon} from 'react-native-elements';
import TabFooterHome from './TabFooter/TabFooterHome';
import TabFooterOrder from './TabFooter/TabFooterOrder';
import TabFooterCart from './TabFooter/TabFooterCart';
import TabFooterMy from './TabFooter/TabFooterMy';
export default class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedTab:'TabFooterHome'
        }
    }
    render(){
        return(
           <TabNavigator>
                 <TabNavigator.Item
                title="主页"
                selected={this.state.selectedTab === 'TabFooterHome'}
                selectedTitleStyle={styles.selectedTextStyle}
                titleStyle={styles.textStyle}
                renderIcon={() => <Icon  name='home' type='font-awesome' color="#999" />}
                renderSelectedIcon={() => <Icon name='home' type='font-awesome' color='#1d9d74' />}
                onPress={() => this.setState({ selectedTab: 'TabFooterHome' })}>
                <TabFooterHome {...this.props}/>
              </TabNavigator.Item>
              <TabNavigator.Item
                title="订单"
                selected={this.state.selectedTab === 'TabFooterOrder'}
                selectedTitleStyle={styles.selectedTextStyle}
                titleStyle={styles.textStyle}
                renderIcon={() => <Icon  name='th' type='font-awesome' color="#999" />}
                renderSelectedIcon={() => <Icon name='th' type='font-awesome' color='#1d9d74' />}
                onPress={() => this.setState({ selectedTab: 'TabFooterOrder' })}>
                <TabFooterOrder {...this.props}/>
              </TabNavigator.Item>
              <TabNavigator.Item
                title="购物车"
                selected={this.state.selectedTab === 'TabFooterCart'}
                selectedTitleStyle={styles.selectedTextStyle}
                titleStyle={styles.textStyle}
                renderIcon={() => <Icon  name='cart-arrow-down' type='font-awesome' color="#999" />}
                renderSelectedIcon={() => <Icon name='cart-arrow-down' type='font-awesome' color='#1d9d74' />}
                onPress={() => this.setState({ selectedTab: 'TabFooterCart' })}>
                <TabFooterCart {...this.props}/>
              </TabNavigator.Item>
              <TabNavigator.Item
                title="我"
                selected={this.state.selectedTab === 'TabFooterMy'}
                selectedTitleStyle={styles.selectedTextStyle}
                titleStyle={styles.textStyle}
                renderIcon={() => <Icon  name='user' type='font-awesome' color="#999" />}
                renderSelectedIcon={() => <Icon name='user' type='font-awesome' color='#1d9d74' />}
                onPress={() => this.setState({ selectedTab: 'TabFooterMy' })}>
                <TabFooterMy {...this.props}/>
              </TabNavigator.Item>
            </TabNavigator>
        );
    }
}
const styles = StyleSheet.create({
    iconStyle:{
       width:26,
       height:26,
   },
    selectedTextStyle:{
        color:'black'
    },
    textStyle:{
       color:'#999',
   }  
});