import React, {Component} from 'react';
import {
    TouchableOpacity
} from 'react-native';
import Icon from './Icon';
import * as color from '../Styles/color';

class HamburgerButton extends Component{
    render(){
        return(
            <TouchableOpacity
                onPress={() => this.props.navigate('DrawerOpen')}>
                <Icon
                    name="materialCommunity|menu"
                    size={30}
                    style={{marginRight: -3, padding: 5}}
                    color={color.textColor}
                />
            </TouchableOpacity>
        );
    }
}

export default HamburgerButton;