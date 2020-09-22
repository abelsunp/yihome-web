<template>
	<section>
		
		<div style="height: 800px;padding: 20px;">
			<!-- <slide-img style="height: 100%;"></slide-img> -->
			<new-swiper></new-swiper>
		</div>
		<div id="step"></div>
		<div :class="status?'fixed':''">
			<div style="width: 720px;">
				<el-steps :active="active">
				  <el-step title="房源概括" @click.native="jump(1)"></el-step>
				  <el-step title="房间管理" @click.native="jump(2)"></el-step>
				  <el-step title="配套设置" @click.native="jump(3)"></el-step>
				  <el-step title="周边交通" @click.native="jump(4)"></el-step>
				  <el-step title="住房租房须知" @click.native="jump(5)"></el-step>
				  <el-step title="周边房源" @click.native="jump(6)"></el-step>
				</el-steps>
				
			</div>
		</div>
		<div style="height: 500px;">
			<h1>房源概括</h1>
		</div>
		<div style="height: 500px;">
			<h1>房间管理</h1>
		</div>
		<div style="height: 500px;">
			<h1>配套设置</h1>
		</div>
		<div style="height: 500px;"  id="fangzi">
			<h1>周边交通</h1>
		</div>
		<div style="height: 500px;" id="Float">
			<h1>住房租房须知</h1>
		</div>
		<div style="height: 500px;">
			<h1>周边房源</h1>
		</div>
	</section>
</template>

<script>
	import $ from 'jquery';
	import newSwiper from '@/components/newswiper/newSwiper.vue'
	export default{
		components:{
			newSwiper
		},
		data() {
			return {
				active: 1,
				status:false,
			};
		},
		mounted(){
			this.$nextTick(() => {
			    window.addEventListener('scroll', this.handleScroll, true);
			})
			console.log(this.yihomeGlobalVariable,8686867686587685768)
		},
		methods:{
			jump(val){
				this.active = val;
				//$("html,body").animate({ scrollTop: '-100px' }, 1000); //滚动条移动100px
				/* console.log('当前元素距离顶部的距离',$("#fangzi").offset().top)
				console.log('滚动条距离顶部的距离',$(document).scrollTop())
				
				
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				var offsetTop = document.querySelector('#fangzi').offsetTop
				
				console.log(scrollTop,offsetTop) */
				
				
				var total = document.querySelector('#fangzi').offsetTop;
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				//scrollTop = total;
				
				console.log(total,scrollTop)
				
				if(total>scrollTop){
					$("html,body").animate({ scrollTop: total }, 300); //滚动条移动100px
				}else{
					$("html,body").animate({ scrollTop: -(scrollTop-total) }, 300);
				}
				
				
				
				
				
				
				/* if($("#fangzi").offset().top > $(document).scrollTop()){
					$("html,body").animate({ scrollTop: $("#fangzi").offset().top-$(document).scrollTop() }, 1000);
				} */
				
				
				
				
				//$("html,body").animate({ scrollTop: $("#fangzi").offset().top-$(document).scrollTop() }, 1000);
				
			},
			handleScroll(){
				var sss = $("#step").offset().top - $(document).scrollTop();
				//console.log(sss)
				if(sss<=10){
					this.status = true;
				}else{
					this.status = false;
				}
			},
		},
		watch:{
			$route: 'handleScroll',
		}
	}
</script>

<style scoped="scoped">
	.fixed{
		position: fixed;
		top: 0;
	}
</style>
