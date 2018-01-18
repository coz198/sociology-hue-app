import React, {Component} from 'react';
import {
    TouchableOpacity
} from 'react-native';
import Icon from './Icon';
import general from '../Styles/generalStyle';

export default class SearchButton extends Component{
    constructor(){
        super();
        this.state = {
            text: '',
        }
    }

    render(){
        return(
            <TouchableOpacity
                style={general.buttonSearch}
                onPress={this.props.function}

            >
                <Icon name={'fontawesome|search'} size={20} color={'#FFF'}/>
            </TouchableOpacity>
        );
    }
}