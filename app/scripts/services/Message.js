angular.module('blocChat')
.factory('Message', function($firebaseArray){

    var Message = {};
    var ref = firebase.database().ref().child("messages");
    //var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
      // Filter the messages by their room ID.
      return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
      // var roomRef = ref.orderByChild('roomId').equalTo(roomId);
      // var roomMessages = $firebaseArray(roomRef);
      //
      // this.all = roomMessages;
    };

    return Message;


});
