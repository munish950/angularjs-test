app.factory('studentService', function() {
    let students = [
        {name: "Peter", email: "preypeter@test.com", gender: "Male", age: 21, city: 'Delhi'},
        {name: "Ramson", email: "ramsongreg@west.com", gender: "Male", age: 25, city: 'Delhi'},
        {name: "Shrei", email: "shreidominic@soul.com", gender: "Female", age: 24, city: 'Delhi'},
        {name: "Ritika", email: "rikika@gmail.com", gender: "Female", age: 20, city: 'Mumbai'},
        {name: "Walco", email: "walco@unco.com", gender: null, age: 19, city: 'Hyderabad'},
        {name: "Mini", email: "mini@cooper.com", gender: "Female", age: 26, city: 'Hyderabad'},
        {name: "George", email: "george@cooper.com", gender: null, age: 27, city: 'Hyderabad'},
        {name: 'Riya', email: "rera@cooper.com", gender: 'Female', age: 27, city: 'Mumbai'},
        {name: 'Miller', email: "mills@reo.com", gender: null, age: 25, city: 'Noida'},
        {name: 'Nisha', email: "nisha@cooper.com", gender: 'Female', age: 20, city: 'Hyderabad'}
    ];

    return {
        getStudents: students,
        getCount: students.length
    };    
});
