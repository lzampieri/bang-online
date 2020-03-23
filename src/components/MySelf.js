import React, { Component } from "react";

export default class MySelf extends Component {

    render() {
        return (
            <div className={'card-group'}>
                <div className={'card col-1'}>
                    <div className={'card-body'}>
                        <h5 className={'card-title'}>{this.props.myself_uname}</h5>
                        <h6 className={'card-subtitle'}>{this.props.myself_role}</h6>
                    </div>
                </div>
            </div>
        );
    }
}