var require = {
    baseUrl: '/js',
    waitSeconds: 7,
    urlArgs: "bust=" +  (new Date()).getTime(), // todo: move to requirejs debug config file.
    paths: {
        "libs": "libs",
        "libs-amd": "resources/libs",
        /* Use minimal versions in production */ // todo: fix dev requirejs file
        "libs/backbone": "libs/backbone-min",
        "libs/underscore": "libs/underscore-min",
        "libs/jquery": "libs/jquery-1.9.1.min"
    },
    shim: {
        'libs/underscore': {
            exports: '_'
        },
        'libs/backbone': {
            deps: ["libs/underscore", "libs/jquery"],
            exports: 'Backbone'
        }
    }
};