var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
 var io=req.app.get("io");
  io.on('connection', (socket) => {
    console.log('user'+req.params.id+' connected');
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
    console.log('chat message', msg);
  });
  socket.on('disconnect', () => {
    console.log('user'+req.params.id+' disconnected');
  });
});
  res.render('index');
});

module.exports = router;
