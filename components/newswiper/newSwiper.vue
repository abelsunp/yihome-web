<template>
	<section>
		<div v-swiper:mySwiper="swiperOption" class="swiper-top" ref="swiperTop">
		    <div class="swiper-wrapper">
		      <div class="swiper-slide" v-for="banner in carouselArr">
		        <img :src="banner.img">
		      </div>
		    </div>
		    <div class="swiper-pagination swiper-pagination-bullets"></div>
		</div>
		
		<div v-swiper:mySwiper2="swiperOption2" class="swiper-bottom" ref="swiperThumbs">
		    <div class="swiper-wrapper">
		      <div class="swiper-slide" v-for="banner in carouselArr">
		        <img :src="banner.img">
		      </div>
		    </div>
		    <div class="swiper-pagination swiper-pagination-bullets"></div>
		</div>
	</section>
</template>

<script>
	export default{
		data(){
			return{
				carouselArr:[
					{img:'https://www.inyihome.com/upload/1577067376480_2-1x.jpg'},
					{img:'https://www.inyihome.com/upload/1577067346208_1-1x.jpg'},
					{img:'https://www.inyihome.com/upload/1577067406491_3-1x.jpg'},
					{img:'https://www.inyihome.com/upload/1577067376480_2-1x.jpg'},
					{img:'https://www.inyihome.com/upload/1577067346208_1-1x.jpg'},
					{img:'https://www.inyihome.com/upload/1577067406491_3-1x.jpg'}
				],
				swiperOption:{
					//显示分页
					pagination: {
					  el: '.swiper-pagination'
					},
					//设置点击箭头
					navigation: {
					  nextEl: '.swiper-button-next', 
					  prevEl: '.swiper-button-prev'
					},
					//自动轮播
					// autoplay: {
					//   delay: 2000,
					//   //当用户滑动图片后继续自动轮播
					//   disableOnInteraction: false,
					// },
					//开启循环模式
					loop: true,
					// thumbs: {
					// 	swiper: this.swiperOption2
					// },
					spaceBetween: 10,
					loopedSlides:6,
				},
				swiperOption2:{
					//spaceBetween: 10,
					//slidesPerView: 6,
					freeMode: true,
					watchSlidesVisibility: true,
					watchSlidesProgress: true,
					//slideToClickedSlide: true,
					// autoplay: {
					//   delay: 2000,
					//   //当用户滑动图片后继续自动轮播
					//   disableOnInteraction: false,
					// },
					//loop: true
					
					spaceBetween: 10,
					slidesPerView: 4,
					touchRatio: 0.2,
					loop: true,
					loopedSlides: 6, //looped slides should be the same
					slideToClickedSlide: true,
					
					
				}
			}
		},
		created() {
			
		},
		mounted() {
			this.$nextTick(()=>{
				const swiperTop = this.$refs.swiperTop.swiper
				const swiperThumbs = this.$refs.swiperThumbs.swiper
				swiperTop.controller.control = swiperThumbs
				swiperThumbs.controller.control = swiperTop
			})
		},
		methods:{
			
		}
	}
</script>

<style scoped="scoped">
	section{
		width: 727px;
		overflow: hidden;
	}
	.swiper-top{
		height: 546px;
	}
	.swiper-bottom{
		height: 104px;
		padding: 10px 0;
	}
	.swiper-slide {
	  text-align: center;
	  font-size: 38px;
	  font-weight: 700;
	  background-color: #eee;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	}
	.swiper-pagination .swiper-pagination-bullet {
	    background-color: red;
	}
	img{
		width: 100%;
		height: 100%;
	}
	
</style>
