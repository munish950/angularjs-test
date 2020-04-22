app.controller("contactController", ['$scope', function($scope) {
    // $scope.contactForm = 'templates/contact.html';  
    $scope.genders = ['Male', 'Female'];
    $scope.users = [
        {name: "Peter", email: "preypeter@test.com", gender: "Male"},
        {name: "Ramson", email: "ramsongreg@west.com", gender: "Male"},
        {name: "Shrei", email: "shreidominic@soul.com", gender: "Female"},
        {name: "Ritika", email: "rikika@gmail.com", gender: "Female"},
        {name: "Walco", email: "walco@unco.com", gender: null},
        {name: "Mini", email: "mini@cooper.com", gender: "Female"},
        {name: "George", email: "george@cooper.com", gender: null},
    ];
    
    $scope.master = {name: "", email: "", gender: ""};
    $scope.reset = function() {
        $scope.name = angular.copy($scope.master.name);
        $scope.email = angular.copy($scope.master.email);
        $scope.gender = angular.copy($scope.master.gender);
    };    

    $scope.submitForm = function(isValid) {
        if(isValid) {
            const name = $scope.name ? $scope.name : null;
            const email = $scope.email ? $scope.email: null;
            const gender = $scope.gender ? $scope.gender: null;

            const userObj = {
                name: name,
                email: email,
                gender: gender
            }
            $scope.users.push(userObj);   
            
            $scope.reset();
            $scope.contactForm.$setPristine();
            // Since Angular 1.3, set back to untouched state.
            $scope.contactForm.$setUntouched();           
        }
        
    }
    
    // $scope.onEdit = function (userIndex) {
        // console.log('$scope.users[userIndex]', $scope.users[userIndex]);
        // $scope.contactForm = angular.copy($scope.users[userIndex]);
        // $scope.name = $scope.users[userIndex].name;
        // $scope.email = $scope.users[userIndex].email;
        // $scope.gender = $scope.users[userIndex].gender;
    // }
    

    $scope.onDelete = function (userIndex) {
        console.log('Delete', userIndex);
        $scope.users.splice(userIndex,1);
    }
}]);