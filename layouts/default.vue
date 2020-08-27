<template>
  <section>
		<b-container fluid class="header" :id="headerStatus ? 'headerYihome':'otherYihome'">
			<div class="header-top">
				<div style="display: flex;align-items:center;justify-content: space-between;">
					<div class="logo">
						<nuxt-link to="/"><img src="~assets/images/header/logo.svg" alt="忆家 YIHOME logo"></nuxt-link>
					</div>
					<div class="menuMain">
						<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
							<el-menu-item index="/">首页</el-menu-item>
							<el-submenu index="2999" popper-class="currentPopper">
							    <template slot="title">立即找房</template>
								<el-menu-item class="navSearchWrap">
									<div v-for="(item,$index) in menuData" :key="$index">
										<p class="country">{{item.zhname}}</p>
										<p class="cityWrap">
											<span class="city" v-for="(listitem,$index2) in item.city" :key="$index2">
												<a :href="'/findhouse?countryId='+listitem.countryId+'&cityId='+listitem.id+''">{{listitem.name}}</a>
											</span>
										</p>
									</div>
								</el-menu-item>
							</el-submenu>
							<el-menu-item index="/stories">精彩故事</el-menu-item>
<!--							<el-menu-item index="/abroad">留学动态</el-menu-item>-->
							<el-menu-item index="/about">关于YIHOME</el-menu-item>
<!--							<el-submenu index="3444" popper-class="aboutItemMenu">-->
<!--							    <template slot="title">关于YIHOME</template>-->
<!--								<el-menu-item index="/about" id="about">关于我们</el-menu-item>-->
<!--								<el-menu-item index="/join-us" id="about">加入我们</el-menu-item>-->
<!--								<el-menu-item index="/contact" id="about">联系我们</el-menu-item>-->
<!--							</el-submenu>-->

<!--							<el-menu-item v-if="!islogin" index="/login">商家入驻</el-menu-item>-->

							<!-- <el-menu-item index="/about">关于我们</el-menu-item>
							<el-menu-item index="/join-us">加入我们</el-menu-item>
							<el-menu-item index="/contact">联系我们</el-menu-item> -->
						</el-menu>
					</div>
				</div>
				<div class="logoRegister">
					<div v-if="islogin" style="display: inline-block;"><!-- <nuxt-link to='/profile'>个人中心</nuxt-link> -->
						<div v-show="!ispersonalCenter">
							<el-dropdown trigger="click">
								<span class="el-dropdown-link" style="color: #fff;outline: none;cursor: pointer;">
									个人中心<i class="el-icon-arrow-down el-icon--right"></i>
								</span>
								<el-dropdown-menu slot="dropdown">
									<el-dropdown-item icon="el-icon-menu"><nuxt-link to='/profile'>基本信息</nuxt-link></el-dropdown-item>
									<el-dropdown-item icon="el-icon-switch-button" @click.native="logout">安全退出</el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
						</div>
					</div>
					<div v-else style="display: inline-block;">
						<span><nuxt-link to='/register'>注册</nuxt-link></span><span class="line">|</span><nuxt-link to='/login'>登录</nuxt-link><span></span>
					</div>
<!--					<span style="color: #fff;margin-left: 30px;"><a href="https://www.inyihome.com/en">EN</a></span>-->
				</div>
			</div>
		</b-container>
		<div>
			<nuxt />
			<div class="freeCall" @click="freeCall">
				<Icon type="md-call" />
				<p>免费通话</p>
			</div>
		</div>
		<section v-if="footerStatus">
			<web-footer></web-footer>
		</section>
		<Modal
			title="在线免费通话"
			v-model="freeCallStatus"
			width="350">
			<div class="freeWrapper">
				<p class="freeContent">输入您的电话号码，点击提交，稍后您将接到我们的电话，该通话对您<span style="color: #FB5058;">完全免费</span>，请您耐心接听。</p>
				<phone-select  v-if="freeCallStatus"
					@on-result-phone-change="onResultPhoneChange"
					:data-details="{phoneNumber:freeCallPhone,phoneCountryCd:freeCallPhoneArea}">
				</phone-select>
			</div>
			<div slot="footer">
				<!-- <Button size="default" @click="freeCallStatus = false">取消</Button> -->
				<Button size="default" type="primary" style="background-color: #3B44AC;outline: none;border-color: #3B44AC;" @click="submitFreeCall" id="help_phonebtn">确定</Button>
			</div>
		</Modal>
  </section>
