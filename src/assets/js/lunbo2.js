function lunbo2(){
	var oUl = $('.figure_png');
	var oLi = $('.figure_png li');
	var oBtn = $('.figure_btn li');
	var oPre = $('#page_pre');
	var oNext = $('#page_next');
	var oBox = $('.figure_box');
	var iNow = 0;
	oUl.css('width',oLi.length * 14.158 + 'rem');
	function tab(){
		oBtn.removeClass('active');
		oBtn.eq(iNow).addClass('active');
		oUl.stop().animate({"left":(iNow + 1) * -14.158 + 'rem'});
	}
	// 当点击按钮时切换
	$.each(oBtn,function(){
		oBtn.click(function(){
			iNow = $(this).index();
			tab();
		});
	});
	// 上一页
	oPre.click(function(){
		iNow--;
		if(iNow < 0){
			oUl.stop().animate({"left": (iNow + 1) * -14.158 + 'rem'},function(){
				oUl.css("left", -3 * 14.158 + 'rem');
			});
			iNow = 2;
			oBtn.removeClass('active');
			oBtn.eq(iNow).addClass('active');
		}else{
			tab();
		}
	});
	function play(){
		iNow++;
		if(iNow == 3){
			oUl.stop().animate({"left":(iNow + 1) * - 14.158 + 'rem'},function(){
				oUl.css("left", - 14.158 + 'rem');
			})
			iNow = 0;
			oBtn.removeClass('active');
			oBtn.eq(iNow).addClass('active');
		}else{
			tab();
		}
	}
	oNext.click(function(){
		play();
	})
	// var tid = setInterval(play,3000);
	// oBox.mouseenter(function(){
	// 	clearInterval(tid);
	// });
	// oBox.mouseleave(function(){
	// 	tid = setInterval(play,3000);
	// })


	// 下一页
}
export {lunbo2}