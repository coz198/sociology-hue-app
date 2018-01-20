import React, {Component} from 'react';
import {FlatList, Image, Linking, RefreshControl, Text, TouchableOpacity, View} from 'react-native';
import {Container, Content, Item, Left, Right, ActionSheet, Root} from 'native-base';
import HamburgerButton from '../../Commons/HamburgerButton';
import Loading from '../../Commons/Loading';
import IconLight from '../../Commons/IconLight';
import Icon from '../../Commons/Icon';
import SearchButton from '../../Commons/SearchButton';
import * as libraryAction from './libraryAction';
import general from '../../Styles/generalStyle';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import SearchBar from 'react-native-searchbar';

const items = [];

class LibraryContainer extends Component {
    constructor() {
        super();
        this.state = {
            items: '',
            results: [],
            page: 2,
            tab: 0,
            isLoadingState: false,
            clicked: "Thể loại sách",
        }
        this._handleResults = this._handleResults.bind(this);
    }


    _handleResults(results) {
        this.setState({results});
    }

    componentWillMount() {
        const {libraryAction} = this.props;
        libraryAction.getTypeBook();
        libraryAction.getBook();
    }

    getMoreListBook() {
        const {libraryAction, books} = this.props;
        if (books.length % 12 === 0 && books.length >= (this.state.page - 1) * 12) {
            this.setState({page: this.state.page + 1});
            libraryAction.getMoreListBook(this.state.page);
        }
    }

