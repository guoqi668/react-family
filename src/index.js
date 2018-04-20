import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './component/redux/store';
// import router1 from 'router/router';

import Ele from 'router/router';
ReactDom.render(
    <Provider store={store}>
        <Ele />
    </Provider>,
    document.getElementById('app'),
);
