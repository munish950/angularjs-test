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
        /*
        compile: function(elm, attr) {
            console.log('COMPILE', elm);
            console.log('COMPILE_ATTR', attr);
            return {
                pre: function(scope, ilm ) {
                    console.log('PRE', scope, ilm)
                },
                post: function(scope, ilm ) {
                    console.log('POST', scope, ilm)
                }
            }
        },
        
        controller: function(myscope, elm, attr) {
           // console.log('CONTTR', scope);
           // console.log('CONTTR_ELM', elm);
           // console.log('CONTTR_ATTR', attr);
        },
        */
        scope: {
            items: '=',
        },
        link: linkedFunction,        
        templateUrl: 'templates/selectDirective.html',
    }
});
