/**
 * This component renderes a table, based on a viewModel that contains items.
 * @module ninja-table
 * @example <ninja-table params="
 *	items: users, 
 *	columns : [ 
 *		{ name: 'id', label: 'Id' }, 
 *		{ name: 'name', label: 'Displayname' },
 *		{ name: 'description', label: 'Description' } 
 *	], 
 *	showHeader: true,
 *	onSelectItem: onSelectUser
 *	">
 * </ninja-table>
 */
(function () {

	"use strict";

	/**
      * @typedef params
      * @property {array} items The items that contain the rows
      * @property {array} [columns] An array defining how the row items should be interperted
	  * @property {bool} [showHeader] Should it show a header row, this requires the columns property to be set
	  * @property {function} [onSelectItem] What function should be called when the user clicks a row
      */

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
                    };
					
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
