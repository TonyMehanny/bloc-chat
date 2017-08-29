angular.module('blocChat')
  .controller('usernameModalCtrl', function(Room, $cookies, $uibModalInstance,$uibModal){

    this.submit = function(name){
      var username = name ||'';
      if (username == ''){
        $uibModal.open({
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'templates/usernameModal.html',
          controller: 'usernameCtrl',
          controllerAs: 'usernameControl',
          backdrop: 'static',
          keyboard: false
      });
      }
      else{
        $cookies.put('blocChatCurrentUser', username);
        $uibModalInstance.close();
      }
    }
  });
