import React, {Component} from 'react';
import {
    TouchableOpacity
} from 'react-native';
import Icon from './Icon';
import * as color from '../Styles/color';
import general from '../Styles/generalStyle';
import * as size from '../Styles/size';

class BackButton extends Component{
    render(){
        return(
            <TouchableOpacity
                style={[general.padding, general.wrapperBackButton]}
                onPress={() => this.props.goBack(null)}
            >
                <Icon name="entypo|chevron-thin-left"
                      size={25}
                      color={color.iconColor}
                />
            </TouchableOpacity>
        );
    }
}

export default BackButton;