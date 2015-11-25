define([
	"module",
	"knockout", 
	"knockout-validation",
	"css!./ninja.css"
], function(modConf, ko) {

	var mUriAr = modConf.uri.split('/');
	mUriAr.splice(mUriAr.length -1, 1);
	var mRootPath = mUriAr.join('/');
	console.log(mRootPath);
	
	
	
	ko.validation.init({
    	errorElementClass: 'has-error',
    	errorMessageClass: 'help-block',
    	decorateElement: true
	});
	
  	ko.components.register('nav-tabs', { require: mRootPath+'/nav-tabs/nav-tabs' });
   	ko.components.register('form-group', { require: mRootPath+'/form-group/form-group' });
   	ko.components.register('ninja-table', { require: mRootPath+'/ninja-table/ninja-table' });
   	ko.components.register('accordion', { require: mRootPath+'/accordion/accordion' });	
	
});

