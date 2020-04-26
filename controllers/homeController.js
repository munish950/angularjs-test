app.controller("homeController", ['$scope', '$route', 'studentService', 
    function ($scope, $route, studentService) {
    
    $scope.$on("$locationChangeStart", function (event, next, current) {        
        if(!confirm('Want navigate to ' + next + ' ?')) {
            event.preventDefault();
        }
    });
    $scope.title = 'Home';

    $scope.students = studentService.getStudents;

    /*
    $scope.students = [
        {name: 'Peter', age: 21, city: 'Delhi'},
        {name: 'Mark', age: 24, city: 'Mumbai'},
        {name: 'James', age: 26, city: 'Hyderabad'},
        {name: 'Rohan', age: 19, city: 'Delhi'},
        {name: 'Ritwik', age: 27, city: 'Hyderabad'},
        {name: 'Miller', age: 25, city: 'Noida'},
        {name: 'Rohit', age: 20, city: 'Hyderabad'}
    ];
    */

}]);
