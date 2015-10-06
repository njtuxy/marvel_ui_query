/**
 * Created by yxia on 10/5/15.
 */
angular.module('app', [])
    .controller('MainController', function ($scope, requestService) {
        requestService.sendRequest('get_screen').then(function(res){
            $scope.debug = res.data;
        });
    })

    .service('requestService', function ($http) {
        var root = "/";
        return {
            sendRequest: function(command){
                return $http.get(root+command);
            }
        }
    });