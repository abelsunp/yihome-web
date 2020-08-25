<template>
	<section>
		<!-- <h1>个人设置</h1> -->
		<el-tabs v-model="activeName" @tab-click="handleClick" class="setting-tab">
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
		    <!-- <el-tab-pane label="修改密码" name="second">配置管理</el-tab-pane> -->

		</el-tabs>
	</section>
</template>

<script>
	export default{
		data(){
			return {
				activeName: 'first',
				ruleForm:{
					netname:''
				},
				rules:{
					netname: [
						{ required: true, message: '请输入昵称', trigger: 'blur' },
						{ min: 1, max: 10, message: '昵称不小于1个字符，不大于10个字符', trigger: 'blur' }
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
						this.resetName();
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

			}
		}
	}
</script>

<style>
	.setting-tab .el-tabs__item{
		font-family: PingFangSC-Regular;
		font-size: 15px;
		color: #333333;
		letter-spacing: 0.75px;
	}
	.setting-tab .el-tabs__item.is-active{
		color: #3B44AC;
	}
	.setting-tab .el-tabs__active-bar{
		background-color: #3B44AC;
	}
	.setting-tab .el-tabs__header{
		margin-bottom: 30px;
	}
	.setting-tab .el-tabs__content{
		display: flex;
		justify-content: center;
	}
	.demo-ruleForm .el-form-item__content{
		width: 330px;
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
