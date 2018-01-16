import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View,} from 'react-native';
import {Container, Content, Item, Left, Right, Spinner} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import HamburgerButton from '../../Commons/HamburgerButton';
import Loading from '../../Commons/Loading';
import general from '../../Styles/generalStyle';
import Icon from '../../Commons/Icon';

import {connect} from 'react-redux'


class HomeContainer extends Component {
    constructor() {
        super();
        this.state = {
            tab: 0,
            isLoading: false,
            feature: {
                "url": "https://images.unsplash.com/photo-1505906960586-b2f5793971ad?auto=format&fit=crop&w=707&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                "title": "THIS IS SAMPLE TEXT",
                "description": "Sample description goes here",
                "created_at": "24h ago"
            },

        }
    }

    componentWillMount() {
        this.isLoading();
    }


    isLoading() {
        this.setState({isLoading: true});
        setTimeout(() => this.setState({isLoading: false}), 200);
    }

    render() {
        const {navigate} = this.props.navigation;
        const {colors} = this.props;
        return (
            <Container style={general.wrapperContainer}>
                <View
                    style={general.linearGradient}>
                    <View style={[general.wrapperHeader, general.paddingBorder]}>
                        <View style={{flex: 1}}>
                            <Image
                                resizeMode={'cover'}
                                source={{uri: 'http://d1j8r0kxyu9tj8.cloudfront.net/files/1513241627VqTNu2QuUiqvs9X.png'}}
                                style={[general.imageInHeader, {margin: 5}]}
                            />
                        </View>

                        <Right>
                            <HamburgerButton navigate={navigate}/>
                        </Right>
                    </View>

                    <View style={general.wrapperFullWidth}>
                        <Content >
                            {
                                this.props.news.map((item, i) =>
                                    <View>
                                        <TouchableOpacity
                                            onPress={() => navigate('BlogContainer')}
                                            activeOpacity={0.8}
                                            style={[general.marginTopBottom, general.shadow, general.paddingLR, {marginBottom: 20}]}>
                                            <View>
                                                <Image
                                                    resizeMode={'cover'}
                                                    source={{uri: item.url}}
                                                    style={general.imageFeature}
                                                />
                                                <Text style={[general.categoryInImage, general.textDescriptionCardLight]}>Category</Text>
                                            </View>

                                            <View style={{marginTop: 20}}>
                                                <Text style={general.textTitleCard}>{item.title.toUpperCase()}</Text>
                                                <Text style={general.textDescriptionCard}>{item.description}</Text>
                                            </View>

                                        </TouchableOpacity>
                                    </View>
                                )
                            }
                            <View style={general.wrapperBottomModule}/>
                        </Content>
                    </View>
                </View>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        news: state.home.news,
    }
}

export default connect(mapStateToProps)(HomeContainer);