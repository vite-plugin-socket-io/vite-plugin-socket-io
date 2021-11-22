# Vite Plugin - socket.io

## Description
Plugin to add [socket.io](https://socket.io/) to a Vite server

## Installation
```
npm i -D vite-plugin-socket.io
```

## Basic Usage
```js
// vite.config.js

import vitePluginSocketIO from 'vite-plugin-socket.io'
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vitePluginSocketIO()]
})
```

## Options
### serverEvents
Function to run when initializing socket.io connection.  Check docs [here](./serverEvents/).
### socketEvents
Function to run containing socket.io listener and emitters.  Check docs [here](./socketEvents/).

## Additional Usage Examples
### Add listeners

```js
// vite.config.js

import vitePluginSocketIO from 'vite-plugin-socket.io'
import { defineConfig } from 'vite';

const socketEvents = (io, socket) => {
  console.log('socket.io - connection');
  socket.on('disconnect', () => {
    console.log(`socket.io - socket.id \`${socket.id}\` disconnected`)
  })
  socket.on('signin', () => {
    console.log('socket.io - signin')
  })
}

export default defineConfig({
  plugins: [vitePluginSocketIO({socketEvents})]
})
```