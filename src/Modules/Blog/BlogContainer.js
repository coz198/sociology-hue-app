import React, {Component} from 'react';
import {Image, Platform, Text, View} from 'react-native';
import {Container, Content, Item, Left, Right, Spinner} from 'native-base';
import BackButton from '../../Commons/BackButton';
import general from '../../Styles/generalStyle';
import {connect} from 'react-redux'
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import parallaxStyle from '../../Styles/parallaxStyle';

class BlogContainer extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
        }
    }

    render() {
        const {isLoading} = this.state;
        const {navigate} = this.props.navigation;
        const {goBack} = this.props.navigation;
        return (
            <Container style={general.wrapperContainer}>
                <ParallaxScrollView
                    backgroundColor={'#FFF'}
                    showsVerticalScrollIndicator={false}
                    headerBackgroundColor={'#FFF'}
                    stickyHeaderHeight={250}
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
                                <Text style={[general.textTitleHeader, {textAlign: 'center', paddingLeft: 50, paddingRight: 50}]} numberOfLines={2}>
                                    Title
                                    Title
                                    Title
                                    Title
                                    Title
                                    Title
                                    Title
                                    Title
                                    Title
                                    Title
                                    Title
                                    Title
                                </Text>
                                <Text/>
                                <View style={general.wrapperCenter}>
                                    <Image
                                        source={{uri: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=334&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'}}
                                        style={general.imageCircleBig}/>
                                </View>
                                <Text/>
                                <Text style={[general.textTitleCard, {textAlign: 'center'}]} numberOfLines={1}>
                                    Đăng bởi <Text style={[general.textTitleCard, {color: '#287aff'}]}>Công
                                </Text>
                                </Text>
                                <Text style={[general.textDescriptionCard, {textAlign: 'center'}]}
                                      numberOfLines={1}>
                                    12h trước
                                </Text>
                                <Text/>
                                <View style={general.wrapperCenter}>
                                    <Text style={[general.category, general.textDescriptionCardLight, {bottom: 0}]}>Category</Text>
                                </View>
                            </View>
                        </View>
                    )}
                    renderStickyHeader={() => (
                        <View key="sticky-header" style={parallaxStyle.stickySection}>
                            <View style={Platform.OS === 'ios' ? {marginTop: 20} : ''}>
                                <View style={[general.wrapperCenter, {marginTop: 20}]}>
                                    <Text style={[general.textTitleBig, {paddingLeft: 50, paddingRight: 50}]} numberOfLines={1}>
                                        Title
                                    </Text>
                                </View>
                            </View>
                        </View>
                    )}
                    renderFixedHeader={() => (
                        <View key="fixed-header" style={general.wrapperIconFixedHeader}>
                            <Left style={Platform.OS === 'ios' ? {marginTop: 30} : {marginTop: 10}}>
                                <BackButton goBack={goBack}/>
                            </Left>
                        </View>
                    )}
                >
                </ParallaxScrollView>
            </Container>

        );
    }
}


function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(BlogContainer);