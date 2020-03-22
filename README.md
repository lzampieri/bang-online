# Online Bang game
The game is made by two parts: the backend, which listen on port 4001 and manage the game, and the frontend, which listen on port 3000.

The backend is a simple Node.js app, while the frontend uses React.

Frontend and Backend communicate through `socket.io`.

A Makefile is provided to ease installing and running the site.

To locally install, after cloning, just `make install`.

To locally run the server, after cloning and installing, just `make server`. Two terminal tabs are supposed to open: one of them run the backend server, on localhost:4001. The other run the frontend server, on localhost:3000. Access the site via a browser at `http://localhost:3000`
