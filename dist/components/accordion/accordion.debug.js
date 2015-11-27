 /**
 * @module accordion
 */
(function () {

	"use strict";

	var accordionIdIndex = 0;
	var panelIdIndex = 0;

	define([
	  'jquery',
	  'knockout',
	  'text!./accordion.html',
	  'bootstrap'
	], function ($, ko, templateString) {

		return {
			template: templateString,
			viewModel: {
				createViewModel: function (params, componentInfo) {
					//var $element = $(componentInfo.element);

					var viewModel = {
						id: "accordion-" + accordionIdIndex,
						panels : ko.observableArray()
					};

					$.each(componentInfo.templateNodes, function (index) {
						var tNode = componentInfo.templateNodes[index];
						var $elem = $(tNode);
						if (tNode.tagName) {
							var title = tNode.getAttribute("title");
							viewModel.panels.push({
								title: title,
								isActive: $elem.hasClass("active"),
								id: "accordion-panel-id-" + panelIdIndex,
								headingId: "accordion-panel-heading-id-" + panelIdIndex,
								href: "#accordion-panel-id-" + panelIdIndex,
								node: tNode
							});
							panelIdIndex++;
						}
					});					

					accordionIdIndex++;

					return {
						viewModel: viewModel,
						init: function () {
							//$element.find('.collapse').collapse();
						}						
					};
				}
			}
		};
	});
})();
