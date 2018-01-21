import React, {Component} from 'react';
import {Platform, StatusBar, Image, Switch, Text, TouchableOpacity, View} from 'react-native';
import {Container, Content} from 'native-base';
import general from '../../Styles/generalStyle';
import {connect} from 'react-redux';

class DrawerContainer extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container style={general.wrapperContainer}>
                <StatusBar
                    barStyle={"dark-content"}
                    backgroundColor={"#FFF"}
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
                            <Text style={[general.textTitleCard, general.padding, general.paddingLR]}>Trang chủ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigate('Library')}
                    >
                            <Text style={[general.textTitleCard, general.padding, general.paddingLR]}>Thư viện</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigate('Rule')}
                    >
                            <Text style={[general.textTitleCard, general.padding, general.paddingLR]}>Điều khoản</Text>
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