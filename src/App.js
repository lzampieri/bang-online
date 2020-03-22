import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import ShowLastReset from './components/ShowLastReset'
import initializeSocket from './socket/initializeSocket'
import Player from './components/Player';
import * as gameManager from './gameManager/gameManager'

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: process.env.REACT_APP_BACKEND || "http://127.0.0.1:4001",  //Endpoint for finding backend
      last_reset: "Never",
      logged: [],
      game_phase: 0    // 0: loggin in; 1: started
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
        <ShowLastReset last_reset={this.state.last_reset} />
        
        { this.state.game_phase === 0 && (
          <button className={'btn btn-primary'} onClick={ () => gameManager.startGame(this) }>Inizia il gioco!</button>
        )}

        {
          this.state.logged.map( (ulogged) => {return (
            <Player player={ulogged} />
          )})
        }
      </div>
    );
  }
}

export default App;
