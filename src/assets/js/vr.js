function vr(){
	var aUl1 = $('.lunbo_img').eq(0);
	var oDiv1 = aUl1.children();//obj1
	var oLi1 = oDiv1.children();//obj2
	var oOl1 = $('.Btn').eq(0);
	var aLi1 = oOl1.children();//obj3
	var pre1 = $('.pre').eq(0);//obj4
	var nex1 = $('.next').eq(0);//obj5
	var aUl2 = $('.lunbo_img').eq(1);
	var oDiv2 = aUl2.children();//obj1
	var oLi2 = oDiv2.children();//obj2
	var oOl2 = $('.Btn').eq(1);
	var aLi2 = oOl2.children();//obj3
	var pre2 = $('.pre').eq(1);//obj4
	var nex2 = $('.next').eq(1);//obj5
	var aUl3 = $('.lunbo_img').eq(2);
	var oDiv3 = aUl3.children();//obj1
	var oLi3 = oDiv3.children();//obj2
	var oOl3 = $('.lastBtn');
	var aLi3 = oOl3.children();//obj3
	var pre3 = $('.pre').eq(2);//obj4
	var nex3 = $('.next').eq(2);//obj5
	function lunbo(obj1,obj2,obj3,obj4,obj5){
		obj1.css('width',obj2.length * 14.915 + 'rem');
		for(var i = 0; i < obj2.length;i++){
			obj2.eq(i).css('left',i * 14.915 +'rem');
		}
		var iNow = 0;
		function move(){
			//清除所有的样式
			obj3.removeClass('active');
			obj3.eq(iNow).addClass('active');
			obj1.stop().animate({'left':-(iNow+1) * 14.915 + 'rem'});
		}
		obj3.on('click',function(){
			iNow = $(this).index();
			console.log(iNow);
			move();
		})
		//上一个
		obj4.on('click',function(){
			iNow--;
			if(iNow < 0){
				obj1.stop().animate({'left':(iNow+1) * 14.915 + 'rem'},function(){
					obj1.css('left', -(obj2.length - 2) * 14.915 + 'rem');
				});
				iNow = obj3.length - 1;
				obj3.removeClass('active');
				obj3.eq(iNow).addClass('active');
			}else{
				move();
			}
		})
		//下一个
		obj5.on('click',function(){
			iNow++;
			if(iNow == obj2.length - 2){
				obj1.stop().animate({'left':-(iNow+1) * 14.915 + 'rem'},function(){
					obj1.css('left', -14.915 + 'rem');
				});
				iNow = 0;
				obj3.removeClass('active');
				obj3.eq(iNow).addClass('active');
			}else{
				move();
			}
		})
	}
	lunbo(oDiv1,oLi1,aLi1,pre1,nex1);
	lunbo(oDiv2,oLi2,aLi2,pre2,nex2);
	lunbo(oDiv3,oLi3,aLi3,pre3,nex3);

}
export {vr}