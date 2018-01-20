import React, {Component} from 'react';
import {Image, Platform, Text, View, StatusBar} from 'react-native';
import {Container, Content, Item, Left, Right, Spinner} from 'native-base';
import BackButton from '../../Commons/BackButton';
import Loading from '../../Commons/Loading';
import WebViewAutoHeight from '../../Commons/WebViewAutoHeight';
import general from '../../Styles/generalStyle';
import {connect} from 'react-redux'
import * as blogAction from './blogAction';
import {bindActionCreators} from 'redux';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import parallaxStyle from '../../Styles/parallaxStyle';

class BlogContainer extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
        }
    }

    componentWillMount() {
        const {blogAction} = this.props;
        blogAction.getDetailBlog(this.props.navigation.state.params.id);
    }

    render() {
        const {navigate} = this.props.navigation;
        const {goBack} = this.props.navigation;
        const {data, isLoading} = this.props;
        return (
            <Container style={general.wrapperContainer}>
                <ParallaxScrollView
                    backgroundColor={'#FFF'}
                    showsVerticalScrollIndicator={false}
                    headerBackgroundColor={'#FFF'}
                    stickyHeaderHeight={Platform.OS === 'ios' ? 70 : 60}
                    parallaxHeaderHeight={350}
                    backgroundSpeed={10}
                    renderBackground={() => (
                        <View style={general.wrapperImageFullWidth}>
                            <View key="background">
                            </View>
                        </View>
                    )}
                    renderForeground={() => (
                        <View key="parallax-header" style={[parallaxStyle.parallaxHeaderTitle]}>
                            <View style={general.paddingLR}>
                                <Text style={[general.textTitleHeader, {textAlign: 'center', paddingLeft: 20, paddingRight: 20}]} numberOfLines={3}>
                                    {
                                        isLoading
                                            ?
                                            'Đang tải...'
                                            :
                                            data.title
                                    }
                                </Text>
                                <Text/>
                                <View style={general.wrapperCenter}>
                                    <Image
                                        source={{uri: data.author ? 'http://' + data.author.avatar_url : ''}}
                                        style={general.imageCircleBig}/>
                                </View>
                                <Text/>
                                <Text style={[general.textTitleCard, {textAlign: 'center'}]} numberOfLines={1}>
                                    Đăng bởi <Text style={[general.textTitleCard, {color: '#287aff'}]}>
                                    {
                                        isLoading
                                            ?
                                            'Đang tải...'
                                            :
                                            data.author ? data.author.name : 'Sociology Hue'
                                    }
                                </Text>
                                </Text>
                                <Text style={[general.textDescriptionCard, {textAlign: 'center'}]}
                                      numberOfLines={1}>
                                    {
                                        isLoading
                                            ?
                                            'Đang tải...'
                                            :
                                            data.created_at
                                    }
                                </Text>
                                <Text/>
                                <View style={general.wrapperCenter}>
                                    <Text style={[general.category, general.textDescriptionCardLight, {bottom: 0}]}>
                                        {
                                            isLoading
                                                ?
                                                'Đang tải...'
                                                :
                                                data.category
                                        }
                                    </Text>
                                </View>
                            </View>
                        </View>
                    )}
                    renderStickyHeader={() => (
                        <View key="sticky-header" style={parallaxStyle.stickySection}>
                            <View style={[general.wrapperCenter,Platform.OS === 'ios' ? {marginTop: 30} : {marginTop: 20}]}>
                                <Text style={[general.textTitleBig, {paddingLeft: 50, paddingRight: 50}]} numberOfLines={1}>
                                    {
                                        isLoading
                                            ?
                                            'Đang tải...'
                                            :
                                            data.title
                                    }
                                </Text>
                            </View>
                        </View>
                    )}
                    renderFixedHeader={() => (
                        <View key="fixed-header" style={general.wrapperIconFixedHeader}>
                            <Left style={Platform.OS === 'ios' ? {marginTop: 20} : {marginTop: 10}}>
                                <BackButton goBack={goBack}/>
                            </Left>
                        </View>
                    )}
                >
                    {
                        isLoading
                            ?
                            <Loading/>
                            :
                            <WebViewAutoHeight source={data.content ? data.content : ''}/>
                    }
                </ParallaxScrollView>
            </Container>

        );
    }
}


function mapStateToProps(state) {
    return {
        data: state.blog.data,
        isLoading: state.blog.isLoading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        blogAction: bindActionCreators(blogAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer);