(function () {
    'use strict';

    angular
        .module('app')
        .factory('GiftService', GiftService);

    GiftService.$inject = ['$http'];
    function GiftService($http) {
        var service = {};
        var api_url = "http://kiradev.me:3000/api";

        service.GetAll = GetAll;
        service.GetById = GetById;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;

        return service;

        function GetAll() {
            return $http.get(api_url + '/Gifts').then(handleSuccess, handleError('Error getting all gifts'));
        }

        function GetById(id) {
            return $http.get(api_url + '/Gifts/' + id).then(handleSuccess, handleError('Error getting gift by id'));
        }

        function Create(gift) {
            return $http.post(api_url + '/Gifts/', gift).then(handleSuccess, handleError('Error creating gift'));
        }

        function Update(gift) {
            return $http.put(api_url + '/Gifts/' + gift.id, gift).then(handleSuccess, handleError('Error updating gift'));
        }

        function Delete(id) {
            return $http.delete(api_url + '/Gifts/' + id).then(handleSuccess, handleError('Error deleting gift'));
        }

        // private functions

        function handleSuccess(res) {
            if(res.data.length > 0) {
                res.data.success = true;
            } else {
                res.data.success = false;
                res.data.message ='申し訳ございませんが、今お土産は何も登録されていないようです。';
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
