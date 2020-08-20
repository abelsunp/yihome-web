<template>
	<section v-loading.fullscreen.lock="fullscreenLoading" style="border-bottom: 1px solid #E6E6E6;">
		<b-container style="margin-top: 20px;">
			<div class="top-main-box">
				<div class="img-loop-wrap" @click="viewFullimgWrapperMethod($event)">
					<div style="position: absolute;top: 10px;right: 10px;z-index: 999;">
						<div @click="delcollect" v-if="iscollect" style="background-color: #fff;border-radius: 3px;padding: 6px 12px;cursor: pointer;">
							<Icon style="font-size: 16px;color: red;margin-right: 7px;" type="md-heart" /><p style="display: inline-block;font-size: 14px;color: #333333;letter-spacing: 0.99px;">已收藏</p>
							</div>
						<div @click="collect" v-else style="background-color: #fff;border-radius: 3px;padding: 6px 12px;cursor: pointer;">
							<Icon style="font-size: 16px;margin-right: 7px;" type="md-heart-outline" /><p style="display: inline-block;font-size: 14px;color: #333333;letter-spacing: 0.99px;">收藏</p>
						</div>
					</div>
					<slide-img :img-wrapper='housedetails.houseimg' :img-video='housedetails.video'></slide-img>
				</div>
				<div class="house-message" ref="houseMessage">
					<div class="message-wrapper" :class="status?'fixed':''">
						<div class="message-top">
							<h1 class="title">{{housedetails.housename}}</h1>
							<p class="num">Property No.:{{housedetails.houseno}}</p>
							<p class="address">地址：{{housedetails.address}}</p>
							<p class="school">附近学校：<span v-for="item in housedetails.school">{{item.schoolname}} </span></p>
							<p class="roomTag"><span v-for="item in housedetails.tag" :style="{'background-color':item.color}">{{item.name}}</span></p>

						</div>
						<div class="ad clearfix">
							<h1>年轻人，“拼”决定了你的生活质量</h1>
							<div class="countMain">
								<p>活动期间，提交英美澳租房拼团订单，最高可返佣2500元</p>
								<div class="helpticketsW" style="text-align: right;margin-top: 10px;display:inline-block;padding: 7px 15px;border-radius: 4px;background-color: #FF5C64;"><a href="/helptickets?act=2" target="_blank" style="color: #fff;">立即参与</a></div>
							</div>
							<!-- <count-down class="time"></count-down> -->
						</div>
						
						<!-- 拨打电话免费咨询 -->
						<div class="callFreeWrapper">
							<img src="~assets/images/housedetails/phone.svg" alt="免费电话">
							<div class="content">
								<h3>拨打电话免费咨询</h3>
								<h1>17602106152</h1>
							</div>
							<div class="wechat">
								<img src="~assets/images/housedetails/wechat.svg" alt="微信扫码联系">
								<p>微信扫码联系</p>
							</div>
							
						</div>
					</div>
				</div>
			</div>

			<div class="main">
				<Anchor class="AnchorStyle" :scroll-offset="70">
					<AnchorLink :href="'#houseIntroduce?houseid='+fullPath" title="房源概括" />
					<AnchorLink :href="'#houseManagement?houseid='+fullPath" title="房间管理" />
					<AnchorLink :href="'#houseSetting?houseid='+fullPath" title="设施保障" />
					<!-- <AnchorLink :href="'#houseTraffic?houseid='+fullPath" title="周边交通" /> -->
					<AnchorLink :href="'#houseNotice?houseid='+fullPath" title="住房租房须知" />
					<AnchorLink :href="'#housePeriphery?houseid='+fullPath" title="周边房源" />
				</Anchor>
			</div>
			<div style="width: 727px;">
				<div :id="'houseIntroduce?houseid='+fullPath" class="houseIntroduce">
					<h1 class="inforTitle">房源概括</h1>
					<div class="houseIntroduce-desc" :class="{'houseIntroduce-show': !descClose}" v-html="housedetails.housedesc" style="color: #333;"></div>

					<span class="houseIntroduce-desc-more" v-if="descClose" @click="descClose = false">更多详情</span>
					<span class="houseIntroduce-desc-close" v-else  @click="descClose = true">收起</span>
				</div>
				<div :id="'houseManagement?houseid='+fullPath">
					<h1 class="inforTitle">房间管理</h1>
					<!-- 当前所有的房间类型 -->
					<div>
						<el-button @click.native="chooseHouseType('all')">全部房间</el-button>
						<el-tooltip v-for="(item,$ii) in roomType" :key="$ii" class="item" effect="dark" :content="item.remark" placement="top"
						 @click.native="chooseHouseType(item.id)">
							<el-button>{{item.name}}</el-button>
						</el-tooltip>


						<!-- 房间显示 -->
						<ul class="roomListWrapper">
							<li v-for="(item,$$index) in allRoom" :key="$$index">
								<div class="top">
									<div class="imgWrapper" @click="viewSingleRoom(item)" style="position: relative;">
										<div v-if="item.rentstatus!='182'" class="saleouthouse"></div>
										<img :src="yihomeGlobalVariable+item.roomimg[0].imgurl | imgStrClac('l')" alt="">
									</div>
									<div class="content">
										<h1>{{item.roomname}}</h1>
										<p class="center">
											<span v-if="item.roomdesc!='/' && item.roomdesc">面积：{{item.roomdesc}}㎡</span>
											<span v-if="item.minweek">最短周期：{{item.minweek}}周</span>
											<span v-if="item.label">卫浴类型：{{item.label?item.label[0].labelname:''}}</span>
										</p>
										<p class="bottom" v-if="item.minstartdate">租期：{{item.minstartdate}}~{{item.maxenddate}}</p>
									</div> 
									<div class="buttonWrap">
										<!-- <p class="price">{{currencysymbol}}{{item.minrent}}/周</p> -->
									</div>
								</div>
								<!-- 如果 房间单间状态 rentstatus   182 代表上架中  非182代表已经售罄 -->
								<div v-if="item.rentstatus=='182'">
									<el-table :data="item.leaseperiod" stripe style="width: 100%">
										<el-table-column prop="startdate" label="开始日期">
											<template slot-scope="scope">
												<div v-if="scope.row.startdate">
													{{scope.row.startdate}}
												</div>
												<div v-else style="width: 130px;">
													<el-date-picker v-model="scope.row.startdate?scope.row.customstartdate=scope.row.startdate:scope.row.customstartdate" type="date" value-format="yyyy-MM-dd" placeholder="起租日期" :readonly="scope.row.startdate?true:false">
													</el-date-picker>
												</div>
											</template>
										</el-table-column>
										<el-table-column prop="enddate" label="结束日期">
											<template slot-scope="scope">
												<div v-if="scope.row.enddate">{{ scope.row.enddate }}</div>
												<div v-else style="width: 130px;">
													<el-date-picker  v-model="scope.row.enddate?scope.row.customenddate=scope.row.startdate:scope.row.customenddate" type="date" value-format="yyyy-MM-dd" placeholder="结束日期" :readonly="scope.row.enddate?true:false">
													</el-date-picker>
												</div>
											</template>
										</el-table-column>
										<el-table-column prop="rent" label="价格">
											<template slot-scope="scope">
												<!-- 如果nowrent不等于0 说明此租期有 优惠价格    等于0说明没有优惠价格 -->
												<!-- 按天还是按周显示   租期里面的daw   如果daw等于0 显示天  非0显示周 -->
												<!-- 如果是固定的租期则不显示 起 -->
												<p style="color: #3B44AC;">
													<span style="font-weight: bolder;">{{currencysymbol}}{{ parseInt(scope.row.nowrent)==0?scope.row.rent:scope.row.nowrent }}</span> {{scope.row.startdate&&scope.row.enddate?'':'起'}}/{{scope.row.daw=='0'?'天':scope.row.daw=='1'?'周':scope.row.daw==''?'周':'月'}}
												</p>
												<p style="color: #999;" v-if="parseInt(scope.row.nowrent)!=0"> 
													<del>{{currencysymbol}}{{scope.row.rent}}{{scope.row.startdate&&scope.row.enddate?'':'起'}}/{{scope.row.daw=='0'?'天':scope.row.daw=='1'?'周':scope.row.daw==''?'周':'月'}}</del>
												</p>
											</template>
										</el-table-column>
										<el-table-column label=""  >
											<template slot-scope="scope">
												<!-- 当前租期状态leasestatus  188代表上架中 非188代表售罄 不可预定和咨询 -->
												<div v-if="scope.row.leasestatus=='188'" style="text-align: center;">
													<el-button style="background-color: #3B44AC;outline: none;border-color: #3B44AC;" size="mini" type="primary" @click="handleConsultation(item, scope.row)">咨询</el-button>
													<el-button style="background-color: #F56C6D;outline: none;border-color: #F56C6C;" size="mini" type="danger" @click.navite="handleReserve(item, scope.row)">预定</el-button>
												</div>
												<div v-else style="text-align: center;">
													<el-button size="mini" type="danger" disabled style="background-color: #B2B2B2;border-color: #B2B2B2;">已租罄</el-button>
												</div>
											</template>
										</el-table-column>
									</el-table>
								</div>
								<div v-else>
									<p style="text-align: center;padding: 20px;">该房间已租罄</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div :id="'houseSetting?houseid='+fullPath" class="houseSetting">
					<h1 class="inforTitle">设施保障</h1>
					<div class="housefacility" v-for="item in housedetails.housefacility">
						<p class="housefacilityTitle">{{item.listname}}</p>
						<ul>
							<li v-for="listItem in item.facility">
								<div><img :src="yihomeGlobalVariable+listItem.iconurl" alt=""></div>
								<p>{{listItem.facilityname}}</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</b-container>
		<b-container fluid>
			<div id="map"></div>
			<!-- <div :id="'houseTraffic?houseid='+fullPath">
				<b-container>
					<h1 class="inforTitle">周边交通</h1>
				</b-container>
				<div style="position: relative;">
					<div style="height: 520px;" id="map"></div>
					<div class="viewMpaTools">
						<p class="title">请选择目的地：</p>
						<el-select v-model="endAddress" placeholder="请选择地址" style="width: 100%;" @change="selectAddress">
							<el-option v-for="item in addressData" :key="item.id" :label="item.addressname" :value="item.addressdetail">
							</el-option>
						</el-select>
						<div style="display: flex;margin-top: 10px;">

							<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
								<el-tab-pane>
									<span slot="label"><img style="width: 15px;" src="@/assets/images/map/walk.svg" alt="">步行</span>

									距离{{distance}}步行需要{{vehicletime}}
								</el-tab-pane>
								<el-tab-pane>
									<span slot="label"><img style="width: 15px;" src="@/assets/images/map/bicycle.svg" alt="">骑行</span>

									距离{{distance}}骑行需要{{vehicletime}}
								</el-tab-pane>
								<el-tab-pane>
									<span slot="label"><img style="width: 15px;" src="@/assets/images/map/subway.svg" alt="">公交</span>

									距离{{distance}}公交需要{{vehicletime}}
								</el-tab-pane>
								<el-tab-pane>
									<span slot="label"><img style="width: 15px;" src="@/assets/images/map/taxi.svg" alt="">驾车</span>

									距离{{distance}}驾车需要{{vehicletime}}
								</el-tab-pane>
							</el-tabs>
						</div>
					</div>
				</div>

			</div> -->
			<b-container>
				<div :id="'houseNotice?houseid='+fullPath">
					<h1 class="inforTitle">住房租房须知</h1>

					<div style="color: #333;" v-html="housedetails.termcontent"></div>
				</div>

				<div :id="'housePeriphery?houseid='+fullPath" class="todaySpecial" v-loading="loadingAroundHouseStatus">
					<h1 class="inforTitle">周边房源</h1>
					<b-row v-if="loadingAroundHouseStatus">
						<h1>暂无周边房源</h1>
					</b-row>
					<b-row v-if="!loadingAroundHouseStatus">
						<b-col md="6" sm="6" lg="4" class="listitem" v-for="(item,$index) in aroundHousedata" :key="$index">
							<a :href="'/housedetail?houseid='+item.id" target="_blank" class="a-wrap" style="box-shadow: 0 0 4px rgba(0,0,0,0.10);">
								<div class="imgWrap" style="height: 250px;overflow: hidden;display: flex;border-radius: 4px;">
									<div class="el-image">
										<img :src="yihomeGlobalVariable+item.imgurl" class="el-image__inner" style="object-fit: cover;">
									</div>
								</div>
								<div class="contentWrap">
									<h3>{{item.housename}}</h3>
									<p class="price"><b>{{item.currencysymbol}}{{item.price}}</b><span>起/{{item.daw=='0'?'天':'周'}}</span></p>
									<div class="country">
										<span v-for="(listitem,$$$index) in item.tag?item.tag.slice(0,3):[]" :key="$$$index" :style="{ 'background-color':listitem.color,'font-size':'10px','color': '#FFFFFF','letter-spacing': '0.64px','padding':'3px 7px','margin-right':'6px','margin-bottom':'10px'}">
											{{listitem.name}}
										</span>
									</div>
									<div class="buttonWrap">
										<a target="_blank" :href="'/housedetail?houseid='+item.id" style="display: flex;justify-content: space-between;width: 100%;">
											<span>点击查看</span> <i style="color: #333;" class="el-icon-right"></i>
										</a>
									</div>
								</div>
							</a>
						</b-col>
					</b-row>
				</div>
			</b-container>
		</b-container>

		<!-- 单间预定 -->
		<el-dialog title="申请人信息" :visible.sync="reserveStatus" :before-close="reserveFormClose" custom-class="reserveWrapper"
		 :lock-scroll="true" top="8vh" center :close-on-click-modal="false" :close-on-press-escape="false">
			<el-form :model="reserveForm" :rules="reserveRules" ref="reserveForm" label-position="top">
				<el-form-item label="姓名" prop="name">
					<el-input v-model="reserveForm.name" autocomplete="off" placeholder="请输入您的姓名"></el-input>
				</el-form-item>
				<el-form-item label="手机号" prop="phone">
					<el-input v-model="reserveForm.phone" autocomplete="off" placeholder="请输入您的手机号"></el-input>
				</el-form-item>
				<el-form-item label="性别" prop="sex">
					<el-select v-model="reserveForm.sex" placeholder="请选择性别" style="width: 100%;">
						<el-option label="男" value="男"></el-option>
						<el-option label="女" value="女"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="微信" prop="Wechat">
					<el-input v-model="reserveForm.WeChat" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="邮箱" prop="email">
					<el-input v-model="reserveForm.email" autocomplete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
<!--				<el-button @click="reserveFormReset('reserveForm')">重 置</el-button>-->
				<el-button @click="reserveStatus = false">取消</el-button>
				<el-button type="primary" @click="reserveFormSubmit('reserveForm')">提 交</el-button>
			</div>
		</el-dialog>
		<!-- 查看当前单间的图片信息 -->
		<el-dialog center custom-class="viewSingleRoomWrap" :visible.sync="viewSingleRoomStatus" :close-on-click-modal="false"
		 :close-on-press-escape="false">
			<div v-if="viewSingleRoomStatus">
				<view-single :view-data="viewimgData"></view-single>
			</div>
			<span slot="footer" class="dialog-footer">
				<el-button type="primary" @click="viewSingleRoomStatus = false">关 闭</el-button>
			</span>
		</el-dialog>

		<el-dialog center top="0" width="100%" custom-class="videohouse" :visible.sync="videohouse" :close-on-click-modal="false"
		 :close-on-press-escape="false">
			<div v-if="videohouse" class="videohouseContent">
				<b-container>
					<div class="videoContent">
						<i class="el-icon-close" @click="videohouse = false"></i>
					</div>
					<div class="videoMain">
						<video width="800" height="600" controls id="myVideo">
							<source :src="'http://www.inyihome.com'+housedetails.video[0].videourl" type="video/mp4">
							<source :src="'http://www.inyihome.com'+housedetails.video[0].videourl" type="video/ogg">
							您的浏览器不支持 HTML5 video 标签。
						</video>
					</div>
				</b-container>
			</div>
			<span slot="footer" class="dialog-footer">
				<!-- <el-button type="primary">确 定</el-button> -->
			</span>
		</el-dialog>
		<Modal v-model="viewFullimgWrapper" fullscreen title="" class-name="viewFullimgWrapper">
			<b-container>
				<slide-img2 :img-wrapper='housedetails.houseimg'></slide-img2>
			</b-container>
			<div slot="footer">
			</div>
		</Modal>
	</section>
