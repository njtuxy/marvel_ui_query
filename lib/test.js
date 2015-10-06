var exec = require('child_process').exec;

var request = JSON.stringify({"command":"get_screen"});

exec('ruby test_socket.rb' + " " + "'" +request.toString() + "'", function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    console.log('error: ' + error);
});