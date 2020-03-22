import React, { Component } from "react";

export default class ShowLastReset extends Component {

    render() {
        return (
            <p className={'alert alert-success'}>Game started: {this.props.last_reset}</p>
        );
    }
}