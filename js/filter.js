    $(document).ready(function(){

		var condFilter = $(".cond-filter");
		var ecoFilter = $(".eco-filter");
		var airFilter = $(".air-filter");
		var radiatorFilter = $(".radiator-filter");
		var gasFilter = $(".gas-filter");
		var electroFilter = $(".electro-filter");
		var cotelFilter = $(".cotel-filter");
		var convectorFilter = $(".convector-filter");
		
		var accordContainer = $(".accord-container");
		var condAccordContainer = $(".cond-accord");
		var ecoAccordContainer = $(".eco-accord");
		var airAccordContainer = $(".air-accord");
		var radiatorAccordContainer = $(".radiator-accord");
		var gasAccordContainer = $(".gas-accord");
		var electroAccordContainer = $(".electro-accord");
		var cotelAccordContainer = $(".cotel-accord");
		var convectorAccordContainer = $(".convector-accord");
		
		
		
		condFilter.click(function(){
			accordContainer.show();
			gasAccordContainer.hide();
			radiatorAccordContainer.hide();
			airAccordContainer.hide();
			ecoAccordContainer.hide();
			electroAccordContainer.hide();
			cotelAccordContainer.hide();
			convectorAccordContainer.hide();
			condAccordContainer.show();
		});
		ecoFilter.click(function(){
			accordContainer.show();
			gasAccordContainer.hide();
			radiatorAccordContainer.hide();
			airAccordContainer.hide();
			condAccordContainer.hide();
			electroAccordContainer.hide();
			cotelAccordContainer.hide();
			convectorAccordContainer.hide();
			ecoAccordContainer.show();
		});
		airFilter.click(function(){
			accordContainer.show();
			gasAccordContainer.hide();
			radiatorAccordContainer.hide();
			condAccordContainer.hide();
			ecoAccordContainer.hide();
			electroAccordContainer.hide();
			cotelAccordContainer.hide();
			convectorAccordContainer.hide();
			airAccordContainer.show();
		});
		radiatorFilter.click(function(){
			accordContainer.show();
			gasAccordContainer.hide();
			condAccordContainer.hide();
			ecoAccordContainer.hide();
			airAccordContainer.hide();
			electroAccordContainer.hide();
			cotelAccordContainer.hide();
			convectorAccordContainer.hide();
			radiatorAccordContainer.show();
		});
		gasFilter.click(function(){
			accordContainer.show();
			condAccordContainer.hide();
			ecoAccordContainer.hide();
			airAccordContainer.hide();
			radiatorAccordContainer.hide();
			electroAccordContainer.hide();
			cotelAccordContainer.hide();
			convectorAccordContainer.hide();
			gasAccordContainer.show();
		});
		electroFilter.click(function(){
			accordContainer.show();
			condAccordContainer.hide();
			ecoAccordContainer.hide();
			airAccordContainer.hide();
			radiatorAccordContainer.hide();
			cotelAccordContainer.hide();
			convectorAccordContainer.hide();
			gasAccordContainer.hide();
			electroAccordContainer.show();
		});
		cotelFilter.click(function(){
			accordContainer.show();
			condAccordContainer.hide();
			ecoAccordContainer.hide();
			airAccordContainer.hide();
			radiatorAccordContainer.hide();
			electroAccordContainer.hide();
			convectorAccordContainer.hide();
			gasAccordContainer.hide();
			cotelAccordContainer.show();
		});
		convectorFilter.click(function(){
			accordContainer.show();
			condAccordContainer.hide();
			ecoAccordContainer.hide();
			airAccordContainer.hide();
			radiatorAccordContainer.hide();
			electroAccordContainer.hide();
			cotelAccordContainer.hide();
			gasAccordContainer.hide();
			convectorAccordContainer.show();
		});
		
	$(".toggle-accordion").on("click", function() {
    var accordionId = $(this).attr("accordion-id"),
      numPanelOpen = $(accordionId + ' .collapse.in').length;
    $(this).toggleClass("active");

    if (numPanelOpen == 0) {
      openAllPanels(accordionId);
    } else {
      closeAllPanels(accordionId);
    }
  })

  openAllPanels = function(aId) {
    console.log("setAllPanelOpen");
    $(aId + ' .panel-collapse:not(".in")').collapse('show');
  }
  closeAllPanels = function(aId) {
    console.log("setAllPanelclose");
    $(aId + ' .panel-collapse.in').collapse('hide');
  }
	});