    toggleSearch() {
        if (this.state.showSearch === false) {
            this.setState({showSearch: true});
            this.searchBar.show();
        } else {
            this.setState({showSearch: false});
            this.searchBar.hide();
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
        const {clicked} = this.state;
        const {books, isLoadingMore, isRefreshing, typeBooks} = this.props;
        let BUTTONS = this.props.typeBooks ? this.props.typeBooks : [];

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
                            source={require('../../../assets/image/logoLibrary.png')}
                            style={[general.imageInHeader, {height: 30, width: 178}]}
                        />
                    </TouchableOpacity>
                    <HamburgerButton navigate={navigate}/>
                </View>
                <SearchBar
                    ref={(ref) => this.searchBar = ref}
                    data={items}
                    showType={true}
                    handleResults={this._handleResults}
                    typeBooks={typeBooks}
                />
                <View style={{height: 40, marginTop: -20}}>
                    <Root>
                        <TouchableOpacity
                            style={general.buttonSelect}
                            onPress={() =>
                                ActionSheet.show(
                                    {
                                        options: BUTTONS,
                                        title: "Chọn loại sách"
                                    },
                                    buttonIndex => {
                                        this.setState({ clicked: BUTTONS[buttonIndex].trim()});
                                    }
                                )}
                        >
                            <View style={[general.wrapperRowCenter, general.paddingLR]}>
                                <Text style={general.textTitleCard} numberOfLines={1}>{this.state.clicked}</Text>
                                <Icon
                                    name={"feat|chevron-down"}
                                    size={15}
                                    color={'#000'}
                                />
                            </View>

                        </TouchableOpacity>
                    </Root>
                </View>

                <View style={{flex: 1}}>
                    {
                        this.props.isLoading
                            ?
                            <Loading/>
                            :
                            <FlatList
                                ref="listRef"
                                showsVerticalScrollIndicator={false}
                                data={books}
                                onEndReachedThreshold={10}
                                onEndReached={() => this.getMoreListBook()}
                                refreshControl={
                                    <RefreshControl
                                        refreshing={isRefreshing}
                                        onRefresh={
                                            () => this.props.libraryAction.refreshListBook()
                                        }
                                    />
                                }
                                ListFooterComponent={
                                    this.loadMore()
                                }
                                renderItem={({item}) =>
                                    <View>
                                        {
                                            clicked === "Thể loại sách"
                                                ?
                                                <View>
                                                    <View style={general.wrapperBottomModule}/>
                                                    <View style={[general.wrapperCardBook]}>
                                                        <View style={[general.wrapperImageRectangle, general.marginLR]}/>
                                                        <View style={general.wrapperTextInCardBook}>
                                                            <View>
                                                                <Text/>
                                                                <Text
                                                                    style={general.textTitleGiant}>{item.name ? item.name.trim() : item.name}</Text>
                                                                <Text/>
                                                                <View>
                                                                    <Text
                                                                        style={[general.categoryAbsolute, general.textDescriptionCardLight]}>
                                                                        {
                                                                            item.properties.map((item) => {
                                                                                if (item.name.trim() === "TYPE_BOOK") {
                                                                                    return (
                                                                                        item.value.trim()
                                                                                    )

                                                                                }
                                                                            })
                                                                        }
                                                                    </Text>
                                                                </View>
                                                                <Text
                                                                    style={[general.textDescriptionCard, general.marginBottom, {marginTop: 40}]}>DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription </Text>
                                                            </View>
                                                            <View style={{marginTop: 20}}>
                                                                <TouchableOpacity
                                                                    onPress={() => Linking.openURL(item.download)}
                                                                    style={general.buttonDownload}>
                                                                    <Text style={[general.textTitleCardLight]}
                                                                          numberOfLines={1}>Tải
                                                                        sách ngay</Text>
                                                                    <IconLight name="feat|arrow-right"/>
                                                                </TouchableOpacity>
                                                            </View>
                                                            <Text/>
                                                        </View>
                                                    </View>
                                                    <View
                                                        style={[general.imageRectangle, {
                                                            position: 'absolute',
                                                            top: 20,
                                                            left: 20
                                                        }]}>
                                                        <View style={[general.imageRectangle, general.sh]}>
                                                            <Image
                                                                source={{uri: item.avatar_url}}
                                                                style={general.imageRectangle}/>
                                                        </View>
                                                    </View>
                                                    <Text/>
                                                </View>
                                                :
                                                clicked == item.properties[0].value.trim()
                                                ?
                                                <View>
                                                    <View style={general.wrapperBottomModule}/>
                                                    <View style={[general.wrapperCardBook]}>
                                                        <View style={[general.wrapperImageRectangle, general.marginLR]}/>
                                                        <View style={general.wrapperTextInCardBook}>
                                                            <View>
                                                                <Text/>
                                                                <Text
                                                                    style={general.textTitleGiant}>{item.name ? item.name.trim() : item.name}</Text>
                                                                <Text/>
                                                                <View>
                                                                    <Text
                                                                        style={[general.categoryAbsolute, general.textDescriptionCardLight]}>
                                                                        {
                                                                            item.properties.map((item) => {
                                                                                if (item.name.trim() === "TYPE_BOOK") {
                                                                                    return (
                                                                                        item.value.trim()
                                                                                    )

                                                                                }
                                                                            })
                                                                        }
                                                                    </Text>
                                                                </View>
                                                                <Text
                                                                    style={[general.textDescriptionCard, general.marginBottom, {marginTop: 40}]}>DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription </Text>
                                                            </View>
                                                            <View style={{marginTop: 20}}>
                                                                <TouchableOpacity
                                                                    onPress={() => Linking.openURL(item.download)}
                                                                    style={general.buttonDownload}>
                                                                    <Text style={[general.textTitleCardLight]}
                                                                          numberOfLines={1}>Tải
                                                                        sách ngay</Text>
                                                                    <IconLight name="feat|arrow-right"/>
                                                                </TouchableOpacity>
                                                            </View>
                                                            <Text/>
                                                        </View>
                                                    </View>
                                                    <View
                                                        style={[general.imageRectangle, {
                                                            position: 'absolute',
                                                            top: 20,
                                                            left: 20
                                                        }]}>
                                                        <View style={[general.imageRectangle, general.sh]}>
                                                            <Image
                                                                source={{uri: item.avatar_url}}
                                                                style={general.imageRectangle}/>
                                                        </View>
                                                    </View>
                                                    <Text/>
                                                </View>
                                                :
                                                <View/>

                                        }
                                    </View>


                            }/>
                    }
                </View>
                <SearchButton function={() => this.toggleSearch()}/>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        books: state.library.books,
        typeBooks: state.library.typeBooks,
        isLoading: state.library.isLoading,
        isRefreshing: state.library.isRefreshing,
        isLoadingMore: state.library.isLoadingMore,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        libraryAction: bindActionCreators(libraryAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LibraryContainer);