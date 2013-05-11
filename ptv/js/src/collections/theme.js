define([
    'src/models/theme',
    'libs/backbone'
], function (ThemeModel) {

    var ThemeCollection = Backbone.Collection.extend({
        model: ThemeModel,
        url: '/js/themes.txt',
        parse: function (response) {
            var collectionData =  [];
            var themes = response.split("\n");
            for (var i = 0; i < themes.length; i++) {
                var theme = $.trim(themes[i]);
                if (!!theme) { // skip empty strings
                    collectionData.push(new ThemeModel({
                        name: $.trim(theme)
                    }));
                }
            }
            return collectionData;
        }

    });

    return ThemeCollection;
});