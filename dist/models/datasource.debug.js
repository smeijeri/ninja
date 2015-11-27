define([
	"knockout"
], function(ko) {
	
	"use strict";	

	
	function DataColumn()
	{
		
	}
	
	function DataTable(config)
	{
		var _self = this;
		_self.items = config.items ? config.items : ko.observableArray();
		_self.columns = config.columns ? config.columns : ko.observableArray();
	}
	
	return {
		DataColumn: DataColumn,
		DataTable: DataTable
	};
	
});