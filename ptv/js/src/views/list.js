define([
    "src/resources",
    "src/collections/theme",
    "libs-amd/text!src/templates/list.html",
    "libs/jquery",
    "libs/underscore",
    'libs/backbone',
    "libs/handlebars"
], function (Resources, ThemeCollection, template) {
    var ListView = Backbone.View.extend({
        events: {
            "click ul.themes li a.internal": "handleThemeClick"
        },
        initialize: function () {
            var self = this;
            this.template = Handlebars.compile(template);


            if (!this.collection) {
                this.collection = Resources.getThemes();
            }

            if (!!this.options.activeTheme) {
                this.showTheme(this.options.activeTheme);
            }
        },
        handleThemeClick: function (event) {
            var target = $(event.currentTarget);
            event.preventDefault();
            this.showTheme(target.data("theme"));
        },
        showTheme: function (themeName) {
            var theme = this.collection.get(themeName);
            if (!!theme) {
                Backbone.history.navigate("theme/"+themeName);
                Backbone.trigger("ptv:theme", theme);
            }
        },
        render: function () {
            var themes = this.collection.toJSON();
            var templateAsHtml = this.template({
                themes: themes
            });
            this.$el.html(templateAsHtml);
            return this;
        },
        close: function () {
            $(this.el).unbind();
            $(this.el).remove();
        }
    });

    return ListView;
});