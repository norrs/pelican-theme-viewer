require([
    "src/resources",
    "src/router",
    "libs/jquery",
    "libs/underscore",
    'libs/backbone',
    "libs/handlebars"
], function (Resources, Router) {
    var theme_viewer = function () {
        Router.initialize();
    };

    return theme_viewer();
});