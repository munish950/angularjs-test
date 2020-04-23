/// <reference path="../js/angular.js" />

app.directive('selectDirective', function() {
    function linkedFunction($scope, element, attributes) {
        $scope.newStudentArr = [];
        const filterCity = attributes.filtercity || null;
        const studentsArray = $scope.items;
        
        for (student of studentsArray) {
            if(filterCity) {
                if(student.city.toLowerCase() === filterCity.toLowerCase()) {
                    $scope.newStudentArr.push(student);
                }
            }else{
                $scope.newStudentArr.push(student);
            }            
        }
    }
    return {
        scope: {
            items: '=',
        },
        link: linkedFunction,
        templateUrl: 'templates/selectDirective.html',
    }
})