</template>
<script>
	import webFooter from '@/components/footer.vue';
	import phoneSelect from '@/components/phoneSelect.vue';
	export default{
		head () {
		  return {
		    title: 'YIHOME_澳洲留学租房_英国留学租房-忆家官网',
		  }
		},
		components:{
			webFooter,phoneSelect
		},
		data(){
			return {
				options:[
					{
						value: '+86',
						label: '中国'
					},
					{
						value: '+44',
						label: '英国'
					},
					{
						value: '+61',
						label: '澳大利亚'
					}
				],
				freeCallStatus:false,
				freeCallPhoneArea:'',
				freeCallPhone:'',
				islogin:false,
				ispersonalCenter:false,
				activeIndex:'1',
				headerStatus:true,
				menuData:[],
				footerStatus:true,
			}
		},
		computed: {
		   
		},
		created(){
			this.getPath();
			this.findcityschool();
			// this.checkLogin();
			
			if(process.browser){
				if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
					
					console.log(this.$route.query.houseid)
					if(this.$route.name=='housedetail'){
						window.location.href='/house-detail?houseid='+this.$route.query.houseid+''
					}else if(this.$route.path !='/house-detail'){
						window.location.href='/dist/index.html'
					}
				}
				// var domain = document.domain;
				// if(domain.indexOf('m.inyihome') != -1) {
				// 	window.location.href='/dist/index.html'
				// }
				
			}
			
			
			
		},
		methods: {
			gocenter(){
				this.$router.push({path:"/profile"})
			},
			logout(){
				if(process.browser){
					localStorage.removeItem('userid')
					localStorage.removeItem('checklicense')
					this.$router.push({path:"/"})
					console.log(1111)
					this.checkLogin();
				}
			},
			onResultPhoneChange(val){
				console.log(val,'电话')
				this.freeCallPhoneArea = val.phoneCountryCd;
				this.freeCallPhone = val.phoneNumber;
			},
			submitFreeCall(){
				console.log(this.freeCallPhoneArea,this.freeCallPhone,9999999)
				
				if(!this.freeCallPhoneArea){
					this.$Message.warning('请选择电话区号');
					return;
				}
				
				if(!this.freeCallPhone){
					this.$Message.warning('请输入您的联系电话');
					return;
				}
				//////
				
				if(this.freeCallPhoneArea=='86'||this.freeCallPhoneArea=='852'||this.freeCallPhoneArea=='853'||this.freeCallPhoneArea=='886'){
					let regPhone = /^[1][3-8]\d{9}$|^([6|9])\d{7}$|^[0][9]\d{8}$|^[6]([8|6])\d{5}$/;
					if(!regPhone.test(this.freeCallPhone)){
						this.$Message.warning('请输入正确的手机号');
					}
				}
				if(this.freeCallPhoneArea=='44'||this.freeCallPhoneArea=='61'){
					if(this.freeCallPhone.length<5){
						this.$Message.warning('请输入正确的手机号');
						return;
					}
				}
				/////
				this.$request.saveuserphone({phone:'+'+this.freeCallPhoneArea+' '+this.freeCallPhone}).then(res=>{
					this.freeCallStatus = false;
					if(res.status){
						this.$Modal.success({
							title: "信息",
							content: '感谢您的留电，稍后您将接到我们的电话'
						});
						window._agl && window._agl.push(['track', ['success', {t: 3}]])
					}else{
						this.$Modal.error({
							title: "信息",
							content: res.msg
						});
					}
				}).catch(e=>{
					this.freeCallStatus = false;
					this.$Modal.error({
						title: "信息",
						content: '网络错误信息提交失败，请刷新页面重新提交'
					});
				})
				
			},
			freeCall(){
				this.freeCallStatus = true; 
			},
		    handleSelect(key, keyPath) {
				console.log(key, keyPath);
				this.$router.push({path:key})
			},
			getPath(){
				if(this.$route.name=="index"||this.$route.name=="about"||this.$route.name=="Join-us"||this.$route.name=="contact"){
					this.headerStatus = true;
				}else{
					this.headerStatus = false;
				}
				
				/*if(this.$route.fullPath.includes('/profile')){
					this.ispersonalCenter = true;
				}else{
					this.ispersonalCenter = false;
				}*/
				
				
				
				/* if(this.$route.name=="findhouse"){
					this.footerStatus = false;
				}else{
					this.footerStatus = true;
				} */
			},
			findcityschool(){
				this.$request.getAllCity().then(res=>{
					console.log("findcityschool", res)

					this.menuData = [
						{
							zhname: '英国',
							city: res.data[134]
						},
						{
							zhname: '澳大利亚',
							city: res.data[136]
						},
						{
							zhname: '美国',
							city: res.data[138]
						}
					];
				}).catch(e=>{
					
				})
			},
			checkLogin(){
				if(process.browser){
					let userid = localStorage.getItem('userid');
					let license = localStorage.getItem('checklicense');
					this.$request.checklogin({loginid:userid,license:license}).then(res=>{
						if(res.status){
							this.islogin = true;
						}else{
							this.islogin = false;
						}
					}).catch(e=>{
						this.islogin = false;
					})
				}
				
			}
		},
		watch: {
			$route: 'getPath',
		}
	}
