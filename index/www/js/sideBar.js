$(function(){
	var btn = $('.xiala');
	var sideBar = $('#sideBar');
	var head = $('#head');
	var head2 = $('#head2');
	var head3 = $('#head3');
	var menu = $('#menu li');
	var body = $('body');
	var play = $('.play');
	var menuBtn = $('#menu');
	var l = 0;
	function mobile(obj){
		$(document).on("pagecreate",obj,function(){
			$(document).on("swiperight",function(){
				sideBar.stop().animate({'left':l});
				head.stop().animate({'left':'12.726rem'});
				head2.stop().animate({'left':'12.726rem'});
				head3.stop().animate({'left':'12.726rem'});
				play.stop().animate({'left':'12.726rem'});
				body.addClass('hide');
			})
			$(document).on("swipeleft",function(){
				sideBar.stop().animate({'left':'-12.726rem'});
				head.stop().animate({'left':0});
				head2.stop().animate({'left':0});
				head3.stop().animate({'left':0});
				play.stop().animate({'left':0});
				body.removeClass('hide');
			})
			btn.on("tap",function(){
				if(sideBar.position().left || head.position().left || head2.position().left || head3.position().left || play.position().left){
					sideBar.stop().animate({'left':l});
					head.stop().animate({'left':'12.726rem'});
					head2.stop().animate({'left':'12.726rem'});
					head3.stop().animate({'left':'12.726rem'});
					play.stop().animate({'left':'12.726rem'});
					body.addClass('hide');
				}
				if(sideBar.position().left >0 || head.position().left > 0 || head2.position().left || head3.position().left || play.position().left > 0){
					sideBar.stop().animate({'left':'-12.726rem'});
					head.stop().animate({'left':0});
					head2.stop().animate({'left':0});
					head3.stop().animate({'left':0});
					play.stop().animate({'left':0});
					body.removeClass('hide');
				}

			})
			$('.main').on("tap",function(){
				if(sideBar.position().left >0 || head.position().left > 0 || head2.position().left || head3.position().left || play.position().left > 0){
					sideBar.stop().animate({'left':'-12.726rem'});
					head.stop().animate({'left':0});
					head2.stop().animate({'left':0});
					head3.stop().animate({'left':0});
					play.stop().animate({'left':0});
					body.removeClass('hide');
				}	
			})
		})
	}
	mobile("#pagebox");
	mobile("#pagebox2");
	mobile("#pagebox3");
	function guodu(obj1,obj2){
		// 在过渡动画开始前
		$(document).on("pagebeforeshow",obj1,function(){
			head.stop().animate({'left':0});
			play.stop().animate({'left':0});
			obj2.stop().animate({'left':0});
			sideBar.stop().animate({'left':'-12.726rem'});
		});
		// 在过渡动画完成后
		$(document).on("pageshow",obj1,function(){
			obj2.stop().animate({'left':0});
			play.stop().animate({'left':0});
			sideBar.stop().animate({'left':'-12.726rem'});
		});
		// 在过渡动画开始前
		$(document).on("pagebeforehide",obj1,function(){
			head.stop().animate({'left':0});
			play.stop().animate({'left':0});
			sideBar.stop().animate({'left':'-12.726rem'});
		});
		// 在过渡动画完成后
		$(document).on("pagehide",obj1,function(){
			head.stop().animate({'left':0});
			play.stop().animate({'left':0});
			sideBar.stop().animate({'left':'-12.726rem'});
		});
	}
	guodu("#pagebox2",head2);
	guodu("#pagebox3",head3);
	$(document).on("pagecontainerbeforeload",function(event,data){
		$.location.reload();	
	});
	$(document).on("pagecontainerload",function(){
 		$.location.reload();
	});
	// $(document).on("pagecreate","#pagebox",function(){
	// 	menuBtn.on('tap','a',function(){
	// 		console.log(menuBtn);
	// 		$(this).children().css({"opacity":"1","color":"#fff"});
	// 		$(this).children().siblings().css("opacity","0.54");
	// 	})
	// })
})
	
	

