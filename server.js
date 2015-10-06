var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var exec = require('child_process').exec;
var serveStatic = require('serve-static');
var router = express.Router();
router.use(bodyParser());
var socketResponse = null;


//var request = JSON.stringify({"command":"get_screen"});

router.route('/:command')
    .get(function(req, res){
        var request = JSON.stringify({"command":req.params['command']});
        console.log('here is the request' + request);
        runRuby(request);
        res.send(socketResponse);
    });

function runRuby(request){
    exec('ruby ./lib/test_socket.rb' + " " + "'" +request.toString() + "'", function (error, stdout, stderr) {
        socketResponse = stdout;
        console.log('here is the stdout');
        console.log(stdout);
        //console.log('stderr: ' + stderr);
        //console.log('error: ' + error);
    });
}


var server = app.use(serveStatic(__dirname + '/public')).use(router).listen(3000);
//var server = app.use('/request', router).listen(3000);

//User the router
//var app=express().listen(3000);