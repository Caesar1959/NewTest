jQuery(document).ready(function(){

	window.klp_m = window.klp_m || {}
    klp_m.bd = jQuery('body')
	
	klp_m.fullgallery = klp_m.fullgallery ? Number(klp_m.fullgallery) : 1
	klp_m.fullimage = klp_m.fullimage ? Number(klp_m.fullimage) : 1
	klp_m.click = 'click'
	
	jQuery('.klp_snvplay').on(klp_m.click, function(){
		klp_m.bd.toggleClass('klp_snvon')
	})

	jQuery('.klp_snvbg').on(klp_m.click, function(){
		klp_m.bd.removeClass('klp_snvon')
		klp_m.bd.removeClass('klp_ynvon')
	})

	jQuery('.klp_ynvplay').on(klp_m.click, function(){
		klp_m.bd.toggleClass('klp_ynvon')
	})

 	jQuery('.klp_souplay').on(klp_m.click, function(){
		jQuery(this).hide()
		jQuery('.klp_souoff').show()
		klp_m.bd.addClass('klp_souon')
		
	})

	jQuery('.klp_souoff').on(klp_m.click, function(){
		jQuery(this).hide()
		jQuery('.klp_souplay').show()
		klp_m.bd.removeClass('klp_souon')
	})
  



})
