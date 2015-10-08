var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var exec = require('child_process').exec;
var serveStatic = require('serve-static');
var router = express.Router();
router.use(bodyParser());
var socketResponse = null;


//var request = JSON.stringify({"command":"get_screen"});

router.get('/basic/:command', function (req, res) {
    var request = JSON.stringify({"command":req.params['command']});
    runRuby(request);
    res.send(socketResponse);
});

router.get('/getObject/:command', function (req, res) {
    var request = JSON.stringify({"command":"get_game_object", "object_name":req.params.command});
    runRuby(request);
    res.send(socketResponse);
});

function runRuby(request){
    exec('ruby ./lib/test_socket.rb' + " " + "'" +request.toString() + "'", function (error, stdout, stderr) {
        socketResponse = stdout;
        //console.log('ruby log start');
        //console.log(request);
        //console.log(stdout);
        //console.log(error);
        //console.log(stderr);
        //console.log('ruby log end')
    });
}


var server = app.use(serveStatic(__dirname + '/public')).use('/', router).listen(3000);