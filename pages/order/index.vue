<template>
	<b-container class="orderWrapper applyWrapper" v-loading.fullscreen.lock="fullscreenLoading">
		<el-container>
			<el-main v-loading.fullscreen.lock="appointmentStatus">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="apply-ruleForm" label-position="top">
					<!-- :rules="rules" -->
					<el-collapse v-model="activeNames">
						<el-collapse-item title="个人信息" name="1">
							<!--个人信息填写-->
							<b-row>
								<b-col md="6" sm="12" lg="6">
									<el-form-item label="姓名（中文）" prop="namech">
										<el-input v-model="ruleForm.namech" placeholder="请输入个人中文姓名" clearable></el-input>
									</el-form-item>
								</b-col>
								<b-col md="6" sm="12" lg="6">
									<el-form-item label="姓名（拼音：以护照信息为准）" prop="namem">
										<el-input v-model="ruleForm.namem" placeholder="请输入个人英文姓名" clearable></el-input>
									</el-form-item>
								</b-col>
								<b-col md="6" sm="12" lg="6">
									<el-form-item label="国内联系电话" prop="personphone">
										<el-input v-model="ruleForm.personphone" placeholder="请输入国内联系电话" clearable></el-input>
									</el-form-item>
								</b-col>
								<b-col md="6" sm="12" lg="6">
									<el-form-item label="国外联系电话" prop="phoneo">
										<el-input v-model="ruleForm.phoneo" placeholder="请输入国外联系电话" clearable></el-input>
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
									<el-form-item label="出生日期" prop="birthday">
										<el-date-picker v-model="ruleForm.birthday" type="date" :editable="false" placeholder="请选择出生日期" value-format="yyyy-MM-dd"
										 clearable style="width: 100%;"></el-date-picker>
									</el-form-item>
								</b-col>
								<b-col md="6" sm="12" lg="6">
									<el-form-item label="常用邮箱" prop="uemail">
										<el-input v-model="ruleForm.uemail" placeholder="请输入个人常用邮箱" clearable></el-input>
									</el-form-item>
								</b-col>
								<b-col md="6" sm="12" lg="6">
									<el-form-item label="护照号" prop="passport">
										<el-input v-model="ruleForm.passport" placeholder="请输入护照号" clearable></el-input>
									</el-form-item>
								</b-col>
								<b-col md="6" sm="12" lg="6">
									<el-form-item label="国籍" prop="nationality">
										<el-input v-model="ruleForm.nationality" placeholder="请输入国籍" clearable></el-input>
									</el-form-item>
								</b-col>
								<b-col md="6" sm="12" lg="6">
									<el-form-item label="微信号" prop="remarks">
										<el-input v-model="ruleForm.remarks" placeholder="请输入个人微信号" clearable></el-input>
									</el-form-item>
								</b-col>
								
								<b-col md="6" sm="12" lg="6">
									<el-form-item label="目前就读年级" prop="grade">
										<el-select v-model="ruleForm.grade" placeholder="请选择" clearable style="width: 100%;">
											<el-option label="1" value="1"></el-option>
											<el-option label="2" value="2"></el-option>
											<el-option label="3" value="3"></el-option>
											<el-option label="4" value="4"></el-option>
										</el-select>
									</el-form-item>
								</b-col>
								<b-col md="6" sm="12" lg="6">
									<el-form-item label="学年制" prop="gradeyear">
										<el-select v-model="ruleForm.gradeyear" placeholder="请选择" clearable style="width: 100%;">
											<el-option label="1" value="1"></el-option>
											<el-option label="2" value="2"></el-option>
											<el-option label="3" value="3"></el-option>
											<el-option label="4" value="4"></el-option>
										</el-select>
									</el-form-item>
								</b-col>
								
								<b-col md="6" sm="12" lg="6">
									<el-form-item label="就读专业(中文)" prop="disciplinech">
										<el-input v-model="ruleForm.disciplinech" placeholder="请输入就读专业" clearable></el-input>
									</el-form-item>
								</b-col>
								<b-col md="6" sm="12" lg="6">
									<el-form-item label="就读专业(英文)" prop="disciplineen">
										<el-input v-model="ruleForm.disciplineen" placeholder="请输入就读专业" clearable></el-input>
									</el-form-item>
								</b-col>
								<b-col md="6" sm="12" lg="6">
									<el-form-item label="校区(英文)" prop="campus">
										<el-input v-model="ruleForm.campus" placeholder="请输入校区" clearable></el-input>
									</el-form-item>
								</b-col>
								
								
								<b-col md="6" sm="12" lg="6">
									<el-form-item label="是否全日制" prop="allday">
										<el-select v-model="ruleForm.allday" placeholder="请选择" clearable style="width: 100%;">
											<el-option label="是" value="Yes"></el-option>
											<el-option label="否" value="No"></el-option>
										</el-select>
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
									<el-form-item label="留学城市现居地邮编" prop="zipcode">
										<el-input v-model="ruleForm.zipcode" placeholder="请输入留学城市现居地邮编" clearable></el-input>
									</el-form-item>
								</b-col>
								<b-col md="6" sm="12" lg="6">
									<el-form-item label="留学城市现居地地址 " prop="address">
										<el-input v-model="ruleForm.address" placeholder="请输入留学城市现居地地址" clearable></el-input>
									</el-form-item>
								</b-col>
								<b-col md="6" sm="12" lg="6">
									<el-form-item label="留学学校(中文)" prop="abroadschoolch">
										<el-input v-model="ruleForm.abroadschoolch" placeholder="请输入留学学校(中文)" clearable></el-input>
									</el-form-item>
								</b-col>
								<b-col md="6" sm="12" lg="6">
									<el-form-item label="留学学校(英文)" prop="abroadschoolen">
										<el-input v-model="ruleForm.abroadschoolen" placeholder="请输入留学学校(英文)" clearable></el-input>
									</el-form-item>
								</b-col>
								<b-col md="6" sm="12" lg="6">
									<el-form-item label="国内城市现居地邮编" prop="izipcode">
										<el-input v-model="ruleForm.izipcode" placeholder="请输入国内城市现居地邮编" clearable></el-input>
									</el-form-item>
								</b-col>
								<b-col md="6" sm="12" lg="6">
									<el-form-item label="国内固定地址（中文）" prop="addressich">
										<el-input v-model="ruleForm.addressich" placeholder="请输入国内固定地址（中文）" clearable></el-input>
									</el-form-item>
								</b-col>
								<b-col md="6" sm="12" lg="6">
									<el-form-item label="国内固定地址（英文）" prop="addressien">
										<el-input v-model="ruleForm.addressien" placeholder="请输入国内固定地址（英文）" clearable></el-input>
									</el-form-item>
								</b-col>
							</b-row>
				
						</el-collapse-item>
						<el-collapse-item title="担保人/紧急联系人信息" name="2">
							<b-row>
								<b-col md="6" sm="12" lg="6">
									<el-form-item label="担保人(紧急联系人)姓名" prop="pnamech">
										<el-input v-model="ruleForm.pnamech" placeholder="请输入担保人(紧急联系人)姓名" clearable></el-input>
									</el-form-item>
								</b-col>
								<b-col md="6" sm="12" lg="6">
									<el-form-item label="与担保人(紧急联系人)的关系" prop="relation">
										<el-select v-model="ruleForm.relation" placeholder="请选择与担保人(紧急联系人)的关系" clearable style="width: 100%;">
											<el-option label="父亲" value="Father"></el-option>
											<el-option label="母亲" value="Mother"></el-option>
											<el-option label="其他" value="Other"></el-option>
										</el-select>
									</el-form-item>
								</b-col>
								<b-col md="6" sm="12" lg="6">
									<el-form-item label="联系电话" prop="pphone">
										<el-input v-model="ruleForm.pphone" placeholder="请输入担保人(紧急联系人)电话" clearable></el-input>
									</el-form-item>
								</b-col>
								<b-col md="6" sm="12" lg="6">
									<el-form-item label="邮箱" prop="pemail">
										<el-input v-model="ruleForm.pemail" placeholder="请输入担保人(紧急联系人)邮箱" clearable></el-input>
									</el-form-item>
								</b-col>
								<b-col md="6" sm="12" lg="6">
									<el-form-item label="城市" prop="pcity">
										<el-input v-model="ruleForm.pcity" placeholder="请输入担保人(紧急联系人)城市" clearable></el-input>
									</el-form-item>
								</b-col>
								<b-col md="6" sm="12" lg="6">
									<el-form-item label="联系地址(中文)" prop="paddressch">
										<el-input v-model="ruleForm.paddressch" placeholder="请输入担保人(紧急联系人)联系地址" clearable></el-input>
									</el-form-item>
								</b-col>
								<b-col md="6" sm="12" lg="6">
									<el-form-item label="联系地址(英文)" prop="paddressen">
										<el-input v-model="ruleForm.paddressen" placeholder="请输入担保人(紧急联系人)联系地址" clearable></el-input>
									</el-form-item>
								</b-col>
								<b-col md="6" sm="12" lg="6">
									<el-form-item label="邮编" prop="pzipcode">
										<el-input v-model="ruleForm.pzipcode" placeholder="请输入担保人(紧急联系人)所在地址邮编" clearable></el-input>
									</el-form-item>
								</b-col>
								<b-col md="6" sm="12" lg="6">
									<el-form-item label="职业(中文)" prop="professionch">
										<el-input v-model="ruleForm.professionch" placeholder="请输入担保人(紧急联系人)职业" clearable></el-input>
									</el-form-item>
								</b-col>
								<b-col md="6" sm="12" lg="6">
									<el-form-item label="职业(英文)" prop="professionen">
										<el-input v-model="ruleForm.professionen" placeholder="请输入担保人(紧急联系人)职业" clearable></el-input>
									</el-form-item>
								</b-col>
							</b-row>
						</el-collapse-item>
						<el-collapse-item title="证件信息" name="3">
							<b-row>
								<b-col md="6" sm="12" lg="6">
									<el-form-item label="请上传护照信息页照片" prop="passportimg"  ref="uploadPassPort">
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
									<el-form-item label="请上传学生签证pdf文件" prop="cardimga"  ref="uploadCardimga">
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
									<el-form-item label="请上传录取证明（offer/coe/cas/学生卡照片）" prop="cardimgb" ref="uploadCardimgb">
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
					
				</el-form>
			</el-main>
			<el-aside width="355px" style="overflow: inherit;">
				<div style="position: sticky;top: 20px;text-align: center;">
					<div class="houseWrapper">
						<div class="top">
							<div class="info">
								<h1>{{orderData.housename}}</h1>
							</div>
							<div class="img">
								<img :src="yihomeGlobalVariable+orderData.imgurl" alt="">
							</div>
						</div>
						<div class="bottom">
							<i class="el-icon-date"></i>{{orderData.leasedate}}
						</div>
					</div>
					<el-button class="submitBtn" type="primary" @click="submitForm('ruleForm')">立即预约</el-button>
				</div>
			</el-aside>
		</el-container>
	</b-container>
