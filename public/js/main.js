/**
 * Created by roma on 08.02.16.
 */
require.config({
    paths: {
        Backbone: './libs/backbone/backbone',
        Underscore: './libs/underscore/underscore',
        jQuery: './libs/jquery/dist/jquery',
        text: './libs/text/text',
        moment: './libs/moment/moment',
        models: './models',
        collections: './collections',
        views: './views',
        templates: '../templates'
    },
    shim: {
        Backbone: ['Underscore', 'jQuery'],
        Underscore: {
            exports: '_'
        }
    }
});

require(['app'], function(app){
    console.log('started');
});