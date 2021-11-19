# Vite Plugin - socket.io - socketEvents

## Description
Function to run containing socket.io listener and emitters

## Default
```js
// socketEvents.js

export default (io, socket) => {
  console.log('socket.io - connection');
  socket.on('disconnect', () => {
    console.log(`socket.io - socket.id \`${socket.id}\` disconnected`)
  })
}
```