/**
* This component kan repeat nested data.
* It will turn this into a configurable unordered list.
* @module nested-repeater
* @example 

//javascript viewModel
var viewModel = { items: [
		{
			header: "Item1",
			items: [ {	header: "Item1.1" }, {	header: "Item1.2" }]
		},
		{
			header: "Item2",
			items: [ {	header: "Item2.1" }, {	header: "Item2.2" }]
		}
	]};

//html

<nested-repeater params="viewModel: viewModel"></nested-repeater>
* 
*/

(function () {

	"use strict";
	
	/**
	 * Class that represents te input viewModel for this component
	 * @class ComponentViewModel
	 * @private
	 */
	var ComponentViewModel = (function() {
		
		function ComponentViewModel(config) {
			this.viewModel = config.viewModel;
			this.template = config.template;
			this.itemTemplate = config.itemTemplate;
		}
		
		ComponentViewModel.prototype.init = function() {
			console.log("component started");
		};
		
		return ComponentViewModel;
		
	})();	
	
	/**
	 * @typedef viewModel
	 * @property {array} items The items to repeat
	 */
	
	/**
      * @typedef params
      * @property {nested-repeater~viewModel} viewModel Te model containing the items
      * @property {string} [itemTemplate] An alternative template to print the item header
      */
	
	
	define([
		"knockout",
		"text!./nested-repeater.html"
	], function (ko, templateString) {

		return {
			viewModel : {
				createViewModel: function(
					params, 
					componentInfo
					) {

					var viewModel = params.viewModel ? params.viewModel : ko.observable();
					var itemTemplate =  params.itemTemplate ? params.itemTemplate : 'nested-repeater-item-template';
					
					return new ComponentViewModel ({
						viewModel: viewModel,
						template: 'nested-repeater-template',
						itemTemplate: itemTemplate,
					}, componentInfo);

				}
			},
			template: templateString
		};
	});

})();
