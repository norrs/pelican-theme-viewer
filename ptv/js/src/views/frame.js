define([
    "src/models/theme",
    "libs-amd/text!src/templates/frame.html",
    "libs/jquery",
    "libs/underscore",
    'libs/backbone',
    "libs/handlebars"
], function (ThemeModel, template) {
    var FrameView = Backbone.View.extend({
        initialize: function () {
            var self = this;
            this.template = Handlebars.compile(template);

            if (!this.model) {
                this.model = new ThemeModel();
            }
            Backbone.on("ptv:theme", this.showTheme, this);
        },
        showTheme: function (themeModel) {
            this.model = themeModel;
            this.render();
        },
        render: function () {
            var context = (!this.model.isNew() ? {
                theme: this.model.toJSON()
            } : "");

            var templateAsHtml = this.template(context);
            this.$el.html(templateAsHtml);
            return this;
        },
        close: function () {
            $(this.el).unbind();
            $(this.el).remove();
        }
    });

    return FrameView;
});