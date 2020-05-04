import React, { Component } from "react";
import getCardName from "../fancy/cardNames";

export default class MySelf extends Component {


    render() {
        let cards = this.props.myself_cards.map(
            (card) =>
                <div className={'card col-1 text-center px-0 py-3'}>
                        {getCardName(card)}
                </div>
        );
    
        let bullets = [];
        for( let i=0; i< this.props.myself_lifepoints; i++ ) {
            bullets.push(<img src={process.env.PUBLIC_URL + '/img/pallottola.png'} width="20em"/>);
        }

        return (
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-12 text-center'}>
                        <h5 className={'card-title'}>{this.props.myself_uname}</h5>
                        <h6 className={'card-subtitle'}>{this.props.myself_role}</h6>
                        {bullets}
                    </div>
                </div>
                <div className={'row'}>
                    {cards}
                </div>
            </div>            
        );
    }
}