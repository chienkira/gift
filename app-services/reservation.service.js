(function () {
    'use strict';

    angular
        .module('app')
        .factory('ReservationService', ReservationService);

    ReservationService.$inject = ['$http'];
    function ReservationService($http) {
        var service = {};
        var api_url = "http://kiradev.me:3000/api";

        service.GetAll = GetAll;
        service.GetByReservation = GetByReservation;
        service.GetById = GetById;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;

        return service;

        function GetAll() {
            return $http.get(api_url + '/Reservations').then(handleSuccess, handleError('Error getting all reservation'));
        }

        function GetById(id) {
            return $http.get(api_url + '/Reservations/' + id).then(handleSuccess, handleError('Error getting reservation by id'));
        }

        function GetByReservation(reservation) {
            if(reservation.giftId && reservation.giftId != "") {
                return $http.get(api_url + '/Reservations?filter[where][and][0][receiverId]='+reservation.receiverId+'&filter[where][and][1][giftId]=' + reservation.giftId).then(handleSuccess, handleError('Error getting reservation by id'));
            } else {
                return $http.get(api_url + '/Reservations?filter[where][receiverId]=' + reservation.receiverId).then(handleSuccess, handleError('Error getting reservation by id'));
            }
        }

        function Create(reservation) {
            return $http.post(api_url + '/Reservations/', reservation).then(handleSuccess, handleError('Error creating reservation'));
        }

        function Update(reservation) {
            return $http.put(api_url + '/Reservations/' + reservation.id, reservation).then(handleSuccess, handleError('Error updating reservation'));
        }

        function Delete(id) {
            return $http.delete(api_url + '/Reservations/' + id).then(handleSuccess, handleError('Error deleting reservation'));
        }

        // private functions

        function handleSuccess(res) {
            res.data.success = true;
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }

})();