</template>

<script>
	export default{
		data(){
			return{
				fullscreenLoading:false,
				appointmentStatus:false,
				orderData:{},
				actionUrl:'https://www.inyihome.com/uploaduntil/uploadImg',
				currentUrl:'https://www.inyihome.com',
				buttonStatus: false,
				activeNames: ['1', '2', '3'],
				ruleForm: {
					namech:'',namem:'',personphone:'',phoneo:'', sex:'', birthday:'', uemail:'', passport:'', nationality:'', 
					remarks:'', grade:'', gradeyear:'', disciplinech:'', disciplineen:'',
					campus:'', allday:'', course:'', zipcode:'', address:'', abroadschoolch:'', abroadschoolen:'',
					izipcode:'', addressich:'', addressien:'',
					pnamech:'', prelation:'',  pphone:'',  pemail:'',  pcity:'', paddressch:'', 
					paddressen:'', pzipcode:'',  professionch:'', professionen:'',
					passportimg:'',
					cardimga:'',
					cardimgb:''
				},
				rules:{
					namech: [
						{ required: true, message: '请输入个人中文姓名', trigger: 'blur' },
						{ min: 1, max: 50, message: '长度最多50字符', trigger: 'blur' }
					],
					namem: [
						{ required: true, message: '请输入个人英文姓名', trigger: 'blur' },
						{ min: 1, max: 50, message: '长度最多50字符', trigger: 'blur' }
					],
					personphone: [
						{ required: true, message: '请输入国内联系电话', trigger: 'blur' },
						{ min: 1, max: 50, message: '长度最多50字符', trigger: 'blur' }
					],
					phoneo: [
						{ required: true, message: '请输入国外联系电话', trigger: 'blur' },
						{ min: 1, max: 50, message: '长度最多50字符', trigger: 'blur' }
					],
					sex: [
						{ required: true, message: '请选择性别', trigger: 'change' }
					],
					birthday: [
						{ required: true, message: '请选择出生日期', trigger: 'change' }
					],
					uemail: [
						{ required: true, message: '请输入个人常用邮箱', trigger: 'blur' },
						{ min: 1, max: 50, message: '长度最多50字符', trigger: 'blur' }
					],
					passport: [
						{ required: true, message: '请输入护照号', trigger: 'blur' },
						{ min: 1, max: 50, message: '长度最多50字符', trigger: 'blur' }
					],
					nationality: [
						{ required: true, message: '请输入国籍', trigger: 'blur' },
						{ min: 1, max: 50, message: '长度最多50字符', trigger: 'blur' }
					],
					remarks: [
						{ required: true, message: '请输入个人微信号', trigger: 'blur' },
						{ min: 1, max: 50, message: '长度最多50字符', trigger: 'blur' }
					],
					grade: [
						{ required: true, message: '请选择目前就读年级', trigger: 'change' }
					],
					gradeyear: [
						{ required: true, message: '请选择学年制', trigger: 'change' }
					],
					disciplinech: [
						{ required: true, message: '请输入就读专业', trigger: 'blur' },
						{ min: 1, max: 50, message: '长度最多50字符', trigger: 'blur' }
					],
					disciplineen: [
						{ required: true, message: '请输入就读专业', trigger: 'blur' },
						{ min: 1, max: 50, message: '长度最多50字符', trigger: 'blur' }
					],
					campus: [
						{ required: true, message: '请输入校区', trigger: 'blur' },
						{ min: 1, max: 50, message: '长度最多50字符', trigger: 'blur' }
					],
					allday: [
						{ required: true, message: '请选择是否全日制', trigger: 'change' }
					],
					course: [
						{ required: true, message: '请选择就读课程', trigger: 'change' }
					],
					zipcode: [
						{ required: true, message: '请输入留学城市现居地邮编', trigger: 'blur' },
						{ min: 1, max: 50, message: '长度最多50字符', trigger: 'blur' }
					],
					address: [
						{ required: true, message: '请输入留学城市现居地地址', trigger: 'blur' },
						{ min: 1, max: 150, message: '长度最多150字符', trigger: 'blur' }
					],
					abroadschoolch: [
						{ required: true, message: '请输入留学学校(中文)', trigger: 'blur' },
						{ min: 1, max: 150, message: '长度最多150字符', trigger: 'blur' }
					],
					abroadschoolen: [
						{ required: true, message: '请输入留学学校(英文)', trigger: 'blur' },
						{ min: 1, max: 150, message: '长度最多150字符', trigger: 'blur' }
					],
					izipcode: [
						{ required: true, message: '请输入国内城市现居地邮编', trigger: 'blur' },
						{ min: 1, max: 50, message: '长度最多50字符', trigger: 'blur' }
					],
					addressich: [
						{ required: true, message: '请输入国内固定地址（中文）', trigger: 'blur' },
						{ min: 1, max: 150, message: '长度最多150字符', trigger: 'blur' }
					],
					addressien: [
						{ required: true, message: '请输入国内固定地址（英文）', trigger: 'blur' },
						{ min: 1, max: 150, message: '长度最多150字符', trigger: 'blur' }
					],
					pnamech: [
						{ required: true, message: '请输入担保人(紧急联系人)姓名', trigger: 'blur' },
						{ min: 1, max: 50, message: '长度最多50字符', trigger: 'blur' }
					],
					relation: [
						{ required: true, message: '请选择与担保人(紧急联系人)的关系', trigger: 'change' }
					],
					
					pphone: [
						{ required: true, message: '请输入担保人(紧急联系人)电话', trigger: 'blur' },
						{ min: 1, max: 50, message: '长度最多50字符', trigger: 'blur' }
					],
					pemail: [
						{ required: true, message: '请输入担保人(紧急联系人)邮箱', trigger: 'blur' },
						{ min: 1, max: 50, message: '长度最多50字符', trigger: 'blur' }
					],
					pcity: [
						{ required: true, message: '请输入担保人(紧急联系人)城市', trigger: 'blur' },
						{ min: 1, max: 50, message: '长度最多50字符', trigger: 'blur' }
					],
					paddressch: [
						{ required: true, message: '请输入担保人(紧急联系人)联系地址', trigger: 'blur' },
						{ min: 1, max: 150, message: '长度最多150字符', trigger: 'blur' }
					],
					paddressen: [
						{ required: true, message: '请输入担保人(紧急联系人)联系地址', trigger: 'blur' },
						{ min: 1, max: 150, message: '长度最多150字符', trigger: 'blur' }
					],
					pzipcode: [
						{ required: true, message: '请输入担保人(紧急联系人)所在地址邮编', trigger: 'blur' },
						{ min: 1, max: 50, message: '长度最多50字符', trigger: 'blur' }
					],
					professionch: [
						{ required: true, message: '请输入担保人(紧急联系人)职业', trigger: 'blur' },
						{ min: 1, max: 50, message: '长度最多50字符', trigger: 'blur' }
					],
					professionen: [
						{ required: true, message: '请输入担保人(紧急联系人)职业', trigger: 'blur' },
						{ min: 1, max: 50, message: '长度最多50字符', trigger: 'blur' }
					],
					
					// passportimg: [
					// 	{ required: true, message: '请上传护照信息页照片', trigger: 'change' },
					// ],
					// cardimga: [
					// 	{ required: true, message: '请上传学生签证pdf文件', trigger: 'change' },
					// ],
					// cardimgb: [
					// 	{ required: true, message: '请上传录取证明（offer/coe/cas/学生卡照片）', trigger: 'change' },
					// ]
					
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
			
			console.log(this.$route)
			
			this.createOrder(this.$route.query.startdate,this.$route.query.enddate,this.$route.query.leaseperiodid)
		},
		methods: {
			builderOrder(userid,rentstartdate,rentenddate,leaseperiodid){
				this.appointmentStatus = true;
				this.$request.buildorder({userid:userid,rentstartdate:rentstartdate,rentenddate:rentenddate,leaseperiodid:leaseperiodid}).then(res=>{
					this.appointmentStatus = false;
					if(res=='success'){
						this.$confirm('预约成功！稍后会有客户经理主动与您联系，您也可以在个人中心查看您的订单进度', '提示', {
							confirmButtonText: '确定',
							type: 'success',
							closeOnClickModal:false,
							closeOnPressEscape:false,
							showCancelButton:false
						}).then(() => {
							this.$router.push({path:'/profile/order'})
						}).catch(() => {
							
						});
					}
				}).catch(e=>{
					this.appointmentStatus = false;
				})
			},
			createOrder(startdate,enddate,leaseperiodid){
				this.$request.findorder({startdate:startdate,enddate:enddate,leaseperiodid:leaseperiodid}).then(res=>{
					console.log(res)
					this.orderData = res;
				}).catch(e=>{
					
				})
			},
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
				this.$refs.uploadPassPort.clearValidate();
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
				this.$refs.uploadCardimga.clearValidate();
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
				this.$refs.uploadCardimgb.clearValidate();
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
					let userid = localStorage.getItem('userid');
					console.log(userid)
					this.$request.getUserInfo({userid:userid,page:1}).then(res=>{
						console.log(res)
						this.ruleForm = res.user;
					}).catch(e=>{
						this.$message.error('网络错误');
					})
				}
			},
			
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
				  if (valid) {
						this.dataSubmit();
				  } else {
					this.$message.error('请输入左侧必填信息');
					return false;
				  }
				});
			},
			dataSubmit() {
				let parmasData = this.ruleForm;
				this.$request.saveuserInfo(parmasData).then(res => {
					console.log(res)
					if(res){
						if(process.browser){
							let userid = localStorage.getItem('userid');
							this.builderOrder(userid,this.$route.query.startdate,this.$route.query.enddate,this.$route.query.leaseperiodid)
						}
						
					}else{
						
					}
				}).catch(e => {
					this.$message.error('网络错误，数据提交失败');
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.orderWrapper{
		padding-top: 40px;
	}
	.houseWrapper {
		background: #FFFFFF;
		border: 1px solid #E4E4E4;
		border-radius: 2px;
		padding: 24px 20px;
		text-align: left;
	}
	.houseWrapper .top{
		display: flex;
		padding-bottom: 25px;
		border-bottom: 1px solid #E4E4E4;
		overflow: hidden;
		justify-content: space-between;
	}
	.houseWrapper .top h1{
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #333333;
		letter-spacing: 1.13px;
		line-height: 22px;
	}
	.houseWrapper .top img{
		width: 95px;
		height: 73px;
	}
	.houseWrapper .bottom{
		padding-top: 24px;
	}
	.houseWrapper .bottom i{
		margin-right: 8px;
	}
	.submitBtn{
		margin-top: 50px;
		width: 355px;
		background: #3B44AC;
		outline: none;
		border-color: #3B44AC;
	}
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

	/*@media only screen and (max-width: 768px) {*/
	/*	.applyWrapper .el-collapse-item__header {*/
	/*		font-size: 20px;*/
	/*	}*/

	/*	.el-message-box {*/
	/*		width: 90%;*/
	/*	}*/
	/*}*/

	/*@media only screen and (max-width: 376px) {*/
	/*	.applyWrapper .el-collapse-item__header {*/
	/*		font-size: 16px;*/
	/*	}*/

	/*}*/
</style>