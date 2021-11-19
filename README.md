# Vite Plugin - socket.io

## Description
Plugin to add [socket.io](https://socket.io/) to a Vite server

## Installation
```
npm i -D @bobthered/vite-plugin-socket.io
```

## Basic Usage
```js
// vite.config.js

import vitePluginSocketIO from '@bobthered/vite-plugin-socket.io'
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vitePluginSocketIO()]
})
```

## Props
- [`serverEvents`](./serverEvents)
- [`socketEvents`](./socketEvents)

## Additional Usage Examples
### Add listeners

```js
// vite.config.js

import vitePluginSocketIO from '@bobthered/vite-plugin-socket.io'
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