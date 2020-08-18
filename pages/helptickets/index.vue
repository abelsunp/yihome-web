<template>
	<section>
		<div class="container-fluid imgWrapper" style="padding: 0;margin: 0;max-height: 530px;">
			<img @click="scrollbutton()"  class="img-responsive" style="width: 100%;cursor: pointer;height: 100%;max-height: 530px;" src="@/assets/images/helptickets.jpg" >
		</div>
		<div class="container-fluid main-content"  v-loading.fullscreen.lock="fullscreenLoading">
			<div class="container">
				<div class="activity-content">
					
					<div v-if="$route.query.act==1">
						<h1 class="h1">2020新年红包 “鼠” 不停</h1>
						<p class="info">租房推荐，预定成功立返300元现金红包</p>
					</div>
					<div v-if="$route.query.act==2">
						<h1 class="h1">你的房租我来减</h1>
						<p class="info">拼团租房最高返现2500元</p>
					</div>
					<div v-if="$route.query.act==3">
						<h1 class="h1">假如给我第二次机会，我还是会选择和你在忆起！</h1>
						<p class="info">忆家英国老租客，续订立免服务费，推荐租房立返300元现金红包</p>
					</div>
					
					<h2 class="h2">您的联系方式</h2>
					<el-form :model="ruleForm" label-position="top" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
						<el-form-item label="您的姓名" prop="name">
							<el-input v-model="ruleForm.name" placeholder="请填写您的姓名" clearable></el-input>
						</el-form-item>
						<el-form-item label="您的手机号" prop="phone">
							<el-select v-model="ruleForm.areacode" placeholder="请选择国家或地区" class="selectArea">
							    <el-option
									v-for="item in options"
									:key="item.value"
									:label="item.value"
									:value="item.value">
									<span style="float: left;margin-right: 10px;"><img :src="item.img" alt=""></span>
									<span style="float: left;">{{ item.label }}</span>
									<span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
							    </el-option>
							</el-select>
							<el-input class="phoneInput" v-model="ruleForm.phone"  placeholder="请填写您的手机号" clearable></el-input>
						</el-form-item>
						<el-form-item label="您的微信" prop="weixin">
							<el-input v-model="ruleForm.weixin" placeholder="请填写您的微信号" clearable></el-input>
						</el-form-item>
						
						<h2 class="h2">您的租房需求</h2>
						<el-form-item label="所在城市" prop="city">
							<el-input v-model="ruleForm.city" placeholder="请填写您所在城市名称" clearable></el-input>
						</el-form-item>
						<el-form-item label="所在大学" prop="school">
							<el-input v-model="ruleForm.school" placeholder="请填写您所在大学名称" clearable></el-input>
						</el-form-item>
						<!-- <el-form-item label="您的留学国家" prop="country">
							<el-select v-model="ruleForm.country" placeholder="请选择留学国家" style="width:100%;" @change="countryChange">
							    <el-option
									v-for="item in countryList"
									:key="item.id"
									:label="item.zhname"
									:value="item.zhname">
							    </el-option>
							  </el-select>
						</el-form-item> -->
						<!-- <el-form-item label="您的留学城市" prop="city">
							<el-select v-model="ruleForm.city" placeholder="请选择留学城市" style="width:100%;" @change="cityChange">
							    <el-option
									v-for="item in cityList"
									:key="item.id"
									:label="item.cityname"
									:value="item.cityname">
							    </el-option>
							  </el-select>
						</el-form-item>
						<el-form-item label="您的留学学校" prop="school">
							<el-select v-model="ruleForm.school" placeholder="请选择留学学校" style="width:100%;">
							    <el-option
									v-for="item in schoolList"
									:key="item.id"
									:label="item.schoolname"
									:value="item.schoolname">
							    </el-option>
							  </el-select>
						</el-form-item> -->
						
						<el-form-item label="您的租房需求" prop="remark">
							<el-input
								type="textarea"
								:autosize="{ minRows: 4}"
								placeholder="请填写您的租房需求，如租金、位置、房型、人数等"
								maxlength=450
								v-model="ruleForm.remark">
							</el-input>
						</el-form-item>
						
						
						<el-form-item>
							<el-button style="width: 100%;background-color: #3b44ac;border-color: #3b44ac;margin-top: 50px;" type="primary" @click="submitForm('ruleForm')">提交</el-button>
						</el-form-item>
					</el-form>
				</div>
			</div>
		</div>
		<el-dialog
			title="数据提交成功"
			:visible.sync="dialogVisible"
			:close-on-click-modal="false"
			:close-on-press-escape="false"
			:show-close="false"
			center
			custom-class="mydialogVisible"
			>
			<div style="text-align: center;"><i style="font-size: 50px;color: #FB5058;" class="el-icon-success"></i></div>
			<span slot="footer" class="dialog-footer">
				<el-button style="background-color: #3b44ac;border-color: #3b44ac;width: 140px;" type="primary" @click="confirm">确 定</el-button>
			</span>
		</el-dialog>
	</section>
</template>

