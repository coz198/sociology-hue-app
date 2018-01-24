import React, {Component} from 'react';
import {
    FlatList, Image, RefreshControl, Text, TouchableOpacity, View, Animated, Easing, Keyboard,
    Linking,
} from 'react-native';
import {Container, Content, Item, Left, Right, Button, Input, ListItem, CheckBox, Toast, Root} from 'native-base';
import HamburgerButton from '../../Commons/HamburgerButton';
import BackButton from '../../Commons/BackButton';
import Icon from '../../Commons/Icon';
import general from '../../Styles/generalStyle';
import * as surveyAction from './surveyAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import RadioForm from 'react-native-simple-radio-button';
import SelectMultiple from 'react-native-select-multiple'
import * as color from "../../Styles/color";

class DetailHistorySurveyContainer extends Component {
    constructor() {
        super();
        this.state = {}
    }

    componentWillMount() {
    }

    typeAnswer(type, item){
        switch (type){
            case 0:{
                return(
                    <View style={{marginLeft: 50}}>
                        <Text style={general.textDescriptionCard}>{item.answer}</Text>
                    </View>
                )

            }
            case 1:{
                return (
                    <View style={{marginLeft: 50}}>
                        <Text style={general.textDescriptionCard}>{item.answer}</Text>
                    </View>
                )
            }
            case 2:{
                return (
                    <View style={{marginLeft: 50}}>
                        <Text style={general.textDescriptionCard}>{item.answer}</Text>
                    </View>
                )
            }
        }
    }


    render() {
        const {data} = this.props.navigation.state.params;
        const {goBack} = this.props.navigation;
        const {navigate} = this.props.navigation;
        return (
            <Container style={general.wrapperContainer}>
                <View style={[general.wrapperHeader, general.paddingBorder]}>
                    <TouchableOpacity
                        onPress={() => navigate('HistorySurvey')}
                        activeOpacity={1}
                        style={{flex: 1, marginLeft: -10}}
                    >
                        <Icon name="entypo|chevron-thin-left"
                              size={25}
                              color={color.iconColor}
                        />
                    </TouchableOpacity>
                    <HamburgerButton navigate={navigate}/>
                </View>
                <Content style={[{flex: 1}, general.paddingLR]}>
                    <Text style={[general.textTitleBig, general.marginBottom]}>{data.survey.name.toUpperCase()}</Text>
                    <Text style={general.textDescriptionCard}>{data.survey.description}</Text>
                    <View style={general.paddingLine}/>
                    <View style={general.wrapperRowCenter}>
                        <Image style={general.imageCircleTiny}
                               source={{uri: data.user ? data.user.avatar_url : ''}}
                        />
                        <Text
                            style={[general.textNameCard, general.paddingLine]}>&nbsp;&nbsp;{data.user ? data.user.name.toUpperCase() : ''}<Text
                            style={general.textTimeCard}>&nbsp;-&nbsp;{data.created_at}</Text></Text>
                    </View>
                    <View style={general.wrapperSpace}/>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={data.questions}
                        renderItem={({item}) =>
                            <View style={{marginTop: 10, marginBottom: 10}}>
                                <View style={[general.wrapperRowCenter, {flex: 1}]}>
                                    <View style={general.buttonQuestion}>
                                        <Text style={general.textDescriptionCardLight}>
                                            {item.question.order}
                                        </Text>
                                    </View>
                                    <Text
                                        style={[general.textTitleCard, general.paddingLR, general.marginRight]}>{item.question.content.trim()}</Text>
                                </View>
                                {
                                    this.typeAnswer(item.question ? item.question.type : '',item)
                                }
                            </View>
                        }
                    />
                    <View style={general.wrapperBottomModule}/>
                </Content>
                {/*<NextButton function={() => navigate('')}/>*/}
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        token: state.login.token,
        lesson: state.survey.lesson
    }
}

function mapDispatchToProps(dispatch) {
    return {
        surveyAction: bindActionCreators(surveyAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailHistorySurveyContainer);