<template>
	<section>
		<b-container fluid class="registerWrapper">
			<div class="side"></div>
			<div class="main-wraper">
				<div class="main-content">
					
					<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" label-position="top">
						<h1 class="title">登录忆家 YIHOME</h1>
						<p class="subtitle">海外留学生活，有忆家</p>
						<el-form-item  prop="email">
							<el-input v-model.trim="ruleForm.email" placeholder="请输入手机号" prefix-icon="el-icon-user" clearable></el-input>
						</el-form-item>
						<el-form-item  prop="code">
							<div style="width: 66%;display: inline-block;">
								<el-input v-model.trim="ruleForm.code" placeholder="请输入验证码" prefix-icon="el-icon-mobile-phone"></el-input>
							</div>
							<el-button v-if="!sendMsgDisabled" style="width: 148px;" @click.prevent="sendCode()">获取验证码</el-button>
							<el-button v-if="sendMsgDisabled" disabled style="width: 148px;">{{time+'s 后重新发送'}}</el-button>
						</el-form-item>
						<el-form-item>
							<el-button :loading="loadingStatus" class="registerBtn panpay_LoginBtn" type="primary">立即登录</el-button>
						</el-form-item>
						<el-form-item>
							<span>没有账号？<nuxt-link to="/register">去注册</nuxt-link></span>
							<span style="float: right;">忘记密码？<nuxt-link to="/reset">去找回</nuxt-link></span>
						</el-form-item>
						<el-form-item class="loginType">
							<div class="sigma-middle-line">
								<span class="sigma-line-text">其他登录方式</span>
							</div>
						</el-form-item>
						<el-form-item class="usePhoneLogin">
							<img src="~assets/images/loginRegister/email.svg" alt="" @click="phonelLoginMode">
							<p>账号密码登录</p>
						</el-form-item>
					</el-form>
				</div>
			</div>
		</b-container>
	</section>
</template>

<script>
	import $ from 'jquery';
	import axios from 'axios';
	var captchaObjs = {};
	export default{
		head: {script: [{src: '/gt.js',ssr: false}]},
		//layout: 'loginRegister',
		data() {
			var REGEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
			
			var validateEmail = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('手机号不能为空'));
				} else {
					callback();
				}
			};
			return {
				loadingStatus:false,
				time:90,
				sendMsgDisabled:false,
				ruleForm: {
					email: '',
					code:''
				},
				rules: {
					email: [
						{validator: validateEmail,trigger: 'blur'},
						{ min: 3, max: 50, message: '长度不少于3个字符,不能大于50个字符', trigger: 'blur' }
					],
					code: [
						{ required: true, message: '请输入验证码', trigger: 'blur' },
						{ min: 3, max: 10, message: '长度不少于3个字符,不能大于10个字符', trigger: 'blur' }
					]
				}
			};
		},
		mounted() {
			setTimeout(()=>{
				this.init();
			},500)
		},
		methods: {
			phonelLoginMode(){
				this.$emit("on-result-change",'toemail')
			},
			sendCode(){
				if(this.ruleForm.email==""){
					this.$refs.ruleForm.validateField('email');
					return;
				}else{
					var ParmasData={
						account:this.ruleForm.email,
						type:"login",
					}
					this.$request.sandcode(ParmasData).then(res=>{
						if(res.status){
							this.$message({
								message: '验证码发送成功',
								type: 'success',
							});
							
							this.sendMsgDisabled = true;
							let interval = window.setInterval(()=> {
								if ((this.time--) <= 0) {
									this.time = 90;
									this.sendMsgDisabled = false;
									window.clearInterval(interval);
								}
							}, 1000);
							
							
						}else{
							this.$message.error(res.msg);
						}
					}).catch(e=>{
						this.$message.error('网络错误，验证码发送失败');
					})
				}
			},
			init(){
				var that = this;
				axios.get('https://www.geetest.com/demo/gt/register-slide?t='+ (new Date()).getTime()).then(res=>{
					if(res.status==200){
						let data = res.data;
						initGeetest({							
							// 以下 4 个配置参数为必须，不能缺少	
							gt: data.gt,							
							challenge: data.challenge,							
							offline: !data.success, // 表示用户后台检测极验服务器是否宕机	
							new_captcha: data.new_captcha, // 用于宕机时表示是新验证码的宕机	
							timeout: '5000',							
							product: "bind", // 产品形式，包括：float，popup	
							width: "300px"	,// 更多前端配置参数说明请参见：http://docs.geetest.com/install/client/web-front/		
						}, function(captchaObj){
							captchaObj.onReady(function() {   
								$(".panpay_LoginBtn").click(function() {  
									that.$refs['ruleForm'].validate((valid) => {
										if(valid) {	
											that.loadingStatus = true;
											captchaObj.verify();	
										} else {		
											that.loadingStatus = false;
											return false;		
										}							
									});                     
								});
								
							}).onSuccess(function() {
								var result = captchaObj.getValidate();	  
								if(!result) {	 
									that.loadingStatus = false;
									console.log("出错啦，请先完成验证！")	                                
									that.$message.error("出错啦，请先完成验证！");	 
								} else {
									that.userLoginFun();
								}
							}).onError(function() {      
								that.loadingStatus = false;
								console("出错啦，请稍后重试！")             
								that.$message.error("出错啦，请用户刷新页面重试！"); 
								//监听验证出错事件，提供用户或者刷新页面重试      
							}).onClose(function() { 
								that.loadingStatus = false;
								//对于product为bind形式的验证。当用户关闭弹出来的验证时，会触发该回调。
							});
						})
					}else{
						this.$message.error('网络错误');
					}
				}).catch(e=>{
					this.$message.error("网络错误");
					this.$notify.error({
						title: '提示信息',
						message: '网络错误！请刷新当前网络或联系客服人员',
						duration: 0,			          	
						//showClose: false,
					});
				})
			},
			userLoginFun(){
				this.$request.loginin({'account':this.ruleForm.email,'code':this.ruleForm.code}).then(res=>{
					this.loadingStatus = false;
					if(res.status){
						
						localStorage.setItem('userid',res.data.id);
						localStorage.setItem('checklicense',res.data.license);
						let backurl = localStorage.getItem('backurl')
						
						if(backurl){
							location.href = location.origin+backurl;
						}else{
							this.$router.push({path:'/profile'});
						}
						
						
						return;
					}else{
						this.$message.error(res.msg);
					}
				}).catch(e=>{
					this.$message.error('网络错误');
					this.loadingStatus = false;
				})
			}
		}
		
	}
