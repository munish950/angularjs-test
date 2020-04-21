
app.filter('gender', function() {
    return function gender(item) {
        switch (item) {
            case 'Male':
                return 'M';
            
            case 'Female':
                return 'F';

            default:
                return 'NA';
        }
    }
});