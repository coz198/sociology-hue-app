import React, {Component} from 'react';
import {FlatList, Image, RefreshControl, Text, TouchableOpacity, View} from 'react-native';
import {Container, Content, Item, Left, Right} from 'native-base';
import SearchButton from '../../Commons/SearchButton';
import Loading from '../../Commons/Loading';
import HeaderImage from '../../Commons/HeaderImage';
import general from '../../Styles/generalStyle';
import * as homeAction from './homeAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SearchBar from 'react-native-searchbar';

const items = [];

class HomeContainer extends Component {
    constructor() {
        super();
        this.state = {
            page: 2,
            tab: 0,
            showSearch: false,
        }
        this._handleResults = this._handleResults.bind(this);
    }

    _handleResults(results) {
        this.setState({ results });
    }

    componentWillMount() {
        this.props.homeAction.getListBlog(1);
    }

    getMoreListBlog() {
        const {blogs, homeAction} = this.props;
        if (blogs.length % 6 === 0 && blogs.length === (this.state.page - 1) * blogs.length) {
            this.setState({page: this.state.page + 1});
            homeAction.getMoreListBlog(this.state.page);
        }
    }

    loadMore() {
        if (this.props.isLoadingMore) {
            return (
                <Loading/>
            )
        } else {
            return (<View/>)
        }
    }

    toggleSearch(){
        if(this.state.showSearch === false){
            this.setState({showSearch: true});
            this.searchBar.hide();
        } else {
            this.setState({showSearch: false});
            this.searchBar.show();
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        const {isLoading, blogs, isRefreshing} = this.props;
        return (
            <Container style={general.wrapperContainer}>
                <View
                    style={general.linearGradient}>
                    <HeaderImage navigate={navigate} imageURL={require('../../../assets/image/logoBlog.png')}/>
                    <SearchBar
                        ref={(ref) => this.searchBar = ref}
                        data={items}
                        handleResults={this._handleResults}
                        typeBooks={this.props.typeBooks}
                    />
                    <View style={general.wrapperFullWidth}>
                        <Content>
                            {
                                isLoading
                                    ?
                                    <Loading/>
                                    :
                                    <FlatList
                                        ref="scrollView"
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
                                                    () => this.props.homeAction.refreshNewFeed(1)
                                                }
                                            />
                                        }

                                        renderItem={({item}) =>
                                            <View>
                                                <TouchableOpacity
                                                    onPress={() => navigate('BlogContainer')}
                                                    activeOpacity={0.8}
                                                    style={[general.marginTopBottom,  general.paddingLR, {marginBottom: 20}]}>
                                                    <View style={general.shadow}>
                                                        <Image
                                                            resizeMode={'cover'}
                                                            source={{uri: 'http://' + item.url}}
                                                            style={general.imageFeature}
                                                        />
                                                        <Text style={[general.categoryInImage, general.textDescriptionCardLight]}>{item.category ? item.category.name : 'Category'}</Text>
                                                    </View>
                                                    <View style={{marginTop: 20}}>
                                                        <Text style={general.textTitleCard}>{item.title.toUpperCase().trim()}</Text>
                                                        <Text style={[general.textDescriptionCard, general.paddingLine]}>{item.description}</Text>
                                                    </View>

                                                </TouchableOpacity>
                                            </View>
                                        }
                                        ListFooterComponent={this.loadMore()}
                                    />
                            }
                            <View style={general.wrapperBottomModule}/>
                            </Content>
                    </View>
                </View>
                <SearchButton showType={false} function={() => this.toggleSearch()}/>
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