<template>
	<section id="homePage" v-loading.fullscreen.lock="savehelpticketsStatus">
		<b-container fluid class="banner">
			<el-carousel indicator-position="none" id="el-carousel" :loop="true" :interval="5000" arrow="always">

				<el-carousel-item class="homepageBanneractivity">
					<!-- <a href="/helptickets" target="_blank" style="display: block;width: 100%;height: 100%;"></a> -->
<!--					<b-container class="bannerContainer">-->
<!--						<h1 style="color: #ead462;">2020新年红包 “鼠” 不停</h1>-->
<!--						<p>租房推荐，预定成功立返300元现金红包</p>-->
<!--						<a style="background-color: #ead462;color: #000;" href="/helptickets?act=1" target="_blank">一键领取</a>-->
<!--					</b-container>-->
				</el-carousel-item>

				<el-carousel-item class="homepageBannerone">
					<a :href="commonGlobalPath+'/helptickets?act=2'" target="_blank" style="display: block;width: 100%;height: 100%;"></a>
				</el-carousel-item>
				<!-- <el-carousel-item class="homepageBannerone">
                  <b-container class="bannerContainer">
                    <h1>春节重磅福利！忆家把爱送出国</h1>
                    <p>春节期间（一月24-二月10日），提交英美澳租房订单，即送接机服务</p>
                    <a href="/helptickets?act=2" target="_blank">预定接机</a>
                  </b-container>
                </el-carousel-item> -->
				<el-carousel-item class="homepageBannertwo">
					<b-container class="bannerContainer">
						<h1>假如给我第二次机会，我还是会选择和你在忆起！</h1>
						<p>忆家英国老租客，续订立<span style="color: #05e9ab;">免服务费</span>，推荐租房立<span style="color: #05e9ab;">返300元现金红包</span></p>
						<a style="background-color: #3B44AC;" :href="commonGlobalPath+'/helptickets?act=3'" target="_blank">续订咨询</a>
					</b-container>

				</el-carousel-item>
				<!-- <el-carousel-item class="homepageBannertwo">
                  <b-container class="bannerContainer">
                    <h1>美国留学小技巧，学长给你来支招</h1>
                    <p>忆家生活记录官招募中</p>
                    <a href="https://mp.weixin.qq.com/s?__biz=MzU0NDY3MTA2MA==&mid=2247484300&idx=2&sn=24d4d8e6ac42fae3a49d714b108cbbf5&chksm=fb79d7b7cc0e5ea181c572a74450714ebaa66660e04489101b278ec49bed982e3b61afe785fe&token=1932062835&lang=zh_CN#rd" target="_blank">了解更多</a>
                  </b-container>

                </el-carousel-item> -->
				<!-- <el-carousel-item  class="homepageBanner3">
                  <b-container class="bannerContainer">
                    <a href="https://mp.weixin.qq.com/s/hQg2YisixR7QaCowQdVa1g" target="_blank">澳洲早鸟<br/>订房福利A爆全场</a>
                  </b-container>

                </el-carousel-item> -->
			</el-carousel>
			<!-- 时间选择器 -->
			<div class="selectTime">
				<b-container>
					<date-time></date-time>
				</b-container>

			</div>

		</b-container>
		<!-- 今日特惠房源 -->

		<!-- <div>
            <mdr-ibe locales="de" lang="de"  time-step="5" sublink="true" external="true"></mdr-ibe>
        </div> -->

		<b-container fluid class="todaySpecial">
			<b-container>
				<h1 class="title">精选热门房源</h1>
				<p class="subtitle">精选当前最热门的品牌公寓</p>
				<div class="hothouseTab">
					<el-tabs type="border-card" class="el-discount" @tab-click="handleClickCity">
						<el-tab-pane :label="item.name" v-for="(item,$index) in hotecityList" :key="$index" v-if="$index < 6">
							<b-row>
								<b-col md="6" sm="6" lg="4" class="listitem" v-for="(listItem,$$index) in houseList" :key="$$index" v-if="$$index < 6">
									<a target="_blank" :href="commonGlobalPath+'/housedetail?houseid='+listItem.id">
										<div class="move">
											<div class="imgWrap">
												<div class="el-image">
													<img v-if="!listItem.houseUrl" src="../assets/images/zhan.jpg" class="april-img" style="object-fit: cover;">
													<img v-else :src="yihomeGlobalVariable+listItem.houseUrl| imgStrClac('x')" class="april-img" style="object-fit: cover;">
												</div>
											</div>
											<div class="contentWrap">
												<h3>{{listItem.name}}</h3>
												<p class="price"><b>{{listItem.countryId | fliterSymble}}{{listItem.minPrice}}</b><span>起/周</span></p>
												<p class="country">近{{listItem.address}}</p>
												<div class="buttonWrap">
													<a :href="commonGlobalPath+'/housedetail?houseid='+listItem.id" style="display: flex;justify-content: space-between;width: 100%;">
														<span>点击查看</span> <i style="color: #333;" class="el-icon-right"></i>
													</a>
												</div>
											</div>
										</div>
									</a>
								</b-col>
							</b-row>
						</el-tab-pane>
					</el-tabs>



					<!-- <Tabs type="card" :animated="false">
                        <TabPane :label="item.cityname" v-for="(item,$index) in discounthouse" :key="$index">
                            <b-row>
                                <b-col md="6" sm="6" lg="4" class="listitem" v-for="(listItem,$$index) in item.house" :key="$$index">
                                    <a target="_blank" :href="'/housedetail?houseid='+listItem.id">
                                        <div class="move">
                                            <div class="imgWrap">
                                                <div class="el-image">
                                                    <img :src="'https://www.inyihome.com'+listItem.imgurl" class="april-img" style="object-fit: cover;">
                                                </div>
                                            </div>
                                            <div class="contentWrap">
                                                <h3>{{listItem.housename}}</h3>
                                                <p class="price"><b>{{listItem.currencysymbol}}{{listItem.price}}</b><span>起/周</span></p>
                                                <p class="country">近{{listItem.school}}</p>
                                                <div class="buttonWrap">
                                                    <a target="_blank" :href="'/housedetail?houseid='+listItem.id" style="display: flex;justify-content: space-between;width: 100%;">
                                                        <span>点击查看</span> <i style="color: #333;" class="el-icon-right"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </b-col>
                            </b-row>
                        </TabPane>

                    </Tabs> -->

				</div>
			</b-container>
		</b-container>
		<!-- 今日特惠房源 end -->

		<!-- 中部banner -->
		<b-container fluid class="brandInfo">
			<!-- <h1>我们是为留学生带来海外住宿预订平台，<br/>您可信赖的专业海外留学租房帮手</h1>
            <a href="">立即找房</a> -->
			<b-container>
				<h1 class="title">精品房型</h1>
				<p class="subtitle">精选当前最热门的品牌公寓</p>
				<div class="searchWrapper">
					<el-tabs v-model="searchActive" type="card" class="homepageSearch" @tab-click="handleClick">
						<el-tab-pane label="单人套房" name="a"></el-tab-pane>
						<el-tab-pane label="单人卧室" name="b"></el-tab-pane>
						<el-tab-pane label="双人套房" name="c"></el-tab-pane>
						<el-tab-pane label="双人卧室" name="d"></el-tab-pane>
						<el-tab-pane label="多人套房" name="e"></el-tab-pane>
						<el-tab-pane label="多人卧室" name="f"></el-tab-pane>
						<el-tab-pane label="三人卧室" name="g"></el-tab-pane>
					</el-tabs>
				</div>
				<div class="homepageSearchContent">
					<b-row>
						<b-col md="6" sm="6" lg="5" style="padding-right: 0;">
							<img :src="'https://www.inyihome.com/newStatic/'+searchActive+'-1.png'" alt="">
						</b-col>
						<b-col md="6" sm="6" lg="3">
							<b-row style="height: 100%;">
								<b-col md="12" sm="12" lg="12" style="margin-bottom: 10px;padding-left: 10px;">
									<img :src="'https://www.inyihome.com/newStatic/'+searchActive+'-2.png'" alt="">
								</b-col>
								<b-col md="12" sm="12" lg="12" style="padding-left: 10px;">
									<img :src="'https://www.inyihome.com/newStatic/'+searchActive+'-3.png'" alt="">
								</b-col>
							</b-row>
						</b-col>
						<b-col md="6" sm="6" lg="4" style="display: flex;flex-direction: column;justify-content: center;">
							<h1 class="formtitle">海外生活有忆家</h1>
							<el-form :model="appointmentForm" :rules="appointmentRules" ref="appointmentForm" label-position="top"  class="appointmentForm">
								<el-form-item label="姓名" prop="name">
									<el-input v-model="appointmentForm.name" placeholder="请输入您的姓名"></el-input>
								</el-form-item>

								<el-form-item label="手机号" prop="phoneArea" style="display: inline-block;width: 132px;">
									<!-- <el-select v-model="appointmentForm.phoneArea" placeholder="请选择活动区域">
                                        <el-option label="中国" value="+86"></el-option>
                                        <el-option label="英国" value="+44"></el-option>
                                        <el-option label="澳大利亚" value="+61"></el-option>
                                    </el-select> -->

									<el-select v-model="appointmentForm.phoneArea" placeholder="国家或地区" >
										<el-option
												v-for="item in options"
												:key="item.value"
												:label="item.value"
												:value="item.value">
											<span style="float: left;margin-right: 10px;"><img :src="item.img" alt="国家/地区 图片"></span>
											<span style="float: left">{{ item.label }}</span>
											<span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
										</el-option>
									</el-select>
								</el-form-item>
								<el-form-item prop="phone" style="display: inline-block;width: 200px;">
									<el-input v-model="appointmentForm.phone" type="phone" placeholder="请输入您的手机号" @keyup.native="phoneMethod"></el-input>
								</el-form-item>

								<el-form-item label="微信" prop="WeChat">
									<el-input v-model="appointmentForm.WeChat" placeholder="请输入您的微信"></el-input>
								</el-form-item>
								<!-- <el-form-item label="邮箱" prop="Email">
                                    <el-input v-model="appointmentForm.Email" placeholder="请输入您的邮箱"></el-input>
                                </el-form-item> -->
								<el-form-item class="btnWrapper">
									<el-button type="primary" @click="submitappointmentForm('appointmentForm')">立即预约看房</el-button>
								</el-form-item>
							</el-form>
						</b-col>
					</b-row>
				</div>
			</b-container>
		</b-container>
		<!-- 中部banner end -->

		<!-- 租房保障 -->
		<b-container fluid class="promise">
			<b-container>
				<h1 class="title">亿家租房保障</h1>
				<p class="info">一个故事，一段人生，一个成就每一次独特的海外留学租房体验</p>
				<b-row>
					<b-col md="4" sm="6" lg="3" class="promise-item">
						<div class="promise-item-img">
							<img src="@/assets/images/home1.jpg" style="object-fit: cover;">
						</div>
						<div class="promise-item-content">
							<h5>100%真实房源</h5>
							<p>实地勘察安心入住</p>
						</div>
					</b-col>
					<b-col md="4" sm="6" lg="3" class="promise-item">
						<div class="promise-item-img">
							<img src="@/assets/images/home2.jpg" style="object-fit: cover;">
						</div>
						<div class="promise-item-content">
							<h5>100%专业顾问</h5>
							<p>具备海外留学经历</p>
						</div>
					</b-col>
					<b-col md="4" sm="6" lg="3" class="promise-item">
						<div class="promise-item-img">
							<img src="@/assets/images/home3.jpg" style="object-fit: cover;">
						</div>
						<div class="promise-item-content">
							<h5>1对1全程服务</h5>
							<p>保障您的租房体验</p>
						</div>
					</b-col>
					<b-col md="4" sm="6" lg="3" class="promise-item">
						<div class="promise-item-img">
							<img src="@/assets/images/home4.jpg" style="object-fit: cover;">
						</div>
						<div class="promise-item-content">
							<h5>全天候客服在线</h5>
							<p>随时等候您的咨询</p>
						</div>
					</b-col>
				</b-row>
			</b-container>
		</b-container>

		<!-- 精选故事 -->
		<b-container fluid v-if="1 == 2" class="story">
			<b-container>
				<h1 class="title">精选故事<span style="float: right;"><nuxt-link target="_blank" to="/stories" class="readMore">查看更多<i class="el-icon-arrow-right"></i></nuxt-link></span></h1>
				<p class="info">在忆家，发现更精彩的留学生涯</p>
				<b-row>
					<b-col md="6" sm="6" lg="4" class="listitem" v-for="(item,$index) in storyData" :key="$index" >
						<a :href="commonGlobalPath+'/storydetails?id='+item.id" target="_blank">
							<div class="img">
								<div class="el-image">
									<img :src="yihomeGlobalVariable+item.titleimg| imgStrClac('l')" class="april-img" style="object-fit: cover;">
								</div>
							</div>
							<div class="content">
								<h5>{{item.title}}</h5>
								<p>{{item.titcon}}</p>
							</div>
						</a>
					</b-col>
					<!-- <nuxt-link target="_blank" to="/stories">查看更多</nuxt-link> -->
				</b-row>
			</b-container>
		</b-container>
		<!-- 精选故事 end -->
		<!-- 集体活动 -->
		<b-container fluid>
			<b-container class="activity">
				<h1>留学动态<span style="float: right;"><nuxt-link target="_blank" to="/abroad" class="readMore">查看更多<i class="el-icon-arrow-right"></i></nuxt-link></span></h1>
				<p class="info">海外生活有忆家，忆家事事关心</p>
				<b-row>
					<b-col md="4" sm="6" lg="3" class="listitem" v-for="(item,$index) in studentData" :key="$index" v-if="$index < 4">
						<a :href="commonGlobalPath+'/storydetails?id='+item.id" target="_blank">
							<div class="imgWrap">
								<div class="el-image">
									<img v-if="!item.imgUrl" src="../assets/images/zhan1.jpeg" class="april-img" style="object-fit: cover;">
									<img v-else :src="yihomeGlobalVariable+item.imgUrl| imgStrClac('l')" class="april-img" style="object-fit: cover;">
								</div>
							</div>
							<div class="contentWrap">
								<h5>{{item.title}}</h5>
								<p v-html="item.info"></p>
							</div>
						</a>
					</b-col>

				</b-row>
			</b-container>
		</b-container>
		<!-- 集体活动 end -->
		<!-- 合作伙伴 -->
		<b-container fluid v-if="1 == 2" class="partent">
			<b-container>
				<h1>合作伙伴</h1>
				<b-row>
					<b-col md="2">
						<a target="_blank" href="https://www.qhiwi.com">
							<img src="@/assets/images/partner/1.png" alt="">
						</a>
					</b-col>
					<b-col md="2">
						<img src="@/assets/images/partner/2.png" alt="">
					</b-col>
					<b-col md="2">
						<img src="@/assets/images/partner/3.png" alt="">
					</b-col>
					<b-col md="2">
						<img src="@/assets/images/partner/4.png" alt="">
					</b-col>
					<b-col md="2">
						<img src="@/assets/images/partner/5.png" alt="">
					</b-col>
					<b-col md="2">
						<img src="@/assets/images/partner/6.png" alt="">
					</b-col>
					<b-col md="2">
						<img src="@/assets/images/partner/7.png" alt="">
					</b-col>
					<b-col md="2">
						<img src="@/assets/images/partner/8.png" alt="">
					</b-col>
					<b-col md="2">
						<img src="@/assets/images/partner/9.png" alt="">
					</b-col>
					<b-col md="2">
						<img src="@/assets/images/partner/10.png" alt="">
					</b-col>
					<b-col md="2">
						<img src="@/assets/images/partner/11.png" alt="">
					</b-col>
					<b-col md="2">
						<img src="@/assets/images/partner/12.png" alt="">
					</b-col>
					<b-col md="2">
						<a target="_blank" href="https://www.myuniuni.com?chain_origin=inyihome">
							<img src="@/assets/images/partner/13.png" alt="">
						</a>
					</b-col>
				</b-row>
			</b-container>
		</b-container>
		<!-- 合作伙伴 end -->

	</section>
