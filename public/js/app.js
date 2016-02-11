define([
    'Backbone',
    'models/user/user',
    'collections/user/user',
    'views/user/listView'
], function(Backbone, UserModel, UserCollection, ListView){
    var users = new UserCollection();

    users.fetch({reset: true});

    users.on('reset', function(){
        new ListView({collection: users});
    }/*, context*/);

    return users;
});