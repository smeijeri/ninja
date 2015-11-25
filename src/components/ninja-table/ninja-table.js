/**
 * @module ninja-table
 */
(function () {

	"use strict";

	define([
	  'jquery',
	  'knockout',
	  'text!./ninja-table.html',
	  'bootstrap'
	], function ($, ko, templateString) {

		return {
			template: templateString,
			viewModel: {
				createViewModel: function (params, componentInfo) {
					var $element = $(componentInfo.element);

					var columns = params.columns ? params.columns: [];

                    var viewModel = {
                        items: params.items ? params.items : ko.observableArray(),
						columns: ko.observableArray(),
						showHeader: params.showHeader ? params.showHeader: false,
						onSelectItem : params.onSelectItem ? params.onSelectItem : function() {}
                    }
					
					if(columns.length!==0) {
						for(var i=0, j=columns.length; i<j; i++) {
							var column = columns[i];
							if(typeof column === "string") {
								viewModel.columns.push(
										{	 	
											name: column,
											label: column 
										}
									);
							}
							else	{
								viewModel.columns.push(column);
							}
						}
					}

					return {
						viewModel: viewModel,
						init: function () {
							console.log($element);
						}
					};
				}
			}
		};
	});
})();