</script>

<style scoped="scoped">
	section{
		height: 100%;
	}
	.registerWrapper{
		height: 100%;
	}
	.registerWrapper .side{
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 480px;
		float: left;
		overflow: hidden;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		background-image: url(~assets/images/loginRegister/bg.png);
		transition: all .5s;
	}
	.main-wraper{
		position: relative;
		height: 100%;
		margin-left: 480px;
		transition: all .5s;
		
	}
	.main-content{
		/* max-width: 450px;
		margin: 0 auto; */
		position: absolute;
		padding-bottom: 10px;
		top: 50%;
		width: 100%;
		transform: translateY(-50%);
	}
	.main-content form{
		width: 450px;
		margin: 0 auto;
		transition: all .5s;
	}
	.main-content form .el-form-item{
		margin-bottom: 30px;
	}
	.title{
		font-family: PingFangSC-Bold;
		font-size: 40px;
		color: #000000;
		letter-spacing: 2px;
		line-height: 56px;
		margin-bottom: 16px;
	}
	.subtitle{
		font-family: PingFangSC-Regular;
		font-size: 25px;
		color: #333333;
		letter-spacing: 1.25px;
		line-height: 36px;
		margin-bottom: 58px;
	}
	.registerBtn{
		width: 100%;
		background-color: #3B44AC;
		border-color: #3B44AC;
		margin-top: 24px;
	}
	.registerBtn:focus{
		background-color: #3B44AC;
		border-color: #3B44AC;
	}
	.loginType{
		text-align: center;
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
	}
	.loginType .sigma-line-text{
		display: inline-block;
		background: #fff;
		padding: 0 18px 0 18px;
		position: relative;
		font-size: 14px;
		font-weight: 500;
		top: -18px;
	}
	.usePhoneLogin{
		text-align: center;
	}
	.usePhoneLogin img{
		cursor: pointer;
	}
	/* 当屏幕小于1000px */
	@media (max-width: 1000px){
		.registerWrapper .side{
			width: 240px;
		}
		.main-wraper{
			margin-left: 240px;
		}
	}
	@media (max-width: 798px){
		.registerWrapper .side{
			width: 0;
		}
		.main-wraper{
			margin: 0 -15px;
			overflow: hidden;
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
			background-image: url(~assets/images/loginRegister/bg.png);
		}
		.main-content form{
			width: 490px;
			padding: 20px;
			background: #fff;
			box-shadow: -10px 9px 10px 0 rgba(128,152,213,.07);
			border-radius: 4px;
		}
	}
	
</style>
