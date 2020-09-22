<template>
	<section id="profile">
		<b-container class="profile-cont">
			<el-container>
				<el-container>
					<el-aside width="205px">
						<el-menu router :default-active="$route.path" class="profileMenu">
							<el-menu-item index="/profile">
							    <i class="el-icon-menu"></i>
							    <span slot="title">我的信息</span>
							</el-menu-item>
							<el-menu-item index="/profile/order">
						        <i class="el-icon-tickets"></i>
						        <span slot="title">我的订单</span>
							</el-menu-item>
							<el-menu-item index="/profile/activity">
						        <i class="el-icon-document"></i>
						        <span slot="title">优惠活动</span>
							</el-menu-item>
							<el-menu-item index="/profile/collect">
						        <i class="el-icon-present"></i>
						        <span slot="title">我的收藏</span>
							</el-menu-item>
							<el-menu-item index="/profile/setting">
							    <i class="el-icon-setting"></i>
							    <span slot="title">个人设置</span>
							</el-menu-item>
						</el-menu>
					</el-aside>
					<el-main class="profile-wrapper">
						<nuxt-child/>
					</el-main>
				</el-container>
			</el-container>
		</b-container>
	</section>
</template>

<script>
	
	export default{
		data(){
			return{
				
			}
		},
		created() {
			// this.checklogin()
		},
		methods:{
			checklogin(){
				if(process.browser){
					let userid = localStorage.getItem('userid');
					let license = localStorage.getItem('checklicense');
					this.$request.checklogin({loginid:userid,license:license}).then(res=>{
						if(res.status){
							
						}else{
							this.$message.error(res.msg);
							this.$router.push({path:'/'})
						}
					}).catch(e=>{
						this.$message.error('网络错误');
						this.$router.push({path:'/'})
					})
				}
				
			}
		}
	}
</script>

<style scoped="scoped">
	#profile{
		background: #FBFBFB;
		padding:40px 0;
		border-bottom: 1px solid #E6E6E6;

	}
	.profile-cont{
		min-width: 900px !important;
	}
	.profileMenu {
		min-height: 732px;
		border-right: 0;
	}
	.profile-wrapper{
		margin-left: 25px;
		min-height: 732px;
		background-color: #fff;
		padding: 30px;
	}
	.profileMenu .el-menu-item{
		font-family: PingFangSC-Regular;
		font-size: 15px;
		color: #333333;
		letter-spacing: 0.75px;
		padding-left: 0!important;
	}
	.profileMenu .el-menu-item i{
		margin-left: 20px;
	}
	.profileMenu .el-menu-item.is-active{ 
		color: #3B44AC;
		background-color: #E6E8FF;
	}
	.profileMenu .el-menu-item.is-active i{
		color: #3B44AC;
	}
	.profileMenu .el-menu-item.is-active:before{
		content: "";
		display: inline-block;
		position: absolute;
		background-image: url(~assets/images/profile/yihomeline.png);
		width: 2px;
		height: 100%;
	}
</style>
