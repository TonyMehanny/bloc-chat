(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    Room.add = function(name) {
      //var updates = {};
      //updates['/rooms/' + name] = name;
      
      rooms.$add({"room":name});
      //firebase.database().ref().update(updates);
      };

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
