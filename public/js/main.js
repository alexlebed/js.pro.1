/**
 * Created by roma on 08.02.16.
 */
require.config({
    paths: {
        Backbone: './libs/backbone/backbone',
        Underscore: './libs/underscore/underscore',
        jQuery: './libs/jquery/dist/jquery',
        models: './models',
        collections: './collections',
        views: './views'
    },
    shim: {
        Backbone: ['Underscore', 'jQuery']
    }
});

require(['app'], function(app){
    console.log('started');
});