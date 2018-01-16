import React, {Component} from 'react';
import {
    TouchableOpacity
} from 'react-native';
import Icon from './Icon';

class IconName extends Component{
    render(){
        return(
            <TouchableOpacity
                onPress={this.props.action}>
                <Icon
                    name={this.props.name}
                    size={15}
                    color={'#000'}
                    style={{padding: 5}}
                />
            </TouchableOpacity>
        );
    }
}

export default IconName;