<template>
	<section>
		
		<div class="swiper-container viewData-class"  ref="mySwipers">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(banner,$index) in imgUrl" :key="$index">
					<img :src="yihomeGlobalVariable+banner.imgurl">
				</div>
			</div>
			<!-- Add Arrows -->
			<div class="swiper-button-next"></div>
			<div class="swiper-button-prev"></div>
		</div>

<!--			<div v-swiper:mySwiper3="swiperOption">-->
<!--				<div class="swiper-wrapper">-->
<!--					<div class="swiper-slide" v-for="(banner,$index) in viewData" :key="$index">-->
<!--						<img :src="yihomeGlobalVariable+banner.imgurl">-->
<!--					</div>-->
<!--				</div>-->
<!--				<div class="swiper-button-prev"></div>-->
<!--				<div class="swiper-button-next"></div>-->
<!--			</div>-->

		<div class="swiper-container gallery-thumbs">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,$index) in imgUrl" :key="$index"  @click="toslide($index)">
					<img :src="yihomeGlobalVariable+item.imgurl| imgStrClac('m')" alt="">
				</div>
			</div>
		</div>
		
		
		

	</section>
</template>

<script>
	import Swiper from "swiper"
	export default{
		props: {
			viewData: Array,
		},
		
		data(){
			return {
				imgUrl: [],
				mySwiper: '',
				swiperOption: {
					loop:true,
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					
				},
			}
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
			this.mySwiper = new Swiper('.viewData-class', {
				spaceBetween: 10,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				loop:true,
			});
		},
		methods: {
			toslide (num) {
				this.mySwiper.slideTo(num, 1000, false)
			},
		},

		watch: {
		    viewData: {
				handler (value) {
					if(value.length == 0 || !value) this.imgUrl = [{imgurl: '/upload/2020/08/14/116ef552d4b0bc9a7cee80092952cb1c.jpg'}];
					else this.imgUrl = value
				},
		        // 监听到数据变化时立即调用
		        immediate: true
		     }
		},
	}
</script>

<style scoped="scoped">
	.gallery-thumbs {
		height: 104px;
		box-sizing: border-box;
		padding: 10px 0;
	}
	.gallery-thumbs img{
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.gallery-thumbs .swiper-slide {

		height: 100%;
		opacity: 0.4;
		cursor: pointer;
	}
	.gallery-thumbs .swiper-slide-thumb-active {
		opacity: 1;
	}
</style>
