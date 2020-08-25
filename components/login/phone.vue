<template>
	<section>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="login_form">
			<el-form-item class="form-bottom" required>
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
					<el-form-item prop="phone">
						<el-input v-model="ruleForm.phone" placeholder="请输入您的手机号" clearable maxlength="11" @keyup.native="phoneMethod"></el-input>
					</el-form-item>
				</el-col>
			</el-form-item>
			<el-form-item prop="password">
				<el-input v-model="ruleForm.password" placeholder="请输入您的密码" maxlength="22" show-password></el-input>
			</el-form-item>
			<el-form-item class="form-pwd">
				<nuxt-link to="/findpwd">忘记密码</nuxt-link>
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
			
			var validatePhone = (rule, value, callback) => {
				if (value.trim() == '') {
					callback(new Error('请输入您的手机号'));
				} else if(value.length<=6){
					callback(new Error('请输入正确的手机号码'));
				}else{
					callback();
				}
			};
			return {
				loadingStatus:false,
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
					phone: '',
					password: ''
				},
				rules: {
					phoneArea: [{
						required: true,
						message: '请选择',
						trigger: 'change'
					}],
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
			phoneMethod(){
				this.ruleForm.phone=this.ruleForm.phone.replace(/[^\.\d]/g,'');
				this.ruleForm.phone=this.ruleForm.phone.replace('.','');
			},
			loginmethod(formName){
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.loadingStatus = true;
						this.$Spin.show();
						setTimeout(()=>{
							this.$request.loginin({
								"type": "1",
								'phone':this.ruleForm.phone,
								'pwd':this.ruleForm.password
							}).then(res=>{
								this.$Spin.hide();
								this.loadingStatus = false;
								if(res.code === 200){
									localStorage.setItem('token',res.data.token);
									// localStorage.setItem('userid',res.data.id);
									// localStorage.setItem('checklicense',res.data.license);
									
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
	}
	.login_btn{
		background-color: #3B44AC;
		border-color: #3B44AC;
		outline: none;
		width: 100%;
	}

	section form .el-form-item{
		margin-bottom: 26px;
		/*text-align: center;*/
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
