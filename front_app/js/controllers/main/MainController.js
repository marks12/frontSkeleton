/**
 * Created by tsv on 26.11.16.
 */
app.controller('MainController', ['$scope', 'ConfigService', 'ModelService', function($scope, ConfigService, ModelService) {

    $scope.message = 'Hello!';

    var RAS = ModelService.get('main');

    console.log(RAS.RestApiService.getEntity());

}]);