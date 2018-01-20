import React, {Component} from 'react';
import {Platform, StatusBar, Image, Switch, Text, TouchableOpacity, View} from 'react-native';
import {Container, Content} from 'native-base';
import general from '../../Styles/generalStyle';
import {connect} from 'react-redux';

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
                    barStyle={Platform.OS === 'ios' ? "dark-content" : "light-content"}
                    backgroundColor={"#c50000"}
                />
                <Content style={general.padding}>
                    <View style={[general.wrapperLogoInDrawer]}>
                        <Image resizeMode={'contain'}
                               source={require('../../../assets/image/logo.png')}
                               style={[general.imageInDrawer]}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => navigate('Home')}
                    >
                            <Text style={[general.textTitleCard, general.padding, general.paddingLR]}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigate('Library')}
                    >
                            <Text style={[general.textTitleCard, general.padding, general.paddingLR]}>Library</Text>
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