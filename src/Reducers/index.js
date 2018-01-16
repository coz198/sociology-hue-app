
import homeReducer from '../Modules/News/homeReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    home                        : homeReducer,
});
export default rootReducer;