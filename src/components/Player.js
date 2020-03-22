import React, { Component } from "react";

export default class Player extends Component {

    render() {
        return (
            <p className={'alert alert-info'}>{this.props.player.username}</p>
        );
    }
}