define([
    "libs-amd/text!themes.txt",
    "src/collections/theme",
    "libs/jquery",
    "libs/underscore",
    'libs/backbone',
    "libs/handlebars"
], function (dataBootstrapThemes, ThemeCollection) {
    // Ugly hack to bootstrap models :-))
    function Resources (bootstrapData) {
        this.resources = { themes: new ThemeCollection(ThemeCollection.prototype.parse(bootstrapData)) };
    }

    Resources.prototype.getThemes = function () {
        return this.resources.themes;
    };

    return new Resources(dataBootstrapThemes);
});