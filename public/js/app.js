define([
    'Backbone',
    'models/user',
    'collections/user',
    'views/user'
], function(Backbone, UserModel, UserCollection, UserView){
    var users = new UserCollection();
    var $saveForm = $('#saveForm');

    users.fetch({reset: true});

    users.on('reset', function(){
        users.forEach(function(model){
            var userView = new UserView({model: model});

            userView.render();
        });
    }/*, context*/);

    $saveForm.on('click', '#saveBtn', function(e){
        e.preventDefault();
        e.stopPropagation();

        var firstName = $saveForm.find('#firstName').val();
        var lastName = $saveForm.find('#lastName').val();
        var user = {
            firstName: firstName,
            lastName: lastName
        };

        var _user = new UserModel(user);

        _user.save(null, {
            wait: true,
            success: function(model){
                var userView = new UserView({model: model});

                userView.render();
            },
            error: function(model, xhr){
                alert(xhr.statusText);
            }
        });
    });

    return users;
});