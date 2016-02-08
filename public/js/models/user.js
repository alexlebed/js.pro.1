define(['Backbone'], function (Backbone) {
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
        }
    });

    return UserModel;
});
