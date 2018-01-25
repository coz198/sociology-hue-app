import React, {Component} from 'react';
import {
    FlatList, Image, Linking, RefreshControl, Text, TouchableOpacity, View, Animated, StatusBar, Easing,
    Keyboard
} from 'react-native';
import {Container, Content, Item, Left, Right, ActionSheet, Root, Input, Button} from 'native-base';
import HamburgerButton from '../../Commons/HamburgerButton';
import Loading from '../../Commons/Loading';
import IconLight from '../../Commons/IconLight';
import Icon from '../../Commons/Icon';
import SearchButton from '../../Commons/SearchButton';
import * as libraryAction from './libraryAction';
import general from '../../Styles/generalStyle';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import Modal from "react-native-modal";

class LibraryContainer extends Component {
    constructor() {
        super();
        this.state = {
            page: 1,
            txtSearch: "",
            typeBook: "Thể loại sách",
            showSearch: false,
            visibleModal: false,
            searchMove: new Animated.Value(-200)
        }
    }

    componentWillMount() {
        const {libraryAction} = this.props;
        libraryAction.getTypeBook();
        libraryAction.getBook();
    }

    getMoreListBook() {
        const {libraryAction, books} = this.props;
        const {txtSearch, typeBook} = this.state;
        if (books.length >= this.state.page * 12) {
            let page = this.state.page + 1;
            this.setState({page: page});
            libraryAction.searchMoreBook(page, txtSearch, typeBook == "Thể loại sách" ? "" : typeBook);
        }
    }

    toggleSearch() {
        const {showSearch, searchMove} = this.state;
        if (showSearch == false) {
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
    search(page, text, type) {
        this.props.libraryAction.searchBook(page, text, type);
    }

    changeSearch() {
        this.props.libraryAction.changeValueSearch();
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
            this.search(1, this.state.txtSearch, this.state.typeBook == "Thể loại sách" ? "" : this.state.typeBook);
        }.bind(this), 500)
    }

    typeBook(type) {
        this.setState({page: 1, typeBook: type, visibleModal: false})
        this.search(1, '', type);
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
        const {typeBook} = this.state;
        const {books, isLoadingMore, isRefreshing, typeBooks, isLoadingSearch, isLoading} = this.props;
        return (
            <Container style={general.wrapperContainer}>
                <StatusBar
                    backgroundColor={this.state.visibleModal == false ? '#fff' : '#b2b2b2'}
                />
                <View style={[general.wrapperHeader, general.paddingBorder]}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={{flex: 1}}
                        onPress={() => this.refs.listRef.scrollToOffset({x: 0, y: 0, animated: true})}
                    >
                        <Image
                            resizeMode={'contain'}
                            source={require('../../../assets/image/logoLibrary.png')}
                            style={{height: 30, width: 178}}
                        />
                    </TouchableOpacity>
                    <HamburgerButton navigate={navigate}/>
                </View>
                <Animated.View>
                    <Item regular style={[general.marginLR, general.marginBottom, general.wrapperSearch, {top}]}>
                        <Input
                            style={general.textDescriptionCard}
                            onChangeText={(txtSearch) => {
                                this.searchHaveTimeout(txtSearch);
                            }}
                            placeholder='Tìm kiếm'/>
                        <TouchableOpacity style={general.buttonSearchInSearchInput}
                                          onPress={() => this.search(1, this.state.txtSearch, '')}>
                            <Icon
                                name={"fontawesome|search"}
                                size={15}
                                color={'#fff'}
                            />
                        </TouchableOpacity>
                    </Item>
                </Animated.View>
                <View style={{height: 40, marginTop: -20}}>
                    <TouchableOpacity
                        style={general.buttonSelect}
                        onPress={() => this.setState({visibleModal: true})}
                    >
                        <View style={[general.wrapperRowCenter, general.paddingLR]}>
                            <Text style={general.textTitleCard} numberOfLines={1}>{this.state.typeBook}</Text>
                            <Icon
                                name={"feat|chevron-down"}
                                size={15}
                                color={'#000'}
                            />
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={{flex: 1}}>
                    {
                        isLoading || isLoadingSearch
                            ?
                            <Loading/>
                            :
                            books.length != 0
                                ?
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
                                        <View key={item.id}>
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
                                                            style={[general.textDescriptionCard, general.marginBottom, {marginTop: 40}]}>
                                                            Description
                                                        </Text>
                                                    </View>
                                                    <View style={{marginTop: 20}}>
                                                        <TouchableOpacity
                                                            onPress={() => Linking.openURL(item.download)}
                                                            style={general.buttonDownload}>
                                                            <Text style={[general.textTitleCardLight]}
                                                                  numberOfLines={1}>Tải sách ngay</Text>
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
                                                <View style={[general.imageRectangle, general.shadow]}>
                                                    <Image
                                                        resizeMode={'stretch'}
                                                        source={{uri: item.avatar_url}}
                                                        style={[general.imageRectangle]}/>
                                                </View>
                                            </View>
                                            <Text/>
                                        </View>
                                    }/>
                                :
                                <View style={[general.wrapperCenter, general.paddingLR]}>
                                    <Text style={[general.textTitleCard, general.marginTop, {textAlign: 'center'}]}>
                                        Không tìm thấy kết quả nào cho "{this.state.txtSearch}".
                                    </Text>
                                </View>

                    }
                    <Modal
                        isVisible={this.state.visibleModal === true}
                        style={{justifyContent: "flex-end", margin: 0}}
                    >
                        <View style={general.wrapperModalBottom}>
                            <TouchableOpacity style={[general.wrapperModalTypeBottom, {backgroundColor: '#f7f7f7'}]}>
                                <Text style={general.textTitleCardBlue}>Chọn thể loại sách</Text>
                            </TouchableOpacity>
                            <View style={general.line}/>
                            <Content showsVerticalScrollIndicator={false}
                            >
                                <View style={general.wrapperCenter}>
                                    {
                                        typeBooks.map((item, i) =>
                                            <TouchableOpacity key={i} style={general.paddingLine}
                                                              onPress={() => this.typeBook(item)}>
                                                <Text style={general.textIsActive}>{item}</Text>
                                            </TouchableOpacity>
                                        )
                                    }
                                </View>
                            </Content>
                            <TouchableOpacity style={[general.wrapperModalTypeBottom, {backgroundColor: '#f7f7f7'}]}
                                              onPress={() => this.setState({visibleModal: false})}>
                                <Text style={[general.textTitleCardBlue, {color: '#c50000'}]}>Thoát</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
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
        isLoadingSearch: state.library.isLoadingSearch,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        libraryAction: bindActionCreators(libraryAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LibraryContainer);