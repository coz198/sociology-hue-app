import general from '../Styles/generalStyle';
import React, {Component} from 'react';
import {Right} from 'native-base';
import {Text, View} from 'react-native';
import HamburgerButton from './HamburgerButton';

class Header extends Component{
    render(){
        return(
            <View style={[general.wrapperHeader, general.paddingBorder]}>
                <Text style={[general.textTitleHeader]}>
                    {this.props.title}
                </Text>
                <HamburgerButton navigate={this.props.navigate}/>
            </View>
        );
    }
}

export default Header;
