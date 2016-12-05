/**
 * Created by tsv on 26.11.16.
 */

app.
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {

            $locationProvider.hashPrefix('!');

            $routeProvider.
            when('/home', {
                templateUrl: 'templates/main/home.html'
            }).
            when('/login', {
                templateUrl: 'templates/login/login.html'
            }).
            otherwise('/home');
        }
]);