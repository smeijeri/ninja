 /**
 * The accordion components makes creating an accordion as easy as just placing multiple divs on you page
 * @module accordion
 * @example
 <accordion>
    <panel class="active" title="Accordion panel 1">
       <p>
           Domestic confined any but son bachelor advanced remember. How proceed offered her offence shy forming. Returned peculiar pleasant but appetite differed she. Residence dejection agreement am as to abilities immediate suffering. Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.
        </p>
    </panel>
    <panel title="Accordion panel 2">
        <p>
            nim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
       </p>
    </panel>
    <panel title="Accordion panel 3">
        <p>
            Of recommend residence education be on difficult repulsive offending. Judge views had mirth table seems great him for her. Alone all happy asked begin fully stand own get. Excuse ye seeing result of we. See scale dried songs old may not. Promotion did disposing you household any instantly. Hills we do under times at first short an. 
        </p>                
    </panel>
    
</accordion>
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
