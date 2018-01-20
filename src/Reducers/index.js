
import homeReducer from '../Modules/Home/homeReducer';
import libraryReducer from '../Modules/Library/libraryReducer';
import blogReducer from '../Modules/Blog/blogReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    home   : homeReducer,
    library   : libraryReducer,
    blog   : blogReducer,
});
export default rootReducer;