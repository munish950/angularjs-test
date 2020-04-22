app.controller("homeController", function ($route, $scope) {
   
    $scope.$on("$locationChangeStart", function (event, next, current) {
        console.log('LALA');
        if(!confirm('Want navigate to ' + next + ' ?')) {
            event.preventDefault();
        }
    });

    $scope.title = 'Home';

    $scope.students = [
        {name: 'Peter', age: 21, city: 'Delhi'},
        {name: 'Mark', age: 24, city: 'Mumbai'},
        {name: 'James', age: 26, city: 'Hyderabad'},
        {name: 'Rohan', age: 19, city: 'Delhi'},
        {name: 'Ritwik', age: 27, city: 'Hyderabad'},
        {name: 'Miller', age: 25, city: 'Noida'},
        {name: 'Rohit', age: 20, city: 'Shimla'}
    ];
})