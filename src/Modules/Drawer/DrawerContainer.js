import React, {Component} from 'react';
import {Platform, StatusBar, Image, Switch, Text, TouchableOpacity, View} from 'react-native';
import {Container, Content} from 'native-base';
import general from '../../Styles/generalStyle';
import {connect} from 'react-redux';
import  * as logoutAction from '../Login/logoutAction';
import {bindActionCreators} from 'redux'
import {NavigationActions} from "react-navigation";
class DrawerContainer extends Component {
    logout(){
        if(this.props.loginStatus == true){
            this.props.logoutAction.logout();
        }
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'Login'})
            ]
        })
        this.props.navigation.dispatch(resetAction)
    }
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
                    {
                        this.props.loginStatus == true
                            ?
                            <View>
                                <TouchableOpacity
                                    onPress={() => navigate('Survey')}
                                >
                                    <Text style={[general.textTitleCard, general.padding, general.paddingLR]}>Khảo sát</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => navigate('HistorySurvey')}
                                >
                                    <Text style={[general.textTitleCard, general.padding, general.paddingLR]}>Lịch sử khảo sát</Text>
                                </TouchableOpacity>
                            </View>

                            :
                            <View/>
                    }
                    <TouchableOpacity
                        onPress={() => this.logout()}
                    >
                            <Text style={[general.textTitleCard, general.padding, general.paddingLR]}>{this.props.loginStatus == true ? 'Đăng xuất' : 'Đăng nhập'}</Text>
                    </TouchableOpacity>
                    <View style={general.wrapperBottomModule}/>
                </Content>
            </Container>
        );
    }
}
function mapStateToProps(state) {
    return {
        token: state.login.token,
        loginStatus: state.login.loginStatus
    }
}
function mapDispatchToProps(dispatch) {
    return {
        logoutAction : bindActionCreators(logoutAction, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DrawerContainer)