</template>

<script>
	import dateTime from '@/components/dateTimePicker.vue';
	import $ from 'jquery';
	export default {
		components:{
			dateTime
		},
		data(){

			return {
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

				searchActive:'a',
				bannerHeight: 700,
				screenWidth: 1920,
				value:4,
				iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'],
				storyData:[],
				studentData:[],
				discounthouse:[],//特惠房源

				hotecityList: [],
				houseList: [],

				appointmentForm:{
					roomtype:"单人套房",
					name: '',
					phoneArea:'',
					phone: '',
					WeChat: '',
					Email: '',
				},
				appointmentRules: {
					// 	name: [
					// 		{ required: true, message: '请输入您的姓名', trigger: 'blur' },
					// 		{ min: 1, max: 50, message: '长度不得大于 50 个字符', trigger: 'blur' }
					// 	],
					// 	phone: [
					// 		{ required: true, message: '请输入您的手机号', trigger: 'blur' },
					// 		{ min: 1, max: 50, message: '长度不得大于 50 个字符', trigger: 'blur' }
					// 	],
					// 	phoneArea: [
					// 		 { required: true, message: '请选择电话区号', trigger: 'change' }
					// 	],
					// 	WeChat: [
					// 		//{ required: true, message: '请输入您的微信号', trigger: 'blur' },
					// 		{ min: 1, max: 50, message: '长度不得大于 50 个字符', trigger: 'blur' }
					// 	],
					// 	Email: [
					// 		//{ required: true, message: '请输入您的微信号', trigger: 'blur' },
					// 		{ min: 1, max: 50, message: '长度不得大于 50 个字符', trigger: 'blur' }
					// 	],
				},
				savehelpticketsStatus:false,
			}
		},
		// async asyncData({query,app,params,route}){
		// 	let request1Data1 = await app.$request.getStory({'page':'1','limit':'3',type: 3})
		// 	let request2Data1 = await app.$request.getStory({'page':'1','limit':'4',type: 2})
		// 	let discountData1 = await app.$request.homeHothouse()




		// 	let resStoryData = request1Data1.data;
		// 	let resStudentData = request2Data1.data
		// 	let resdiscountData= discountData1.data;


		// 	console.log(resdiscountData,222222222222222)
		// 	return {
		// 		storyData: resStoryData,
		// 		studentData: resStudentData,
		// 		discounthouse:resdiscountData
		// 	}
		// },
		mounted() {

			this.getStory();
			this.genActivity();
			this.findhotecity();


			// $.ajax({
			// 	url:'https://api.myjson.com/bins/1bl46q',
			// 	type:"GET",
			// 	success:function(){

			// 	}
			// })

		},
		filters:{
			imgStrClac:function(str,num){
				let res = str.replace(/(.*)\./,'$1'+num+'.');   //$1 + 替换后的字符
				return res;
			}
		},
		methods: {
			handleClick(tab, event){
				this.appointmentForm.roomtype = tab.label
			},
			handleClickCity(tab){
				const { hotecityList } = this;
				const findItem = hotecityList.filter(ele => ele.name === tab.label);
				findItem.length > 0 && this.finddiscounthouse(findItem[0].id);
			},
			phoneMethod(){
				console.log(11111)
				this.appointmentForm.phone=this.appointmentForm.phone.replace(/[^\.\d]/g,'');
				this.appointmentForm.phone=this.appointmentForm.phone.replace('.','');
			},

			submitappointmentForm(formName){

				if(this.appointmentForm.name.trim()==""){
					this.$Message.warning('请输入您的姓名');
					return;
				}
				if(!this.appointmentForm.phoneArea){
					this.$Message.warning('请选择电话区号');
					return;
				}


				if(!this.appointmentForm.phone){
					this.$Message.warning('请输入您的手机号');
					return;
				}

				if(this.appointmentForm.phoneArea=='+86'||this.appointmentForm.phoneArea=='+852'||this.appointmentForm.phoneArea=='+853'||this.appointmentForm.phoneArea=='+856'){
					let regPhone = /^[1][3-8]\d{9}$|^([6|9])\d{7}$|^[0][9]\d{8}$|^[6]([8|6])\d{5}$/;
					// 中国大陆：开头1 3-8号段，后边跟9位数字
					// 台湾：09开头后面跟8位数字
					// 香港：9或6开头后面跟7位数字
					// 澳门：66或68开头后面跟5位数字
					if(!regPhone.test(this.appointmentForm.phone)){
						this.$Message.warning('请输入正确的手机号');
					}
					return;
				}
				if(this.appointmentForm.phoneArea=='+44'||this.appointmentForm.phoneArea=='+61'){
					if(this.appointmentForm.phone.length<5){
						this.$Message.warning('请输入正确的手机号');
						return;
					}
					return;
				}

				this.savehelpticketsStatus = true;
				this.$request.savehelptickets({
					type:1,
					roomtype:this.appointmentForm.roomtype,
					name:this.appointmentForm.name,
					email:this.appointmentForm.Email,
					areacode:this.appointmentForm.phoneArea,
					phone:this.appointmentForm.phone ,
					weixin:this.appointmentForm.WeChat ,
				}).then(res=>{
					this.savehelpticketsStatus = false;
					this.$Modal.success({
						title: '提示信息',
						content: '预约成功，稍后会有客户经理主动与您联系',
						onOk: () => {
							this.$refs['appointmentForm'].resetFields();
						},
					});
					window._agl && window._agl.push(['track', ['success', {t: 3}]])
				}).catch(e=>{
					this.savehelpticketsStatus = false;
					this.$Modal.error({
						title: '提示信息',
						content: '网络错误，数据提交失败'
					});
				})

				// this.$refs[formName].validate((valid) => {
				// 	if (valid) {
				// 		this.savehelpticketsStatus = true;
				// 		this.$request.savehelptickets({
				// 			type:1,
				// 			roomtype:this.appointmentForm.roomtype,
				// 			name:this.appointmentForm.name,
				// 			email:this.appointmentForm.Email,
				// 			areacode:this.appointmentForm.phoneArea,
				// 			phone:this.appointmentForm.phone ,
				// 			weixin:this.appointmentForm.WeChat ,
				// 		}).then(res=>{
				// 			this.savehelpticketsStatus = false;
				// 			this.$Modal.success({
				// 				title: '提示信息',
				// 				content: '预约成功，稍后会有客户经理主动与您联系',
				// 				onOk: () => {
				// 					this.$refs['appointmentForm'].resetFields();
				// 				},
				// 			});
				// 			window._agl && window._agl.push(['track', ['success', {t: 3}]])
				// 		}).catch(e=>{
				// 			this.savehelpticketsStatus = false;
				// 			this.$Modal.error({
				// 				title: '提示信息',
				// 				content: '网络错误，数据提交失败'
				// 			});
				// 		})
				// 	} else {
				// 		console.log('error submit!!');
				// 		return false;
				// 	}
				// });
			},
			/* 精选故事 */
			getStory(){
				this.$request.getStory({type: 2}).then(res=>{
					var resData = res.data;
					// resData.forEach(function(item,index){
					// 	item.titleimg = 'https://www.inyihome.com'+item.titleimg
					// })
					this.storyData = resData;
				}).catch(e=>{
					this.$message.error('网络错误');
				})
			},
			genActivity(){
				this.$request.getStory({'page':'1','limit':'4',type: 2}).then(res=>{
					var resData = res.data;
					// resData.forEach(function(item,index){
					// 	item.titleimg = 'https://www.inyihome.com'+item.titleimg
					// })
					this.studentData = resData;
				}).catch(e=>{
					this.$message.error('网络错误');
				})
			},


			goStoryDetails(idnum){
				let routeData = this.$router.resolve({ path: '/storydetails', query: {  id: idnum } });
				window.open(routeData.href, '_blank');
			},

			// 热门城市
			findhotecity(){
				this.$request.getDiscountsCity().then(res=>{
					if(res.code === 200){
						this.hotecityList = res.data;
						this.finddiscounthouse(res.data[0].id);
					}else{
						this.$message.error(res.msg);
					}
				}).catch(e=>{
					this.$message.error('网络错误');
				})
			},

			finddiscounthouse(id){
				this.$request.searHouse({cityId: id}).then(res=>{
					if(res.code === 200){
						this.houseList = res.data.list;
					}else{
						this.$message.error(res.msg);
					}
				}).catch(e=>{
					this.$message.error('网络错误');
				})
			}
		}
	}
