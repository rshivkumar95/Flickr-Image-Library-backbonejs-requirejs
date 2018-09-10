define([
    "underscore"
], function (_) {
    "use strict";
    var Flickr = {
        apiKey: "0095658cc590444c2b60f4348d51ae13",
        secretKey: "05f5a90a16093d93",
        getAPIKey: function() {
            return this.apiKey;
        },
        getSecretKey: function() {
            return this.secretKey;
        },
        buildRequestURL: function (methodname, parameters) {
            var url = "https://api.flickr.com/services/rest/?method=" + methodname + "&api_key=" + this.getAPIKey() + "&";
            var keys = Object.keys(parameters);
            _.each(keys, function (key) {
                url += key + "=" + parameters[key] + "&";
            });
            url += "format=json&nojsoncallback=1";
            return url;
        },
        apiCallout: function (methodname, parameters) {
            var request = {
                "async": true,
                "crossDomain": true,
                "url": this.buildRequestURL(methodname, parameters),
                "method": "GET",
                "headers": {}
            };
            return new Promise( function (resolve, reject) {
                $.ajax(request).done(function (data) {
                    resolve(data);
                });
            });
        }
    };

    return Flickr;
});