(function () {
    'use strict';

    angular
        .module('app')
        .factory('UserService', UserService);

    UserService.$inject = ['$http'];
    function UserService($http) {
        var service = {};
        var api_url = "http://kiradev.me:3000/api";

        service.GetAll = GetAll;
        service.GetById = GetById;
        service.GetByUsername = GetByUsername;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;

        return service;

        function GetAll() {
            return $http.get(api_url + '/Receivers').then(handleSuccess, handleError('Error getting all users'));
        }

        function GetById(id) {
            return $http.get(api_url + '/Receivers/' + id).then(handleSuccess, handleError('お名前を特定できませんでした。もう一度見直してください。'));
        }

        function GetByUsername(username) {
            return $http.get(api_url + '/Receivers?filter[where][name]=' + username).then(handleSuccess, handleError('お名前を特定できませんでした。もう一度見直してください。'));
        }

        function Create(user) {
            return $http.post(api_url + '/Receivers/', user).then(handleSuccess, handleError('Error creating user'));
        }

        function Update(user) {
            return $http.put(api_url + '/Receivers/' + user.id, user).then(handleSuccess, handleError('Error updating user'));
        }

        function Delete(id) {
            return $http.delete(api_url + '/Receivers/' + id).then(handleSuccess, handleError('Error deleting user'));
        }

        // private functions

        function handleSuccess(res) {
            if(res.data.length > 0) {
                res.data.success = true;
            } else {
                res.data.success = false;
                res.data.message ='お名前を特定できませんでした。もう一度見直してください。';
            }
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }

})();
