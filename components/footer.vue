<template>
	<b-container id="footer">
		<div style="display: flex">
			<div style="flex: 8">
				<div class="footer-left-item">
<!--					客服电话：17602106152 <span style="margin-left: 140px">企业邮箱：service@inyihome.com</span>-->
					企业邮箱：service@inyihome.com
				</div>
				<div class="footer-left-item">企业地址：上海市 宝山区 呼兰西路19号 上海智力产业园北区2号楼201室</div>
				<div class="footer-left-item">热门城市</div>
				<div class="footer-left-city">
					<div class="footer-left-city-item" v-for="(item,index) in hotecityList" :key="index">
						<a :href="commonGlobalPath+'/findhouse?countryId='+item.countryId+'&cityId='+item.id+''">{{item.name}}</a>
					</div>
				</div>
			</div>
			<div style="flex: 4">
				<div style="display: flex">
					<div md="6" style="text-align: center;flex: 6">
						<img src="@/assets/images/footer/subscription.svg" alt="">
						<p class="info">微信扫一扫，添加专业老师</p>
					</div>
					<div md="6" style="text-align: center;flex: 6">
						<img src="@/assets/images/footer/smallProgram.svg" alt="">
						<p class="info">微信扫一扫，添加公众号</p>
					</div>
				</div>
			</div>
		</div>
		<p>Copyright 上海颖鸿网络科技有限公司 All Right Reserved 沪ICP备18002555号-1</p>
	</b-container>
</template>

<script>

	export default {
		name: 'footer',
		data(){
			return {
				hotecityList: [],
			}
		},
		created() {
			this.findhotecity()
		},
		methods: {
			// 热门城市
			findhotecity(){
				this.$request.homeHotcity().then(res=>{
					if(res.code === 200){
						this.hotecityList = res.data;
					}else{
						this.$message.error(res.msg);
					}
				}).catch(e=>{
					this.$message.error('网络错误');
				})
			},
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.info{
		font-family: PingFangSC-Regular;
		font-size: 10px;
		color: #666666;
		margin-top: 10px;
	}
	#footer{
		padding-top: 30px;
		/*min-width: 960px !important;*/
	}
	.footer-left-item{
		line-height: 44px;
		font-size: 14px;
	}
	.footer-left-city{
		width: 100%;
		/*display: flex;*/
		/*flex-direction: column-reverse;*/
	}
	.footer-left-city-item{
		width: calc(100% / 7);
		display: inline-block;
		line-height: 30px;
		/*font-weight: 500;*/
		a{
			color: #666666;
			&:hover{
				color: #666666;
			}
		}
	}
	dl dt{
		font-family: PingFangSC-Medium;
		font-size: 15px;
		color: #333333;
		letter-spacing: 1.09px;
		line-height: 21px;
		margin-bottom: 15px;
	}
	dl dd{
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #666666;
		letter-spacing: 0.87px;
		line-height: 17px;
		margin-bottom: 15px;
	}
	dl dd a{
		color: #666666;
	}
	p{
		font-family: PingFangSC-Regular;
		font-size: 10px;
		color: #666666;
		margin-bottom: 28px;
		margin-top: 10px;
		text-align: center;
	}
</style>
