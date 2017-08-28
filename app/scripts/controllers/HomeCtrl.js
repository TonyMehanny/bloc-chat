angular.module('blocChat')
    .controller('HomeCtrl', function(Room, Message, $uibModal, $log, $document){
      this.Rooms = Room.all;
      this.messages = {}; //Message.all;
      this.animationsEnabled = true;
      this.activeRoom = {
        name: ""
      }

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

       this.getByRoomId = function(roomId) {
         this.messages = Message.getByRoomId(roomId);
       };
       this.setActiveRoom = function(room) {
           this.activeRoom.name = room.room;
       }

       //this.messages = Message.all;

    });
