$(function() {

	$('#slider').nivoSlider({
		effect:"fade",
		animSpeed:000,
		pauseTime:3000,
		startSlide:0,
		directionNav:true,
		directionNavHide:true,
		controlNav:true,
		controlNavThumbs:false,
		controlNavThumbsFromRel:false,
		keyboardNav:true,
		pauseOnHover:true,
		manualAdvance:false
	});

	$('#slider2').nivoSlider({
		effect:"fade",
		animSpeed:000,
		pauseTime:3000,
		startSlide:0,
		directionNav:true,
		directionNavHide:true,
		controlNav:true,
		controlNavThumbs:true,
		controlNavThumbsFromRel:true,
		keyboardNav:true,
		pauseOnHover:true,
		manualAdvance:false
	});
	
	var y_fixo = $("#menu_float").offset().top;
	$(window).scroll(function () {
		$("#menu_float").animate({
			top: y_fixo+$(document).scrollTop()+"px"
			},{duration:500,queue:false}
		);
	});

	var value = $('#page1').offset().left + 1040;
	$('#menu_float').css({left : value + 'px'});
	
	
	

	$('.boll_float').live('click',function(){
		$('.boll_float').removeClass('enable');
		$(this).addClass('enable');
	});
	

	// Accordions
	$("#accordion").accordion({
		header: "h3",
		icons: {
			'header': 'icon-accordion',
			'headerSelected': 'icon-accordion-active'
		}
	});
	
	$("#accordion2").accordion({
		header: "h3",
		icons: {
			'header': 'icon-accordion',
			'headerSelected': 'icon-accordion-active'
		}
	});

	$('.tooltip').each(function(i) {
			i += 1;
			$('#' + $.attr(this, 'id')).qtip({
				content : {
					text : function(api) {
						// Retrieve content from custom attribute of the
						// $('.selector') elements.
						return $('#' + i).html();
					}
				},
			   style: {
				      tip: {
				         corner: true,
				         width: 18,
				         height:18,
				         offset: 5
				      },
				      classes: 'ui-tooltip-shadow ui-tooltip-tipped'
			   },
			   position: {
					viewport: $(window),
			        adjust: {
			            x: parseInt($('#' + i).val(), 0) || 0,
			            y: parseInt($('#' + i).val() , 0) || 0
			         }
			   }
			});		
		});
	
});

