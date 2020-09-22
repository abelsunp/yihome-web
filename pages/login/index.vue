<template>
	<!--	<b-container fluid>-->
	<b-container>
		<b-row class="main_content">
			<b-col class="wrapper_left" md="3">
				<!--					<img class="img-fluid" src="~assets/images/loginRegister/loginbg_left.png" alt="">-->
				<!--					<img class="img-fluid" src="~assets/images/loginRegister/bg.png" alt="">-->
			</b-col>
			<b-col class="wrapper_right" md="9">
				<div class="wrapper_right_cont">
					<h1 class="title">欢迎登录YIHOME忆家</h1>
					<p class="slogan">海外留学生活，有忆家</p>

					<phone-login v-if="currentMode=='phone'"></phone-login>
					<email-login v-if="currentMode=='email'"></email-login>
					<code-login v-if="currentMode=='code'"></code-login>

					<div class="loginType">
						<p class="noaccount">没有账号？<nuxt-link to="/register">立即注册</nuxt-link></p>
						<div class="sigma-middle-line clearfix">
							<span class="sigma-line-text">其他登录方式</span>
						</div>
						<b-row>
							<b-col v-if="currentMode!='code'">
								<img src="~assets/images/loginRegister/code.svg" alt="" @click="LoginMode('code')">
								<p>手机验证码登录</p>
							</b-col>
							<b-col v-if="currentMode!='phone'">
								<img src="~assets/images/loginRegister/phone.svg" alt="" @click="LoginMode('phone')">
								<p>手机号登录</p>
							</b-col>
<!--							<b-col v-if="currentMode!='email'">-->
<!--								<img src="~assets/images/loginRegister/email.svg" alt="" @click="LoginMode('email')">-->
<!--								<p>邮箱登录</p>-->
<!--							</b-col>-->
						</b-row>

					</div>
				</div>
			</b-col>
		</b-row>
	</b-container>
	<!--	</b-container>-->
</template>

<script>
	import phoneLogin from '@/components/login/phone.vue';
	import emailLogin from '@/components/login/email.vue';
	import codeLogin from '@/components/login/code.vue';
	export default{
		layout:'loginRegister',
		components:{
			phoneLogin,emailLogin,codeLogin
		},
		data(){
			return {
				currentMode:'phone'
			}
		},
		methods:{
			LoginMode(val){
				this.currentMode = val;
			}
		}
	}
</script>

<style scoped="scoped">
	.container-fluid{
		min-height: 100%;
		padding: 0;
		background-image: url(~assets/images/loginRegister/loginbg.png);
		background-repeat: no-repeat;
		-background-size: 100% 100%;
		background-position: center;
		height: 100%;
	}
	.container{
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		max-width: 100% !important;
		padding: 0;
	}
	.container .main_content{
		height: 100%;
		width: 100%;
		background: #FFFFFF;
		box-shadow: 0 0 50px 0 rgba(59,68,172,0.20);
	}
	.wrapper_left{
		/* padding-top: 80px;
		padding-bottom: 60px; */
		position: relative;
		overflow: hidden;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		background-image: url(~assets/images/loginRegister/bg.png);
		transition: all .5s;
	}
	.wrapper_left img{
		width: 80%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	.main_content{

	}
	.title{
		font-family: PingFangSC-Bold;
		font-size: 30px;
		color: #000000;
		letter-spacing: 2px;
		line-height: 40px;
		margin-bottom: 16px;
		width: 100%;
	}
	.slogan{
		font-family: PingFangSC-Regular;
		font-size: 20px;
		color: #333333;
		letter-spacing: 1.25px;
		line-height: 36px;
		margin-bottom: 30px;
		text-align: left;
		width: 100%;
	}
	.wrapper_right{
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		padding-top: 30px;
		padding-bottom: 30px;
	}
	.wrapper_right_cont{

	}
	.loginType{
		text-align: center;
		max-width: 450px;
		width: 390px;
	}
	.noaccount{
		margin-bottom: 20px;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #333333;
		letter-spacing: 0.7px;
		line-height: 20px;
	}
	.noaccount a{
		color: #3B44AC;
	}
	.loginType .sigma-middle-line{
		content: '';
		display: block;
		height: 1px;
		width: 100%;
		background-color: #D3D3D3;/*颜色需与主题大背景色一致*/
		position: relative;
		top: 10px;/*调节线高*/
		left: 0;
		margin-bottom: 30px;
	}
	.loginType .sigma-line-text{
		display: inline-block;
		background: #fff;
		padding: 0 18px 0 18px;
		position: relative;
		font-size: 14px;
		font-weight: 500;
		top: -11px;
	}
	.loginType .row img{
		margin-bottom: 13px;
		cursor: pointer;
	}
	.loginType .row .p{
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #333333;
		letter-spacing: 0.7px;
		text-align: center;
	}
	/*@media (max-width: 1200px){*/
	/*	.container{*/
	/*		max-width: 1000px;*/
	/*	}*/
	/*}*/
	/*@media (max-width: 768px){*/
	/*	.container{*/
	/*		max-width: 870px;*/
	/*	}*/
	/*	.wrapper_left{*/
	/*		transition: all 0.5s;*/
	/*		display: none;*/
	/*	}*/
	/*	.wrapper_right{*/
	/*		justify-content: center;*/
	/*		align-items: center;*/
	/*	}*/
	/*	.title,.slogan{*/
	/*		transition: all .5s;*/
	/*		width: auto;*/
	/*	}*/
	/*}*/
	/*@media (max-width: 576px){*/

	/*	.container {*/
	/*		max-width: 540px;*/
	/*	}*/

	/*}*/
</style>

