import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View, FlatList, Linking} from 'react-native';
import {Container, Content, Item, Left, Right} from 'native-base';
import HeaderImage from '../../Commons/HeaderImage';
import Loading from '../../Commons/Loading';
import IconLight from '../../Commons/IconLight';
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
            isLoading: false,
            clicked: "Thể loại sách",
            showSearch: false,
        }
        this._handleResults = this._handleResults.bind(this);
    }


    _handleResults(results) {
        this.setState({ results });
    }

    componentWillMount() {
        const {libraryAction} = this.props;
        libraryAction.getTypeBook();
        libraryAction.getBook();
    }

    getMoreListBook() {
        const {libraryAction,books} = this.props;
        if (books.length % 12 === 0 && books.length === (this.state.page - 1) * books.length) {
            this.setState({page: this.state.page + 1});
            libraryAction.getMoreListBook(this.state.page);
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
        const {books, isLoadingMore} = this.props;
        return (
            <Container style={general.wrapperContainer}>
                <HeaderImage imageURL={require('../../../assets/image/logoBlog.png')}/>
                <SearchBar
                    ref={(ref) => this.searchBar = ref}
                    data={items}
                    handleResults={this._handleResults}
                />
                <Content
                    showsVerticalScrollIndicator={false}
                    style={{flex: 1}}>
                    {
                        this.props.isLoading
                            ?
                            <Loading/>
                            :
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={books}
                                onEndReachedThreshold={10}
                                onEndReached={() => this.getMoreListBook()}
                                renderItem={({item}) =>
                                    <View>
                                        <View style={general.wrapperBottomModule}/>
                                        <View style={[general.wrapperCardBook]}>
                                            <View style={[general.wrapperImageRectangle, general.marginLR]}/>
                                            <View style={general.wrapperTextInCardBook}>
                                                <View>
                                                    <Text/>
                                                    <Text style={general.textTitleGiant}>{item.name ? item.name.trim() : item.name}</Text>
                                                    <Text/>
                                                    <View>
                                                        <Text style={[general.categoryAbsolute, general.textDescriptionCardLight]}>
                                                        {
                                                                item.properties.map((item) => {
                                                                    if(item.name.trim() === "TYPE_BOOK"){
                                                                        return (
                                                                            item.value.replace('\n', '')
                                                                        )

                                                                    }
                                                                })
                                                            }
                                                        </Text>
                                                    </View>
                                                    <Text style={[general.textDescriptionCard, general.marginBottom, {marginTop : 40}]}>DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription </Text>
                                                </View>
                                                <View style={{marginTop: 20}}>
                                                    <TouchableOpacity
                                                        onPress={() => Linking.openURL(item.download)}
                                                        style={general.buttonDownload}>
                                                        <Text style={[general.textTitleCardLight]} numberOfLines={1}>Tải sách ngay</Text>
                                                        <IconLight name="feat|arrow-right"/>
                                                    </TouchableOpacity>
                                                </View>
                                                <Text/>
                                            </View>
                                        </View>
                                        <View style={[general.imageRectangle, {position: 'absolute', top: 20, left: 20}]}>
                                            <View style={[general.imageRectangle, general.sh]}>
                                                <Image
                                                    source={{uri: item.avatar_url}}
                                                    style={general.imageRectangle}/>
                                            </View>

                                        </View>
                                        <Text/>


                                    </View>
                                }/>
                    }
                    {
                        isLoadingMore
                            ?
                            <Loading/>
                            :
                            <View/>
                    }
                </Content>
                <SearchButton showType={true} function={() => this.toggleSearch()}/>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        books: state.library.books,
        typeBooks: state.library.typeBooks,
        isLoading: state.library.isLoading,
        isLoadingMore: state.library.isLoadingMore,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        libraryAction: bindActionCreators(libraryAction, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LibraryContainer);