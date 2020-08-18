<template>
	<section id="inhome-swiper">
		<!-- Swiper -->
		<div class="swiper-container gallery-top" >
			
			<div @click="viewVideo()" v-if="imgVideo" style="position: absolute;bottom: 10px;right: 10px;z-index: 9999;width: 86px;height: 32px;background: #FFFFFF;border-radius: 3px;line-height: 32px;text-align: center;">
				<p style="font-size: 14px;color: #333333;letter-spacing: 0.99px;">视频看房</p>
			</div>
			
			<div class="swiper-wrapper">
				<div class="swiper-slide"  v-for="(item,$index) in imgWrapper" :key="$index" >
					<img id="test" :src="yihomeGlobalVariable+item.imgurl| imgStrClac('x')" alt="">
					<!-- :style="{'background-image':'url('+yihomeGlobalVariable+item.imgurl+')'}" -->
				</div>
			</div>
			<!-- Add Arrows -->
			<div class="swiper-button-next swiper-button-white"></div>
			<div class="swiper-button-prev swiper-button-white"></div>
		</div>
		<div class="swiper-container gallery-thumbs">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,$index) in imgWrapper" :key="$index">
					<img :src="yihomeGlobalVariable+item.imgurl| imgStrClac('m')" alt="">
				</div>
			</div>
			
		</div>
		
		
		<Modal v-model="videoStatus" fullscreen title="">
			<video id="myVideo" width="100%" height="100%" controls v-if="videoStatus">
				<source :src='yihomeGlobalVariable+videoUrl' type="video/mp4">
				<source src="movie.ogg"  type="video/ogg">您的浏览器不支持 HTML5 video 标签。
			</video>
			<div slot="footer" style="text-align: center;">
				<Button @click="videoStatus = false" type="primary" style="background-color: #3B44AC;border-color: #3B44AC;">关闭</Button>
			</div>
		</Modal>
	</section>
</template>

<script>
	import Swiper from "swiper"
	export default{
		props: {
		  	imgWrapper: Array,
			imgVideo:Array,
		},
		data(){
			return {
				videoStatus:false,
				videoUrl:''
			}
		},
		filters:{
			imgStrClac:function(str,num){
				let res = str.replace(/(.*)\./,'$1'+num+'.');   //$1 + 替换后的字符
				return res;
			}
		},
		created() {
			
		},
		mounted() {
			setTimeout(function(){
				var galleryThumbs = new Swiper('.gallery-thumbs', {
					spaceBetween: 10,
					slidesPerView: 6,
					freeMode: true,
					watchSlidesVisibility: true,
					watchSlidesProgress: true,
					slideToClickedSlide: true,
					
				});
				var galleryTop = new Swiper('.gallery-top', {
					spaceBetween: 10,
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					thumbs: {
						swiper: galleryThumbs
					},
					loop:true,
				});
			},500)
		},
		watch: {
		    imgWrapper: {
		        handler () {
		          console.log(this.imgWrapper,765)
		        },
		        // 监听到数据变化时立即调用
		        immediate: true
		    },
			imgVideo: {
			    handler () {
			      console.log(this.imgVideo,9898)
				  
				  
			    },
			    // 监听到数据变化时立即调用
			    immediate: true
			},
		},
		methods:{
			viewVideo(){
				this.videoStatus = true;
				console.log(this.imgVideo[0].videourl)
				this.videoUrl = this.imgVideo[0].videourl
				
			}
		}
	}
</script>

<style>
	@import 'swiper/css/swiper.css';
	#myVideo{
		outline: none;
	}
	#inhome-swiper .swiper-container {
		width: 100%;
		height: 300px;
		margin-left: auto;
		margin-right: auto;
		cursor: pointer;
	}
	#inhome-swiper .swiper-slide {
		background-size: cover;
		background-position: center;
	}
	#inhome-swiper .gallery-top {
		height: 546px;
		width: 100%;
	}
	#inhome-swiper .gallery-top img{
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	#inhome-swiper .gallery-thumbs {
		height: 104px;
		box-sizing: border-box;
		padding: 10px 0;
	}
	#inhome-swiper .gallery-thumbs img{
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	#inhome-swiper .gallery-thumbs .swiper-slide {
		
		height: 100%;
		opacity: 0.4;
		cursor: pointer;
	}
	 #inhome-swiper .gallery-thumbs .swiper-slide-thumb-active {
		opacity: 1;
	}
	.viewFullimgWrapper .ivu-modal-fullscreen .ivu-modal-content{
		background-color: #000;
		opacity: 0.99;
	}
	#inhome-swiper .swiper-button-prev{
		left: -1000px;
		transition: all .5s;
	}
	#inhome-swiper .swiper-button-next{
		right: -1000px;
		transition: all .5s;
	}
	#inhome-swiper .swiper-container:hover .swiper-button-prev{
		left: 10px;
		transition: all .5s;
	}
	#inhome-swiper .swiper-container:hover .swiper-button-next{
		right: 10px;
		transition: all .5s;
	}
</style>
