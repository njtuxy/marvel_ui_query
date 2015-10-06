/**
 * Created by yxia on 10/5/15.
 */
angular.module('app', [])
    .controller('MainController', function ($scope, requestService) {
        console.log('controller loaded');

        requestService.sendRequest('get_screen').then(function(res){
            $scope.debug = res.data;
        });
    })

    .service('requestService', function ($http) {
        console.log('service loaded');
        var root = "/";
        return {
            sendRequest: function(command){
                return $http.get(root+command);
            }
        }
    });