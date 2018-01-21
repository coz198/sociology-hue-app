import React, {Component} from 'react';
import {FlatList, Image, RefreshControl, Text, TouchableOpacity, View} from 'react-native';
import {Container, Content, Item, Left, Right, Button, Input} from 'native-base';
import SearchButton from '../../Commons/SearchButton';
import Loading from '../../Commons/Loading';
import HamburgerButton from '../../Commons/HamburgerButton';
import general from '../../Styles/generalStyle';
import * as homeAction from './homeAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const items = [];

class HomeContainer extends Component {
    constructor() {
        super();
        this.state = {
            page: 2,
            tab: 0,
        }
    }

    componentWillMount() {
        this.props.homeAction.getListBlog(1);
    }

    getMoreListBlog() {
        const {blogs, homeAction} = this.props;
        if (blogs.length % 6 === 0 && blogs.length >= (this.state.page - 1) * 6) {
            this.setState({page: this.state.page + 1});
            homeAction.getMoreListBlog(this.state.page);
        }
    }

    toggleSearch() {
        if (this.state.showSearch == false) {
            this.setState({showSearch: true});
        } else {
            this.setState({showSearch: false});
        }
    }

    loadMore() {
        if (this.props.isLoadingMore)
            return (<Loading/>)
        else
            return (<View/>)
    }

    render() {
        const {navigate} = this.props.navigation;
        const {isLoading, blogs, isRefreshing} = this.props;
        return (
            <Container style={general.wrapperContainer}>
                <View style={[general.wrapperHeader, general.paddingBorder]}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={{flex: 1}}
                        onPress={() => this.refs.listRef.scrollToOffset({x: 0, y: 0, animated: true})}
                    >
                        <Image
                            resizeMode={'contain'}
                            source={require('../../../assets/image/logoBlog.png')}
                            style={[general.imageInHeader, {height: 30, width: 170}]}
                        />
                    </TouchableOpacity>
                    <HamburgerButton navigate={navigate}/>
                </View>
                <View style={{flex: 1}}>
                    {
                        isLoading
                            ?
                            <Loading/>
                            :
                            <FlatList
                                ref="listRef"
                                showsVerticalScrollIndicator={false}
                                data={blogs}
                                onEndReachedThreshold={5}
                                onEndReached={
                                    () => this.getMoreListBlog()
                                }
                                refreshControl={
                                    <RefreshControl
                                        refreshing={isRefreshing}
                                        onRefresh={
                                            () => this.props.homeAction.refreshListBlog()
                                        }
                                    />
                                }
                                ListFooterComponent={
                                    this.loadMore()
                                }
                                renderItem={({item}) =>
                                    <TouchableOpacity
                                        onPress={() => navigate('BlogContainer', {id : item.id})}
                                        activeOpacity={0.9}
                                        style={[general.marginTopBottom, general.paddingLR, {marginBottom: 20}]}>
                                        <View>
                                            <Image
                                                resizeMode={'cover'}
                                                source={{uri: 'http://' + item.url}}
                                                style={[general.imageFeature, general.shadow]}
                                            />
                                            <Text
                                                style={[general.categoryInImage, general.textDescriptionCardLight]}>{item.category ? item.category.name : 'Category'}</Text>
                                        </View>
                                        <View style={{marginTop: 20}}>
                                            <Text
                                                style={general.textTitleCard}>{item.title.toUpperCase().trim()}</Text>
                                            <Text
                                                style={[general.textDescriptionCard, general.paddingLine]}>{item.description}</Text>
                                        </View>
                                    </TouchableOpacity>
                                }
                            />
                    }
                </View>
                {/*<SearchButton function={() => this.toggleSearch()}/>*/}
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        blogs: state.home.blogs,
        isLoading: state.home.isLoading,
        isRefreshing: state.home.isRefreshing,
        isLoadingMore: state.home.isLoadingMore,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        homeAction: bindActionCreators(homeAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);