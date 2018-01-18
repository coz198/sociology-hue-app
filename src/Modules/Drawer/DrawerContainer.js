import React, {Component} from 'react';
import {Platform, StatusBar, Image, Switch, Text, TouchableOpacity, View} from 'react-native';
import {Container, Content} from 'native-base';
import * as size from '../../Styles/size';
import general from '../../Styles/generalStyle';
import {connect} from 'react-redux';
import Icon from '../../Commons/Icon';

class DrawerContainer extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            setThemeDark: false
        }
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container style={general.wrapperContainer}>
                <StatusBar
                    barStyle={"dark-content"}
                    backgroundColor={"#FFFFFF"}
                />
                <Content style={general.padding}>
                    <View style={[general.wrapperLogoInDrawer]}>
                        <Image resizeMode={'contain'}
                               source={{uri: 'http://d1j8r0kxyu9tj8.cloudfront.net/files/1513241627VqTNu2QuUiqvs9X.png'}}
                               style={[general.imageInDrawer]}
                        />
                    </View>
                    <TouchableOpacity
                        style={general.itemTabInDrawer}
                        onPress={() => navigate('Home')}
                    >
                        <View style={general.wrapperRowCenter}>
                            <Text style={[general.textTitleCard, general.paddingLR]}>Home</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={general.itemTabInDrawer}
                        onPress={() => navigate('Library')}
                    >
                        <View style={general.wrapperRowCenter}>
                            <Text style={[general.textTitleCard, general.paddingLR]}>Library</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={general.wrapperBottomModule}/>
                </Content>

            </Container>
        );
    }
}
function mapStateToProps(state) {
    return {
    }
}
function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DrawerContainer)