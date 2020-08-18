<template>
	<section id="inhome-swiper2">
		<!-- Swiper -->
		<div class="swiper-container gallery-top2" >
			<div class="swiper-wrapper">
				<div class="swiper-slide" id="test" v-for="(item,$index) in imgWrapper" :key="$index" :style="{'background-image':'url('+yihomeGlobalVariable+item.imgurl+')'}">
					
				</div>
			</div>
			<!-- Add Arrows -->
			<div class="swiper-button-next swiper-button-white"></div>
			<div class="swiper-button-prev swiper-button-white"></div>
		</div>
		<div class="swiper-container gallery-thumbs2">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,$index) in imgWrapper" :key="$index" :style="{'background-image':'url('+yihomeGlobalVariable+item.imgurl+')'}">
					
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import Swiper from "swiper"
	export default{
		props: {
		  	imgWrapper: Array,
		},
		data(){
			return {
				
			}
		},
		
		created() {
			
		},
		mounted() {
			
		},
		watch: {
		    imgWrapper: {
		        handler () {
					console.log(this.imgWrapper,765)
		        },
		        // 监听到数据变化时立即调用
		        immediate: true
		     }
		},
		methods:{
			
		}
	}
</script>

<style>
	@import 'swiper/css/swiper.css';
	#inhome-swiper2 .swiper-container {
		width: 100%;
		height: 300px;
		margin-left: auto;
		margin-right: auto;
		cursor: pointer;
	}
	#inhome-swiper2 .swiper-slide {
		background-size: cover;
		background-position: center;
	}
	#inhome-swiper2 .gallery-top2 {
		height: 546px;
		width: 100%;
	}
	#inhome-swiper2 .gallery-thumbs2 {
		height: 104px;
		box-sizing: border-box;
		padding: 10px 0;
	}
	#inhome-swiper2 .gallery-thumbs2 .swiper-slide {
		
		height: 100%;
		opacity: 0.4;
		cursor: pointer;
	}
	#inhome-swiper2 .gallery-thumbs2 .swiper-slide-thumb-active {
		opacity: 1;
	}
	.viewFullimgWrapper .ivu-modal-fullscreen .ivu-modal-content{
		background-color: #000;
		-opacity: 0.8;
	}
</style>
