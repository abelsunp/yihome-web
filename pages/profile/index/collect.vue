<template>
	<section v-loading="dataLoad">
		<ul class="collectWrapper">
			<li v-for="(item,$index) in favoriteList" :key="$index" v-if="favoriteList.length!=0">
				<div class="left">
					<div class="img"><img class="april-img" :src="yihomeGlobalVariable+item.houseUrl" alt=""></div>
					<div class="content">
						<h3 class="april-toe">{{item.housename || '   '}}</h3>
						<div class="price">{{item.countryId | fliterSymble}}{{item.minPrice}}/周</div>
						<p class="school april-toe"><i class="iconfont" v-if="item.schoolName">&#xe62c;</i>{{item.schoolName}}</p>
						<div class="time">收藏时间：{{item.updateTime}}</div>
					</div>
				</div>
				<div class="buttonWrapper">
					<div class="collectBtn"><el-button type="primary"><a style="color: #fff;" target="_blank" :href="commonGlobalPath+'/housedetail?houseid='+item.id">查看详情</a></el-button></div>
				</div>
			</li>
			
			<h2  v-if="favoriteList.length==0">暂无收藏</h2>
		</ul>
	</section>
</template>
<script>
	export default{
		data(){
			return{
				favoriteList:[],
				dataLoad:false,
			}
		},
		created() {
			this.getUserFavorite();
		},
		methods:{
			getUserFavorite(){
				this.dataLoad = true;
				if(process.browser){
					this.$request.getCollectList().then(res=>{
						this.favoriteList = res.data;
						this.dataLoad = false;
					}).catch(e=>{
						this.dataLoad = false;
						this.$message.error('网络错误');
					})
				}
			},
			delectCollect(id){
				
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.collectWrapper li{
		list-style: none;
		display: flex;
		padding: 20px 0;
		border-bottom: 1px solid #F0F0F0;;
		justify-content: space-between;
	}
	.collectWrapper li:first-child{
		padding-top: 0;
	}
	.collectWrapper li .left{
		display: flex;
	}
	.collectWrapper li .left .img{
		width: 120px;
		height: 110px;
		overflow: hidden;
	}
	.collectWrapper li .left .img img{
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
	.collectWrapper li .left .content{
		margin-left: 11px;
	}
	.collectWrapper li .left .content h3{
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #333333;
		letter-spacing: 1.13px;
		height: 22px;
		line-height: 22px;
	}
	.collectWrapper li .left .content .info{
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #333333;
		letter-spacing: 0.99px;
		line-height: 20px;
		margin: 4px 0;
	}
	.collectWrapper li .left .content .price{
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #3B44AC;
		letter-spacing: 1.13px;
		line-height: 22px;
		margin-bottom: 2px;
	}
	.collectWrapper{

		.school{
			font-family: PingFangSC-Regular;
			font-size: 12px;
			color: #666666;
			letter-spacing: 0.76px;
			line-height: 34px;
			height: 12px;
			margin-top: 1px;
			i{
				margin-right: 4px;
				font-size: 16px;
				position: relative;
				top: 1px;
			}
		}
		.time{
			font-family: PingFangSC-Regular;
			font-size: 12px;
			color: #666666;
			letter-spacing: 0.76px;
			line-height: 17px;
		}
	}
	.collectWrapper li .left .content .time{

	}
	.collectWrapper li .left .content .time span{
		display: inline-block;
		background: rgba(0,0,0,.03);
		padding: 6px 10px;
		font-size: 12px;
		margin-right: 5px;
		margin-bottom: 5px;
		border-radius: 4px;
		white-space: nowrap;
	}
	.collectWrapper li .buttonWrapper{
		display: flex;
		-flex-direction:column;
		align-items: flex-end;
	}
	.collectBtn button{
		background: #3B44AC;
		border-color: #3B44AC;
	}
	.collectBtn button:focus{
		outline-color: #3B44AC;
	}
</style>
