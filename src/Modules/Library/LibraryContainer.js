import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View,} from 'react-native';
import {Container, Content, Item, Left, Right, Spinner} from 'native-base';
import HamburgerButton from '../../Commons/HamburgerButton';
import Loading from '../../Commons/Loading';
import IconLight from '../../Commons/IconLight';
import IconDark from '../../Commons/IconDark';
import general from '../../Styles/generalStyle';
import {connect} from 'react-redux'


class HomeContainer extends Component {
    constructor() {
        super();
        this.state = {
            tab: 0,
            isLoading: false,
        }
    }

    isLoading() {
        this.setState({isLoading: true});
        setTimeout(() => this.setState({isLoading: false}), 200);
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container style={general.wrapperContainer}>
                <View style={[general.wrapperHeader, general.paddingBorder]}>
                    <Text style={[general.textTitleHeader]}>
                        THƯ VIỆN
                    </Text>
                    <Right>
                        <HamburgerButton navigate={navigate}/>
                    </Right>
                </View>
                <TouchableOpacity style={[general.paddingLR, general.wrapperRowCenter,{marginTop: - 25, marginBottom: 10}]}>
                    <Text/>
                    <Text style={general.textTitleBoldNormal}>Thể loại</Text>
                    <IconDark name={"entypo|chevron-down"}/>
                </TouchableOpacity>
                <Content
                    showsVerticalScrollIndicator={false}
                    style={{flex: 1}}>
                    {
                        this.state.isLoading
                            ?
                            <Loading/>
                            :
                            <View stlye={{flex: 1}}>
                                <View>
                                    <View style={general.wrapperBottomModule}/>
                                    <View style={general.wrapperBottomModule}/>
                                    <View style={general.wrapperBottomModule}/>
                                    <View style={[general.wrapperCardBook, general.shadow]}>
                                        <View style={[general.wrapperImageRectangle, general.marginLR]}/>
                                        <View style={general.wrapperTextInCardBook}>
                                            <View>
                                                <Text style={general.textTitleGiant}>Title</Text>
                                                <Text/>
                                                <Text style={general.textTitleCard}>Author</Text>
                                                <Text/>
                                                <Text style={[general.textDescriptionCard, general.marginBottom]}>description </Text>
                                            </View>
                                            <View>
                                                <Text style={[general.categoryAbsolute, general.textTitleCardLight]}>Category</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={[general.wrapperImageRectangle, general.marginLR, general.padding, general.shadow]}>
                                        <View style={[general.imageRectangle, general.shadow, {position: 'absolute', bottom: 20}]}>
                                            <Image
                                                source={{uri: 'http://arena.vn/wp-content/uploads/2013/06/23.jpg'}}
                                                style={general.imageRectangle}/>
                                        </View>
                                    </View>
                                    <View style={general.line}></View>
                                    <Text/>
                                    <View style={{flexDirection:'row'}}>
                                        <Right style={general.paddingLR}>
                                            <TouchableOpacity
                                                style={general.buttonDownload}
                                            >
                                                <Text style={[general.textTitleCardLight]}>Tải sách ngay</Text>
                                                <IconLight name="feat|arrow-right"/>
                                            </TouchableOpacity>
                                        </Right>
                                    </View>

                                </View>
                            </View>
                    }
                </Content>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.home.data,
    }
}

export default connect(mapStateToProps)(HomeContainer);