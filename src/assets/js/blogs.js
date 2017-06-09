function blogs(){
	
		var n=0;
	$('.Bo-lun ul').css('width',$('.Bo-lun ul li').length*17.7+'rem');
	clearInterval(timer);
	var timer=setInterval(next,2000);
		$('.Bo-lun .B-right').click(next)
	function next(){
		n++;
		$('.Bo-lun ul').animate({marginLeft: -17.7*(n+1)+'rem'});
		if (n==3) {
			$('.Bo-lun ul').animate({marginLeft: -17.7*(n+1)+'rem'},function(){
				$('.Bo-lun ul').css('marginLeft',-17.7+'rem')
			});
			n=0;
		};
	}
	$('.Bo-lun ul').mouseenter(function(){
		clearInterval(timer)
	})	
	$('.Bo-lun ul').mouseleave(function(){
	 timer=setInterval(next,2000);
	})
	$('.Bo-lun .B-left').click(function(){
				n--;
				$('.Bo-lun ul').animate({marginLeft:-17.7*(n+1)+'rem'});

				if (n==-1) {
					$('.Bo-lun ul').animate({marginLeft:-17.7*(n+1)+'rem'},function(){
						$('.Bo-lun ul').css('marginLeft',-17.7*3+'rem')
					});
					n=2
				};
				console.log(n)
	 	})
}
export{
	blogs
}