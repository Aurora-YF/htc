function index(){
	var oBox = $('#lunbo');
	var oUl = $('.lunbo-bg');
	var oLi = $('.lunbo-bg li');
	var oBtn = $('.lunbo-btn li');
	var pre = $('#pre');
	var next = $('#next');
	var iNow = 0;
	oUl.css('width',oLi.length * 17.7 + 'rem');
	// 封装函数
	function move(){
		oBtn.removeClass('active');
		oBtn.eq(iNow).addClass('active');		
		// 当点击图片会跟着移动
		oUl.stop().animate({'left': -(iNow + 1) * 17.7 + 'rem'});
	}
	// 封装下一页函数
	function Next(){
		iNow++;
		if(iNow == 5){
			// 点击ul移动
			oUl.stop().animate({'left': -(iNow + 1) * 17.7 + 'rem'},function(){
				oUl.css('left', -17.7 + 'rem');})
			iNow = 0;
			// 清空样式给单个添加样式
			oBtn.removeClass('active');
			oBtn.eq(iNow).addClass('active');
		}else{
			move();
		}
	}
	$.each(oBtn,function(index,value){
		oBtn.click(function(){
			iNow = $(this).index();
			// 清空所有的样式
			move();
		})	
	})
	// 上一页
	pre.click(function(){
		iNow--;
		if(iNow < 0){
			// 当小于0的时候让ul其到最后一张图片
			oUl.stop().animate({'left': -(iNow + 1) * 17.7 + 'rem'},function(){
				oUl.css('left', -5 * 17.7 + 'rem');
			});
			iNow = oBtn.length - 1;
			oBtn.removeClass('active');
			oBtn.eq(iNow).addClass('active');
		}else{
			move();
		}
	})
	next.click(function(){
		Next();
	})
	// 开启定时器
	var tid = setInterval(Next,2000);
	// 当移入盒子的时候停止定时器
	oBox.mouseenter(function(){
		// 停止定时器
		clearInterval(tid);
	})
	// 当移出盒子的时候开启定时器
	oBox.mouseleave(function(){
		tid = setInterval(Next,2000);
	})
}
export {index}
