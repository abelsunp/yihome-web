<template>
	<b-container fluid>
		<div class="banner">
			<h1>通过忆家，链接世界。</h1>
			<img src="@/assets/images/about/contactBanner.png" alt="">
		</div>
		<b-container>
			<h1>联系YIHOME忆家</h1>
			<p><span>电话：</span><span>021-66610767</span></p>
			<p><span>邮箱：</span><span>service@inyihome.com</span></p>
			<p style="margin-bottom: 30px;"><span>地址：</span><span>上海市 宝山区 呼兰西路19号 上海智力产业园北区2号楼201室</span></p>
			<div id="yihomeMap">
				
			</div>
		</b-container>
		<div class="chooseHouse">
			<h3>免费留电专业顾问老师帮您快速找房</h3>
			<p @click="freeCall">免费留电</p>
		</div>
	</b-container>
</template>

<script>
  export default{
    data(){
      return {
        title:'YIHOME_联系我们',
      }
    },
    key (route) {
      console.log(route)
      return route.fullPath
    },
    head () {
      return {
        title: this.title,
        meta: [
          { hid: 'description', name: 'description', content: '联系YIHOME' }
        ]
      }
    },
	mounted() {
		this.initMap()
	},
    methods:{
		freeCall(){
				this.$parent.$parent.freeCallStatus = true;
		},
		initMap(){
			var center = new qq.maps.LatLng(31.340394,121.43607);
			var map = new qq.maps.Map(
			  document.getElementById("yihomeMap"),
				{
				  center: center,
				  zoom: 20
				}
			);
			var marker = new qq.maps.Marker({
				position: center,
				map: map
			});
		}
    },
    created(){
      
    },
    
  }
</script>

<style scoped="scoped">
	.container-fluid{
		padding: 0;
	}
	.banner{
		position: relative;
	}
	.banner img{
		width: 100%;
		height: auto;
	}
	.banner h1{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		font-family: NotoSansHans-Medium;
		font-size: 44px;
		color: #FFFFFF;
		letter-spacing: 3.52px;
		line-height: 66px;
	}
	.container{
		padding: 50px 0 60px;
	}
	.container h1{
		font-family: PingFangSC-Medium;
		font-size: 25px;
		color: #333333;
		letter-spacing: 2px;
		line-height: 36px;
		margin-bottom: 20px;
	}
	.container p{
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #333333;
		letter-spacing: 1.12px;
		line-height: 27px;
	}
	#yihomeMap{
		height: 327px;
	}
	.chooseHouse {
		height: 188px;
		background: #3B44AC;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items:center;
	}
	.chooseHouse h3{
		font-family: PingFangSC-Medium;
		font-size: 22px;
		color: #FFFFFF;
		letter-spacing: 1.9px;
		line-height: 30px;
		margin-bottom: 19px;
	}
	.chooseHouse p{
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #FFFFFF;
		letter-spacing: 1.21px;
		line-height: 20px;
		display: inline-block;
		background: #FB5058;
		border-radius: 17.5px;
		padding: 5px 15px;
		cursor: pointer;
	}
</style>
