define([
    'Backbone',
    'moment'
], function (Backbone, moment) {
    var UserModel = Backbone.Model.extend({
        idAttribute: '_id', //idAttribute: 'id';

        initialize: function () {
            this.on('invalid', function (model, err) {
                console.log('sdf', err);
            });

            this.on('change', function (model, options) {
                console.log('model', model);
                console.log('options', options);
            });

            this.bind('change:age', function (model, value) {
                console.log('changedAttr', 'age');
                console.log('changedValue', value);
                console.log('prevValue', model.previousAttributes().age);
            });
        },

        urlRoot: function () {
            return '/user/'
        },

        parse: function(response){
            if(response.dateOfBirth){
                response.dateOfBirth = moment(response.dateOfBirth).format('DD MMM, YYYY');
            }

            return response;
        }
    });

    return UserModel;
});
