/// <reference path="../js/angular.js" />

app.directive('textDirective', function() {
    function linkedFunction($scope, element, attributes) {
        console.log('ELEMENT', element);
        console.log('ATTRIBUTES', attributes);
        $scope.text = 'Hi From Directive';
        $scope.changeText = function(newText) {
            $scope.text = newText;
        }
    }

    return {
        link: linkedFunction,
        templateUrl: 'templates/textDirective.html',
    }
});
