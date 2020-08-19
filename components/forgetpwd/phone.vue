<template>
	<b-container class="registerWrapper">
		<b-row class="main_content">
			<b-col class="side" md="3"></b-col>
			<b-col class="main-wraper" md="9">
				<div class="main-content">
					<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" label-position="top">
						<h1 class="title">注册忆家 YIHOME</h1>
						<p class="subtitle">海外留学生活，有忆家</p>

						<el-form-item class="form-bottom">
							<el-col :span="8">
								<el-form-item prop="phoneArea">
									<el-select v-model="ruleForm.phoneArea" placeholder="国家或地区" >
										<el-option
												v-for="item in phoneData"
												:key="item.value"
												:label="item.value"
												:value="item.value">
											<span style="float: left;margin-right: 10px;"><img :src="item.img" alt="国家/地区 图片"></span>
											<span style="float: left">{{ item.label }}</span>
											<span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
										</el-option>
									</el-select>
								</el-form-item>
							</el-col>
							<el-col class="line" :span="1">&nbsp;</el-col>
							<el-col :span="15">
								<el-form-item prop="email">
									<el-input v-model="ruleForm.email" placeholder="请输入手机号" prefix-icon="el-icon-user" clearable></el-input>
								</el-form-item>
							</el-col>
						</el-form-item>

						<el-form-item  prop="code">
							<div style="width: 66%;display: inline-block;">
								<el-input v-model="ruleForm.code" placeholder="请输入验证码" prefix-icon="el-icon-mobile-phone"></el-input>
							</div>
							<el-button v-if="!sendMsgDisabled" style="width: 148px;" @click.prevent="sendCode()">获取验证码</el-button>
							<el-button v-if="sendMsgDisabled" disabled style="width: 148px;">{{time+'s 后重新发送'}}</el-button>

							<!-- <div class="send_code"  v-if="sendMsgDisabled" >{{time+'s'}}</div>
							<div class="send_code" v-if="!sendMsgDisabled" @click="sendCode()">获取验证码</div> -->
						</el-form-item>
						<el-form-item  prop="password">
							<el-input v-model="ruleForm.password" placeholder="请输入密码" prefix-icon="el-icon-lock" show-password></el-input>
						</el-form-item>
						<el-form-item  prop="respassword">
							<el-input v-model="ruleForm.respassword" placeholder="请重新输入密码" prefix-icon="el-icon-lock" show-password></el-input>
						</el-form-item>
						<el-form-item style="margin-bottom: 20px;">
							<!-- <el-button class="registerBtn" type="primary" @click="submitForm('ruleForm')">立即注册</el-button> -->
							<el-button :loading="loadingStatus" class="registerBtn panpay_LoginBtn" type="primary" >确定</el-button>
							<!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
						</el-form-item>
						<el-form-item style="margin-bottom: 6px;">
							<p>已有账号? <nuxt-link to="/login">直接登录</nuxt-link></p>
						</el-form-item>
						<el-form-item class="loginType">
							<div class="sigma-middle-line">
								<span class="sigma-line-text">其他注册方式</span>
							</div>
						</el-form-item>
						<el-form-item class="usePhoneLogin">
							<img src="~assets/images/loginRegister/email.svg" alt="" @click="phonelLoginMode">
							<p>邮箱找回</p>
						</el-form-item>
					</el-form>
				</div>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
	import $ from 'jquery';
	import axios from 'axios';
	var captchaObjs = {};
	export default{
		head: {script: [{src: '/gt.js',ssr: false}]},
		layout: 'loginRegister',
		data() {
			var REGEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
			var REGPassworld = /^(?=.*?[a-zA-Z])(?=.*?[0-9]).{8,18}$/;
			var validateEmail = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('手机号码不能为空'));
				} else {
					
					callback();
				}
			};
			var validateCode = (rule, value, callback) => {
				if (value === '') {
				  callback(new Error('验证码不能为空'));
				} else {
				  if (!(value.length==6)){
	
					callback(new Error('请输入正确的验证码'));
				  }
				  callback();
				}
			};
			var validatePass = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入密码'));
				} else {
					if(!REGPassworld.test(value)) {
						callback(new Error('密码至少包含一个数字和字母,长度在8-18位'));
					}
					callback();
				}
			};
			var checkPwd = (rule, value, callBack) => {
				if (!value) {
					callBack('请重新输入密码')
				} else if (value != this.ruleForm.password) {
					callBack('两次输入密码不一致')
				} else {
					callBack()
				}
			};
			return {
				loadingStatus:false,
				time:90,
				sendMsgDisabled:false,
				phoneData:[
					{
						img:'https://www.inyihome.com/newStatic/flags/cn.png',
						value: '+86',
						label: '中国'
					},
					{
						img:'https://www.inyihome.com/newStatic/flags/hk.png',
						value: '+852',
						label: '中国香港'
					},
					{
						img:'https://www.inyihome.com/newStatic/flags/mo.png',
						value: '+853',
						label: '中国澳门'
					},
					{
						img:'https://www.inyihome.com/newStatic/flags/tw.png',
						value: '+886',
						label: '中国台湾'
					},
					{
						img:'https://www.inyihome.com/newStatic/flags/gb.png',
						value: '+44',
						label: '英国'
					},
					{
						img:'https://www.inyihome.com/newStatic/flags/au.png',
						value: '+61',
						label: '澳大利亚'
					}
				],
				ruleForm: {
					phoneArea: '+86',
					email: '',
					code:'',
					respassword: '',
					password:'',
					remarks:''
				},
				rules: {
					email: [
						{validator: validateEmail,trigger: 'blur'},
						{ min: 3, max: 50, message: '长度不少于3个字符,不能大于50个字符', trigger: 'blur' }
					],
					code: [
						{  validator: validateCode, trigger: 'blur' }
					],
					password: [
						{validator: validatePass,trigger: 'blur'},
					],
					respassword: [
						{validator: checkPwd,trigger: 'blur'},
					],
					remarks: [
						{ required: true, message: '请输入您的微信号', trigger: 'blur' },
						{ min: 1, max: 50, message: '长度不能大于50个字符', trigger: 'blur' }
					],
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
			sendCode(){//获取验证码
				if(this.ruleForm.email==""){
					this.$refs.ruleForm.validateField('email');
					return;
				}else{
					var ParmasData={
						account:this.ruleForm.email,
						type:"register",
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
						message: '网络错误！请检查当前网络或联系客服人员',
						duration: 0,			          	
						//showClose: false,
					});
				})
			},
			userLoginFun(){
				this.$request.register({'account':this.ruleForm.email,'password':this.ruleForm.password,'code':this.ruleForm.code,'remarks':this.ruleForm.remarks}).then(res=>{
					this.loadingStatus = false;
					if(res.status){
						this.$router.push({path:'/login'});
						window._agl && window._agl.push(['track', ['success', {t: 3}]])
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
	.registerWrapper{
		width: 100%;
		height: 100%;
		max-width: 100%;
		padding: 0;
	}
	.registerWrapper .side{
		position: relative;
		overflow: hidden;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		background-image: url(~assets/images/loginRegister/bg.png);
		transition: all .5s;
	}
	.main-wraper{
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		padding-top: 30px;
		padding-bottom: 30px;

		/*position: relative;*/
		/*height: 100%;*/
		/*margin-left: 480px;*/
		/*transition: all .5s;*/
		
	}
	.main_content{
		height: 100%;
		width: 100%;
		background: #FFFFFF;
		box-shadow: 0 0 50px 0 rgba(59,68,172,0.20);
		margin: 0;
	}
	.main-content form{
		width: 450px;
		margin: 0 auto;
		transition: all .5s;
	}
	.main-content form .el-form-item{
		margin-bottom: 26px;
		text-align: center;
	}
	.main-content form .form-bottom .el-form-item{
		margin-bottom: 0px;
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
	.subtitle{
		font-family: PingFangSC-Regular;
		font-size: 20px;
		color: #333333;
		letter-spacing: 1.25px;
		line-height: 36px;
		margin-bottom: 30px;
		text-align: left;
		width: 100%;
	}
	.registerBtn{
		width: 100%;
		background-color: #3B44AC;
		border-color: #3B44AC;
		margin-top: 16px;
	}
	.registerBtn:focus{
		background-color: #3B44AC;
		border-color: #3B44AC;
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
		/*.registerWrapper .side{*/
		/*	width: 240px;*/
		/*}*/
		/*.main-wraper{*/
		/*	margin-left: 240px;*/
		/*}*/
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
