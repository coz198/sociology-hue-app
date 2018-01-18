import React, {Component} from 'react';
import {
    View
} from 'react-native';
import {Spinner} from 'native-base';
import general from '../Styles/generalStyle';

class Loading extends Component{
    render(){
        return(
            <View
                style={general.wrapperCenter}
                onPress={() => this.props.goBack(null)}
            >
                <Spinner color={'gray'}/>
            </View>
        );
    }
}

export default Loading;