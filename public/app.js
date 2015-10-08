/**
 * Created by yxia on 10/5/15.
 */
angular.module('app', [])
    .controller('MainController', function ($scope, requestService) {

        var basicCommands = new Array();
        basicCommands.push('get_screen');
        $scope.basicCommands = basicCommands;

        var getObjectCommands = new Array();
        getObjectCommands.push('EBUI_Root');
        $scope.getObjectCommands = getObjectCommands;


        $scope.sendBasicCommand = function(command){
            requestService.sendBasicCommand(command).then(function(res){
                $scope.response1 = res.data;
            });
        };

        $scope.sendGetObjectCommand = function(command){
            requestService.sendGetObjectCommand(command).then(function(res){
                $scope.response2 = res.data;
            });
        }

    })

    .service('requestService', function ($http) {
        var root = "/";
        return {
            sendBasicCommand: function(command){
                return $http.get(root+ 'basic/' + command);
                //return $http.get(root+ '{"command":"get_game_object", "object_name":"amobject"}');
            },

            sendGetObjectCommand: function(command){
                return $http.get(root+'getObject/' + command);
            }
        }
    });