app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl: "templates/home.html",
        controller: "homeController"
    })
    .when("/contacts", {
        templateUrl: "templates/contact.html",
        controller: "contactController"
    })
    .when("/contacts/:id", {
        templateUrl: "templates/contactDetail.html",
        controller: "contactDetailController"
    })
    .when("/nested-test", {
        templateUrl: "templates/nestedTest.html",
        controller: "nestedController"
    })
    .otherwise({
        redirectTo: '/home'
    })
}]);