angular.module('blocChat')
    .controller('HomeCtrl', function(Room, $uibModal, $log, $document){
      this.Rooms = Room.all;
      this.animationsEnabled = true;

      this.open = function(){
        $uibModal.open({
           animation: this.animationsEnabled,
           ariaLabelledBy: 'modal-title',
           ariaDescribedBy: 'modal-body',
           templateUrl: 'templates/newRoomModal.html',
           controller: 'ModalCtrl',
           controllerAs: 'modalControl',
         });
       };
    });
