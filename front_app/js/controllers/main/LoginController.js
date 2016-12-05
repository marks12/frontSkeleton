/**
 * Created by tsv on 26.11.16.
 */
app.controller('LoginController', ['$scope', 'ModelService', function($scope, ModelService) {

    $scope.title = 'Login page';

    var RAS = ModelService.get('login');

    console.log(RAS.RestApiService.getEntity());

}]);