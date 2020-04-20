/**
 * All details and structure of app
*/ 

var app = angular.module("ContactApp", []);
app.controller("FormController", ['$scope', function($scope) {
    $scope.genders = ['Male', 'Female'];
    $scope.users = [];
    $scope.submitForm = function(isValid) {
        if(isValid) {
            const name = $scope.contactForm.name.$modelValue ? 
            $scope.contactForm.name.$modelValue : null;
            const email = $scope.contactForm.email.$modelValue ? 
                $scope.contactForm.email.$modelValue: null;
            const gender = $scope.contactForm.gender.$modelValue ? 
                $scope.contactForm.gender.$modelValue: null;

            const userObj = {
                name: name,
                email: email,
                gender: gender
            }
            $scope.users.push(userObj);            
        }
        
    }

    $scope.onEdit = function (userIndex) {
        // console.log('$scope.users[userIndex]', $scope.users[userIndex]);
        $scope.contactForm = angular.copy($scope.users[userIndex]);
        console.log('$scope.contactForm', $scope.users[userIndex]);
    }

    $scope.onDelete = function (userIndex) {
        console.log('Delete', userIndex);
        $scope.users.splice(userIndex,1);
    }
}])