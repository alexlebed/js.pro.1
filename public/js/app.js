var UserModel = Backbone.Model.extend({
    idAttribute: '_id', //idAttribute: 'id';
    urlRoot: function(){
        return '/user/'
    }
});

var user = new UserModel({
    name: {
        first: 'Ivan',
        last: 'Pupkin'
    },
    dateOfBirth: new Date('1987-11-23')
});

user.set('age', 23);

console.log(user.get('name')); //get = function(name){return this.model.attributes[name]}
console.dir(user.toJSON());
console.log(user);