# Messagges between server and client

### Legenda
->: from server to client  
<-: from client to server  
<-> message {parameters} (meaning, if not clear)

<-> case: (conditional response)  
- ... (option 1)  
- ... (option 2)

### Interface managing:
-> reset (force client to rebuild all the interface)

### User connection
-> login  
<- login {username}

### Game start
<- startGame {deck}  
-> case:  
- noPlayers (number of player not suitable for the game)  
- startGame {role} (each player receives its role)  
    
