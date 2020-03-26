import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default class LoginModal extends Component {


    render() {
        var show = !(this.props.state === 0)
        return (
            <Modal show={show} backdrop={'static'} keyboard={false} >
                <Modal.Header>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={ (e) => { e.preventDefault(); this.props.onSend();}}>
                        <label>{this.props.state}</label>
                        <input type="text"
                            value={this.props.uname}
                            onChange={this.props.onChange}
                            className={'form-control'}
                            />
                    </form>                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.props.onSend}>Login</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}