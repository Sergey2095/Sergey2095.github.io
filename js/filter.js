    $(document).ready(function(){

		var condFilter = $(".cond-filter");
		var ecoFilter = $(".eco-filter");
		var airFilter = $(".air-filter");
		var radiatorFilter = $(".radiator-filter");
		var gasFilter = $(".gas-filter");
		var electroFilter = $(".electro-filter");
		var cotelFilter = $(".cotel-filter");
		var convectorFilter = $(".convector-filter");
		
		
		var condAccordContainer = $(".cond-accord-container");
		var ecoAccordContainer = $(".eco-accord-container");
		var airAccordContainer = $(".air-accord-container");
		var radiatorAccordContainer = $(".radiator-accord-container");
		var gasAccordContainer = $(".gas-accord-container");
		var electroAccordContainer = $(".electro-accord-container");
		var cotelAccordContainer = $(".cotel-accord-container");
		var convectorAccordContainer = $(".convector-accord-container");
		
		
		
		condFilter.click(function(){
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
			condAccordContainer.hide();
			ecoAccordContainer.hide();
			airAccordContainer.hide();
			radiatorAccordContainer.hide();
			electroAccordContainer.hide();
			cotelAccordContainer.hide();
			gasAccordContainer.hide();
			convectorAccordContainer.show();
		});
	});