/**
 * The form-group component takes a way on the ceremony of creating a bootstrap form-group
 * @module form-group
 * @example
 * <form-group params="value: ko.observable(), label: 'MyField'"></form-group>
 * @example
 * <form-group params="value: ko.observable(), label: 'MyField', controlTemlate: 'id-to-my-control-template'"></form-group>
 */
(function () {

	"use strict";

	define([
	  'jquery',
	  'knockout',
	  'text!./form-group.html',
	  'bootstrap',
	  "knockout-validation"
	], function ($, ko, templateString) {

		return {
			template: templateString,
			viewModel: {
				createViewModel: function (params, componentInfo) {
					var $element = $(componentInfo.element);

					var value = params.value ? params.value : ko.observable();
					var dataType = params.dataType ? params.dataType: "string";
					var controlTemplate = params.controlTemplate ? params.controlTemplate: "form-group-control-template-" + dataType;
					
					console.log(controlTemplate);
					
					return {
						value: value,
						label: params.label ? params.label: null,
						dataType: dataType,
						controlTemplate: controlTemplate,
						init: function () {
							console.log($element);
						}
					};
				}
			}
		};
	});
})();
