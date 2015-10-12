


var express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var portNumber = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3002
var ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1"

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
});

app.use(express.static(__dirname + '/public', { maxAge: 86400000 }));

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(portNumber, ip, function(){
  console.log('listening on *:' + portNumber);
}); // the 0.0.0.0 ip opens the server to outside connections. to make server available locally only, bind to '127.0.0.1'

io.on('connection', function(socket) {
    socket.on('getAvailableInstruments', function() {
        socket.emit('availableInstrumentsList', instruments)
    })
})

var instruments = [
    {"name" : "Cymbal Crash",
    "url" : "http://freewavesamples.com/files/Crash-Cymbal-1.wav"},
    {"name" : "Closed Hi-Hat",
    "url" : "http://freewavesamples.com/files/Closed-Hi-Hat-1.wav"},
    {"name" : "Open Hi-Hat",
    "url" : "http://freewavesamples.com/files/Ensoniq-SQ-1-Open-Hi-Hat.wav"},
    {"name" : "Bass Drum",
    "url" : "http://freewavesamples.com/files/Bass-Drum-1.wav"},
    {"name" : "Snare",
    "url" : "http://freewavesamples.com/files/E-Mu-Proteus-FX-Wacky-Snare.wav"},
    {"name" : "Bell Tree",
    "url" : "http://freewavesamples.com/files/Roland-R-8-Bell-Tree.wav"},
]