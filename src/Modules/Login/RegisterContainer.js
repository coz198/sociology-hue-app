import React, {Component} from 'react'
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
    ActivityIndicator,
    Alert
} from 'react-native';
import * as size from '../../Styles/size';
import {CheckBox, Container, Content, Form, Header, Input, Item, Left} from 'native-base';
import * as registerAction from './registerAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import general from '../../Styles/generalStyle';
import * as color from '../../Styles/color';
import Icon from '../../Commons/Icon';

class RegisterContainer extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            name: '',
            username: '',
            password: '',
            checkRules: true,
        }
    }

    register(value) {
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(this.state.email) == false) {
            Alert.alert("Email không hợp lệ ")
        }
        else if (this.state.email === '' || this.state.name === '' || this.state.username === '' || this.state.password === '') {
            Alert.alert('Có lỗi xảy ra', 'Bạn chưa nhập đủ thông tin.');
        }
        else if (!this.state.checkRules) {
            Alert.alert('Có lỗi xảy ra', 'Bạn chưa đồng ý với điều khoản sử dụng.');
        }
        else {
            this.props.registerAction.registerUser(value);
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                keyboardVerticalOffset={Platform.OS === 'ios' ? undefined : 200}
                style={general.wrapperContainer}
            >
                <StatusBar
                    backgroundColor={color.background}
                />
                <View style={{marginTop: 20}}>
                    <TouchableOpacity
                        style={[general.padding, general.wrapperBackButton]}
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Icon name="entypo|chevron-thin-left"
                              size={size.iconBig}
                              color={color.iconColor}
                        />
                    </TouchableOpacity>
                </View>
                <View style={[general.wrapperLogin, {padding: 20}]}>
                    <Image
                        resizeMode={'contain'}
                        source={require('../../../assets/image/logo.png')}
                        style={[general.imageLogin, general.marginLR]}
                    />
                    <View>
                        <Item style={general.itemInput}>
                            <Input
                                style={general.inputTheme02}
                                underlineColorAndroid={color.none}
                                placeholder="Email"
                                keyboardType={'email-address'}
                                returnKeyType={'next'}
                                autoCorrect={false}
                                onChangeText={(email) => {
                                    this.setState({email})
                                }}
                                value={this.state.email}
                            />
                        </Item>
                    </View>
                    <View style={general.marginTopFar}>
                        <Item style={general.itemInput}>
                            <Input
                                style={general.inputTheme02}
                                underlineColorAndroid={color.none}
                                placeholder="Password"
                                returnKeyType={'next'}
                                autoCorrect={false}
                                secureTextEntry={true}
                                onChangeText={(password) => {
                                    this.setState({password})
                                }}
                                value={this.state.password}
                            />
                        </Item>
                    </View>
                    <View style={general.marginTopFar}>

                        <Item style={general.itemInput}>
                            <Input
                                style={general.inputTheme02}
                                underlineColorAndroid={color.none}
                                placeholder="Name"
                                keyboardType={'email-address'}
                                returnKeyType={'next'}
                                autoCorrect={false}
                                onChangeText={(name) => {
                                    this.setState({name})
                                }}
                                value={this.state.name}
                            />
                        </Item>
                    </View>
                    <View style={general.marginTopFar}>
                        <Item style={general.itemInput}>
                            <Input
                                style={general.inputTheme02}
                                underlineColorAndroid={color.none}
                                placeholder="Username"
                                keyboardType={'email-address'}
                                returnKeyType={'next'}
                                autoCorrect={false}
                                onChangeText={(username) => {
                                    this.setState({username})
                                }}
                                value={this.state.username}
                            />
                        </Item>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <View style={general.wrapperLoginButton}>
                            <TouchableOpacity
                                style={general.buttonBuyNowFullSize}
                                onPress={() => {
                                    this.register(this.state)
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
                                    <Text style={[general.paddingRight, general.textBigLight]}>REGISTER</Text>
                                )
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center', bottom: -size.hei / 6 + 20}}>
                        <Text style={[general.textLogin,]}>FORGOT PASSWORD</Text>
                    </View>
                </View>


            </KeyboardAvoidingView>
        )
    }

}

function mapStateToProps(state) {
    return {
        isLoading: state.register.isLoading,
        status: state.register.status,
        error: state.register.error,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        registerAction: bindActionCreators(registerAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
