
import homeReducer from '../Modules/Home/homeReducer';
import libraryReducer from '../Modules/Library/libraryReducer';
import blogReducer from '../Modules/Blog/blogReducer';
import loginReducer from '../Modules/Login/loginReducer';
import registerReducer from '../Modules/Login/registerReducers';
import surveyReducer from '../Modules/Survey/surveyReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    home   : homeReducer,
    library   : libraryReducer,
    blog   : blogReducer,
    login   : loginReducer,
    register  : registerReducer,
    survey  : surveyReducer,

});
export default rootReducer;