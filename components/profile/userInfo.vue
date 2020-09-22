<template>
	<section id="applyHouse"  v-loading.fullscreen.lock="fullscreenLoading">
		<b-container class="applyWrapper">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="apply-ruleForm" label-position="top">
				<!-- :rules="rules" -->
				<el-collapse v-model="activeNames">
					<el-collapse-item title="个人信息" name="1">
						<!--个人信息填写-->
						<b-row>
							<b-col md="6" sm="12" lg="6">
								<el-form-item label="姓名（中文）" prop="nameCh">
									<el-input v-model="ruleForm.nameCh" placeholder="请输入个人中文姓名" clearable></el-input>
								</el-form-item>
							</b-col>
							<b-col md="6" sm="12" lg="6">
								<el-form-item label="姓名（英文）" prop="nameEn">
									<el-input v-model="ruleForm.nameEn" placeholder="请输入个人英文姓名" clearable></el-input>
								</el-form-item>
							</b-col>
							<b-col md="6" sm="12" lg="6">
								<el-form-item label="性别" prop="sex">
									<el-select v-model="ruleForm.sex" placeholder="请选择性别" clearable style="width: 100%;">
										<el-option label="男" value="Male"></el-option>
										<el-option label="女" value="Female"></el-option>
									</el-select>
								</el-form-item>
							</b-col>
							<b-col md="6" sm="12" lg="6">
								<el-form-item label="国内手机号" prop="phone">
									<el-input v-model="ruleForm.phone" placeholder="请输入国内手机号" clearable></el-input>
								</el-form-item>
							</b-col>
							<b-col md="6" sm="12" lg="6">
								<el-form-item label="出生日期" prop="birthday">
									<el-date-picker v-model="ruleForm.birthday" type="date" :editable="false" placeholder="请选择出生日期" value-format="yyyy-MM-dd"
													clearable style="width: 100%;"></el-date-picker>
								</el-form-item>
							</b-col>
							<b-col md="6" sm="12" lg="6">
								<el-form-item label="邮箱" prop="uemail">
									<el-input v-model="ruleForm.uemail" placeholder="请输入个人常用邮箱" clearable></el-input>
								</el-form-item>
							</b-col>
							<b-col md="6" sm="12" lg="6">
								<el-form-item label="护照号码" prop="passport">
									<el-input v-model="ruleForm.passport" placeholder="请输入护照号码" clearable></el-input>
								</el-form-item>
							</b-col>
						</b-row>

					</el-collapse-item>

					<el-collapse-item title="家庭信息" name="2">
						<b-row>
							<b-col md="6" sm="12" lg="6">
								<el-form-item label="国内家庭住址（中文）" prop="addressich">
									<el-input v-model="ruleForm.addressich" placeholder="请输入国内家庭住址(中文)" clearable></el-input>
								</el-form-item>
							</b-col>
							<b-col md="6" sm="12" lg="6">
								<el-form-item label="国内家庭住址（英文）" prop="addressien">
									<el-input v-model="ruleForm.addressien" placeholder="请输入国内家庭住址(英文)" clearable></el-input>
								</el-form-item>
							</b-col>
							<b-col md="6" sm="12" lg="6">
								<el-form-item label="城市" prop="city">
									<el-input v-model="ruleForm.city" placeholder="请输入城市" clearable></el-input>
								</el-form-item>
							</b-col>
						</b-row>
					</el-collapse-item>

					<el-collapse-item title="担保人/紧急联系人信息" name="3">
						<b-row>
							<b-col md="6" sm="12" lg="6">
								<el-form-item label="担保人(紧急联系人)姓名" prop="guaranteeName">
									<el-input v-model="ruleForm.guaranteeName" placeholder="请输入担保人(紧急联系人)姓名" clearable></el-input>
								</el-form-item>
							</b-col>
							<b-col md="6" sm="12" lg="6">
								<el-form-item label="与担保人(紧急联系人)的关系" prop="guaranteeRelation">
									<el-select v-model="ruleForm.guaranteeRelation" placeholder="请选择与担保人(紧急联系人)的关系" clearable style="width: 100%;">
										<el-option label="父亲" value="父亲"></el-option>
										<el-option label="母亲" value="母亲"></el-option>
										<el-option label="其他" value="其他"></el-option>
									</el-select>
								</el-form-item>
							</b-col>
							<b-col md="6" sm="12" lg="6">
								<el-form-item label="性别" prop="guaranteeSex">
									<el-select v-model="ruleForm.guaranteeSex" placeholder="请选择性别" clearable style="width: 100%;">
										<el-option label="男" value="男"></el-option>
										<el-option label="女" value="女"></el-option>
									</el-select>
								</el-form-item>
							</b-col>
							<b-col md="6" sm="12" lg="6">
								<el-form-item label="担保人(紧急联系人)生日日期" prop="guaranteeBirthday">
									<el-date-picker v-model="ruleForm.guaranteeBirthday" type="date" :editable="false" placeholder="请选择担保人(紧急联系人)生日日期" value-format="yyyy-MM-dd"
													clearable style="width: 100%;"></el-date-picker>
								</el-form-item>
							</b-col>

							<b-col md="6" sm="12" lg="6">
								<el-form-item label="手机号" prop="guaranteePhone">
									<el-input v-model="ruleForm.guaranteePhone" placeholder="请输入担保人(紧急联系人)手机号" clearable></el-input>
								</el-form-item>
							</b-col>
							<b-col md="6" sm="12" lg="6">
								<el-form-item label="邮箱" prop="guaranteeEmail">
									<el-input v-model="ruleForm.guaranteeEmail" placeholder="请输入担保人(紧急联系人)邮箱" clearable></el-input>
								</el-form-item>
							</b-col>
						</b-row>
					</el-collapse-item>

					<el-collapse-item title="留学学校信息" name="4">
						<b-row>
							<b-col md="6" sm="12" lg="6">
								<el-form-item label="留学城市" prop="address">
									<el-input v-model="ruleForm.address" placeholder="请输入留学城市" clearable></el-input>
								</el-form-item>
							</b-col>
							<b-col md="6" sm="12" lg="6">
								<el-form-item label="留学学校（英文）" prop="abroadschoolen">
									<el-input v-model="ruleForm.abroadschoolen" placeholder="请输入留学学校(英文)" clearable></el-input>
								</el-form-item>
							</b-col>
							<b-col md="6" sm="12" lg="6">
								<el-form-item label="就读课程" prop="course">
									<el-select v-model="ruleForm.course" placeholder="请选择就读课程" clearable style="width: 100%;">
										<el-option label="语言班" value="Pre-Sessional Course"></el-option>
										<el-option label="预科" value="Foundation Programme"></el-option>
										<el-option label="本科" value="Undergraduate"></el-option>
										<el-option label="研究生" value="Postgraduate"></el-option>
									</el-select>
								</el-form-item>
							</b-col>
							<b-col md="6" sm="12" lg="6">
								<el-form-item label="留学年级" prop="grade">
									<el-select v-model="ruleForm.grade" placeholder="请选择留学年级" clearable style="width: 100%;">
										<el-option label="1" value="1"></el-option>
										<el-option label="2" value="2"></el-option>
										<el-option label="3" value="3"></el-option>
										<el-option label="4" value="4"></el-option>
									</el-select>
								</el-form-item>
							</b-col>
							<b-col md="6" sm="12" lg="6">
								<el-form-item label="留学专业（英文）" prop="disciplineen">
									<el-input v-model="ruleForm.disciplineen" placeholder="请输入留学专业(英文)" clearable></el-input>
								</el-form-item>
							</b-col>
							<b-col md="6" sm="12" lg="6">
								<el-form-item label="学年制" prop="gradeyear">
									<el-select v-model="ruleForm.gradeyear" placeholder="请选择学年制" clearable style="width: 100%;">
										<el-option label="1" value="1"></el-option>
										<el-option label="2" value="2"></el-option>
										<el-option label="3" value="3"></el-option>
										<el-option label="4" value="4"></el-option>
									</el-select>
								</el-form-item>
							</b-col>
						</b-row>

					</el-collapse-item>

					<el-collapse-item title="申请公寓信息" name="5">
						<b-row>
							<b-col md="6" sm="12" lg="6">
								<el-form-item label="付款周期（分期付/全额付）" prop="payPeriod">
									<el-select v-model="ruleForm.payPeriod" placeholder="请选择付款周期(分期付/全额付)" clearable style="width: 100%;">
										<el-option label="分期" value="1"></el-option>
										<el-option label="全款" value="2"></el-option>
									</el-select>
								</el-form-item>
							</b-col>
							<b-col md="6" sm="12" lg="6">
								<el-form-item label="付款方式（银行转帐/信用卡）" prop="payType">
									<el-select v-model="ruleForm.payType" placeholder="请选择付款方式(银行转帐/信用卡)" clearable style="width: 100%;">
										<el-option label="银行转帐" value="1"></el-option>
										<el-option label="信用卡" value="2"></el-option>
									</el-select>
								</el-form-item>
							</b-col>
							<p style="text-indent: 16px;margin-bottom: 21px;">偏好需求（如果有特殊订房需求，请在这里告诉我们）</p>
							<b-col md="6" sm="12" lg="12">
								<el-form-item label="">
									<el-input
											type="textarea"
											:rows="2"
											placeholder="请输入内容"
											v-model="ruleForm.remark">
									</el-input>
								</el-form-item>
							</b-col>
						</b-row>
					</el-collapse-item>

					<el-collapse-item v-if="1==2" title="证件信息" name="5">
						<b-row>
							<b-col md="6" sm="12" lg="6">
								<el-form-item label="请上传护照信息页照片" prop="passportimg">
									<el-upload
											class="avatar-uploader"
											:action="actionUrl"
											:show-file-list="false"
											:on-success="handleAvatarSuccess"
											:on-error="handleAvatarError"
											:before-upload="beforeAvatarUpload">

										<div v-if="ruleForm.passportimg">
											<img v-if="ruleForm.passportimg.split(',')[0].toLowerCase().includes('pdf')" src="https://www.inyihome.com/img/pdf.svg" class="avatar">
											<img v-else :src="currentUrl+ruleForm.passportimg.split(',')[0]" class="avatar">
										</div>
										<i v-else class="el-icon-plus avatar-uploader-icon"></i>


									</el-upload>
									<div class="el-upload__tip">请上传png、jpg、bmp及jpeg格式图片或者pdf格式文件</div>
								</el-form-item>
							</b-col>
							<b-col md="6" sm="12" lg="6">
								<el-form-item label="请上传学生签证pdf文件" prop="cardimga">
									<el-upload
											class="avatar-uploader"
											:action="actionUrl"
											:show-file-list="false"
											:on-success="handleAvatarSuccess2"
											:on-error="handleAvatarError2"
											:before-upload="beforeAvatarUpload2">
										<div v-if="ruleForm.cardimga">
											<img v-if="ruleForm.cardimga.split(',')[0].toLowerCase().includes('pdf')" src="https://www.inyihome.com/img/pdf.svg" class="avatar">
											<img v-else :src="currentUrl+ruleForm.cardimga.split(',')[0]" class="avatar">
										</div>
										<i v-else class="el-icon-plus avatar-uploader-icon"></i>
									</el-upload>
									<div class="el-upload__tip">请上传pdf格式文件</div>
								</el-form-item>
							</b-col>
							<b-col md="6" sm="12" lg="6">
								<el-form-item label="请上传录取证明（offer/coe/cas/学生卡照片）" prop="cardimgb">
									<el-upload
											class="avatar-uploader"
											:action="actionUrl"
											:show-file-list="false"
											:on-success="handleAvatarSuccess3"
											:on-error="handleAvatarError3"
											:before-upload="beforeAvatarUpload3">

										<div v-if="ruleForm.cardimgb">
											<img v-if="ruleForm.cardimgb.split(',')[0].toLowerCase().includes('pdf')" src="https://www.inyihome.com/img/pdf.svg" class="avatar">
											<img v-else :src="currentUrl+ruleForm.cardimgb.split(',')[0]" class="avatar">
										</div>
										<i v-else class="el-icon-plus avatar-uploader-icon"></i>

									</el-upload>
									<div class="el-upload__tip">请上传png、jpg、bmp及jpeg格式图片或者pdf格式文件</div>
								</el-form-item>
							</b-col>
						</b-row>
					</el-collapse-item>

				</el-collapse>
				<el-form-item style="text-align: center;margin-top: 32px;">
					<el-button class="submitBtn" type="primary" @click="dataSubmit">确认提交</el-button>
				</el-form-item>
			</el-form>
		</b-container>
	</section>
