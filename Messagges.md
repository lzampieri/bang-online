# Messagges between server and client

### Legenda
->: from server to client  
<-: from client to server  
<-> message {parameters} (meaning, if not clear)

<->: (conditional response)  
    ... (option 1)  
    ... (option 2)

### Interface managing:
-> reset {players list} (force client to rebuild all the interface)

### User connection
-> login {message to prompt for login}
<- login_u {username}

### Game start
<- startGame
->:  
    noPlayers (number of player not suitable for the game)  
    startGame {role} {lifepoints} {cards} (each player receives its role)

### Game
-> updatePlayers {players {username, lifepoints, hidden_cards}}

-> your_turn
-> end_turn

<- want_to_play {i}

    
