import React, { Component } from "react";

export default class Player extends Component {

    render() {
        return (
            <p className={'alert alert-info'}>
                { this.props.player.lifepoints === 1 && (
                    <span className={'badge badge-danger'}>Life <span className={'badge badge-light'}>1</span></span>
                )}
                { this.props.player.lifepoints > 1 && (
                    <span className={'badge badge-success'}>Life <span className={'badge badge-light'}>{this.props.player.lifepoints}</span></span>
                )}

                <span className={'badge badge-secondary'}>Hand <span className={'badge badge-light'}>{this.props.player.hidden_cards}</span></span> 

                {this.props.player.username}
            </p>
        );
    }
}