<template>
	<section>
		<!-- <h1>个人设置</h1> -->
		<el-tabs v-model="activeName" @tab-click="handleClick" class="setting-tabss">
		    <el-tab-pane label="修改昵称" name="first">

				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
					<el-form-item label="昵称" prop="netname">
						<el-input v-model="ruleForm.netname" placeholder="请输入昵称"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button style="width: 330px;" type="primary" @click="submitForm('ruleForm')">保存</el-button>
					</el-form-item>

				</el-form>
			</el-tab-pane>

			<el-tab-pane label="修改密码" name="sectond" style="width:460px">

				<el-form :model="changPwdForm" :rules="pwdRules" ref="changPwdForm" label-width="100px" class="demo-ruleForm">
					<el-form-item label="原始密码" prop="oldPwd">
						<el-input v-model="changPwdForm.oldPwd" placeholder="请输入原始密码" prefix-icon="el-icon-lock" show-password></el-input>
					</el-form-item>
					<el-form-item label="新密码" prop="newPwd">
						<el-input v-model="changPwdForm.newPwd" placeholder="请输入新密码" prefix-icon="el-icon-lock" show-password></el-input>
					</el-form-item>
					<el-form-item label="再次输入密码" prop="respassword">
						<el-input v-model="changPwdForm.respassword" placeholder="请再次输入新密码" prefix-icon="el-icon-lock" show-password></el-input>
					</el-form-item>
					<el-form-item>
						<el-button style="width: 330px;" type="primary" @click="submitForm('changPwdForm')">保存</el-button>
					</el-form-item>

				</el-form>
			</el-tab-pane>
		    <!-- <el-tab-pane label="修改密码" name="second">配置管理</el-tab-pane> -->

		</el-tabs>
	</section>
</template>

<script>
	export default{
		data(){
			var REGPassworld = /^(?=.*?[a-zA-Z])(?=.*?[0-9]).{8,18}$/;
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
				} else if (value != this.changPwdForm.newPwd) {
					callBack('两次输入密码不一致')
				} else {
					callBack()
				}
			};
			return {
				activeName: 'first',
				changPwdForm: {
					oldPwd: '',
					newPwd: '',
					respassword: '',
				},
				ruleForm:{
					netname:''
				},
				rules:{
					netname: [
						{ required: true, message: '请输入昵称', trigger: 'blur' },
						{ min: 1, max: 10, message: '昵称不小于1个字符，不大于10个字符', trigger: 'blur' }
					],
				},
				pwdRules:{
					oldPwd: [
						{ required: true, message: '请输入来密码', trigger: 'blur' },
					],
					newPwd: [
						{required: true, validator: validatePass,trigger: 'blur'},
					],
					respassword: [
						{required: true, validator: checkPwd,trigger: 'blur'},
					],
				}
			}
		},
		created() {

		},
		methods:{
			handleClick(tab, event) {
				console.log(tab, event);
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
				  if (valid) {
				  		if(formName === 'ruleForm'){
							this.resetName();
						}else {
							this.updatePassword()
						}
				  } else {
					return false;
				  }
				});
			},
			resetName(){
				if(process.browser){
					this.$request.resetNetName({name:this.ruleForm.netname}).then(res=>{
						if(res.code === 200){
							this.$message.success('修改成功');
						}else this.$message.error(res.msg);
					}).catch(e=>{

					})

				}

			},
			updatePassword(){
				if(process.browser){
					this.$request.updatePassword({
						oldPwd: this.changPwdForm.oldPwd,
						newPwd: this.changPwdForm.newPwd,
					}).then(res=>{
						if(res.code === 200){
							this.$message.success('修改成功');
						}else this.$message.error(res.msg);
					}).catch(e=>{

					})

				}

			}
		}
	}
</script>

<style>
	.setting-tabss .el-tabs__item{
		font-family: PingFangSC-Regular;
		font-size: 15px;
		color: #333333;
		letter-spacing: 0.75px;
	}
	.setting-tabss .el-tabs__item.is-active{
		color: #3B44AC;
	}
	.setting-tabss .el-form-item__label{
		width: 107px !important;
	}
	.setting-tabss .el-tabs__active-bar{
		background-color: #3B44AC;
	}
	.setting-tabss .el-tabs__header{
		margin-bottom: 30px;
	}
	.setting-tabss .el-tabs__content{
		display: flex;
		justify-content: center;
	}
	.demo-ruleForm .el-form-item__content{
		width: 310px;
		margin-left: 114px !important;
	}
	.demo-ruleForm button{
		background-color: #3B44AC;
		outline: none;
		border-color: #3B44AC;
	}
	.demo-ruleForm button:hover,.demo-ruleForm button:focus,.demo-ruleForm button:active{
		background-color: #3B44AC;
	}
</style>
