/**
 * @module form-group
 */
(function () {

	"use strict";

	require(['jquery'], function() {
		
	}, function(err) {
		//inject-pretty-dependency-warning
		console.log(err);	
	});

	define([
		'jquery',
		'knockout',
		'text!./navbar.html',
		'bootstrap',
		"knockout-validation"
	], function ($, ko, templateString) {

		return {
			template: templateString,
			viewModel: {
				createViewModel: function (params, componentInfo) {
					var $element = $(componentInfo.element);

					var componentTemplate = ko.observable();
					var navigationNodes = [];
					
					if(!params.type) {
						componentTemplate("ninja-navbar-simple");
					}
					else {
						componentTemplate("ninja-navbar-" + params.type);
					}
			
					$.each(componentInfo.templateNodes, function (index) {
						var tNode = componentInfo.templateNodes[index];
						var $elem = $(tNode);
						if (tNode.tagName) {
							var tabTitle = tNode.getAttribute("title");
							navigationNodes.push({
								title: tabTitle,
								isActive: $elem.hasClass("active"),
								node: tNode
							});
						}
					});			
					
					return {
						navigationNodes: navigationNodes,
						componentTemplate: componentTemplate,
						init: function () {

							$element.find('a').on('click', function() {
								var $elem = $(this);
								var $parent = $elem.closest('li');
								
								$parent.siblings().removeClass("active");
								$parent.addClass("active");
								
							});
						}
					};
				}
			}
		};
	}, function() {
		console.error(arguments);
	});
		
	
})();
