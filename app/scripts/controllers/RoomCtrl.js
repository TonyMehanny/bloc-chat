(function() {
    function RoomCtrl() {
      $scope.RoomList = Room.all;
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room',RoomCtrl]);
})();
