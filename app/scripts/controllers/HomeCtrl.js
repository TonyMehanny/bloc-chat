angular.module('blocChat')
    .controller('HomeCtrl', function(Room, $cookies, MessageFactory, $uibModal, $log, $document){
      this.Rooms = Room.all;
      this.messages = {}; //Message.all;
      this.animationsEnabled = true;
      this.activeRoom = {
      };

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
         this.messages = MessageFactory.getByRoomId(roomId);
       };
       this.setActiveRoom = function(room) {
        this.activeRoom = room;
       }

       this.newMessage = function(){

        var message = this.messageInput;

        if(!message || message === ''){
          alert("Please type a message to send");
          return null;
        }

          var messageObj = {
            content: message,
            roomId: this.activeRoom.$id,
            username: $cookies.get('blocChatCurrentUser'),
            sentAt: Date.now()
          };

        console.log(messageObj);
         MessageFactory.send(messageObj);
         this.messageInput = "";

      };

       //this.messages = Message.all;

    });
