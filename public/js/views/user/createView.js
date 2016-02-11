define([
    'Backbone',
    'Underscore',
    'models/user/user',
    'text!templates/user/create.html'
], function(Backbone, _, UserModel, createTemplate){
    var CreateView = Backbone.View.extend({
        el: '#createContainer',
        template: _.template(createTemplate),
        events: {
            'click #saveBtn': 'onSaveBtnClick'
        },

        initialize: function(){
            this.render();
        },

        onSaveBtnClick: function(e){
            e.preventDefault();
            var self = this;
            var $thisEl = this.$el;
            var firstName = $thisEl.find('#firstName').val(); //this.$('#firstName');
            var lastName = $thisEl.find('#lastName').val();

            var user = new UserModel({
                firstName: firstName,
                lastName: lastName
            });

            user.save(null, {
                success: function(model, xhr){
                    self.clear();
                },
                error: function(model, xhr){
                    alert(xhr.statusText);
                }
            });
        },

        clear: function(){
            console.log('---- Saved -----');
            this.$el.empty();
            this.undelegateEvents();
        },

        render: function(){
            this.$el.html(this.template());
        }
    });

    return CreateView;
});

