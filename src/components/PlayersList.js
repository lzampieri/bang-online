import React, { Component } from "react";

export default class PlayersList extends Component {

    render() {
        return (
            <p className={'alert alert-info'}>Giocatori connessi: { this.props.players.map( (player) => player.username + ", " )}</p>
        );
    }
}