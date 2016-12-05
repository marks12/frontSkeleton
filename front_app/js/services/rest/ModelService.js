/**
 * Created by tsv on 26.11.16.
 */
app.service('ModelService', ['RestApiService', function (RestApiService) {

    var Service = function (entity_name) {

        var service = {};
        service.userValues = {};

        service.setVal = function (vname, vval) {
            service.userValues[vname] = vval;
        };

        service.getVal = function (vname) {
            return service.userValues[vname];
        };

        service.isSetVal = function (vname) {
            return service.userValues.hasOwnProperty(vname);
        };

        service.RestApiService = new RestApiService();

        console.log('create ', entity_name);

        service.RestApiService.setEntity(entity_name);

        return service;
    };

    var Services = {};

    this.get = function (service_name) {

        if(!service_name) {

            console.error('Wrong service name');
            return null;
        }

        if(!Services.hasOwnProperty(service_name)) {
            Services[service_name] = Service(service_name);
        }

        return Services[service_name];
    };

}]);