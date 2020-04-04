import React, { Component } from 'react';




class Test extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1>{this.props.text}</h1>
            </div>
        );
    }
}

export default Test;