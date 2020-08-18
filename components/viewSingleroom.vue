<template>
	<section>
		
		<div class="swiper-container viewData-class" >
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(banner,$index) in viewData" :key="$index">
					<img :src="yihomeGlobalVariable+banner.imgurl">
				</div>
			</div>
			<!-- Add Arrows -->
			<div class="swiper-button-next"></div>
			<div class="swiper-button-prev"></div>
		</div>
		
		
		
		<!-- <div v-swiper:mySwiper3="swiperOption">
		    <div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(banner,$index) in viewData" :key="$index">
					<img :src="'https://www.inyihome.com'+banner.imgurl">
				</div>
		    </div>
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
		</div> -->
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
			new Swiper('.viewData-class', {
				spaceBetween: 10,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				loop:true,
			});
		},
		created(){
			console.log(this.viewData,1111111111)
		},
		watch: {
		    viewData: {
		        handler () {
		          console.log(this.viewData)
		        },
		        // 监听到数据变化时立即调用
		        immediate: true
		     }
		},
	}
</script>

<style scoped="scoped">
	
</style>
