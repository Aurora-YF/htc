function developer(){
	var a=false;
	$('.Htab li').mousedown(function(){
		$('.Htab li').removeClass('active');
		$(this).addClass('active');
		console.log(a);
		if (!a) {
			$('.Htab li').mouseup(function(){
			a=true;
			console.log(a);
			if (!a) {
				$('.Htab li').hover(function(){
					// $('.Htab li').removeClass('active');
					$('.Htab li').eq($(this).index()).addClass('active');
				},function(){
					$(this).removeClass('active');
				});	
			};		
	})					
		};
		
	});
	
			$('.Htab li').hover(function(){
				// $('.Htab li').removeClass('active');
				$('.Htab li').eq($(this).index()).addClass('active');
			},function(){
				$(this).removeClass('active');
			});	
	
	$('.Htab li.VR-item').hover(function(){
		// alert(1)
		$('.Htab li.VR-item .VR-item1').css('display','block')
	},function(){
		$('.Htab li.VR-item .VR-item1').css('display','none')
	})
}
export {developer}