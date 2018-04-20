//applyMiddlewares ，作用是将所有中间件组成一个数组，依次执行
import { createStore, applyMiddleware } from 'redux';
// 为了让action创建函数除了返回action对象外，还可以返回函数，我们需要引用redux-thunk
import thunkMiddleware from 'redux-thunk';

import combineReducers from './reducers';
// createStore 创建一个store
let store = createStore(combineReducers, applyMiddleware(thunkMiddleware));

console.log(store.getState());
export default store;