</template>

<script>
	import $ from 'jquery';
	import Swiper from "swiper"
	import viewSingle from '@/components/viewSingleroom.vue';
	import countDown from '@/components/countDown.vue';
	import slideImg from '@/components/slideImg/slideImg.vue';
	import slideImg2 from '@/components/slideImg/index.vue';
	export default {
		components: {
			viewSingle,
			countDown,
			slideImg,
			slideImg2
		},
		data() {
			return {
				descClose: true,
				viewFullimgWrapper: false,
				videohouse: false,
				iscollect: false,
				activeName: '',
				status: false,
				fullPath: '',
				housedetails: {},
				loadingAroundHouseStatus: false,
				aroundHousedata: [],
				addressData: [],
				endAddress: '',
				myaddress: '',
				timeArray: [],
				vehicletime: '',
				distance: '',
				travelMode: '',
				icon: "https://www.inyihome.com/img/WALKING2.svg",
				typetext: "步行",
				map: '',
				//房间类型
				roomType: [],
				//所有房间
				allRoom: [],
				oldAllRoom: [],
				currencysymbol: '',

				reserveStatus: false,
				reserveForm: {
					name: '',
					phone: '',
					sex: '',
					email: '',
					WeChat: ''
				},
				reserveRules: {
					name: [{
						required: true,
						message: '请输入您的姓名',
						trigger: 'blur'
					}, ],
					phone: [{
						required: true,
						message: '请输入您的手机号',
						trigger: 'blur'
					}],
					sex: [{
						required: true,
						message: '请选择性别',
						trigger: 'change'
					}]
				},
				viewSingleRoomStatus: false,
				viewimgData: [],
				currentHouseId: '',
				currentRoomId: '',
				currentTenancyId: '',
				fullscreenLoading: false,
			}
		},
		filters:{
			imgStrClac:function(str,num){
				let res = str.replace(/(.*)\./,'$1'+num+'.');   //$1 + 替换后的字符
				return res;
			}
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll, true);
			console.log(this.$route)
			this.fullPath = this.$route.query.houseid;

			if (this.$route.query.houseid) {
				this.fullPath = this.$route.query.houseid;
			} else {
				var str = this.$route.fullPath;
				this.fullPath = this.getCaption(str);
			}

			this.getCurrentHouseDetails(this.fullPath);

			if (process.browser) {
				if (localStorage.getItem('backurl')) {
					localStorage.removeItem('backurl');
				}
			}


		},
		updated() {
			//icon: "https://www.inyihome.com/newStatic/house.svg",
		},
		methods: {
			viewFullimgWrapperMethod(event) {
				console.log(event.target.id)
				if (event.target.id == "test") {
					this.viewFullimgWrapper = true;
					setTimeout(function() {
						var galleryThumbs2 = new Swiper('.gallery-thumbs2', {
							spaceBetween: 10,
							slidesPerView: 6,
							freeMode: true,
							watchSlidesVisibility: true,
							watchSlidesProgress: true,
						});
						var galleryTop2 = new Swiper('.gallery-top2', {
							spaceBetween: 10,
							navigation: {
								nextEl: '.swiper-button-next',
								prevEl: '.swiper-button-prev',
							},
							thumbs: {
								swiper: galleryThumbs2
							},
							loop: true,
						});
					}, 900)
				}
				//
			},
			houseVideo(videoData) {
				console.log(videoData)
				this.videohouse = true;
				setTimeout(function() {
					document.getElementById("myVideo").play();
				}, 400)
			},
			collect() {
				if (process.browser) {
					let userid = localStorage.getItem('userid');
					let license = localStorage.getItem('checklicense');
					this.$request.checklogin({
						loginid: userid,
						license: license
					}).then(res => {
						if (res.status) {
							let houseid = this.housedetails.id;
							this.$request.insertfavorite({
								userid: userid,
								houseid: houseid
							}).then(res => {
								if (res == 'success') {
									this.iscollect = true;
								}
							}).catch(e => {

							})
						} else {
							localStorage.setItem('backurl', this.$route.fullPath);
							this.$router.push({
								path: '/login'
							})
						}
					}).catch(e => {
						localStorage.setItem('backurl', this.$route.fullPath);
						this.$router.push({
							path: '/login'
						})
					})
				}
			},
			delcollect() {
				if (process.browser) {
					let userid = localStorage.getItem('userid');
					let houseid = this.housedetails.id;
					this.$confirm('是否取消收藏此房间', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					}).then(() => {
						this.$request.deletefavorite({
							userid: userid,
							houseid: houseid
						}).then(res => {
							if (res == 'success') {
								this.iscollect = false;
							}
						}).catch(e => {

						})

					}).catch(() => {

					});

				}
			},
			checkCollect() {
				if (process.browser) {
					let userid = localStorage.getItem('userid');
					let houseid = this.housedetails.id;
					this.$request.valfavorite({
						userid: userid,
						houseid: houseid
					}).then(res => {
						if (res) {
							this.iscollect = true;

						} else {
							this.iscollect = false;
						}
					}).catch(e => {

					})
				}
			},
			chooseHouseType(currentid) {
				console.log(currentid)
				if (currentid == 'all') {
					this.allRoom = this.oldAllRoom;
					return;
				}
				this.allRoom = this.oldAllRoom;
				let data = [];
				this.allRoom.forEach((item, index) => {
					if(item.roomtag){
						item.roomtag.forEach((item2, index2) => {
							if (item2.id == currentid) {
								console.log(item)
								data.push(item);
								this.allRoom = data;
							}
						})
					}
				})
			},
			handleClick(tab, event) {
				console.log(tab.index);


				if (!this.endAddress) {

					return;
				}
				//var map = new google.maps.Map(document.getElementById('map'));
				if (tab.index == 0) {
					this.typetext = "步行";
					this.icon = "https://www.inyihome.com/img/WALKING2.svg";
					this.travelMode = google.maps.TravelMode.WALKING;

				} else if (tab.index == 1) {
					this.typetext = "骑行";
					this.icon = "https://www.inyihome.com/img/BICYCLING2.svg";
					this.travelMode = google.maps.TravelMode.BICYCLING;
				} else if (tab.index == 2) {
					this.typetext = "公交";
					this.icon = "https://www.inyihome.com/img/TRANSIT2.svg";
					this.travelMode = google.maps.TravelMode.TRANSIT;
				} else if (tab.index == 3) {
					this.typetext = "驾车";
					this.icon = "https://www.inyihome.com/img/DRIVING2.svg";
					this.travelMode = google.maps.TravelMode.DRIVING;
				}

				this.dropMap(this.myaddress);
				this.calcRoute2(this.myaddress, this.endAddress);


			},
			selectAddress(val) {
				this.endAddress = val;
				this.calcRoute2(this.myaddress, val);
			},
			getCaption(obj) {
				var index = obj.lastIndexOf("\=");
				obj = obj.substring(index + 1, obj.length);
				return obj;
			},
			handleScroll() {
				if ((window.scrollY > 150 || window.pageYOffset > 150) && $('#map').offset().top - $(window).scrollTop() > 454) {
					this.status = true;
				} else {
					this.status = false;
				}
			},
			getCurrentHouseDetails(number) {
				const houseloading = this.$loading({
					lock: true,
					text: '正在加载',
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.7)'
				});
				this.$request.findhousedetail({
					houseid: number
				}).then(res => {
					houseloading.close();
					if (!res.country.id) {
						this.$confirm('当前房屋信息不存在', '提示', {
							confirmButtonText: '确定',
							cancelButtonText: '取消',
							type: 'warning'
						}).then(() => {
							this.$router.push({
								path: '/'
							})
						}).catch(() => {
							this.$router.push({
								path: '/'
							})
						});
						return
					} else {
						this.housedetails = res;
						this.myaddress = res.address;
						//this.dropMap(res.address);
						//周边房源
						this.getAroundHouse(res.cityid);
						
						this.addressData = res.addresses;
						if(res.school){
							// 地址数组里面的字段名称和学校里面的字段名称不同  组件select使用的是地址数组里面的字段  需要把学校里面的字段变成和地址里面的字段相同
							
							res.school.forEach((item,index)=>{
								console.log(item,111)
								item['addressdetail'] = item['address']
								item['addressname'] = item['schoolname']
							})
							this.addressData = res.addresses.concat(res.school);
						}
						
						
						//this.endAddress = this.addressData[0].addressdetail;
						/* 当前房源的房间类型 */
						this.roomType = res.housetag;
						/* 所有房间 */
						this.allRoom = res.room;
						this.oldAllRoom = res.room;

						this.currencysymbol = res.country.currencysymbol;


						/* 检查是否收藏房间 */
						this.checkCollect();

					}
				}).catch(e => {
					houseloading.close();
					this.$message.error('网络错误');
					console.log(e,88888888)
				})
			},
			dropMap(address) {
				var vthis = this;
				var geocoder = new google.maps.Geocoder();
				geocoder.geocode({
					address: address
				}, function(
					results,
					status
				) {
					vthis.directionsDisplay = new google.maps.DirectionsRenderer();
					//自定义缩放，默认中心点
					var myOptions = {
						zoom: 13,
						disableDefaultUI: true,
						mapTypeId: google.maps.MapTypeId.ROADMAP,
						center: results[0].geometry.location
					};
					vthis.map = new google.maps.Map(
						document.getElementById("map"),
						myOptions
					);
					var marker = new google.maps.Marker({
						position: results[0].geometry.location,
						map: vthis.map,
						labelAnchor: new google.maps.Point(20, 0),
						icon: "https://www.inyihome.com/newStatic/house.svg",
					});
					vthis.directionsDisplay.setMap(vthis.map);
					google.maps.event.addListener(marker, "click", function() {
						map.setZoom(17);
						map.setCenter(marker.getPosition());
					});
				});

			},
			calcRoute2(start, end) {
				var vthis = this;
				var travelMode = this.travelMode ? this.travelMode : google.maps.TravelMode.WALKING;
				var directionsService = new google.maps.DirectionsService();
				var marker;
				var request = {
					origin: start,
					destination: end,
					travelMode: travelMode
				};
				directionsService.route(request, function(response, status) {
					vthis.vehicletime = response.routes[0].legs[0].duration.text;
					vthis.distance = response.routes[0].legs[0].distance.text;
					if (status == google.maps.DirectionsStatus.OK) {
						vthis.directionsDisplay.setDirections(response);
					}
					if (marker) {
						marker.setMap(null);
					}
					marker = new google.maps.Marker({
						position: response.routes[0].overview_path[
							Math.ceil(response.routes[0].overview_path.length / 2)
						],
						map: vthis.map,
						icon: "https://inyihome.com/img/" + travelMode + "2.svg",
						labelContent: response.routes[0].legs[0].distance.text +
							"/" +
							response.routes[0].legs[0].duration.text,
						labelClass: "roomdetail-label-map",
						labelAnchor: new google.maps.Point(20, 0)
					});
				});
			},
			//获取周边的房源
			getAroundHouse(id) {
				this.loadingAroundHouseStatus = true;
				this.$request.getfindhouse({
					cityid: id
				}).then(res => {
					this.loadingAroundHouseStatus = false;
					console.log(res.length)
					if (res.length > 3) {
						var result = res.splice(0, 3);
						console.log(result)
						this.aroundHousedata = result;
					} else {
						this.aroundHousedata = res;
					}


				}).catch(e => {
					this.loadingAroundHouseStatus = false;
				})
			},

			//房间预定
			handleReserve(item, currentitem) {
				if (process.browser) {

					let userid = localStorage.getItem('userid');
					let license = localStorage.getItem('checklicense');
					this.$request.checklogin({
						loginid: userid,
						license: license
					}).then(res => {
						if (res.status) {
							console.log(currentitem)
							if(currentitem.startdate){
								currentitem.customstartdate = currentitem.startdate;
							}
							if(currentitem.enddate){
								currentitem.customenddate = currentitem.enddate;
							}
							if (!currentitem.customstartdate) {
								this.$message({
									message: '请选择当前租期开始时间',
									type: 'warning'
								});
								return;
							}
							if (!currentitem.customenddate) {
								this.$message({
									message: '请选择当前租期结束时间',
									type: 'warning'
								});
								return;
							}

							this.$router.push({
								path: '/order',
								query: {
									startdate: currentitem.customstartdate,
									enddate: currentitem.customenddate,
									leaseperiodid: currentitem.id
								}
							});

						} else {
							localStorage.setItem('backurl', this.$route.fullPath);

							this.$router.push({
								path: '/login'
							})
						}
					}).catch(e => {

					})
				}
			},
			//房间咨询
			handleConsultation(item, currentitem) {
				/* this.$request.checklogin().then(res=>{
					console.log(res)
				})
				console.log(currentitem)
				if(currentitem.minstartdate==''){
					this.$message({
						message: '请选择当前租期开始时间',
						type: 'warning'
					});
					return;
				} */
				this.reserveStatus = true;
				console.log(item.houseid); //房源ID
				console.log(item.id); //房间ID
				console.log(currentitem.id); //租期ID

				this.currentHouseId = item.houseid;
				this.currentRoomId = item.id;
				this.currentTenancyId = currentitem.id;
			},
			reserveFormSubmit(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						console.log(this.reserveForm)
						let parmasData = {
							houseid: this.currentHouseId,
							roomid: this.currentRoomId,
							leaseperiodid: this.currentTenancyId,
							username: this.reserveForm.name,
							email: this.reserveForm.email,
							phone: this.reserveForm.phone,
							sex: this.reserveForm.sex,
							weixin: this.reserveForm.WeChat
						}
						this.fullscreenLoading = true;
						this.$request.houseapply(parmasData).then(res => {
							this.fullscreenLoading = false;
							if (res.status) {
								this.$message({
									message: '数据提交成功，客服稍后会和您联系',
									type: 'success'
								});
								this.reserveStatus = false;
								window._agl && window._agl.push(['track', ['success', {t: 3}]])
							} else {
								this.$message.error(res.msg);
							}
						}).catch(e => {
							this.fullscreenLoading = false;
							this.$message.error('网络错误');
						})


					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			reserveFormReset(formName) {
				this.$refs[formName].resetFields();
			},
			reserveFormClose(done) {
				this.$refs['reserveForm'].resetFields();
				done();
				/* this.$confirm('确认关闭？').then(_ => {
					this.$refs['reserveForm'].resetFields();
					done();
				}).catch(_ => {
					
				}); */
			},
			viewSingleRoom(item) {
				if (item.rentstatus != '182') {
					return;
				}
				this.$nextTick(() => {
					this.viewSingleRoomStatus = true;
				});
				this.viewimgData = [];
				this.viewimgData = item.roomimg;

				console.log(item.roomimg)

			}

		},
		destroyed() {
			window.removeEventListener('scroll', this.handleScroll); //  离开页面清除（移除）滚轮滚动事件
		}
	}
