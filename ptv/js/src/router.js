define([
    "src/views/frame",
    "src/views/list",
    "libs/jquery",
    "libs/underscore",
    'libs/backbone',
    "libs/handlebars"
], function (FrameView, ListView) {
    var ApplicationRouter = Backbone.Router.extend({
        initialize: function () {

        },
        routes: {
            'theme/:theme': 'showTheme',
            '': 'showBasicTheme'
        },
        showBasicTheme: function () {
            this.showTheme("basic");
        },
        showTheme: function (themeName) {
            if (!!this.gridView) {
                this.gridView.close();
            }
            if (!!this.frameView) {
                this.frameView.close();
            }

            this.frameView = new FrameView();
            this.gridView = new ListView({'activeTheme': themeName});
            $('#listView').html(this.gridView.render().el);
            $('#frameView').html(this.frameView.render().el);
        }

    });

    var initialize = function () {
        this.applicationRouter = new ApplicationRouter();
        Backbone.View.navigate = this.applicationRouter.navigate;
        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});