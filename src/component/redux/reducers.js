import counter from './reducers/counter';
import userReducer from './reducers/user';
import { combineReducers } from 'redux';

export default combineReducers({ counter1: counter, user: userReducer });
// combineReducers 函数来合并reducer。reducer函数作为value
// export default function combineReducers(state = {}, action) {
//     console.log(state.count);
//     return {
//         counter: counter(state.counter, action),
//     };
// }
