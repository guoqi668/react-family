import React, { Component } from 'react';
import { increment, decrement, reset } from 'actions/counter';
import { connect } from 'react-redux';
// import { Provider } from 'react-redux';
// import store from '../../redux/store';
class Counter extends Component {
    render() {
        return (
            <div>
                <div>当前计数为{this.props.c.count}</div>
                <button onClick={() => this.props.increment()}>自增</button>
                <button onClick={() => this.props.decrement()}>自减</button>
                <button onClick={() => this.props.reset()}>重置</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        c: state.counter1,
    };
};

const mapDispatchToProps = dispatch => {
    console.log(dispatch);
    return {
        increment: () => {
            dispatch(increment());
        },
        decrement: () => {
            dispatch(decrement());
        },
        reset: () => {
            dispatch(reset());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
