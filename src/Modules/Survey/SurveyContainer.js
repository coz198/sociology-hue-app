import React, {Component} from 'react';
import {FlatList, Image, RefreshControl, Text, TouchableOpacity, View, Animated, Easing, Keyboard} from 'react-native';
import {Container, Content, Item, Left, Right, Button, Input} from 'native-base';
import SearchButton from '../../Commons/SearchButton';
import Loading from '../../Commons/Loading';
import Icon from '../../Commons/Icon';
import HamburgerButton from '../../Commons/HamburgerButton';
import general from '../../Styles/generalStyle';
import * as surveyAction from './surveyAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class SurveyContainer extends Component {
    constructor() {
        super();
        this.state = {
            page: 1,
            searchMove: new Animated.Value(-200)
        }
    }

    componentWillMount(){
        this.props.surveyAction.getDataSurvey(this.props.token)
    }


    render() {
        const top = this.state.searchMove;
        const {navigate} = this.props.navigation;
        const {surveys} = this.props;
        const {isLoading, blogs, isRefreshing, isLoadingSearch} = this.props;
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
                <View style={{flex: 1, alignItems: 'center'}}>
                    {
                        isLoading
                            ?
                            <Loading/>
                            :
                                <FlatList
                                    ref="listRef"
                                    showsVerticalScrollIndicator={false}
                                    data={surveys}
                                    renderItem={({item}) =>
                                        <TouchableOpacity
                                            onPress={() => navigate('DetailSurvey', {data : item})}
                                            activeOpacity={1}
                                            style={[general.shadow, general.marginBottom, general.wrapperSurvey, general.paddingFar, general.margin, general.marginBottomFar]}>
                                                <Text style={general.textTitleCard}>{item.name.toUpperCase()}</Text>
                                                <View style={general.wrapperRowCenter}>
                                                    <Image style={general.imageCircleTiny}
                                                           source={{uri: item.staff ? 'http://' + item.staff.avatar_url : ''}}
                                                    />
                                                    <Text style={[general.textNameCard, general.paddingLine]}>&nbsp;&nbsp;{item.staff ? item.staff.name.toUpperCase() : ''}<Text style={general.textTimeCard}>&nbsp;-&nbsp;{item.created_at}</Text></Text>
                                                </View>
                                                <Text style={general.textDescriptionCard}>{item.description}</Text>
                                                <Text
                                                    style={[general.categoryInImage, general.textDescriptionCardLight]}>{item.questions_count} câu hỏi</Text>
                                                <View style={general.wrapperSpace} />
                                        </TouchableOpacity>
                                    }
                                />
                    }
                </View>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.survey.isLoading,
        surveys: state.survey.surveys,
        token: state.login.token,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        surveyAction: bindActionCreators(surveyAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyContainer);