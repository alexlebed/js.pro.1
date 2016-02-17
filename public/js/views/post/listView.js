define([
    'Backbone',
    'Underscore',
    'views/user/listItem',
    /*'views/user/createView',*/
    'text!templates/user/list.html'
], function(Backbone, _, ListItemView, /*CreateView,*/ listTemplate){
    'use strict';

    var UserView = Backbone.View.extend({
        el: '#wrapper',
        template: _.template(listTemplate),
        events: {
            'click #createBtn': 'onCreateBtnClick'
        },

        initialize: function(){
            this.render();
        },

        onCreateBtnClick: function(){
            Backbone.history.navigate('#user/create', {trigger: true});
        },

        render: function(){
            /*this.$el.html(this.template({names: ['Test Templating 1', 'Test Templating 2', 'Test Templating 3']}));*/
            this.$el.html(this.template());

            this.collection.forEach(function(model){
                new ListItemView({model: model});
            });
        }
    });

    return UserView;
});