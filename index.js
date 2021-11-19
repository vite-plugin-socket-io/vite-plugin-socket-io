// imports
import { Server } from 'socket.io';
import serverEvents from './serverEvents/index.js';
import socketEvents from './socketEvents/index.js';

export default (options = {}) => ({
  name: 'socket.io',
  configureServer(server) {
    // initiate default options
    const defaults = { serverEvents, socketEvents }

    // merge defaults with options
    options = Object.assign(defaults, options);

    // create io server
    const io = new Server(server.httpServer);

    // pass io server to serverEvents
    options.serverEvents(io, options.socketEvents);
  }
})