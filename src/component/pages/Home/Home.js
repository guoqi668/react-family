import React from 'react';
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }
    handleButton() {
        this.setState({
            count: ++this.state.count,
        });
    }
    render() {
        return (
            <div>
                <div>{this.state.count}</div>
                <button onClick={this.handleButton.bind(this)}>点击</button>
            </div>
        );
    }
}