</script>

<style scoped="scoped">
	
	.saleouthouse{
		position: absolute;
		background-size:100% 100%;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.15);
		background-image: url(~assets/images/saleout_s.png);
		background-position: center;
		background-repeat: no-repeat;
		border-radius: 4px;
	}
	.roomTag span {
		font-family: PingFangSC-Regular;
		font-size: 10px;
		color: #FFFFFF;
		letter-spacing: 0.64px;
		padding: 3px 7px;
		margin-right: 6px;
		border-radius: 4px;
		white-space: nowrap;
		margin-bottom: 6px;
		display: inline-block;
	}

	.top-main-box {
		position: relative;
	}

	.top-main-box .img-loop-wrap {
		width: 727px;
		overflow: hidden;
		position: relative;
	}

	.top-main-box .house-message {
		width: 352px;
		position: absolute;
		top: 0;
		right: 0;
	}

	.top-main-box .house-message .message-top {
		-height: 290px;
		padding: 20px;
		background: #FFFFFF;
		border: 1px solid #E6E6E6;
		border-radius: 4px;
		margin-bottom: 20px;
	}

	.top-main-box .house-message .message-top .title {
		font-family: PingFangSC-Medium;
		font-size: 28px;
		color: #333333;
		letter-spacing: 1.98px;
		margin-bottom: 15px;
	}

	.top-main-box .house-message .message-top .num,
	.top-main-box .house-message .message-top .address,
	.top-main-box .house-message .message-top .school {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #333333;
		letter-spacing: 0.99px;
		margin-bottom: 15px;
	}

	.top-main-box .house-message .ad {
		width: 100%;
		/* height: 95px;
		background-image: url('https://pcpic.uhouzz.com/static18/client/img/lower_price.34c6076.png');
		background-size: cover; */
		background-color: #FFDD5C;
		padding: 12px;
		border-radius: 4px;
		position: relative;
	}
	.helpticketsW{
		position: absolute;
		bottom: 4px;
		right: 11px;
	}
	.top-main-box .house-message .ad h1 {
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #333333;
		letter-spacing: 0.53px;
		line-height: 22px;
		margin-bottom: 10px;
	}

	.top-main-box .house-message .ad .countMain {
		display: flex;
	}

	.top-main-box .house-message .ad .countMain p {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #333333;
		letter-spacing: 0.6px;
		line-height: 17px;
		margin-bottom: 30px;
	}

	.top-main-box .house-message .ad .countMain button {
		border-radius: 100px;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #FFFFFF;
		letter-spacing: 0.4px;
		background: #FF5C64;
		border: 0;
		outline: none;
	}

	.top-main-box .house-message .ad .time {
		font-family: PingFangSC-Medium;
		font-size: 12px;
		color: #FF4A5E;
		letter-spacing: 0.4px;
	}
	.top-main-box .house-message .callFreeWrapper{
		display: flex;
		background: #626AD1;
		border-radius: 4px;
		margin-top: 20px;
		justify-content: space-around;
		padding: 5px 0px 5px 5px;
	}
	.top-main-box .house-message .callFreeWrapper .content h3{
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #FFFFFF;
		margin-bottom: 7px;
	}
	.top-main-box .house-message .callFreeWrapper .content h1{
		font-family: PingFangSC-Semibold;
		font-size: 18px;
		color: #FFFFFF;
	}
	.top-main-box .house-message .callFreeWrapper .content,.top-main-box .house-message .callFreeWrapper .wechat{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.top-main-box .house-message .callFreeWrapper .wechat p{
		font-family: PingFangSC-Regular;
		font-size: 10px;
		color: #FFFFFF;
		text-align: center;
		margin-top: 5px;
	}
	.message-wrapper {
		width: 352px;
	}

	.house-message .fixed {
		position: fixed;
		transition: all .5s;
		top: 40px;
	}

	.gallery-top {
		border-radius: 4px;
		height: 546px;
		margin-bottom: 12px;
	}

	.gallery-top img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.controller-slide {
		width: 110px;
		border-radius: 4px;
	}

	.gallery-thumbs {
		height: 83px;
	}

	.controller-slide img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.main {
		width: 727px;
	}

	/* 房源概括 */
	.houseIntroduce {
		padding-top: 30px;
		position: relative;
	}

	.houseIntroduce-desc{
		transition: all .4s linear;
		max-height: 134px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.houseIntroduce-show{
		max-height: 1000px;
	}

	.houseIntroduce-close{

	}
	.houseIntroduce-desc-close{
		position: absolute;
		bottom: 0px;
		left: -57px;
		color: #3B44AC;
		cursor: pointer;
		transition: all .3s linear;
	}
	.houseIntroduce-desc-close:hover, .houseIntroduce-desc-more:hover{
		color: #0091ff;
	}
	.houseIntroduce-desc-more{
		color: rgb(59, 68, 172);
		cursor: pointer;
	}

	.inforTitle {
		font-family: PingFangSC-Semibold;
		font-size: 20px;
		color: #333333;
		letter-spacing: 1.42px;
		line-height: 28px;
		margin-bottom: 20px;
		margin-top: 30px;
	}

	.housefacility .housefacilityTitle {
		font-family: PingFangSC-Semibold;
		font-size: 16px;
		color: #333333;
		letter-spacing: 0.8px;
		line-height: 22px;
		margin-bottom: 20px;
	}

	.housefacility ul {
		display: flex;
		flex-wrap: wrap;
	}

	.housefacility ul li {
		list-style: none;
		width: 20%;
		text-align: center;
		margin-bottom: 40px;
	}

	.housefacility ul li img {
		width: 36px;
		height: auto;
	}

	.housefacility ul li p {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #333333;
		letter-spacing: 0.7px;
		line-height: 20px;
		margin-top: 8px;
	}

	.todaySpecial .listitem .contentWrap {
		margin-bottom: 36px;
		background-color: #fff;
		padding: 26px 25px;
	}

	.todaySpecial .listitem .contentWrap h3 {
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #333333;
		letter-spacing: 1.33px;
		line-height: 23px;
		margin-bottom: 10px;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.todaySpecial .listitem .contentWrap .price {
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #3B44AC;
		letter-spacing: 1.13px;
		margin-bottom: 10px;
		line-height: 22px;
	}

	.todaySpecial .listitem .contentWrap .price span {
		font-family: PingFangSC-Medium;
		font-size: 12px;
		color: #000000;
	}

	.todaySpecial .listitem .contentWrap .country {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #484848;
		letter-spacing: 1.16px;
		margin-bottom: 20px;
	}

	.todaySpecial .listitem .buttonWrap {
		display: flex;
		justify-content: space-between;
		max-width: 314px;
		height: 38px;
		line-height: 38px;
		border: 1px solid #464646;
		border-radius: 4px;
		margin: 0 auto;
		padding: 0 15px 0 20px;
		cursor: pointer;
	}

	.todaySpecial .listitem .buttonWrap:hover {
		color: #fff;
		background-color: #3B44AC;
		border-color: #3B44AC;
		transition: all .5s;
	}

	.todaySpecial .listitem .buttonWrap:hover span {
		color: #fff;
	}

	.todaySpecial .listitem .buttonWrap span {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #333333;
		letter-spacing: 1.16px;
	}

	.todaySpecial .listitem .buttonWrap i {
		line-height: 38px;
	}
	.todaySpecial .listitem .a-wrap{
		display: block;
	}
	.todaySpecial .listitem:hover .a-wrap{
		transition: all 0.5s;
		box-shadow: 0 1px 6px rgba(0,0,0,.2);
	}
	/* 地图设置 */
	.viewMpaTools {
		position: absolute;
		top: 35px;
		left: calc(50% - 564px);
		-width: 310px;
		-height: 123px;
		padding: 15px 22px;
		background: #FFFFFF;
		border-radius: 4px;
	}

	.viewMpaTools .title {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #9E9E9E;
		letter-spacing: 0.85px;
		margin-bottom: 10px;
	}

	.roomListWrapper {
		margin-top: 20px;
	}

	.roomListWrapper li {
		list-style: none;
		padding: 12px;
		background: #FFFFFF;
		border: 1px solid #E6E6E6;
		border-radius: 2px;

		margin-bottom: 12px;
		position: relative;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.08);
	}

	.roomListWrapper li .top {
		display: flex;
		justify-content: flex-start;
	}

	.roomListWrapper li .imgWrapper {
		width: 100px;
		height: 75px;
		flex-shrink: 0;
		cursor: pointer;
	}

	.roomListWrapper li .imgWrapper img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.roomListWrapper li .content {
		margin-left: 12px;
	}

	.roomListWrapper li .content h1 {
		font-family: PingFangSC-Semibold;
		font-size: 14px;
		color: #333333;
		letter-spacing: 0.99px;
		line-height: 20px;
		margin-bottom: 7px;
	}

	.roomListWrapper li .content .center {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #666666;
		letter-spacing: 0.85px;
		margin-bottom: 7px;
		line-height: 17px;
	}

	.roomListWrapper li .content .center span {
		margin-right: 20px;
	}

	.roomListWrapper li .content .bottom {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #666666;
		letter-spacing: 0.85px;
		line-height: 17px;
	}

	.roomListWrapper li .buttonWrap {
		position: absolute;
		right: 12px;
		display: flex;
		flex-direction: column;
		height: 79%;
		justify-content: space-between;
	}

	.roomListWrapper li .buttonWrap .price {
		font-family: PingFangSC-Medium;
		font-size: 15px;
		color: #FA5555;
		letter-spacing: 1.06px;
		line-height: 21px;
	}

	.roomListWrapper li .buttonWrap .confirm {
		padding: 4px 17px;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #FFFFFF;
		letter-spacing: 0.85px;
		background: #FB5058;
		border-radius: 4px;
	}

	.roomListWrapper li .buttonWrap .confirm span:nth-child(2) {
		margin: 0 8px;
	}

	.viewHouseTool {
		position: absolute;
		bottom: 20px;
		right: 20px;
		z-index: 100;
	}

	.houseCollect {
		position: absolute;
		top: 20px;
		right: 20px;
		z-index: 100;
	}

	.houseCollect .p {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #333333;
		letter-spacing: 0.99px;
		line-height: 20px;
		padding: 6px 10px;
		background: #FFFFFF;
		border-radius: 3px;
		display: inline-block;
		cursor: pointer;
	}

	.houseCollect i {
		font-size: 16px;
		margin-right: 6px;
	}
</style>
<style>
	.videohouse {
		height: 100%;
		margin-bottom: 0;
		background-color: #000;
	}

	.videohouse .el-dialog__header {
		display: none;
	}

	.videohouseContent .videoContent {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		margin-bottom: 20px;
	}

	.videohouseContent .videoContent i {
		font-size: 30px;
		cursor: pointer;
		color: #fff;
	}

	.videohouseContent .videoContent i:hover {
		transform: rotate(90deg);
		transition: all 0.5s;
	}

	.videohouse .videoMain {
		text-align: center;
	}

	.houseIntroduce {
		font-size: 15px;
	}

	.houseIntroduce ol li,
	.houseIntroduce ul li {
		list-style: none !important;

	}

	#map .gmnoprint {
		display: none;
	}

	.AnchorStyle {
		margin-top: 20px;
	}

	.AnchorStyle .ivu-anchor {
		display: flex !important;
	}

	.AnchorStyle .ivu-anchor-link {
		padding: 20px 0;
		margin-right: 15px;
	}

	.AnchorStyle .ivu-anchor-link a {
		font-family: PingFangSC-Regular;
		font-size: 15px;
		color: #999999;
	}

	.AnchorStyle .ivu-anchor-link-active {
		border-bottom: 2px solid #3B44AC;
	}

	.AnchorStyle .ivu-anchor-link-active>.ivu-anchor-link-title {
		color: #3B44AC;

	}

	.AnchorStyle .ivu-anchor-ink:before {
		width: 0;
	}

	.AnchorStyle .ivu-anchor-wrapper {
		border-bottom: 1px solid #e8e8e8;
		background-color: #fff;
	}

	.reserveWrapper {
		max-width: 500px;
		box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.10);
		border-radius: 4px;
	}

	.reserveWrapper .el-form--label-top .el-form-item__label {
		padding-bottom: 0;
		margin-bottom: 0;
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #333333;
		letter-spacing: 0.99px;
		line-height: 22px;
	}

	.reserveWrapper .dialog-footer .el-button--primary {
		width: 187px;
		background-color: #3B44AC;
	}

	.viewSingleRoomWrap .swiper-slide {
		text-align: center;
	}

	.viewSingleRoomWrap img {
		max-height: 537px;
		width: 100%;
		object-fit: cover;
	}

	.roomListWrapper .el-date-editor.el-input {
		width: 135px !important;
	}
	.viewFullimgWrapper .ivu-modal-body{
		display: flex;
		align-items: center;
	}
</style>
