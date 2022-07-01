const express = require("express");
const app = express(); // Making express server

const { createServer } = require("http"); // This http dependency module is given by node itself, (inbuilt)
const ExpServer = createServer(app); // Express obj is passed to http object createServer function

const { Server } = require("socket.io"); // This server class is by default given by socket, (inbuilt)
const ACTIONS = require("./src/action");
const io = new Server(ExpServer); // Passing Http-ExpressServer to Socket Class to make it a socket server

// Return array of objects [{socketId1, userName1}, {socketId2, userName2} ...] of connected clients in a given room
const getAllConnectedClients = (roomId) => {
  // io.sockets.adapter.rooms.get(roomId) return type is map and we are converting it to an array.
  return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map(
    (socketId) => {
      return {
        socketId,
        userName: userSocketMap[socketId],
      };
    }
  );
};

// Stores all the users with their socketID, irespective of their room; We could have used redis or DB here to store this data.
const userSocketMap = {};

// connection event is triggered as soon as a socket is connected to the server.
io.on("connection", (socket) => {
  console.log("socket connected", socket.id);

  socket.on(ACTIONS.JOIN, ({ roomId, userName }) => {
    userSocketMap[socket.id] = userName;
    socket.join(roomId);

    // Getting all clients connected to that room, so as to give them the popup that new user has entered their room
    const clients = getAllConnectedClients(roomId);
    
    // Emitting joined action to every socketId in that room, to show a new user has joined.
    clients.forEach((eachClient) => {
      io.to(eachClient.socketId).emit(ACTIONS.JOINED, {
        clients, // list of all the clients in the room where the new user has joined
        userName, // username of the newly joined user
        socketId: socket.id // This is the socketId of the new user who has joined
      })
    })
    
  });

  // This disconnecting lifecycle is hook is provided to do something before completely disconneting the socket.
  socket.on('disconnecting', () => {
    // Converting map to array another method, btw rooms for a particular socket would be 1. Just in case handling. 
    // Emit disconnection message in every room that this user is present.
    const rooms = [...socket.rooms];
    rooms.forEach((eachRoomId) => {
      socket.in(eachRoomId).emit(ACTIONS.DISCONNECTED, {
        socketId : socket.id,
        userName : userSocketMap[socket.id],
      })
    });


    // Delete this user from the userSocketMap too
    delete userSocketMap[socket.id];

    // Leaving a room
    socket.leave();
  })
});

// Now express-http server is there, now we have to listen it at some port
const PORT = process.env.port || 5000;

ExpServer.listen(PORT, () => {
  console.log("Listening on ", PORT);
});
