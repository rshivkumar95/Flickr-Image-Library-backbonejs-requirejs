define([
    'underscore',
    'backbone'
], function(_, Backbone) {
    'use strict';
    var Image = Backbone.Model.extend({
        defaults : {
        farm : "",
        has_comment : "",
        id : "",
        is_primary : "",
        isfamily : "",
        isfriend : "",
        ispublic : "",
        owner : "",
        secret : "",
        server : "",
        title : "",
        url : ""
        },
        initialize : function(){
            //this.set(this.url,"https://farm"+this.farm+".staticflickr.com/"+this.server+"/"+this.id+"_"+this.secret+".jpg");
        },
        parse : function(){
            //this.set(url,"https://farm"+this.farm+".staticflickr.com/"+this.server+"/"+this.id+"_"+this.secret+".jpg");
        }
    }); 

    return Image;
});