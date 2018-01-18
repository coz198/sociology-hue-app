import React, {Component} from 'react';
import {
    View, Text, TouchableOpacity
} from 'react-native';
import general from '../Styles/generalStyle';
import { ActionSheet, Root} from 'native-base';
import Icon from './Icon';

export default class App extends Component{
    constructor(){
        super();
        this.state = {
            clicked: "Thể loại sách",
        }
    }

    render(){
        let BUTTONS = this.props.typeBooks ? this.props.typeBooks : [];
        return(
            <Root>
                <TouchableOpacity
                    style={general.buttonSelect}
                    onPress={() =>
                        ActionSheet.show(
                            {
                                options: BUTTONS,
                                title: "Chọn loại sách"
                            },
                            buttonIndex => {
                                this.setState({ clicked: BUTTONS[buttonIndex].replace('\n', '').replace('\n\n', '') });
                            }
                        )}
                >
                    <View style={[general.wrapperRowCenter, general.paddingRight]}>
                        <Text style={general.textDescriptionCard} numberOfLines={1}>{this.state.clicked}</Text>
                        <Icon
                            name={"feat|chevron-down"}
                            size={15}
                            color={'#000'}
                        />
                    </View>

                </TouchableOpacity>
            </Root>
        );
    }
}