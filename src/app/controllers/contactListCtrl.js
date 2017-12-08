angular.module('rootModule')
    .controller('contactListCtrl', function($scope, itemListService){
        $scope.filterValue = '';
        $scope.newUser = '';
        $scope.newPhone = '';
        $scope.itemList = itemListService.getAll();
        $scope.addContact = function(){
            if (itemListService.addContact($scope.newUser, $scope.newPhone)){
                $scope.newUser = '';
                $scope.userForm.name.$pristine = true;
                $scope.newPhone = '';
                $scope.userForm.phone.$pristine = true;
            } else {
                $scope.userForm.name.$pristine = false;
                $scope.userForm.phone.$pristine = false;
            }
        }
        $scope.removeContact = itemListService.removeContact;
        $scope.objToArray = itemListService.objToArray;
        $scope.nameIsValid = itemListService.nameIsValid;
});