</script>

<style scoped="scoped">

	.el-image__inner{
		transition: all 0.3s linear;
		transform-origin: center center;
	}
	.el-image__inner:hover{
		transform: scale(1.6);
	}

	.banner{
		padding: 0;
		position: relative;
	}
	.selectTime{
		width: 100%;
		position: absolute;
		bottom: 0;
		z-index: 20;
		margin-bottom: 60px;
		height: 70px;
	}
	.bannerContainer{
		display: flex;
		height: 100%;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.bannerContainer a{
		display: block;
		color: #FFFFFF;
		width: 134px;
		height: 46px;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		letter-spacing: 0.61px;
		line-height: 46px;
		text-align: center;
		border-radius: 4px;
		background: #FB5058;
	}
	.bannerContainer a:hover{
		text-decoration: none;
	}
	.bannerContainer h1{
		font-family: PingFangSC-Bold;
		font-size: 45px;
		color: #FFFFFF;
		letter-spacing: 1.35px;
		line-height: 63px;
		margin-bottom: 8px;
	}
	.bannerContainer p{
		font-family: PingFangSC-Regular;
		font-size: 18px;
		color: #FFFFFF;
		letter-spacing: 0.68px;
		line-height: 25px;
		margin-bottom: 18px;
	}

	.homepageBannerone .bannerContainer h1{
		-color: #3B44AC;
	}
	.homepageBannerone .bannerContainer p{
		-color: #3B44AC;
	}
	.homepageBannerone .bannerContainer a{
		-background: #3B44AC;
	}
	/* .bannerContainer button{
        background: #FB5058;
        outline: none;
        border-color: #FB5058;
        width: 134px;
        height: 46px;
    } */
	.todaySpecial{
		background-color: #FBFBFB;
		padding: 45px 0px 40px;
	}
	.todaySpecial .title{
		font-family: PingFangSC-Medium;
		font-size: 26px;
		color: #333333;
		letter-spacing: 2.27px;
		margin-bottom: 10px;
	}
	.todaySpecial .subtitle{
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #484848;
		letter-spacing: 1.16px;
		margin-bottom: 36px;
	}
	.imgWrap{
		width: 100%;
		height: 250px;
		display: flex;
		align-content: center;
		justify-content: center;
		flex-direction: column;
		text-align: center;
	}
	.todaySpecial .listitem{
		transition: all 0.5s;
	}
	.todaySpecial .listitem .contentWrap{
		margin-bottom: 36px;
		background-color: #fff;
		padding: 26px 25px;
		box-shadow: 0 0 4px rgba(0,0,0,0.10);
	}
	.todaySpecial .listitem .contentWrap h3{
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #333;
		letter-spacing: 1.33px;
		line-height: 23px;
		margin-bottom: 10px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.todaySpecial .listitem:hover .move{
		transition: all 0.5s;
		box-shadow: 0 1px 6px rgba(0,0,0,.2);
	}
	.todaySpecial .listitem:hover img{
		transition: all 0.5s;
		-transform: scale(1.1);
	}
	.todaySpecial .listitem .contentWrap .price{
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #3B44AC;
		letter-spacing: 1.13px;
		margin-bottom: 10px;
		line-height: 22px;
	}
	.todaySpecial .listitem .contentWrap .price span{

		font-size: 12px;
		font-family: PingFangSC-Regular;
		color: #484848;
		letter-spacing: 1.16px;
	}
	.todaySpecial .listitem .contentWrap .country{
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #484848;
		letter-spacing: 1.16px;
		margin-bottom: 20px;
	}
	.todaySpecial .listitem .buttonWrap{
		display: flex;
		justify-content:space-between;
		max-width: 314px;
		height: 38px;
		line-height: 38px;
		border: 1px solid #464646;
		border-radius: 4px;
		margin: 0 auto;
		padding: 0 15px 0 20px;
		cursor: pointer;
		background: rgba(59,68,172, 0);
		transition: all .5s linear;
	}
	.todaySpecial .listitem .buttonWrap:hover{
		color: #fff;
		background: rgba(59,68,172,1);
		border-color: #3B44AC;
		transition: all .5s;
	}
	.todaySpecial .listitem .buttonWrap:hover span {
		color: #fff;
	}
	.todaySpecial .listitem .buttonWrap:hover a i{
		color: #fff!important;
	}
	.todaySpecial .listitem .buttonWrap span{
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #333333;
		letter-spacing: 1.16px;
	}
	.todaySpecial .listitem .buttonWrap i{
		line-height: 38px;
	}

	.brandInfo{
		padding: 50px 0;
		position: relative;
		background-image: url('~assets/images/brandInfo.png');
		background-size: cover;
		background-position: center;
	}

	.brandInfo:after{
		position: absolute;
		top: 0;
		left: 0;
		content: "";
		background-color:  rgba(55,62,142,0.80);
		opacity: 0.2;
		z-index: 1;
		width: 100%;
		height: 100%;
	}

	.brandInfo .title{
		font-family: NotoSansHans-Medium;
		font-size: 26px;
		color: #FFFFFF;
		letter-spacing: 2.27px;
		margin-bottom: 10px;
		line-height: 39px;
	}
	.brandInfo .subtitle{
		font-family: NotoSansHans-Regular;
		font-size: 14px;
		color: #FFFFFF;
		letter-spacing: 1.16px;
		line-height: 21px;
		margin-bottom: 36px;
	}

	/* .brandInfo{
      height: 411px;
      background-color: #3B44AC;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .brandInfo h1{
      font-family: PingFangSC-Medium;
      font-size: 40px;
      color: #FFFFFF;
      letter-spacing: 2.21px;
      text-align: center;
      line-height: 55px;
      margin-bottom: 64px;
    }
    .brandInfo a{
      display: inline-block;
      width: 140px;
      height: 40px;
      background: #FB5058;
      border-radius: 4px;
      color: #fff;
      text-align: center;
      line-height: 40px;
    }
    .brandInfo  a:hover{
      text-decoration: none;
    } */
	.story, .promise{
		background: #FBFBFB;
		padding: 70px 0 40px;
	}
	.story a{
		display: block;
	}
	.story a:hover{
		transition: all 0.5s;
		box-shadow: 0 1px 6px rgba(0,0,0,.2);
	}
	.story .listitem{
		margin-bottom: 30px;
	}
	.story .title, .promise .title{
		font-family: PingFangSC-Medium;
		font-size: 26px;
		color: #333333;
		letter-spacing: 2.27px;
		margin-bottom: 10px;
	}
	.story .info, .promise .info{
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #484848;
		letter-spacing: 1.16px;
		margin-bottom: 36px;
	}
	.story .content{
		padding: 25px 25px 32px;
		background-color: #fff;
	}
	.story .content h5{
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #464646;
		letter-spacing: 1.33px;
		line-height: 23px;
		margin-bottom: 15px;

		white-space: nowrap;/*内容超宽后禁止换行显示*/
		overflow: hidden;/*超出部分隐藏*/
		text-overflow:ellipsis;/*文字超出部分以省略号显示*/
	}
	.story .content p{
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #5E5E5E;
		letter-spacing: 1.16px;
		line-height: 23px;
		margin-bottom: 7px;

		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 4;
		line-clamp: 4;
		-webkit-box-orient: vertical;

	}
	.story .img{
		width: 100%;
		height: 250px;
		display: -webkit-box;
		display: flex;
		align-content: center;
		-webkit-box-pack: center;
		justify-content: center;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		flex-direction: column;
		text-align: center;
	}

	.promise-item-img{
		display: flex;
		align-content: center;
	}
	.promise-item-img img{
		margin: 0 auto;
		width: 80%;
	}
	.promise-item-content{
		text-align: center;
	}
	.promise-item-content h5{
		line-height: 30px;
		margin: 20px 0 5px;
		font-size: 20px;
	}
	.activity{
		padding: 66px 0 40px;
	}
	.activity .listitem{
		margin-bottom: 30px;
	}
	.activity h1{
		font-family: PingFangSC-Medium;
		font-size: 26px;
		color: #333333;
		letter-spacing: 2.27px;
		line-height: 27px;
		margin-bottom: 13px;
	}
	.activity .info{
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #484848;
		letter-spacing: 1.16px;
		margin-bottom: 32px;
	}
	.activity .imgWrap{
		height: 186px;
		overflow: hidden;
	}
	.activity .contentWrap{
		padding: 20px 20px 24px;
		border: 1px solid #F3F3F3;
	}
	.activity .contentWrap h5{
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #464646;
		letter-spacing: 1.33px;
		line-height: 16.73px;
		margin-bottom: 10px;

		white-space: nowrap;/*内容超宽后禁止换行显示*/
		overflow: hidden;/*超出部分隐藏*/
		text-overflow:ellipsis;/*文字超出部分以省略号显示*/
	}
	.activity .contentWrap p{
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #5E5E5E;
		letter-spacing: 1.16px;
		line-height: 23px;
		margin-bottom: 7px;

		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 4;
		line-clamp: 4;
		-webkit-box-orient: vertical;
	}
	.activity .listitem a{
		display: block;
	}
	.activity .listitem:hover a{
		transition: all 0.5s;
		box-shadow: 0 1px 6px rgba(0,0,0,.2);
	}
	.partent{
		background-color: #FBFBFB;
		padding: 70px 0;
	}
	.partent h1{
		font-family: PingFangSC-Medium;
		font-size: 26px;
		color: #333333;
		letter-spacing: 2.27px;
		line-height: 39px;
		margin-bottom: 10px;
	}
	.partent .info{
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #484848;
		letter-spacing: 1.16px;
		line-height: 21px;
	}
	.partent img{
		max-width: 100%;
		height: auto;
	}
	.partent .col-md-2{
		margin-bottom: 24px;
	}
	.partent .col-md-2 p{
		font-size: 14px;
		color: rgba(0,0,0,.45);
		letter-spacing: .2px;
		text-align: center;
		line-height: 20px;
		margin-top: 4px;
	}
	.listitem a{
		text-decoration: none;
	}
	.homepageSearchContent{
		position: relative;
		z-index: 10;
		background: #FFFFFF;
		border-radius: 4px;
		padding: 16px;
	}
	.homepageSearchContent img{
		width: 100%;
		height: 100%;
		border-radius: 4px;
		object-fit: cover;
	}
	/* .homepageSearchContent img:hover{
        transform: scale(1.1);
    } */
	.homepageSearchContent .formtitle{
		font-family: PingFangSC-Medium;
		font-size: 22px;
		color: #3B44AC;
		letter-spacing: 1.83px;
		line-height: 30px;
		margin-bottom: 30px;
	}
	.appointmentForm .el-form-item{
		margin-bottom: 32px;
	}
	.appointmentForm .btnWrapper button{
		background: #3B44AC;
		border-radius: 6px;
		width: 100%;
		margin-top: 23px;
		border-color: #3B44AC;
		outline: none;
	}
	.readMore{
		font-family: PingFangSC-Regular;
		font-size: 17px;
		color: #3B44AC;
		letter-spacing: 1.48px;
		text-align: center;
		line-height: 24px;
	}
</style>
<style>
	.hothouseTab .ivu-tabs-bar{
		border-bottom: 0;
		margin-bottom: 24px;
	}
	.hothouseTab .ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab{
		margin-right: 15px;
		font-family: PingFangSC-Medium;
		font-size: 18px;
		color: #333333;
		letter-spacing: 1.47px;
		padding: 12px 30px;
		line-height: 23px;
		height: auto;
		background: #FFFFFF;
		box-shadow: 0 0 4px  rgba(0,0,0,0.10);
		border-radius: 4px;
		border: 0;
	}
	/* .hothouseTab .ivu-tabs-nav .ivu-tabs-tab:first-child{
		display: none!important;
	} */
	.hothouseTab .ivu-tabs-nav{
		padding: 5px 0;
	}
	.hothouseTab .ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab:hover{
		box-shadow: 0 1px 6px rgba(0,0,0,.2);
	}
	.hothouseTab .ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab-active{
		background: #3B44AC;
		color: #fff;
	}
	.hothouseTab .ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-nav-container{
		height: auto;
	}
	.hothouseTab .ivu-tabs-nav-next, .hothouseTab .ivu-tabs-nav-prev{
		margin-top: 13px;
		border: 1px solid #ccc;
		width: 34px;
		border-radius: 50%;
	}
	.homepageBanneractivity{
		background-image:linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 300px, rgba(0, 0, 0, 0) 100%), url('~assets/images/mouse.jpg');
		background-size: cover;
		background-position: center;
	}
	.homepageBannerone{
		background-image:linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 300px, rgba(0, 0, 0, 0) 100%), url('~assets/images/pc.jpg');
		background-size: cover;
		background-position: center;
	}
	.homepageBannertwo{
		background-image:linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 300px, rgba(0, 0, 0, 0) 100%), url('~assets/images/banner_renewal.jpg');
		background-size: cover;
		background-position: center;
	}
	/* .homepageBannertwo{
		background-image:linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 300px, rgba(0, 0, 0, 0) 100%), url('~assets/images/11.png');
		background-size: cover;
		background-position: center;
	} */
	.homepageBanner3{
		background-image:linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 300px, rgba(0, 0, 0, 0) 100%), url('~assets/images/11.jpg');
		background-size: cover;
		background-position: center;
	}
	.appointmentForm label{
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #757575;
		letter-spacing: 1.16px;
		line-height: 20px;
		margin-bottom: 0;
		display: none!important;
	}
	.appointmentForm .el-input__inner{

	}
	#el-carousel{
		height: 70vw !important;
		position: relative !important;
	}
	@media (min-width: 744px){
		#el-carousel{
			height: 546px !important;
		}
	}
	#el-carousel .el-carousel__container {
		height: 100% !important;
	}
	#el-carousel img{
		-height: 100%;
	}
	#el-carousel .el-carousel__arrow{
		height: 40px;
		width: 40px;
	}
	#el-carousel .el-carousel__arrow i{
		font-size: 35px;
	}
	#homePage .col-md-6{
		transition: all .5s;
	}
	.homepageSearch .el-tabs__header{
		border-bottom: 0;
		margin-bottom: 25px;
	}
	.homepageSearch .el-tabs__header .el-tabs__nav{
		border: 0;
	}
	.homepageSearch .el-tabs__header .el-tabs__item{
		border: 0;
		padding: 10px 30px;
		border: 1px solid #ABABAB;
		border-radius: 4px;
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 1.33px;
		line-height: 22px;
		border: 0;
		margin-left: 26px;
	}
	.homepageSearch .el-tabs__header .el-tabs__item.is-active{
		background: #FFFFFF;
		color: #3B44AC;
	}
	.el-discount{
		box-shadow:none;
		border: none;
		background: none;
	}
	.el-discount .el-tabs__content{
		padding: 0;
	}
	.el-discount .el-tabs__header{
		background: none;
		border-bottom: none;
		margin-bottom: 24px;
	}
	.el-discount>.el-tabs__header .el-tabs__item{
		margin-right: 15px;
		font-family: PingFangSC-Medium;
		font-size: 18px;
		color: #333333;
		letter-spacing: 1.47px;
		line-height: 23px;
		height: auto;
		background: #FFFFFF;
		box-shadow: 0 0 4px rgba(0,0,0,0.10);
		border-radius: 4px;
		border: 0;
		padding: 12px 30px!important;
	}
	.el-discount>.el-tabs__header .el-tabs__item.is-active{
		background: #3B44AC;
		color: #fff;
		padding: 12px 30px;
	}
	.el-discount>.el-tabs__header .el-tabs__item:hover{
		box-shadow: 0 1px 6px rgba(0,0,0,.2);

	}
	.el-discount .el-tabs__item:hover{
		color: #333333!important;
	}
	.el-discount .el-tabs__item.is-active:hover{
		color: #fff!important;
	}
	.el-discount .el-tabs__nav-scroll{
		padding: 5px 0;
	}
	input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
	nput[type="number"] {
		-moz-appearance: textfield;
	}
</style>
