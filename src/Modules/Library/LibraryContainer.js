import React, {Component} from 'react';
import {FlatList, Image, Linking, RefreshControl, Text, TouchableOpacity, View} from 'react-native';
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
            page: 2,
            searchTxt: "",
            clicked: "Thể loại sách",
            isModalVisible: false
        }
    }

    componentWillMount() {
        const {libraryAction} = this.props;
        libraryAction.getTypeBook();
        libraryAction.getBook();
    }

    getMoreListBook() {
        const {libraryAction, books} = this.props;
        const {page, searchTxt} = this.state;
            this.setState({page: page + 1});
            if(searchTxt != "") {
                this.setState({page: 1});
                libraryAction.searchMoreBook(page, searchTxt);
                console.log(page)
            }
            else
                libraryAction.getMoreListBook(page);
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

    search(){
        this.props.libraryAction.searchBook(1, this.state.searchTxt);
    }

    render() {
        const {navigate} = this.props.navigation;
        const {clicked} = this.state;
        const {books, isLoadingMore, isRefreshing, typeBooks, isLoadingSearch, isLoading} = this.props;
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
                <View style={{height: 40, marginTop: -20}}>
                        <TouchableOpacity
                            style={general.buttonSelect}
                            onPress={() => this.setState({ visibleModal: true})}
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
                </View>
                <Item regular style={[general.marginLR, general.marginBottom, {height: 40}]}>
                    <Input
                        style={general.textDescriptionCard}
                        onChangeText={(searchTxt) => {
                            this.setState({searchTxt: searchTxt});
                        }}
                        placeholder='Tìm kiếm' />
                    <TouchableOpacity style={general.buttonSearchInSearchInput} onPress={() => this.search()}>
                        <Icon
                            name={"fontawesome|search"}
                            size={15}
                            color={'#fff'}
                        />
                    </TouchableOpacity>
                </Item>
                <View style={{flex: 1}}>
                    {
                        isLoading || isLoadingSearch
                            ?
                            <Loading/>
                            :
                            books == []
                                ?
                                <View style={general.wrapperCenter}>
                                    <Text style={general.textTitleCard}>
                                        Khong co
                                    </Text>
                                </View>
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
                                                            <Image
                                                                source={{uri: item.avatar_url}}
                                                                style={general.imageRectangle}/>
                                                        </View>
                                                        <Text/>
                                                    </View>
                                                    :
                                                    <View/>
                                        }
                                    </View>
                                }/>
                    }
                    <Modal
                        isVisible={this.state.visibleModal === true}
                        style={{justifyContent: "flex-end", margin: 0}}
                    >
                        <View style={general.wrapperModalBottom}>
                            <Text style={[general.textTitleCardBlue, general.marginBottom, ]}>Chọn thể loại sách</Text>
                            <View style={general.line}/>
                            <Content  showsVerticalScrollIndicator={false}
                            >
                                <View style={general.wrapperCenter}>
                                    {
                                        typeBooks.map((item) =>
                                            <TouchableOpacity style={general.paddingLine} onPress={() => this.setState({clicked: item, visibleModal: null})}>
                                                <Text style={general.textIsActive}>{item}</Text>
                                            </TouchableOpacity>
                                        )
                                    }
                                </View>

                            </Content>

                            <TouchableOpacity style={general.marginTop} onPress={() => this.setState({ visibleModal: null })}>
                                <Text style={[general.textTitleCardBlue, {color:'#c50000'}]}>Thoát</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </View>


                {/*<SearchButton function={() => this.toggleSearch()}/>*/}
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