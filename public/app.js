/**
 * Created by yxia on 10/5/15.
 */
angular.module('app', [])
    .controller('MainController', function ($scope, requestService) {

        var commands = new Array();
        commands.push('get_screen');
        $scope.commands = commands;

        $scope.sendCommand = function(command){
            requestService.sendRequest(command).then(function(res){
                $scope.response = res.data;
            });
        }

    })

    .service('requestService', function ($http) {
        var root = "/";
        return {
            sendRequest: function(command){
                return $http.get(root+command);
            }
        }
    });