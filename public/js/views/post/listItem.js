define([
    'Backbone',
    'Underscore',
    'text!templates/user/listItem.html'
], function(Backbone, _, listItemTemplate){
    var UserView = Backbone.View.extend({
        el: '#tableBody',
        template: _.template(listItemTemplate),
        events: {
            'click .editBtn': 'onEditClick',
            'click .removeBtn': 'onRemoveClick'
        },

        initialize: function(){
            console.log('Render element');
            this.render();
        },

        onRemoveClick: function(){
            var self = this;

            this.model.destroy({
                success: function(){
                    var $el = self.$el.find('#' + self.model.id);

                    $el.remove();
                },
                error: function(){
                    alert('Some error');
                }
            });
        },

        onEditClick: function(){
            Backbone.history.navigate('user/' + this.model.id, {trigger: true});
        },

        render: function(){
            var model = this.model.toJSON();

            this.$el.append(this.template(model));
        }
    });

    return UserView;
});

