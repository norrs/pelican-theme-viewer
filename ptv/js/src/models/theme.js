define([
    'libs/backbone'
], function () {
    var ThemeModel = Backbone.Model.extend({
        idAttribute: "name",
        defaults: function () {
            return {
                name: null
            };
        }
    });
    return ThemeModel;

});