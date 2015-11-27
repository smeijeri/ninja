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
	
  	ko.components.register('nav-tabs', { require: mRootPath+'/components/nav-tabs/nav-tabs' + ext });
   	ko.components.register('form-group', { require: mRootPath+'/components/form-group/form-group'  + ext});
   	ko.components.register('ninja-table', { require: mRootPath+'/components/ninja-table/ninja-table'  + ext});
   	ko.components.register('accordion', { require: mRootPath+'/components/accordion/accordion'  + ext});
	ko.components.register('navbar', { require: mRootPath+'/components/navbar/navbar' + ext});		
	
});

