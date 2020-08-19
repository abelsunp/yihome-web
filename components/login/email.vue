<template>
	<section>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="login_form">
			<el-form-item class="form-bottom" required>
				<el-col :span="24">
					<el-form-item prop="phone">
						<el-input v-model="ruleForm.phone" placeholder="请输入您的邮箱" clearable maxlength="50" ></el-input>
					</el-form-item>
				</el-col>
			</el-form-item>
			<el-form-item prop="password">
				<el-input v-model="ruleForm.password" placeholder="请输入您的密码" maxlength="22" show-password></el-input>
			</el-form-item>
			<el-form-item class="form-pwd">
				<nuxt-link to="/">忘记密码</nuxt-link>
			</el-form-item>
			<el-form-item>
				<el-button :loading="loadingStatus" class="login_btn" type="primary" @click="loginmethod('ruleForm')">登录</el-button>
			</el-form-item> 
		</el-form>
	</section>
</template>

<script>
	export default {
		data() {
			var REGEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
			var validatePhone = (rule, value, callback) => {
				if (value.trim() == '') {
					callback(new Error('请输入您的邮箱'));
				} else if(!REGEmail.test(value)){
					callback(new Error('请输入正确的邮箱地址'));
				}else{
					callback();
				}
			};
			return {
				loadingStatus:false,
				ruleForm: {
					phone: '',
					password: ''
				},
				rules: {
					phone: [{
							validator: validatePhone,
							trigger: 'blur'
						},
					],
					password: [
						{ required: true, message: '请输入您的密码',trigger: 'blur'},
					]
				}
			}
		},
		created() {
			
		},
		methods:{
			loginmethod(formName){
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.loadingStatus = true;
						this.$Spin.show();
						
						setTimeout(()=>{
							this.$request.loginin({'account':this.ruleForm.phone,'password':this.ruleForm.password}).then(res=>{
								this.$Spin.hide();
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
								this.$Spin.hide();
								this.loadingStatus = false;
							})
						},1000)
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			}
		}
	}
</script>

<style scoped="scoped">
	.login_form{
		max-width: 450px;
		width: 390px;
	}
	.login_btn{
		background-color: #3B44AC;
		border-color: #3B44AC;
		outline: none;
		width: 100%;
	}
	section form .el-form-item{
		margin-bottom: 26px;
	}
	section form .form-bottom .el-form-item{
		margin-bottom: 0px;
	}
	section form .form-pwd{
		margin: -18px 0 8px;
	}
	
</style>
<style>
	.el-select-dropdown__item.selected{
		color: #3B44AC;
	}
</style>
