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
        getObjectCommands.push('Label_Tap');
        $scope.getObjectCommands = getObjectCommands;


        $scope.sendBasicCommand = function(command){

            requestService.sendBasicCommand(command).then(function(res){
                $scope.response1 = res.data;

            });
        };

        $scope.sendGetObjectCommand = function(index){
            $scope.clickedIndex = index;
            requestService.sendGetObjectCommand(getObjectCommands[index]).then(function(res){
                var t = res.data;
                //var b = JSON.stringify(t, null, 2);
                var b = angular.toJson(t, true);
                $scope.response2 = b;
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