app.controller("contactController", ['$scope', 'studentService', function($scope, studentService) {
    // $scope.contactForm = 'templates/contact.html';  
    $scope.genders = ['Male', 'Female'];
    $scope.cities = ['Delhi', 'Hyderabad', 'Banglore', 'Pune', 'Noida', 'Gurgaon', 'Other'];
    $scope.logs = [];
    $scope.users = studentService.getStudents;
    /*
    $scope.users = [
        {name: "Peter", email: "preypeter@test.com", gender: "Male"},
        {name: "Ramson", email: "ramsongreg@west.com", gender: "Male"},
        {name: "Shrei", email: "shreidominic@soul.com", gender: "Female"},
        {name: "Ritika", email: "rikika@gmail.com", gender: "Female"},
        {name: "Walco", email: "walco@unco.com", gender: null},
        {name: "Mini", email: "mini@cooper.com", gender: "Female"},
        {name: "George", email: "george@cooper.com", gender: null},
    ];
    */
    $scope.master = {name: "", email: "", gender: "", city: ""};
    $scope.reset = function() {
        $scope.name = angular.copy($scope.master.name);
        $scope.email = angular.copy($scope.master.email);
        $scope.gender = angular.copy($scope.master.gender);
        $scope.city = angular.copy($scope.master.city);
    };    

    $scope.submitForm = function(isValid) {
        if(isValid) {
            const name = $scope.name ? $scope.name : null;
            const email = $scope.email ? $scope.email: null;
            const gender = $scope.gender ? $scope.gender: null;
            const city = $scope.city ? $scope.city: null;

            const userObj = {
                name: name,
                email: email,
                gender: gender,
                city: city
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
        $scope.users.splice(userIndex,1);
    }
    /*
    $scope.$watch('users', function(newval, oldval){
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        // Keep watch on users array
        if(newval.length > oldval.length){            
           $scope.logs.push({key: 'New Reclord inserted at: ' + time});
        } else if(newval.length < oldval.length) {
            $scope.logs.push({key: 'Record deleted at: ' + time});
        }
        
    }, true);
    */

   $scope.$watchCollection('users', function(newval, oldval){
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        // Keep watch on users array
        if(newval.length > oldval.length){      
            // Record added      
            const rec = newval.filter(x => oldval.indexOf(x) === -1);            
            $scope.logs.push({key: 'New Reclord inserted at: ' + time + "\n" + angular.toJson(rec)});
        } else if(newval.length < oldval.length) {
            // Record Deleted
            const rec = oldval.filter(x => newval.indexOf(x) === -1);            
            $scope.logs.push({key: 'Record deleted at: ' + time + "\n" + angular.toJson(rec)});
        }        
    });

}]);