import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from 'component/pages/Home/Home';
import User from 'component/pages/user/user';
import Personal from 'component/pages/Personal/Personal';
import Counter from 'component/pages/Counter/counter';
const router1 = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">首页</Link>
                </li>
                <li>
                    <Link to="/personal">个人中心</Link>
                </li>
                <li>
                    <Link to="/counter">计数</Link>
                </li>
                <li>
                    <Link to="/user">用户信息</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/personal" component={Personal} />
                <Route path="/counter" component={Counter} />
                <Route path="/user" component={User} />
            </Switch>
        </div>
    </Router>
);
export default router1;
