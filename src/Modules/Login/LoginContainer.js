import React, {Component} from 'react'
import {
    ActivityIndicator,
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    StatusBar,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import * as size from '../../Styles/size';
import {CheckBox, Container, Content, Form, Header, Input, Item, Left} from 'native-base';
import * as loginAction from './loginActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import general from '../../Styles/generalStyle';
import * as color from '../../Styles/color';
import {NavigationActions} from 'react-navigation';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.loginAction.getDataLogin(this.props.status);
    }

    saveData() {
        this.props.loginAction.setDataLogin(this.props.login)
    }

    signIn() {
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(this.props.login.email) == false) {
            Alert.alert("Email không hợp lệ ")
        }
        else if (this.props.login.email == '' || this.props.login.password == '') {
            Alert.alert("Bạn cần nhập đầy đủ thông tin ");
        } else {
            this.props.loginAction.loginUser(this.props.login);
            this.saveData();
        }
    }

    updateData(name, value) {
        let login = this.props.login;
        login[name] = value;
        this.props.loginAction.updateDataLogin(login);
    }

    skipLogin(){
        this.props.loginAction.skipLogin();
        this.props.navigation.navigate('DrawerMain');
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.status == 200) {
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({routeName: 'DrawerMain'})
                ]
            })
            this.props.navigation.dispatch(resetAction)
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                                  keyboardVerticalOffset={Platform.OS === 'ios' ? undefined : 200}
                                  style={general.wrapperContainer}
            >

                <StatusBar
                    barStyle="dark-content"
                    backgroundColor={color.background}
                />
                <View style={[general.wrapperLogin]}>
                    <Image
                        resizeMode={'contain'}
                        source={require('../../../assets/image/logo.png')}
                        style={[general.imageLogin, general.marginLR]}
                    />
                    <Item style={general.itemInput}>
                        <Input
                            style={[general.inputTheme02]}
                            underlineColorAndroid={color.none}
                            placeholder="Email"
                            keyboardType={'email-address'}
                            returnKeyType={'next'}
                            autoCorrect={false}
                            onChangeText={(email) => {
                                this.updateData('email', email);
                            }}
                            value={this.props.login.email}
                        />
                    </Item>
                    <View style={{marginTop: 30}}>
                        <Item style={general.itemInput}>
                            <Input
                                style={general.inputTheme02}
                                underlineColorAndroid={color.none}
                                placeholder="Password"
                                returnKeyType={'next'}
                                secureTextEntry={true}
                                autoCorrect={false}
                                onChangeText={(password) => {
                                    this.updateData('password', password);
                                }}
                                value={this.props.login.password}
                            />
                        </Item>
                    </View>
                    <View style={general.wrapperCenter}>
                        <View style={general.wrapperLoginButton}>
                            <TouchableOpacity
                                style={general.buttonBuyNowFullSize}
                                onPress={() => {
                                    this.signIn()
                                }}
                            >
                                {(this.props.isLoading) ? (
                                    <ActivityIndicator
                                        animated={true}
                                        color={color.navTitle}
                                        style={{
                                            height: 20,
                                        }}
                                        size='small'
                                    />
                                ) : (
                                    <Text style={[general.paddingRight, general.textBigLight]}>ĐĂNG NHẬP</Text>
                                )
                                }
                            </TouchableOpacity>
                        </View>
                        {/*<View style={{marginTop: 20}}>*/}
                            {/*<Text style={[general.textLogin, {fontSize: 11}]}*/}
                                  {/*onPress={() => navigate('Register')}>DON'T HAVE AN ACCOUNT?*/}
                                {/*REGISTER</Text>*/}
                        {/*</View>*/}
                    </View>
                    {/*<View style={{justifyContent: 'center', alignItems: 'center', bottom: -size.hei / 6}}>*/}
                        {/*<Text style={[general.textLogin, {fontSize: 11}]}>FORGOT PASSWORD</Text>*/}
                    {/*</View>*/}
                    <View style={[general.wrapperCenter, {bottom: -size.hei / 5}]}>
                        <Text onPress={() => this.skipLogin()} style={[general.textDescriptionCard]}>BỎ QUA ĐĂNG NHẬP</Text>
                    </View>
                </View>
            </KeyboardAvoidingView>


        )
    }
}

function mapStateToProps(state) {
    return {
        login: state.login.login,
        isLoading: state.login.isLoading,
        status: state.login.status,
        error: state.login.error,
        isGetLocalData: state.login.isGetLocalData,
        isAutoLogin: state.login.isAutoLogin,
        save: state.login.save
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loginAction: bindActionCreators(loginAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
