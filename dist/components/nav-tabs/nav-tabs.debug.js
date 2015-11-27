/**
 * @module nav-tabs
 */
(function () {

	"use strict";
	
	var tabIdIndex = 0;
	var tabPanelIdIndex = 0;

	define([
	  'jquery',
	  'knockout',
	  'text!./nav-tabs.html',
	  'bootstrap'
	], function ($, ko, templateString) {

		return {
			template: templateString,
			viewModel: {
				createViewModel: function (params, componentInfo) {
					var $element = $(componentInfo.element);

					$element.attr("id", "nav-tabs" + tabIdIndex);

					var viewModel = params.viewModel ? params.viewModel : {
						tabs: ko.observableArray([])
					};

					$.each(componentInfo.templateNodes, function (index) {
						var tNode = componentInfo.templateNodes[index];
						var $elem = $(tNode);
						if (tNode.tagName) {
							var tabTitle = tNode.getAttribute("title");
							viewModel.tabs.push({
								title: tabTitle,
								isActive: $elem.hasClass("active"),
								id: "nav-tabs-tabpane-id-" + tabPanelIdIndex
							});
							$elem.addClass('tab-pane').attr("id", "nav-tabs-tabpane-id-" + tabPanelIdIndex);
							tabPanelIdIndex++;
						}
					});
					
					tabIdIndex++;
					
					return {
						viewModel: viewModel,
						init: function () {

							$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
								console.log($($(e.target).data("target")));
							});
						}
					};
				}
			}
		};
	});
})();
