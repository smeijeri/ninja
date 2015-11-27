/**
 * The nav-tabs component makes creating an tabbed interface as easy as just placing multiple divs on you page
 * @module nav-tabs
 * @example
<nav-tabs>
    <panel class="active" title="Tab panel 1">
       <p>
           Domestic confined any but son bachelor advanced remember. How proceed offered her offence shy forming. Returned peculiar pleasant but appetite differed she. Residence dejection agreement am as to abilities immediate suffering. Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.
        </p>
    </panel>
    <panel title="Tab panel 2">
        <p>
            nim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
       </p>
    </panel>
    <panel title="Tab panel 3">
        <p>
            Of recommend residence education be on difficult repulsive offending. Judge views had mirth table seems great him for her. Alone all happy asked begin fully stand own get. Excuse ye seeing result of we. See scale dried songs old may not. Promotion did disposing you household any instantly. Hills we do under times at first short an. 
        </p>                
    </panel>
    
</nav-tabs>
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
