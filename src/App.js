import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import ShowLastReset from './components/ShowLastReset'
import initializeSocket from './socket/initializeSocket'
import Player from './components/Player';
import PlayersList from './components/PlayersList'
import * as gameManager from './gameManager/gameManager'
import MySelf from './components/MySelf';

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: process.env.REACT_APP_BACKEND || "http://127.0.0.1:4001",  //Endpoint for finding backend
      last_reset: "Never",
      logged: [],
      game_phase: 0,    // 0: loggin in; 1: started
      myself_uname: null,
      myself_role: null,
      muself_cards: []
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    this.socket = socketIOClient(endpoint);
    console.log(endpoint);
    initializeSocket(this);
  }

  render() {
    //const { response } = this.state;
    return (
      <div>
        { this.state.game_phase === 0 && (
          <ShowLastReset last_reset={this.state.last_reset} />
        )}

        { this.state.game_phase === 0 && (
          <button className={'btn btn-primary'} onClick={ () => gameManager.startGame(this) }>Inizia il gioco!</button>
        )}

        { this.state.game_phase === 0 && (
          <PlayersList players={this.state.logged} />
        )}

        { this.state.game_phase === 1 && (
          <MySelf myself_uname={this.state.myself_uname} myself_role={this.state.myself_role} />
        )}

        { this.state.game_phase === 1 &&
          this.state.logged.map( (player) => (
            <Player player={player} />
          ) )
        }
      </div>
    );
  }
}

export default App;
