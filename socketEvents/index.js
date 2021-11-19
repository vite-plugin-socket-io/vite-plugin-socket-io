export default (io, socket) => {
  console.log('socket.io - connection');
  socket.on('disconnect', () => {
    console.log(`socket.io - socket.id \`${socket.id}\` disconnected`)
  })
}