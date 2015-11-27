/**
 * This is the main wrapper for the ninja components.
 * You can use every individual components seperatly,
 * but if you include the ninja module. All component loading will be configured for you
 * @module ninja  
 * @example
 requirejs.config({
    shim : {
        "bootstrap" : { "deps" :['jquery'] }
    },    
    paths: {
        jquery: "bower_components/jquery/dist/jquery.min",
        knockout: "bower_components/knockout/dist/knockout",
        "knockout-validation": "bower_components/knockout-validation/dist/knockout.validation.min",
        bootstrap: "bower_components/bootstrap/dist/js/bootstrap.min",
        text: "bower_components/text/text",
        css: "bower_components/require-css/css.min",
        ninja : "bower_components/ninja/dist/ninja.min"
    }
});
 * @example

define([
    "knockout",
    "knockout-validation",
    "ninja"
], function(ko) {
	
});
*/
 
define([
	"module",
	"knockout", 
	"knockout-validation",
	"css!./ninja.css"
], function(modConf, ko) {
	
	"use strict";
	
	var mUriAr = modConf.uri.split('/');
	
	var fileName = mUriAr[mUriAr.length-1];
	var ext="";
	if(fileName!=="ninja.js") {
		ext = "." + fileName.split('.').reverse()[1];
		console.log(ext);
	}
	
	mUriAr.splice(mUriAr.length -1, 1);
	var mRootPath = mUriAr.join('/');
		
	requirejs.config({
		paths: {
			"ninja-datasource" : mRootPath + "/models/datasource" + ext
		}
	});
	
	ko.validation.init({
    	errorElementClass: 'has-error',
    	errorMessageClass: 'help-block',
    	decorateElement: true
	});
	
	var components = [
		"nav-tabs",
		"form-group",
		"ninja-table",
		"accordion",
		"navbar",
		"nested-repeater"
	];
	
	for(var i=0, j=components.length; i<j; i++) {
		console.log(components[i]);
		ko.components.register(components[i], { require: mRootPath+'/components/'+components[i]+'/'+components[i] + ext });
	}

});

