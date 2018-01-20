import general from '../Styles/generalStyle';
import React, {Component} from 'react';
import {Right} from 'native-base';
import {TouchableOpacity, Image, View} from 'react-native';
import HamburgerButton from './HamburgerButton';

class HeaderImage extends Component{
    render(){
        return(
            <View style={[general.wrapperHeader, general.paddingBorder]}>
                <TouchableOpacity
                    style={{flex: 1}}
                >
                    <Image
                        resizeMode={'contain'}
                        source={this.props.imageURL}
                        style={[general.imageInHeader, {height: 30, width: 180}]}
                    />
                </TouchableOpacity>
                <HamburgerButton navigate={this.props.navigate}/>
            </View>
        );
    }
}

export default HeaderImage;
