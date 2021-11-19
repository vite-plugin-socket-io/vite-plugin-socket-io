# Vite Plugin - socket.io - serverEvents

## Description
Function to run when initializing socket.io connection

## Default
```js
// serverEvents.js

export default (io, socketEvents) => {
  io.on('connection', socket => socketEvents(io, socket))
}
```