/**
 * Created by roma on 15.02.16.
 */
define([
    'Backbone'
], function(Backbone){
    var Router = Backbone.Router.extend({

        initialize: function(){
            console.log('--- router initialized ---');
        },

        routes: {
            ':content': 'contentRouter',
            ':content/create': 'createUser',
            ':content/:id': 'editUser',
            '*any': 'anyRouter'
        },

        contentRouter: function(content){
            var userCollectionUrl = 'collections/' + content + '/' + content;
            var viewUrl = 'views/' + content + '/listView';
            var self = this;

            require([userCollectionUrl, viewUrl], function(Collection, View){
                var collection = new Collection();

                collection.fetch({reset: true});

                collection.on('reset', function(){
                        self.changeView(View, {collection: collection});
                });
            });
        },

        createUser: function(content){
            var viewUrl = 'views/' + content + '/createView';
            var self = this;

            require([viewUrl], function(View){
                self.changeView(View);
            });
        },

        editUser: function(content, id){
            var modelUrl = 'models/' + content + '/' + content;
            var viewUrl = 'views/' + content + '/editView';
            var self = this;

            require([modelUrl, viewUrl], function(Model, View){
                var model = new Model();

                model.urlRoot = '/user/' + id;
                model.fetch({
                    success: function(){
                        model.urlRoot = '/user/';
                        self.changeView(View, {model: model});
                    },
                    error: function(){
                        alert('Some error');
                    }
                });
            });

            console.log('userId', id);
        },

        changeView: function(View, options){
            var collection = options ? options.collection: null;
            var model = options ? options.model: null;

            if (this.view){
                this.view.undelegateEvents();
            }

            this.view = new View({collection: collection, model: model});
        },

        anyRouter: function(){
            console.log('-- any route ----');
        }

    });

    return Router;
});