server:
	gnome-terminal --tab -- bash -c "cd bang-server && npm run dev" &
	gnome-terminal --tab -- bash -c "cd bang-client && npm start" &

install:
	echo "Installing packages"
	cd bang-server && npm install
	cd bang-client && npm install
	echo "Done. Server can be launched using \"make server\""

