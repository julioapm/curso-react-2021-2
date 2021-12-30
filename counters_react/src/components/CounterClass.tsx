import React from "react";

interface CounterState {
    count: number;
}

class CounterClass extends React.Component<{},CounterState> {
    state: CounterState = {
        count: 0
    };

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={this.increment}>Click me</button>
            </div>
        );
    }
}

export default CounterClass;

