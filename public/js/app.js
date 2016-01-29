var UserModel = Backbone.Model.extend({
    idAttribute: '_id', //idAttribute: 'id';

    initialize: function () {
        this.on('invalid', function (model, err) {
            console.log(err);
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

    validate: function (attr) {
        var err = [];

        if (!attr.age) {
            err.push('age is required');
        }
        if (attr.age && attr.age < 18) {
            err.push('age must be > 18');
        }

        if (err.length) {
            return err;
        }
    }
});

var user = new UserModel({
    _id        : 1,
    age        : 27,
    firstName  : 'Ivan',
    lastName   : 'Pupkin',
    dateOfBirth: new Date('1987-11-23')
});

var user2 = new UserModel({
    age        : 15,
    firstName  : 'Vasya',
    lastName   : 'Ivanov',
    dateOfBirth: new Date('1987-10-23')
});

/*user.set({
    firstName: 'Ivan2'
});

user.save(user.changedAttributes(), {
    patch  : true,
    success: function (model, xhrResponse, opt) {

    },
    error  : function (model, xhrResponse, opt) {

    }
});*/

var UserCollection = Backbone.Collection.extend({
    model: UserModel,
    url: '/user/'
});


var users = new UserCollection([user, user2]);