define([
    'Backbone',
    'Underscore',
    'moment',
    'text!templates/user/edit.html'
], function(Backbone, _, moment, editTemplate){
    var EditView = Backbone.View.extend({
        el: '#wrapper',
        template: _.template(editTemplate),
        events: {
            'click #saveBtn': 'onSaveBtnClick',
            'click #cancelBtn': 'onCancelBtnClick'
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
            var dateOfBirth = $thisEl.find('#date').val();

            var user = this.model.set({
                firstName: firstName,
                lastName: lastName,
                dateOfBirth: dateOfBirth
            });

            user.save(null, {
                success: function(model, xhr){
                    self.redirect();
                },
                error: function(model, xhr){
                    alert(xhr.statusText);
                }
            });
        },

        onCancelBtnClick: function(e){
           this.redirect();
        },

        redirect: function(){
            Backbone.history.navigate('user', {trigger: true});
        },

        render: function(){
            var model = this.model.toJSON();

            model.dateOfBirth = moment(model.dateOfBirth).format('YYYY-MM-DD');

            this.$el.html(this.template(model));
        }
    });

    return EditView;
});