<script>
	import $ from 'jquery';
	export default{
		layout:'activity',
		data(){
			return {
				dialogVisible:false,
				fullscreenLoading:false,
				options:[
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
				countryList:[],
				cityList:[],
				schoolList:[],
				ruleForm: {
					name: '',
					areacode:'+86',
					phone:'',
					weixin:'',
					country:'',
					city:'',
					school:'',
					remark:''
				},
				rules: {
					name: [
						{ required: true, message: '请填写您的姓名', trigger: 'blur' },
						{ min: 2, max: 50, message: '长度不得小于2个字符', trigger: 'blur' }
					],
					phone: [
						{ required: true, message: '请填写您的手机号', trigger: 'blur' },
						{ min: 2, max: 50, message: '长度不得小于2个字符', trigger: 'blur' }
					],
					weixin: [
						//{ required: true, message: '请填写您的微信号', trigger: 'blur' },
						{ min: 2, max: 50, message: '长度不得小于2个字符', trigger: 'blur' }
					],
					city: [
						//{ required: true, message: '请填写您的微信号', trigger: 'blur' },
						{ min: 2, max: 50, message: '长度不得小于2个字符', trigger: 'blur' }
					],
					school: [
						{ required: true, message: '请填写您所在大学名称', trigger: 'blur' },
						{ min: 2, max: 50, message: '长度不得小于2个字符', trigger: 'blur' }
					],
					/*country: [
						{ required: true, message: '请选择留学国家', trigger: 'change' }
					],
					city: [
						{ required: true, message: '请选择留学城市', trigger: 'change' }
					],*/
					/* school: [
						{ required: true, message: '请选择留学学校', trigger: 'change' }
					], */
				}
			}
		},
		created() {
			console.log(this.$route.query.activity)
		},
		mounted() {
			//this.getCountryCitySchool();
		},
		methods:{
			// getCountryCitySchool(){
			// 	var that = this;
			// 	var currentUrl = this.yihomeGlobalVariable;
			// 	$.ajax({
			// 		url:currentUrl+'/front/findcityschool',
			// 		type:'POST',
			// 		success:function(res){
			// 			that.countryList = res;
						
			// 		},
			// 		error:function(){
			// 			that.$message({
			// 				showClose: true,
			// 				message: '获取国家列表 失败',
			// 				type: 'error',
			// 				duration:5000
			// 			});
			// 		}
			// 	})
			// },
			countryChange(value){
				this.ruleForm.city = '';
				this.ruleForm.school = '';
				this.cityList = [];
				this.schoolList = [];
				this.countryList.map(e=>{//遍历数据
					if( value == e.zhname){
						this.cityList = e.city;
						return;
					}
				})
			},
			cityChange(value){
				this.ruleForm.school = '';
				this.schoolList = [];
				this.cityList.map(e=>{//遍历数据
					if( value == e.cityname){
						this.schoolList = e.school;
						return;
					}
				}) 
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.fullscreenLoading = true;
						var that = this;
						
						var currentUrl = this.yihomeGlobalVariable;
						$.ajax({
							url:currentUrl+'/front/savehelptickets',
							type:"POST",
							data:{
								type:'0',
								name:this.ruleForm.name ,
								areacode:this.ruleForm.areacode ,
								phone:this.ruleForm.phone ,
								weixin:this.ruleForm.weixin ,
								country:this.ruleForm.country ,
								city:this.ruleForm.city ,
								school:this.ruleForm.school ,
								remark:this.ruleForm.remark 
							},
							success:function(){
								that.dialogVisible = true
								that.fullscreenLoading = false;
								window._agl && window._agl.push(['track', ['success', {t: 3}]])
							},
							error:function(){
								that.fullscreenLoading = false;
								that.$message({
									message: '数据提交失败',
									type: 'error',
								});
							}
						})
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			scrollbutton(){
				$('html,body').animate({
					scrollTop: $(".main-content").offset().top
				},1000);
				
				
			},
			confirm(){
				this.dialogVisible = false;
				this.$router.push({path:'/'})
			}
		}
	}
</script>

<style scoped="scoped">
	.main-content{
		background: #f7f7f7;
		padding-top: 50px;
		padding-bottom: 50px;
	}
	.main-content .container{
		margin: 0 auto;
		padding: 50px 0;
		background: #fff;
	}
	.activity-content{
		max-width: 600px;
		margin: 0 auto;
	}
	.h1{
		font-size: 24px;
		text-align: center;
		font-weight: 700;
	}
	.info{
		text-align: center;
		margin-top: 20px;
		font-size: 14px;
		line-height: 1.5;
	}
	.h2{
		font-size: 18px;
		margin-top: 50px;
		font-weight: 700;
	}
	
	.mydialogVisible{
		width: 450px;
		margin-top: 30vh !important;
	}
	.selectArea{
		width: 150px;
	}
	.phoneInput{
		width: 73%;
	}
	@media (max-width: 640px){
		.main-content .container{
			padding: 0;
		}
		.activity-content{
			padding: 20px;
		}
		.selectArea{
			width: 25%;
		}
	}
	@media (max-width: 450px){
		.mydialogVisible{
			width: 90%;
		}
		.main-content{
			padding-top: 15px;
		}
	}
</style>
<style>
	.el-textarea__inner:focus{
		border-color: #3B44AC;
	}
</style>
