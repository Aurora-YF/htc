window.onload=window.onresize=function(){
	document.documentElement.style.fontSize = document.documentElement.clientWidth * 20 / 320 + 'px';
	var v=new Vue({
		el:'#box',
		data:{
			msg:'',
			arr:[]
		}
	})
	v.$watch('msg',function(){
		this.$http({
			url:'http://songsearch.kugou.com/song_search_v2',
			method:'JSONP',
			params:{
				keyword:this.msg
			},
			jsonp:'callback'
			}).then(function(res){
				var json=res.data.data.lists;
				this.arr=[];
				for (var i = 0; i < json.length; i++) {
					console.log(json[i].FileName)
					this.arr.push({id:json[i].Audioid,hash:json[i].FileHash,name:json[i].FileName})
				};
				if (this.msg=='') {
					this.arr=[]
				};
				// console.log(this.arr1)
			},function(){})		
	})	
}