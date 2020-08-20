<template>
	<b-container fluid>
		<b-container class="details">
			<h1 class="title">{{content.title}}</h1>
			<p class="time">{{content.updatedate}}</p>
			<div class="content" v-html="content.context"></div>
			<div class="details-footer">
				<div class="details-footer-item">收藏 | 33</div>
				<div class="details-footer-item">已收藏 | 100</div>
			</div>
		</b-container>
	</b-container>
</template>

<script>
	
	export default{
		data(){
			return {
				content:{}
			}
		},
		async asyncData({query,app,params,route}){
			return app.$request.getStorydetails({'id': query.id}).then(res=>{
				return {
					content: res
				}
			}) 
		},
		created(){
			
			
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.container-fluid{
		border-bottom: 1px solid #E6E6E6;
		padding-bottom: 30px;
	}
	.details{
		.title{
			padding-top: 50px;
			margin-bottom: 20px;
			font-family: PingFangSC-Bold;
			font-size: 32px;
			color: #333333;
			letter-spacing: 0.2px;
			line-height: 45px;
		}
		.time{
			font-family: PingFangSC-Regular;
			font-size: 14px;
			color: #666666;
			letter-spacing: 0.1px;
			line-height: 25px;
			margin-bottom: 30px;
		}
		.content{
			text-align: center;
		}
		&-footer{
			&-item{
				line-height: 35px;
				display: inline-block;
				padding: 0 20px;
				border: 1px solid rgb(158,158,158);
				border-radius: 18px;
				margin-right: 15px;
				transition: all .3s linear;
				cursor: pointer;
				&:hover{
					border-color: rgb(66,68,160);
					color: rgb(66,68,160);
				}
			}
		}
	}
</style>
