app
.controller("nestedController", function () {
    this.name = 'India';
})
.controller("stateController", function () {
    this.name = 'Uttar Pradesh';
})
.controller("cityController", function ($scope) {
    this.name = 'Lucknow';
});
