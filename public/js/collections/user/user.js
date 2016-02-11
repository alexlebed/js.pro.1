define([
    'Backbone',
    'models/user/user'
], function(Backbone, UserModel){
    'use strict';
    var Users = Backbone.Collection.extend({
        model: UserModel,
        url: '/user'
    });

    return Users
});
