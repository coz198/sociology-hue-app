
import homeReducer from '../Modules/News/homeReducer';
import libraryReducer from '../Modules/Library/libraryReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    home   : homeReducer,
    library   : libraryReducer,
});
export default rootReducer;