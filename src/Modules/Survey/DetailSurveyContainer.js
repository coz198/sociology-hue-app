import React, {Component} from 'react';
import {
    FlatList, Image, RefreshControl, Text, TouchableOpacity, View, Animated, Easing, Keyboard,
    Linking
} from 'react-native';
import {Container, Content, Item, Left, Right, Button, Input} from 'native-base';
import SearchButton from '../../Commons/SearchButton';
import Loading from '../../Commons/Loading';
import IconLight from '../../Commons/IconLight';
import HamburgerButton from '../../Commons/HamburgerButton';
import general from '../../Styles/generalStyle';
import * as surveyAction from './surveyAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as libraryAction from "../Library/libraryAction";


class DetailSurveyContainer extends Component {
    constructor() {
        super();
        this.state = {
            page: 1,
            searchMove: new Animated.Value(-200),
            today: '',
        }
    }

    componentWillMount() {
        this.getToday();
    }

    getToday() {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1; //January is 0!
        let yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        today = mm + '/' + dd + '/' + yyyy;
        return (this.setState({today: today}));
    }

    render() {
        const top = this.state.searchMove;
        const {navigate} = this.props.navigation;
        const {surveys, user} = this.props;
        const {data} = this.props.navigation.state.params;
        return (
            <Container style={general.wrapperContainer}>
                <View style={[general.wrapperHeader, general.paddingBorder]}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={{flex: 1}}
                    >
                        <Image
                            resizeMode={'contain'}
                            source={require('../../../assets/image/logoSurvey.jpg')}
                            style={{height: 30, width: 176}}
                        />
                    </TouchableOpacity>
                    <HamburgerButton navigate={navigate}/>
                </View>
                <Content style={{flex: 1}}>
                    <View style={general.marginLR}>
                        <Text style={[general.textTitleBig, general.marginBottom]}>{data.name.toUpperCase()}</Text>
                        <Text style={general.textDescriptionCard}>{data.description}</Text>
                    </View>
                    <View style={general.wrapperRowCenter}>
                        <Image style={general.imageCircleTiny}
                               source={{uri: data.user ? data.user.avatar_url : ''}}
                        />
                    </View>
                    <View style={general.wrapperSpace}/>
                    <Image
                        style={general.imageFullWidth}
                        source={{uri: data.image_url}}
                    />
                    <View style={general.wrapperSpace}/>
                    <View style={general.marginLR}>
                        <Text style={[general.textTitleBig, general.marginBottom]}>NGƯỜI THỰC HIỆN KHẢO SÁT</Text>
                        <View style={general.wrapperRowCenter}>
                            <Image style={general.imageCircleTiny}
                                   source={{uri: data.staff.avatar_url}}
                            />
                            <Text
                                style={[general.textNameCard, general.paddingLine]}>&nbsp;&nbsp;{data.staff.name.toUpperCase()}
                                <Text style={general.textTimeCard}>&nbsp;-&nbsp;
                                    {this.state.today}
                                </Text>
                            </Text>
                        </View>
                    </View>
                </Content>
                <TouchableOpacity
                    onPress={() => navigate('QuestionSurvey', {
                        id: data.id,
                        name: data.name,
                        description: data.description,
                        staff: data.staff,
                        questions_count: data.questions_count,
                        today: this.state.today
                    })}
                    activeOpacity={0.9}
                    style={[general.buttonDownload, {backgroundColor: '#c50000', borderRadius: 0}]}>
                    <Text style={[general.textTitleCardLight]}
                          numberOfLines={1}>Bắt đầu</Text>
                    <IconLight name="feat|arrow-right"/>
                </TouchableOpacity>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.login.user,
    }
}


export default connect(mapStateToProps)(DetailSurveyContainer);