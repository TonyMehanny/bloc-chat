angular.module('blocChat')
  .controller('ModalCtrl', function(Room, $uibModalInstance){

      var newRoom = {
        newName: ''
      }


      // Controller submit function
      this.submit = function(name){
        // A new room object
        Room.add(name);

        $uibModalInstance.close();
      }

      this.cancel = function(){
        $uibModalInstance.close();
      }

    });
