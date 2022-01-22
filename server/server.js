const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  }
});

const port = process.env.YOUR_PORT || process.env.PORT || 8899;


io.on('connection', (socket) => {
  console.log('User Connected!');
  // console.log(socket.request.headers['user-agent']);
  console.log(socket.request.headers);

  socket.on('canvas-data', (data) => {
    socket.broadcast.emit('canvas-data', data);
  })
})

http.listen(port, () => {
  console.info('Started on : ' + port);
})