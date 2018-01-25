import React, {Component} from 'react';
import {AsyncStorage, FlatList, Image, RefreshControl, Text, TouchableOpacity, View, Animated, Easing, Keyboard} from 'react-native';
import {Container, Content, Item, Left, Right, Button, Input} from 'native-base';
import SearchButton from '../../Commons/SearchButton';
import Loading from '../../Commons/Loading';
import Icon from '../../Commons/Icon';
import HamburgerButton from '../../Commons/HamburgerButton';
import general from '../../Styles/generalStyle';
import * as homeAction from './homeAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginAction from "../Login/loginActions";

class HomeContainer extends Component {
    constructor() {
        super();
        this.state = {
            page: 1,
            txtSearch: "",
            clicked: "Chuyên mục",
            showSearch: false,
            searchMove: new Animated.Value(-200)
        }
    }

    componentWillMount() {
        this.props.homeAction.getListBlog(1);

    }
    componentDidMount(){
        this.props.loginAction.getDataLogin(this.props.status);
    }

    getMoreListBlog() {
        const {blogs, homeAction} = this.props;
        if (blogs.length >= this.state.page * 6) {
            let page = this.state.page + 1;
            this.setState({page: page});
            homeAction.getMoreListBlog(page);
        }
    }

    toggleSearch() {
        const {showSearch, searchMove} = this.state;
        if(showSearch == false){
            this.setState({showSearch: true})
            Animated.timing(
                searchMove,
                {
                    toValue: -55,
                    duration: 400,
                }
            ).start()
        } else {
            Keyboard.dismiss();
            this.setState({showSearch: false})
            Animated.timing(
                searchMove,
                {
                    toValue: -200,
                    duration: 400,
                }
            ).start()
        }
    }


    // SEARCH FUNCTION
    search(page, text){
        this.props.homeAction.searchBlog(page, text);
    }
    changeSearch() {
        this.props.homeAction.changeValueSearch();
    }
    searchHaveTimeout(value) {
        this.setState({
            page: 1,
            txtSearch: value,
        });
        if (this.timeOut !== null) {
            clearTimeout(this.timeOut);
        }
        this.timeOut = setTimeout(function () {
            this.changeSearch();
            this.search(1, this.state.txtSearch);
        }.bind(this), 500)
    }
    // END SEARCH FUNCTION

    loadMore() {
        if (this.props.isLoadingMore)
            return (<Loading/>)
        else
            return (<View/>)
    }

    render() {
        const top = this.state.searchMove;
        const {navigate} = this.props.navigation;
        const {isLoading, blogs, isRefreshing, isLoadingSearch} = this.props;
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
                            style={{height: 30, width: 170}}
                        />
                    </TouchableOpacity>
                    <HamburgerButton navigate={navigate}/>
                </View>
                <Animated.View>
                    <Item regular style={[general.marginLR, general.marginBottom, general.wrapperSearch,{top}]}>
                        <Input
                            style={general.textDescriptionCard}
                            onChangeText={(txtSearch) => {
                                this.searchHaveTimeout(txtSearch);
                            }}
                            placeholder='Tìm kiếm' />
                        <TouchableOpacity style={general.buttonSearchInSearchInput}
                                          onPress={() => this.search(1, this.state.txtSearch)}>
                            <Icon
                                name={"fontawesome|search"}
                                size={15}
                                color={'#fff'}
                            />
                        </TouchableOpacity>
                    </Item>
                </Animated.View>
                <View style={{flex: 1}}>
                    {
                        isLoading || isLoadingSearch
                            ?
                            <Loading/>
                            :
                            blogs.length != 0
                            ?
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
                                        key={item.id}
                                        onPress={() => navigate('BlogContainer', {id : item.id})}
                                        activeOpacity={0.9}
                                        style={[general.marginTopBottom, general.paddingLR, {marginBottom: 20}]}>
                                        <View style={[general.shadow,general.imageFeature]}>
                                            <Image
                                                resizeMode={'cover'}
                                                source={{uri: 'http://' + item.url}}
                                                style={[general.imageFeature]}
                                            />
                                            <Text style={[general.categoryInImage, general.textDescriptionCardLight]}>
                                                {item.category ? item.category.name : 'Category'}
                                            </Text>
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
                            :
                            <View style={[general.wrapperCenter, general.paddingLR]}>
                                <Text style={[general.textTitleCard, general.marginTop, {textAlign: 'center'}]}>
                                    Không tìm thấy kết quả nào cho "{this.state.txtSearch}".
                                </Text>
                            </View>
                    }
                </View>
                <SearchButton function={() => this.toggleSearch()}/>
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
        isLoadingSearch: state.home.isLoadingSearch,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        homeAction: bindActionCreators(homeAction, dispatch),
        loginAction: bindActionCreators(loginAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);