import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';
import * as size from '../Styles/size';
import HomeContainer from '../Modules/Home/HomeContainer';
import BlogContainer from '../Modules/Blog/BlogContainer';
import LibraryContainer from '../Modules/Library/LibraryContainer';
import DrawerContainer from '../Modules/Drawer/DrawerContainer';
import * as React from "react";

const StackNavigatorStyle = {
    navigationOptions: {
        header: null,
    },
};
const HomeStackNavigator = StackNavigator({
    HomeContainer: {screen: HomeContainer},
    BlogContainer: {screen: BlogContainer},

}, StackNavigatorStyle);

const Drawer = DrawerNavigator(
    {
        Home: {screen: HomeStackNavigator},
        Library: {screen: LibraryContainer},
    },
    {
        drawerWidth: size.wid * 3 / 4,
        drawerPosition: 'right',
        contentComponent: props => <DrawerContainer {...props}/>,
    }
);
export const Main = StackNavigator(
    {
        Drawer: {screen: Drawer},
    },
    {headerMode: 'none'}
);


