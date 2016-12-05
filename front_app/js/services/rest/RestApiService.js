/**
 * Created by tsv on 26.11.16.
 */
/**
 * Created by tsv on 26.11.16.
 */
app.service('RestApiService', ['$http', function ($http) {

    var RestApiService = function () {

        var entity = '';

        var setEntity = function (entity_name) {
            entity = entity_name;
        };

        var getEntity = function () {
            return entity;
        };

        return {
            getEntity: getEntity,
            setEntity: setEntity
        }
    };

    return function () {

        return RestApiService();
    }

}]);