</template>
<script>
	import $ from 'jquery';
	export default {
		head() {
			return {
				title: 'YIHOME,留学生租房,澳洲留学租房,英国留学租房',
			}
		},
		data() {
			return {
				fullscreenLoading:false,
				actionUrl:'https://www.inyihome.com/uploaduntil/uploadImg',
				currentUrl:'https://www.inyihome.com',
				buttonStatus: false,
				activeNames: ['1', '2', '3'],
				ruleForm: {
					// users: {
						owner:"",
						nameCh:"",
						nameEn:"",
						phone:"",
						sex:"",
						birthday:"",
						uemail:"",
						passport:"",
						addressich:"",
						addressien:"",
						city:"",
						pname:"",
						prelation:"",
						pbirthday:"",
						psex:"",
						pphone:"",
						pemail:"",
						address:"",
						abroadschoolen:"",
						grade:"",
						course:"",
						disciplineen:"",
						gradeyear:"",
						payPeriod:"",
						payType:"",
						remark:"",
					// },
					// usersGuarantee: {
						// name:"担保人(紧急联系人)姓名",
						// relation:"父亲",
						// phone:"15538535392",
						// email:"15538535392@163.com",
						// birthday:"2020-08-25",
						// sex:"男",
						guaranteeName:"",
						guaranteeRelation:"",
						guaranteePhone:"",
						guaranteeEmail:"",
						guaranteeBirthday:"",
						guaranteeSex:""
					// }
				},
				rules: {
					nameCh: [
						{ required: true, message: '请输入个人中文姓名', trigger: 'blur' }
					],
					nameEn: [
						{ required: true, message: '请输入个人英文姓名', trigger: 'blur' }
					],
					sex: [
						{ required: true, message: '请输入活动名称', trigger: 'blur' }
					],
					phone: [
						{ required: true, message: '请输入国内手机号', trigger: 'blur' }
					],
					birthday: [
						{ required: true, message: '请选择出生日期', trigger: 'blur' }
					],
					uemail: [
						{ required: true, message: '请输入个人常用邮箱', trigger: 'blur' }
					],
					passport: [
						{ required: true, message: '请输入护照号码', trigger: 'blur' }
					],
					addressich: [
						{ required: true, message: '请输入国内家庭住址(中文)', trigger: 'blur' }
					],
					addressien: [
						{ required: true, message: '请输入国内家庭住址(英文)', trigger: 'blur' }
					],
					city: [
						{ required: true, message: '请输入城市', trigger: 'blur' }
					],
					address: [
						{ required: true, message: '请输入留学城市', trigger: 'blur' }
					],
					abroadschoolen: [
						{ required: true, message: '请输入留学学校(英文)', trigger: 'blur' }
					],
					course: [
						{ required: true, message: '请选择就读课程', trigger: 'blur' }
					],
					grade: [
						{ required: true, message: '请选择留学年级', trigger: 'blur' }
					],
					disciplineen: [
						{ required: true, message: '请输入留学专业(英文)', trigger: 'blur' }
					],
					gradeyear: [
						{ required: true, message: '请选择学年制', trigger: 'blur' }
					],
					guaranteeName: [
						{ required: true, message: '请输入担保人(紧急联系人)姓名', trigger: 'blur' }
					],
					guaranteeRelation: [
						{ required: true, message: '请选择与担保人(紧急联系人)的关系', trigger: 'blur' }
					],
					guaranteeSex: [
						{ required: true, message: '请选择性别', trigger: 'blur' }
					],
					guaranteeBirthday: [
						{ required: true, message: '请选择担保人(紧急联系人)生日日期', trigger: 'blur' }
					],
					guaranteePhone: [
						{ required: true, message: '请输入担保人(紧急联系人)手机号', trigger: 'blur' }
					],
					guaranteeEmail: [
						{ required: true, message: '请输入担保人(紧急联系人)邮箱', trigger: 'blur' }
					],
					payPeriod: [
						{ required: true, message: '请选择付款周期(分期付/全额付)', trigger: 'blur' }
					],
					payType: [
						{ required: true, message: '请选择付款方式(银行转帐/信用卡)', trigger: 'blur' }
					]
				}
			}
		},
		created(){
			if(process.browser){
				if (window.location.host === 'www.inyihome.com') {
					this.actionUrl = 'https://www.inyihome.com/uploaduntil/uploadImg';
					this.currentUrl = 'https://www.inyihome.com';
				}
				if (window.location.host === 'www.inyihome.com:10045') {
					this.actionUrl = 'http://www.inyihome.com:10045/uploaduntil/uploadImg';
					this.currentUrl = 'http://www.inyihome.com:10045';
				}
			}
			this.getUserInfo();
		},
		methods: {
			beforeAvatarUpload(file){
				const isaccept 	= file.type.toLowerCase() === 'image/jpeg';
				const isaccept2 = file.type.toLowerCase() === 'image/jpg';
				const isaccept3 = file.type.toLowerCase() === 'image/png';
				const isaccept4 = file.type.toLowerCase() === 'image/bmp';
				const isaccept5 = file.type.toLowerCase() === 'application/pdf';
				const isLt2M 	= file.size / 1024 / 1024 < 20;

				if (!isaccept && !isaccept2 && !isaccept3 && !isaccept4 && !isaccept5) {
					this.$message.error('请上传png、jpg、bmp、jpeg格式图片或者PDF格式文件');
					return false;
				}
				if (!isLt2M) {
					this.$message.error('上传的文件最大不能超过20M！');
					return false;
				}
				var backP = isaccept||isaccept2||isaccept3||isaccept4||isaccept5 && isLt2M;
				this.fullscreenLoading = true;
				return backP;
			},
			handleAvatarSuccess(res, file){
				this.fullscreenLoading = false;
				if(file.raw.type.toLowerCase() == 'application/pdf'){
					this.ruleForm.passportimg ='https://www.inyihome.com/img/pdf.svg'
				}else{
					this.ruleForm.passportimg = URL.createObjectURL(file.raw);
				}
				this.ruleForm.passportimg = res.data[0];
			},
			handleAvatarError(){
				this.fullscreenLoading = false;
				this.ruleForm.passportimg = `${this.yihomeGlobalVariable}/upload/newStatic/icon_uploadError.png`;
				this.$message.error('文件上传失败');
				this.ruleForm.passportimg = '';
			},
			beforeAvatarUpload2(file){
				const isaccept = file.type.toLowerCase() === 'application/pdf';
				const isLt2M 	= file.size / 1024 / 1024 < 20;

				if (!isaccept) {
					this.$message.error('请上传PDF格式文件');
					return false;
				}
				if (!isLt2M) {
					this.$message.error('上传的文件最大不能超过20M！');
					return false;
				}
				var backP = isaccept && isLt2M;
				this.fullscreenLoading = true;
				return backP;
			},
			handleAvatarSuccess2(res, file){
				this.fullscreenLoading = false;
				if(file.raw.type.toLowerCase() == 'application/pdf'){
					this.ruleForm.cardimga ='https://www.inyihome.com/img/pdf.svg'
				}else{
					this.ruleForm.cardimga = URL.createObjectURL(file.raw);
				}
				this.ruleForm.cardimga = res.data[0];
			},
			handleAvatarError2(){
				this.fullscreenLoading = false;
				this.ruleForm.cardimga = `${this.yihomeGlobalVariable}/upload/newStatic/icon_uploadError.png`;
				this.$message.error('文件上传失败');
				this.ruleForm.cardimga = '';
			},




			beforeAvatarUpload3(file){
				const isaccept 	= file.type.toLowerCase() === 'image/jpeg';
				const isaccept2 = file.type.toLowerCase() === 'image/jpg';
				const isaccept3 = file.type.toLowerCase() === 'image/png';
				const isaccept4 = file.type.toLowerCase() === 'image/bmp';
				const isaccept5 = file.type.toLowerCase() === 'application/pdf';
				const isLt2M 	= file.size / 1024 / 1024 < 20;

				if (!isaccept && !isaccept2 && !isaccept3 && !isaccept4 && !isaccept5) {
					this.$message.error('请上传png、jpg、bmp、jpeg格式图片或者PDF格式文件');
					return false;
				}
				if (!isLt2M) {
					this.$message.error('上传的文件最大不能超过20M！');
					return false;
				}
				var backP = isaccept||isaccept2||isaccept3||isaccept4||isaccept5 && isLt2M;
				this.fullscreenLoading = true;
				return backP;
			},
			handleAvatarSuccess3(res, file){
				this.fullscreenLoading = false;
				if(file.raw.type.toLowerCase() == 'application/pdf'){
					this.ruleForm.cardimgb ='https://www.inyihome.com/img/pdf.svg'
				}else{
					this.ruleForm.cardimgb = URL.createObjectURL(file.raw);
				}
				this.ruleForm.cardimgb = res.data[0];
			},
			handleAvatarError3(){
				this.fullscreenLoading = false;
				this.ruleForm.cardimgb = `${this.yihomeGlobalVariable}/upload/newStatic/icon_uploadError.png`;
				this.$message.error('文件上传失败');
				this.ruleForm.cardimgb = '';
			},
			getUserInfo(){
				if(process.browser){
					this.$request.getUserInfo().then(res=>{
						this.ruleForm = {...res.data.user,...{
								guaranteeName:res.data.guarantee.name || '',
								guaranteeRelation:res.data.guarantee.relation || '',
								guaranteePhone:res.data.guarantee.phone || '',
								guaranteeEmail:res.data.guarantee.email || '',
								guaranteeBirthday:res.data.guarantee.birthday || '',
								guaranteeSex:res.data.guarantee.sex || ''
							}};
					}).catch(e=>{
						this.$message.error('网络错误');
					})
				}
			},
			dataSubmit() {
				this.$refs.ruleForm.validate((valid) => {
					let parmasData = this.ruleForm;
					if (valid) {
						const params = {
							users: this.ruleForm,
							usersGuarantee: {
								name: this.ruleForm.guaranteeName,
								relation: this.ruleForm.guaranteeRelation,
								phone: this.ruleForm.guaranteePhone,
								email: this.ruleForm.guaranteeEmail,
								birthday: this.ruleForm.guaranteeBirthday,
								sex: this.ruleForm.guaranteeSex,
							}
						}
						this.$request.saveuserInfo(params).then(res => {
							if(res.code === 200){
								this.$router.go();
								$("html,body").animate({ scrollTop: 10 }, 500);
							}else{

							}
						}).catch(e => {
							this.$message.error('网络错误，数据提交失败');
						})
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
	#applyHouse {
		width: 100%;
		height: 100%;
	}

	.applyWrapper {
		background-color: #ffffff;
		border-radius: 8px;
	}

	.applyWrapper .el-collapse-item {
		background: #FFFFFF;
		box-shadow: -10px 9px 21px 0 rgba(128, 152, 213, 0.07);
		border-radius: 8px;
		border: 0px;
		margin: 11px 0px;
	}

	.el-collapse {
		border: none;
	}

	.submitBtn {
		width: 140px;
		background: #3B44AC;
		border-color: #3B44AC;
	}

	.submitBtn:hover {
		transform: translateY(-1px);
	}

	@media only screen and (max-width: 768px) {
		.applyTitle {
			font-size: 30px;
		}

		#applyHouse {
			padding: 0;
		}

		.applyWrapper {
			-height: 100vh;
		}
	}

	@media only screen and (max-width: 376px) {}
</style>
<style>
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}
	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}
	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}
	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}
	.applyWrapper .el-collapse-item__header {
		background: transparent;
		font-family: PingFang SC;
		font-size: 24px;
		color: #2C2E2F;
		letter-spacing: 0;
		margin: 0px 25px 0px 25px;
		line-height: 72px;
		font-weight: 400;
		height: 72px;
		border-bottom: none;
	}

	.applyWrapper .el-collapse-item__content {
		margin: 0 25px;
		padding-bottom: 72px;
		padding-top: 12px;
		border-top: 1px solid rgb(230, 230, 230);
	}

	@media only screen and (max-width: 768px) {
		.applyWrapper .el-collapse-item__header {
			font-size: 20px;
		}

		.el-message-box {
			width: 90%;
		}
	}

	@media only screen and (max-width: 376px) {
		.applyWrapper .el-collapse-item__header {
			font-size: 16px;
		}

	}
