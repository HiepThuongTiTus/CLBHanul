import {combineReducers} from 'redux';
import {homeReduce} from '../reducers/reducerHome';
export const rootReducer = combineReducers({
    homeReduce,
});
export default rootReducer;