</script>

<style scoped="scoped">
	.freeCall{
		position: fixed;
		width: 80px;
		height: 75px;
		right: 2px;
		top: 50%;
		left: auto;
		bottom: auto;
		z-index: 99999;
		border-radius: 4px;	
		border-top-left-radius: 0px;
		border-top-right-radius: 0px;
		margin-top: 37px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		flex-direction: column;
		color: rgb(82,83,85);
		background-color: #fff;
		box-shadow: 0 0 4px 0 rgba(0,0,0,0.06);
	}
	.freeCall:hover{
		transition: all 0.5s;
		background-color: #3B44AC;
		color: #fff;
	}
	.freeCall:hover i{
		color: #fff;
	}
	.freeCall i{
		font-size: 28px;
		
	}
	.freeCall p{
		font-size: 12px;
	}
	.freeCall:hover{
		-background-color: #3B44AC;
	}
	.freeContent{
		margin-bottom: 20px;
	}
	#headerYihome{
		width: 100%;
		-height: 60px;
		-border-bottom: 1px solid #ddd;
		position: absolute;
		z-index: 99;
	}
	.header-top{
		/* padding-left: 142px;
		padding-right: 142px; */
		display: flex;
		justify-content:space-between;
		align-items:center;
		padding: 0 30px;
		min-width: 1000px;
	}
	.el-menu--horizontal>.el-menu-item.is-active{
		border-bottom: none;
	}
	.el-menu--horizontal>.el-menu-item{
		border-bottom-color:rgba(0,0,0,0) !important;
	}
	.el-menu.el-menu--horizontal{
		border-bottom: none;
	}
	.el-menu{
		background-color:transparent;
	}
	.el-menu--horizontal>.el-menu-item{
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: rgba(255,255,255,.65);
		letter-spacing: 0.99px;
	}
	.logoRegister a{
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #fff;
		letter-spacing: 0.99px;
		text-decoration: none;
	}
	.logoRegister .line{
		margin: 0 24px;
		color: #fff;
	}
	.logo{
		width: 38px;
		height: 38px;
	}
	.logo img{
		width: 38px;
		height: 38px;
	}
	.header-top .menuMain{
		margin-left: 86px;
	}
	
	.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
		background-color:transparent;
		color: #fff;
	}
	.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus{
		background-color:transparent;
		color: #fff;
	}
	#otherYihome {
		box-shadow: 0 2px 10px 0 #ccc; 
	}
	#otherYihome .el-menu--horizontal>.el-menu-item{
		color: #333333;
	}
	#otherYihome .logoRegister a{
		color: #333333;
	}
	#otherYihome .logoRegister .line{
		color: #333333;
	}
	.currentPopper .navSearchWrap{
		height: auto;
	}
	
