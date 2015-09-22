//var pg = require('pg');
//var express = require('express');
//var app = express();
//var cool = require('cool-ascii-faces');
//var http = require('http').Server(app);
//var io = require('socket.io')(http);

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(process.env.PORT || 1337);

console.log('Server running at http://127.0.0.1:1337/');

//app.set('port', (process.env.PORT || 3000));

//app.get('/', function(request, response) {
//  response.send(cool());
//});

//app.get('/', function(request, response) {
//  var result = "<HTML><BODY><H1>Mystic Crusade</H1>";  
//  result += '</BODY></HTML>'
//  response.send(result);
//})

//app.get('/db', function (request, response) {
//  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
//    client.query('SELECT * FROM test_table', function(err, result) {
//      done();
//      if (err)
//       { console.error(err); response.send("Error " + err); }
//      else
//       { response.send(result.rows); }
//    });
//  });
//})
//
//
//app.get('/chat', function(req, res){
//  res.sendFile(__dirname + '/index.html');
//});
//
//io.on('connection', function(socket){
//  console.log('a user connected');
//  socket.on('disconnect', function(){
//    console.log('user disconnected');
//  });
//  
//   socket.on('chat message', function(msg){
//    console.log('message: ' + msg);
//	io.emit('chat message', msg);
//  });
//});
//
//
//
//http.listen(app.get('port'), function(){
//  console.log('listening on *:'+ app.get('port'))
//});
//
/*app.listen(app.get('port'), function() {
  console.log("Node app is running on port:" + app.get('port'))
})*/