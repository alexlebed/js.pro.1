var UserModel = Backbone.Model.extend({
    idAttribute: '_id', //idAttribute: 'id';

    initialize: function () {
        /*this.on('invalid', function (model, err) {
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
        });*/
    },

    urlRoot: function () {
        return '/user/'
    },

    validate: function (attr, options) {
       /* var err = [];

        console.log(options);

        if (!attr.age) {
            err.push('age is required');
        }
        if (attr.age && attr.age < 18) {
            err.push('age must be > 18');
        }

        if (err.length) {
            return err;
        }*/
        console.log('Validate');
    },
    parse: function(mod){
        if(mod.dateOfBirth){
            mod.dateOfBirth = new Date(mod.dateOfBirth);
            mod.dateOfBirth = moment(mod.dateOfBirth);
            mod.age = mod.dateOfBirth.fromNow(true);
            mod.dateOfBirth = mod.dateOfBirth.format('DD MMM, YYYY');
        }

        return mod;
    }
});

var userObject = {
    _id: 1,
    firstName  : 'Ivan',
    lastName   : 'Pupkin'
};
var user;
var users = [];

for (var i = 0; i< 10; i++){
    userObject._id += 1;
    userObject.dateOfBirth = new Date();
    user = new UserModel(userObject);
    users.push(user);
}

var Users = Backbone.Collection.extend({
    model: UserModel,
    url: '/user'
});

var _users = new Users(users);



