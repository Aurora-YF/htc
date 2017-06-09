function getPos(obj){
        var l=0;
        var t=0;
        while(obj){
            l+=obj.offsetLeft;
            t+=obj.offsetTop;
            obj=obj.offsetParent;
        }

        return {left:l,top:t}
    }
window.onload = window.onresize=function(){
		document.documentElement.style.fontSize=20*document.documentElement.clientWidth/320+'px';
    	var musicAudio = document.getElementById('musicAudio');    
    	var music_btn = document.getElementById('musicPlay');
    	var startTime=document.getElementById('starttime');
    	var endTime=document.getElementById('endtime');
    	var jindu=document.getElementById('jindu');
    	var jindutiao=document.getElementById('jindutiao');
    	var laba=document.getElementById('laba');
    	var voldx=document.getElementById('voldx');
    	var voltiao=document.getElementById('voltiao');
    	var zhuanjtu=document.getElementById('zhuanjitu');
		musicAudio.volume=0.5; 
		function time(a){
			function mss(){
				if (Math.ceil(a%60)<10) {
					return '0'+Math.ceil(a%60);
				}else{
					return Math.ceil(a%60);
				}
			}
        return '0'+Math.floor(a/60)+':'+mss();
		}
	    //获取歌曲总时间    
		endTime.innerHTML=time(musicAudio.duration);
		//获取歌曲当前播放时间
		function currentTime(){
			function mss1(){
					if (Math.floor(musicAudio.currentTime%60)<10) {
					return '0'+Math.floor(musicAudio.currentTime%60);
				}else{
					return Math.floor(musicAudio.currentTime%60);
				}
			}
			return '0'+Math.floor(musicAudio.currentTime/60)+':'+mss1();
		}


		music_btn.onclick=function() { 
		   	if (musicAudio.paused){    
		        musicAudio.play(); 
		        // zhuanjitu.style.transition='60s'+' '+'all'+' '+'linear';
		        // zhuanjitu.style.transform = 'rotate(360deg)';
		        zhuanjitu.style.animation='60s'+' '+'zhuandong1'+' '+'linear'+' '+'infinite';
			    timer=setInterval(function(){
					startTime.innerHTML=currentTime();
					jindu.style.width=(musicAudio.currentTime/musicAudio.duration)*14.074+'rem';
					if(musicAudio.ended){
						clearInterval(timer);
						jindu.style.width=0;
					}
				},1000);     
			}else{    
			    	musicAudio.pause(); 
					zhuanjitu.style.animationPlayState="paused";
			        clearInterval(timer);     
		   		}    
		}; 
		jindutiao.onclick=function(evt){
			var disx=evt.clientX-getPos(jindutiao).left;
			var ds=950/1080*document.documentElement.clientWidth;
			var prob=disx/ds;
			jindu.style.width=prob*14.074+'rem';
			starttime.innerHTML=time(musicAudio.duration*prob);
			// console.log(time(music.duration*prob));
			musicAudio.currentTime=musicAudio.duration*prob;
		};
		jindu.onclick=function(evt){
			var disx=evt.clientX-getPos(jindutiao).left;
			var ds=950/1080*document.documentElement.clientWidth;
			var prob=disx/ds;
			jindu.style.width=prob*14.074+'rem';
			starttime.innerHTML=time(musicAudio.duration*prob);
			musicAudio.currentTime=musicAudio.duration*prob;
		};
		voltiao.onclick=function(evt){
			var disx=evt.clientX-getPos(voltiao).left;
			// console.log(document.documentElement.clientWidth);
			var ds=830/1080*document.documentElement.clientWidth;
			var prob=disx/ds;
			voldx.style.width=prob*12.296+'rem';
			var relVol=parseInt(100*prob)/100;
    		musicAudio.volume=relVol;
    		// console.log(prob,music.volume,relVol);
		};
		voldx.onclick=function(evt){
			var disx=evt.clientX-getPos(voltiao).left;
			var ds=830/1080*document.documentElement.clientWidth;
			var prob=disx/ds;
			voldx.style.width=prob*12.296+'rem';
			var relVol=parseInt(100*prob)/100;
    		musicAudio.volume=relVol;
    		// console.log(prob,music.volume,relVol);
		};
		laba.onclick=function(muteSwitch){
			var cVol=voldx.style.width;
			if (muteSwitch==="on") {
				voldx.attributes["data-volume"].nodeValue = musicAudio.volume;
				voldx.attributes["data-width"].nodeValue = cVol;
				musicAudio.volume=0.0;
				voldx.style.width=0;
			}
			if (muteSwitch==="off") {
				musicAudio.volume=voldx.attributes["data-volume"].nodeValue;
				voldx.style.width=cVol;
			}
		};
};