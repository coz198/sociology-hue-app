import React, {Component} from 'react';
import {
    FlatList, Image, RefreshControl, Text, TouchableOpacity, View, Animated, Easing, Keyboard,
    Linking,
} from 'react-native';
import {Container, Content, Item, Left, Right, Button, Input, ListItem, CheckBox, Body} from 'native-base';
import NextButton from '../../Commons/NextButton';
import Loading from '../../Commons/Loading';
import HamburgerButton from '../../Commons/HamburgerButton';
import general from '../../Styles/generalStyle';
import * as size from '../../Styles/size';
import * as surveyAction from './surveyAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import RadioForm from 'react-native-simple-radio-button';
import SelectMultiple from 'react-native-select-multiple'

class DetailSurveyContainer extends Component {
    constructor() {
        super();
        this.state = {
            questionNumber: 1,
            answer: '',
            selectedFruits: []
        }
    }

    onSelectionsChange = (selectedFruits) => {
        this.setState({ selectedFruits })
    }

    questionType(type, data) {
        let check = [false, false, false, false, false];
        const newData = data.map((item, i) => {
            return {
                ...item,
                label: item.content,
                value: item.content,
            }
        })
        switch (type) {
            case 0 : {
                return (
                    <Item>
                        <Input
                            placeholder="Nhập câu trả lời"
                            style={general.inputTheme02}
                            onChangeText={(answer) => this.setState({answer: answer})}
                        />
                    </Item>
                )
            }
            case 1 : {
                return (
                    <View style={{marginLeft: 4}}>
                        <RadioForm
                            style={{justifyContent: 'flex-start', alignItems: 'flex-start'}}
                            buttonColor={'#000'}
                            radio_props={newData}
                            initial={0}
                            onPress={(value) => {
                                this.setState({value: value})
                            }}
                        />
                    </View>

                )
            }
            case 2 : {
                return (
                    <View>
                        <View style={[general.wrapperRowCenter, general.marginTop]}>
                            <SelectMultiple
                                items={newData}
                                selectedItems={this.state.selectedFruits}
                                onSelectionsChange={this.onSelectionsChange}/>
                        </View>
                    </View>
                )
            }
        }
    }

    componentWillMount() {
        const {id} = this.props.navigation.state.params;
        this.props.surveyAction.getDataSurveyQuestion(id, this.props.token);
    }

    answerQuestion(number) {
        const {questions_count, name, description, staff, today} = this.props.navigation.state.params;
        if (this.state.questionNumber < questions_count)
            this.setState({questionNumber: number + 1});
        else
            this.props.navigation.navigate('FinishSurvey', {
                name: name,
                description: description,
                staff: staff,
                questions_count: questions_count,
                today: today
            })
    }

    render() {
        const {questions_count} = this.props.navigation.state.params;
        const {navigate} = this.props.navigation;
        const {isLoadingQuestion, questions} = this.props;
        const {questionNumber} = this.state;
        const {name, description, staff, today} = this.props.navigation.state.params;
        let process = (size.wid - 40) / questions_count * questionNumber;
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
                            style={[general.imageInHeader, {height: 30, width: 176}]}
                        />
                    </TouchableOpacity>
                    <HamburgerButton navigate={navigate}/>
                </View>
                <Content style={{flex: 1}}>
                    {
                        isLoadingQuestion
                            ?
                            <Loading/>
                            :
                            <View style={{felx: 1}}>
                                <View style={general.marginLR}>
                                    <Text style={[general.textTitleBig, general.marginBottom]}>
                                        {name.toUpperCase()}
                                    </Text>
                                    <View style={general.wrapperRowCenter}>
                                        <Image style={general.imageCircleTiny}
                                               source={{uri: 'http://' + staff.avatar_url}}/>
                                        <Text
                                            style={[general.textNameCard, general.paddingLine]}>&nbsp;&nbsp;{staff.name.toUpperCase()}
                                            <Text style={general.textTimeCard}>&nbsp;-&nbsp;
                                                {today}
                                            </Text>
                                        </Text>
                                    </View>
                                    <Text
                                        style={[general.textDescriptionCard, general.paddingLine]}>{description}</Text>
                                    <Text
                                        style={[general.textDescriptionCard, general.paddingLine]}>{this.state.questionNumber} / {questions.questions_count}</Text>
                                    <View style={general.wrapperProcessDark}>
                                        <View style={[general.process, {width: process}]}/>
                                    </View>
                                </View>
                                <View style={general.marginLR}>
                                    <View style={general.wrapperSpace}/>
                                    {
                                        questions.questions
                                            ?
                                            <View>
                                                <View style={[general.wrapperRowCenter]}>
                                                    <View style={general.buttonQuestion}>
                                                        <Text
                                                            style={general.textDescriptionCardLight}>{this.state.questionNumber}</Text>
                                                    </View>
                                                    <Text
                                                        style={[general.textTitleCard, general.paddingLR]}>{questions.questions[questionNumber - 1].content.trim()}</Text>
                                                    <View style={general.wrapperSpace}/>
                                                </View>
                                                <View style={general.marginTop}>
                                                    {
                                                        this.questionType(questions.questions[questionNumber - 1].type, questions.questions[questionNumber - 1].answers)
                                                    }
                                                </View>
                                            </View>
                                            :
                                            <Text/>
                                    }
                                </View>
                            </View>
                    }
                </Content>
                <NextButton function={() => this.answerQuestion(this.state.questionNumber)}/>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        token: state.login.token,
        questions: state.survey.questions,
        isLoadingQuestion: state.survey.isLoadingQuestion
    }
}

function mapDispatchToProps(dispatch) {
    return {
        surveyAction: bindActionCreators(surveyAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailSurveyContainer);