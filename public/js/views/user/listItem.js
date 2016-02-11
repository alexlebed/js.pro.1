define([
    'Backbone',
    'Underscore',
    'text!templates/user/listItem.html'
], function(Backbone, _, listItemTemplate){
    var UserView = Backbone.View.extend({
        el: '#tableBody',
        template: _.template(listItemTemplate),
        events: {

        },

        initialize: function(){
            console.log('Render element');
            this.render();
        },

        render: function(){
            var model = this.model.toJSON();

            this.$el.append(this.template(model));
        }
    });

    return UserView;
});

