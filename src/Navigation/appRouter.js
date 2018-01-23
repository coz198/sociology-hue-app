import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';
import * as size from '../Styles/size';
import HomeContainer from '../Modules/Home/HomeContainer';
import LoginContainer from '../Modules/Login/LoginContainer';
import RegisterContainer from '../Modules/Login/RegisterContainer';
import BlogContainer from '../Modules/Blog/BlogContainer';
import SurveyContainer from '../Modules/Survey/SurveyContainer';
import DetailSurveyContainer from '../Modules/Survey/DetailSurveyContainer';
import QuestionSurveyContainer from '../Modules/Survey/QuestionSurveyContainer';
import FinishSurveyContainer from '../Modules/Survey/FinishSurveyContainer';
import RuleContainer from '../Modules/Rule/RuleContainer';
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
        Home: {screen: HomeContainer},
        BlogContainer: {screen: BlogContainer},
        Library: {screen: LibraryContainer},
        Survey: {screen: SurveyContainer},
        DetailSurvey: {screen: DetailSurveyContainer},
        QuestionSurvey: {screen: QuestionSurveyContainer},
        FinishSurvey: {screen: FinishSurveyContainer},
        Rule: {screen: RuleContainer},
    },
    {
        drawerWidth: size.wid * 3 / 4,
        drawerPosition: 'right',
        contentComponent: props => <DrawerContainer {...props}/>,
    }
);
export const Main = StackNavigator(
    {
        Login: {screen: LoginContainer},
        DrawerMain: {screen: Drawer},
        // Register: {screen: RegisterContainer},

    },
    {headerMode: 'none'}
);