</style>
<style>
	#otherYihome .el-dropdown-link{
		color: #333!important;
	}
	.header-top .menuMain .el-menu--horizontal>.el-submenu .el-submenu__title{
		color:rgba(255,255,255,.65);
	}
	.currentPopper{
		-display: block!important;
		
	}
	.currentPopper ul{
		margin-top: 0;
		padding: 20px;
		padding: 20px;
		border-radius: 4px;
		box-shadow: 0 0 4px 0 #ddd;
	}
	.currentPopper ul li{
		padding: 0;
		cursor: auto;
	}
	.currentPopper ul li .country{
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #333333;
		letter-spacing: 0.7px;
		line-height: 20px;
		margin-bottom: 10px;
	}
	.currentPopper ul li .cityWrap{
		display: flex;
		width: 337px;
		flex-wrap: wrap;
	}
	
	.currentPopper ul li .city{
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #666666;
		letter-spacing: 0.6px;
		line-height: 17px;
		display: inline-block;
		width: 33.33%;
		margin-bottom: 10px;
		cursor: pointer;
	}
	.currentPopper ul li .city a{
		color: #666666;
	}
	.currentPopper ul li .city a:hover{
		color: #3B44AC;
	}
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
html,body{
  width: 100%;
  height: 100%;
}
body{
	-overflow: auto!important;
}
#__nuxt,#__layout{
	height: 100%;
}
#otherYihome .el-menu--horizontal>.el-submenu .el-submenu__title{
	color: #333333;
	font-weight: 500;
}
#headerYihome .el-menu--horizontal .el-menu-item:not(.is-disabled):hover{
	-color: #333333;
}
#headerYihome .el-menu--horizontal>.el-submenu:hover{
	color: #fff;
}
#headerYihome .el-menu--horizontal>.el-submenu:hover .el-submenu__title{
	 color: #fff;
}
.el-menu--horizontal>.el-submenu.is-active .el-submenu__title{
	border-bottom: none;
}
.el-menu--horizontal>.el-submenu .el-submenu__title:hover{
	background-color: transparent;
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover{
	color: #ccc;
}
.aboutItemMenu .el-menu-item:not(.is-disabled):hover{
	color: #3B44AC!important;
}
.aboutItemMenu .el-menu--popup{
	min-width: 124px;
	text-align: center;
}
.el-date-table td.current:not(.disabled) span {
	background-color: #3B44AC!important;
}
.el-date-table td.available:hover{
	color: #3B44AC!important;
	font-weight: bolder;
}
.el-date-table td.today span{
	color: #3B44AC!important;
}
.el-input__inner:focus {
	border-color: #3B44AC;
}
.el-select .el-input.is-focus .el-input__inner{
	border-color: #3B44AC;
}
.el-select .el-input__inner:focus{
	border-color: #3B44AC;
}

#newBridge .icon-right-center{
    top: 50% !important;
    background: #FFFFFF;
    width:80px!important;
     height: 75px!important;
     border-radius: 4px 4px 0 0!important;
     color: #333333!important;
}
#newBridge .icon-right-center:hover {
	transition: all 0.5s;
  background-color:#3B44AC;
   color:#FFF;
   border-radius: 4px;
   color: #ffffff!important;
}

.nb-icon-inner-wrap {
  background-image: url(https://www.inyihome.com/img/help_zixun2.svg)!important;
    background-position: center 16px!important;
    background-repeat: no-repeat!important;
    background-size: 24px 24px!important;
    width:80px!important;
    height: 75px!important;
	background: #FFFFFF;
	box-shadow: 0 0 4px 0 rgba(0,0,0,0.06)!important;
	border-radius: 4px 4px 0 0;
	border-radius: 4px 4px 0px 0px;
}

.nb-icon-inner-wrap:hover {
  background-image: url(https://www.inyihome.com/img/help_zixun1.svg)!important;
}

.nb-icon-inner-wrap p{
  margin-top: 40px;
}

.nb-icon-bridge-base {
  margin-top: 1px!important;
  margin-left: -25px!important;
  
}

.nb-icon-bridge-base:before {
  content: '\5728\7ebf\54a8\8be2';
  font-size: 10px;
  
  letter-spacing: 0.71px;
  position: relative;
  top: 8px;
}
</style>
