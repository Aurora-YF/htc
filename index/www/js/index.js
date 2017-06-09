$(function(){
	$('.banner .banner1').css('width',$('.banner .banner1 li').length*13.135+(0.683*4)+'rem');
	var iNow=0;
	function tab(){
		$('.banner .yuan a').eq(iNow).siblings().removeClass('active');
		$('.banner .yuan a').eq(iNow).addClass('active');
	if (iNow%2==0) {
		if (iNow==0) {
			$('.banner .banner1').animate({marginLeft:-12.452+'rem'});
		}else{$('.banner .banner1').animate({marginLeft:((iNow+1)*-13.135)-0.683+'rem'});}
	
	}else{
	$('.banner .banner1').animate({marginLeft:(iNow+1)*-13.135+'rem'});
	}	
	
	}
	$('.banner .yuan a').click(function(){
		iNow=$(this).index();
		tab();
		})
	setInterval(next,1000)
	$('#right').click(next);
	function next(){
		iNow++;	
		if (iNow==3) {
			$('.banner .banner1').animate({marginLeft:-53.906+'rem'},function(){
				$('.banner .banner1').css('marginLeft',-12.452+'rem')
			})
			iNow=-1;
			$('.banner .yuan a').eq(2).removeClass('active');
			$('.banner .yuan a').eq(0).addClass('active');	
		}else{
			tab();
		}
	
	}
	$('.switch').toggle(function(){
		$('.switch img').attr('src','img/switch1.png');
		$('.aud')[0].play();
	},function(){
		$('.aud')[0].pause();
		$('.switch img').attr('src','img/switch.png')
	})
})  
