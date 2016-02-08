define(['Backbone'], function(Backbone){
    var UserView = Backbone.View.extend({
        el: '#element',

        events: {
            'click li': 'onLiClick' //this.$el.on('click', 'li', this.onLiClick)
        },

        onLiClick: function(e){
            e.stopPropagation();
            e.preventDefault();
            alert('Clicked li');
        },

        render: function(){
            this.$el.append('<li>' + this.model.get('firstName') + ' ' + this.model.get('lastName') + '</li>');
        }
    });

    return UserView;
});

