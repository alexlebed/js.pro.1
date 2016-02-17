define([
    'Backbone',
    'router'/*,
    'models/user/user',
    'collections/user/user',
    'views/user/listView'*/
], function(Backbone, Router/*, UserModel, UserCollection, ListView*/){
    /*var users = new UserCollection();

    users.fetch({reset: true});

    users.on('reset', function(){
        new ListView({collection: users});
    }/!*, context*!/);

    return users;*/

    function  initialize(){
        var router = new Router();

        Backbone.history.start(/*{silent: true}*/);
    }

    return {
        initialize: initialize
    }

});