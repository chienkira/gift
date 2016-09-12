(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['UserService', 'GiftService', 'ReservationService', 'FlashService', '$rootScope'];
    function HomeController(UserService, GiftService, ReservationService, FlashService, $rootScope) {
        var vm = this;

        vm.user = null;
        vm.allUsers = [];
        vm.allGifts = [];
        vm.allReservations = [];
        vm.addReservation = addReservation;
        vm.delReservation = delReservation;

        initController();

        function initController() {
            loadCurrentUser();
            loadAllUsers();
            loadAllGifts();
        }

        function loadCurrentUser() {
            UserService.GetByUsername($rootScope.globals.currentUser.name)
                .then(function (user) {
                    vm.user = user[0];
                    if(vm.user.name != "Chien" && vm.user.name != "chien" && vm.user.name != "チェン")
                        vm.user.name += "さん";
                });
        }

        function loadAllUsers() {
            UserService.GetAll()
                .then(function (users) {
                    vm.allUsers = users;
                    loadAllReservation();
                    vm.allUsers.forEach(function (user) {
                       if(user.name != "Chien" && user.name != "chien" && user.name != "チェン")
                           user.name += "さん";
                    });
                });
        }

        function loadAllGifts() {
            GiftService.GetAll()
                .then(function (gifts) {
                    vm.allGifts = gifts;
                });
        }

        function loadAllReservation() {
            ReservationService.GetAll()
                .then(function (reservations) {
                    vm.allReservations = reservations;
                    if(vm.allUsers) {
                        vm.allUsers.forEach(function(user) {
                            // reset reservation info
                            user.giftStatus = "未選択";
                            user.reservation = null;
                            user.gift = null;
                            // re-set info
                            vm.allReservations.forEach(function(reservation){
                               if(reservation.receiverId == user.receiverId) {
                                   user.reservation = reservation;
                                   vm.allGifts.forEach(function(gift){
                                       if(gift.giftId == reservation.giftId) {
                                           user.giftStatus = gift.title;
                                           user.gift = gift;
                                       }
                                   });
                                   user.giftStatus += "が欲しいです。";
                               }
                            });
                        });
                    }
                });
        }

        function addReservation(gid) {
            var reservation = new Object();
            reservation.receiverId = vm.user.receiverId;
            reservation.giftId = gid;

            ReservationService.GetByReservation(reservation)
                .then(function (response) {
                    // Delete if his/her request is existing already
                    if (response.success && response.length > 0) {
                        ReservationService.Delete(response[0].id);
                    }
                    ReservationService.Create(reservation)
                        .then(function (response) {
                            if (response.success) {
                                FlashService.Success("ありがとうございます。リクエストをお預かり致しました。");
                            } else {
                                FlashService.Error("予想外のエラーが発生したので、もう一度やり直してみてください。");
                            }
                            loadAllReservation();
                        });
                });
        }

        function delReservation(rid) {
            ReservationService.Delete(rid)
                .then(function (res) {
                    loadAllReservation();
                    FlashService.Success("リクエストが取り消されました。");
                });
        }
    }

})();