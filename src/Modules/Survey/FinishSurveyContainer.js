import React, {Component} from 'react';
import {
    FlatList, Image, RefreshControl, Text, TouchableOpacity, View, Animated, Easing, Keyboard,
    Linking
} from 'react-native';
import {Container, Content, Item, Left, Right, Button, Input} from 'native-base';
import NextButton from '../../Commons/NextButton';
import Loading from '../../Commons/Loading';
import Icon from '../../Commons/Icon';
import HamburgerButton from '../../Commons/HamburgerButton';
import general from '../../Styles/generalStyle';
import * as size from '../../Styles/size';
import * as surveyAction from './surveyAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as color from "../../Styles/color";


class FinishSurveyContainer extends Component {
    constructor() {
        super();
        this.state = {
            questionNumber: 1,
        }
    }

    render() {
        // const {} = this.props.navigation.state.params;
        const {navigate} = this.props.navigation;
        const {questionNumber} = this.state;
        const {name, description, staff, today} = this.props.navigation.state.params;
        const {isLoadingCloseSurvey} = this.props;
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
                <View style={{flex: 1}}>
                    {
                        isLoadingCloseSurvey
                            ?
                            <Loading/>
                            :
                            <View>
                                <View style={general.marginLR}>
                                    <Text style={[general.textTitleBig, general.marginBottom]}>
                                        {name.toUpperCase()}
                                    </Text>
                                    <View style={general.wrapperRowCenter}>
                                        <Image style={general.imageCircleTiny}
                                               source={{uri: staff.avatar_url}}
                                        />
                                        <Text
                                            style={[general.textNameCard, general.paddingLine]}>&nbsp;&nbsp;{staff.name.toUpperCase()}
                                            <Text style={general.textTimeCard}>&nbsp;-&nbsp;
                                                {today}
                                            </Text>
                                        </Text>
                                    </View>
                                    <Text style={[general.textDescriptionCard, general.paddingLine]}>{description}</Text>
                                    <Text/>
                                </View>
                                <View style={general.wrapperCenter}>
                                    <View style={general.wrapperSpace}/>
                                    <View style={[general.buttonDone, general.shadow]}>
                                        <Icon
                                            name="material|done"
                                            size={50}
                                            color={'#FFF'}
                                            style={{backgroundColor: 'transparent'}}
                                        />
                                    </View>
                                    <View style={general.wrapperSpace}/>
                                    <View style={general.wrapperSpace}/>
                                    <Text style={general.textTitleBigThin}>HOÀN THÀNH!</Text>
                                    <View style={general.wrapperSpace}/>
                                    <Text style={general.textDescriptionCard}>Cuộc khảo sát hoàn tất</Text>
                                    <Text style={[general.textDescriptionCard, {textAlign: 'center'}]}>Cảm ơn bạn đã dành thời
                                        gian cho Sociology Hue</Text>

                                </View>
                            </View>

                    }

                </View>
                <NextButton function={() => {
                    navigate('DetailSurvey')
                }}/>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoadingCloseSurvey: state.survey.isLoadingCloseSurvey
    }
}

function mapDispatchToProps(dispatch) {
    return {
        surveyAction: bindActionCreators(surveyAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FinishSurveyContainer);