angular.module('blocChat')
  .controller('ModalCtrl', function($scope, $uibModalInstance){

      var newRoom = {
        newName: ''
      }


      // Controller submit function
      this.submit = function(name){
        // A new room object
        newRoom.newName = name;
        // Write the new room's name in the room list
        var updates = {};
        updates['/rooms/' + name] = name;

        $uibModalInstance.close();
        return firebase.database().ref().update(updates);
        };

      this.cancel = function(){
        $uibModalInstance.close();
      }

    });