</style>
<!--<template>-->
<!--<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">-->
<!--	<el-form-item label="活动名称" prop="name">-->
<!--		<el-input v-model="ruleForm.name"></el-input>-->
<!--	</el-form-item>-->
<!--	<el-form-item label="活动区域" prop="region">-->
<!--		<el-select v-model="ruleForm.region" placeholder="请选择活动区域">-->
<!--			<el-option label="区域一" value="shanghai"></el-option>-->
<!--			<el-option label="区域二" value="beijing"></el-option>-->
<!--		</el-select>-->
<!--	</el-form-item>-->
<!--	<el-form-item label="活动时间" required>-->
<!--		<el-col :span="11">-->
<!--			<el-form-item prop="date1">-->
<!--				<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>-->
<!--			</el-form-item>-->
<!--		</el-col>-->
<!--		<el-col class="line" :span="2">-</el-col>-->
<!--		<el-col :span="11">-->
<!--			<el-form-item prop="date2">-->
<!--				<el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>-->
<!--			</el-form-item>-->
<!--		</el-col>-->
<!--	</el-form-item>-->
<!--	<el-form-item label="即时配送" prop="delivery">-->
<!--		<el-switch v-model="ruleForm.delivery"></el-switch>-->
<!--	</el-form-item>-->
<!--	<el-form-item label="活动性质" prop="type">-->
<!--		<el-checkbox-group v-model="ruleForm.type">-->
<!--			<el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>-->
<!--			<el-checkbox label="地推活动" name="type"></el-checkbox>-->
<!--			<el-checkbox label="线下主题活动" name="type"></el-checkbox>-->
<!--			<el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>-->
<!--		</el-checkbox-group>-->
<!--	</el-form-item>-->
<!--	<el-form-item label="特殊资源" prop="resource">-->
<!--		<el-radio-group v-model="ruleForm.resource">-->
<!--			<el-radio label="线上品牌商赞助"></el-radio>-->
<!--			<el-radio label="线下场地免费"></el-radio>-->
<!--		</el-radio-group>-->
<!--	</el-form-item>-->
<!--	<el-form-item label="活动形式" prop="desc">-->
<!--		<el-input type="textarea" v-model="ruleForm.desc"></el-input>-->
<!--	</el-form-item>-->
<!--	<el-form-item>-->
<!--		<el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>-->
<!--		<el-button @click="resetForm('ruleForm')">重置</el-button>-->
<!--	</el-form-item>-->
<!--</el-form>-->
<!--</template>-->
<!--<script>-->
<!--	export default {-->
<!--		data() {-->
<!--			return {-->
<!--				ruleForm: {-->
<!--					name: '',-->
<!--					region: '',-->
<!--					date1: '',-->
<!--					date2: '',-->
<!--					delivery: false,-->
<!--					type: [],-->
<!--					resource: '',-->
<!--					desc: ''-->
<!--				},-->
<!--				rules: {-->
<!--					name: [-->
<!--						{ required: true, message: '请输入活动名称', trigger: 'blur' },-->
<!--						{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }-->
<!--					],-->
<!--					region: [-->
<!--						{ required: true, message: '请选择活动区域', trigger: 'change' }-->
<!--					],-->
<!--					date1: [-->
<!--						{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }-->
<!--					],-->
<!--					date2: [-->
<!--						{ type: 'date', required: true, message: '请选择时间', trigger: 'change' }-->
<!--					],-->
<!--					type: [-->
<!--						{ type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }-->
<!--					],-->
<!--					resource: [-->
<!--						{ required: true, message: '请选择活动资源', trigger: 'change' }-->
<!--					],-->
<!--					desc: [-->
<!--						{ required: true, message: '请填写活动形式', trigger: 'blur' }-->
<!--					]-->
<!--				}-->
<!--			};-->
<!--		},-->
<!--		methods: {-->
<!--			submitForm(formName) {-->
<!--				this.$refs[formName].validate((valid) => {-->
<!--					if (valid) {-->
<!--						alert('submit!');-->
<!--					} else {-->
<!--						console.log('error submit!!');-->
<!--						return false;-->
<!--					}-->
<!--				});-->
<!--			},-->
<!--			resetForm(formName) {-->
<!--				this.$refs[formName].resetFields();-->
<!--			}-->
<!--		}-->
<!--	}-->
<!--</script>-->
