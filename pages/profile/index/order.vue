<template>
	<section>
		<h1>我的订单</h1>
		<Spin size="large" fix v-if="spinShow"></Spin>
		<ul class="orderWrapper">
<!--			<li v-for="(item,$index) in orderList" :key="$index">-->
<!--				<div class="content-left">-->
<!--					<div class="img">-->
<!--						<img :src="yihomeGlobalVariable+item.imgurl" alt="">-->
<!--					</div>-->
<!--					<div class="content-main">-->
<!--						<h1 class="title">on A'Beckett Apartments and Residences</h1>-->
<!--						<p class="orderNum">订单编号：{{item.billno}}</p>-->
<!--						<p class="orderTime">创建时间：{{item.bdate}}</p>-->
<!--						<p class="checkIn">入住时间：{{item.sdate}}至{{item.edate}}</p>-->
<!--					</div>-->
<!--				</div>-->
<!--				<div class="content-right">-->
<!--					<el-button type="primary" @click="viewOrder(item.id)">查看详情</el-button>-->
<!--				</div>-->
<!--			</li>-->
			<li v-for="(item,$index) in [0,1,2,3,4,5,6]" :key="$index">
				<div class="content-left">
					<div class="img">
						<img src="https://www.inyihome.com/upload/1579500204358_4x.jpg" alt="">
					</div>
					<div class="content-main">
						<h1 class="title">on A'Beckett Apartments and Residences</h1>
						<p class="orderNum">on A'Beckett Apartments and Residences</p>
<!--						<p class="orderTime">创建时间：{{item.bdate}}</p>-->
						<p class="money"><span>$229</span>/周</p>
						<p class="checkIn">订单编号：1231231231231 <span>创建时间： 2019-01-01 19:30:00</span></p>
					</div>
				</div>
				<div class="content-right">
					<el-button type="primary" @click="viewOrder(item.id)">查看详情</el-button>
				</div>
			</li>
			<li v-if="orderList.length==0">
				暂无订单信息
			</li>
		</ul>

		<Modal
			title="房源订单信息"
			v-model="orderStatus"
			class-name="orderDetails"
			width="800px"
			cancel-text=""
			:mask-closable="false">
			<b-container>
				<h1 class="billStatus">订单状态：{{viewOrderData.bstatus}}</h1>
				<div class="viewDetails">
					<div class="img">
						<img :src="yihomeGlobalVariable+viewOrderData.imgurl" alt="">
					</div>
					<div class="content">
						<p class="num">订单编号：{{viewOrderData.billno}} <span>创建时间：{{viewOrderData.bdate}}</span></p>
						<h1>{{viewOrderData.housename}}</h1>
						<p class="info">{{viewOrderData.roomname}}</p>
						<p class="time">入住时间：{{viewOrderData.sdate}}至{{viewOrderData.edate}}</p>
					</div>
				</div>
				<h1 class="personalTitle">个人信息</h1>
				<b-row>
					<b-col :md="(item.titlename=='基本信息'||item.titlename=='紧急联系人信息'||item.titlename=='入住人证件信息')?12:6" v-for="(item,$index) in personalInfo" :key="$index">
						<h1 v-if="item.titlename=='基本信息'">{{item.titlename}}</h1>
						<h1 v-else-if="item.titlename=='紧急联系人信息'">{{item.titlename}}</h1>
						<h1 v-else-if="item.titlename=='入住人证件信息'">{{item.titlename}}</h1>
						<p v-else-if="item.titlename=='性别'" class="itemList">{{item.titlename}} ： {{item.label=='Male'?'男':'女'}}</p>
						<p v-else-if="item.titlename=='是否全日制'" class="itemList">{{item.titlename}} ： {{item.label=='Yes'?'是':'否'}}</p>
						<p v-else-if="item.titlename=='就读课程'" class="itemList">
							{{item.titlename}} ：
							<span v-if="item.label=='Pre-Sessional Course'">语言班</span>
							<span v-if="item.label=='Foundation Programme'">预科</span>
							<span v-if="item.label=='Undergraduate'">本科</span>
							<span v-if="item.label=='Postgraduate'">研究生</span>
						</p>
						<p v-else class="itemList">{{item.titlename}} ： {{item.label}}</p>
					</b-col>
					<b-col md="4" class="imgW">
						<p>护照信息</p>
						<div v-if="viewOrderData.passportimg">
							<a target="_blank" :href="yihomeGlobalVariable+viewOrderData.passportimg.split(',')[0]">
								<img v-if="viewOrderData.passportimg.split(',')[0].toLowerCase().includes('pdf')" src="https://www.inyihome.com/img/pdf.svg">
								<img v-else :src="yihomeGlobalVariable+viewOrderData.passportimg.split(',')[0]">
							</a>
						</div>
						<div v-else>无护照信息</div>
					</b-col>
					<b-col md="4" class="imgW">
						<p>签证信息</p>
						<div v-if="viewOrderData.cardimga">
							<a target="_blank" :href="yihomeGlobalVariable+viewOrderData.cardimga.split(',')[0]">
								<img v-if="viewOrderData.cardimga.split(',')[0].toLowerCase().includes('pdf')" src="https://www.inyihome.com/img/pdf.svg">
								<img v-else :src="yihomeGlobalVariable+viewOrderData.cardimga.split(',')[0]">
							</a>
						</div>
						<div v-else>无签证信息</div>
					</b-col>
					<b-col md="4" class="imgW">
						<p>录取证明（offer/coe/cas/学生卡照片）</p>
						<div v-if="viewOrderData.cardimgb">
							<a target="_blank" :href="yihomeGlobalVariable+viewOrderData.cardimgb.split(',')[0]">
								<img v-if="viewOrderData.cardimgb.split(',')[0].toLowerCase().includes('pdf')" src="https://www.inyihome.com/img/pdf.svg">
								<img v-else :src="yihomeGlobalVariable+viewOrderData.cardimgb.split(',')[0]">
							</a>
						</div>
						<div v-else>无录取证明</div>
					</b-col>
				</b-row>
			</b-container>
			<div slot="footer" style="text-align: center;">
				<Button size="default" type="primary" @click="orderStatus = false">确定</Button>
			</div>
		</Modal>


	</section>
</template>

<script>
	export default{
		data(){
			return{
				spinShow:false,
				orderList:[],
				viewOrderData:{},
				orderStatus:false,
				personalInfo:[
					{titlename:'基本信息',value:'',label:''},
					{titlename:'姓名（中文）',value:'namech',label:''},
					{titlename:'姓名（拼音：以护照信息为准）',value:'namem',label:''},
					{titlename:'国内联系电话',value:'personphone',label:''},
					{titlename:'国外联系电话',value:'phoneo',label:''},
					{titlename:'性别',value:'sex',label:''},
					{titlename:'出生日期',value:'birthdays',label:''},
					{titlename:'常用邮箱',value:'uemail',label:''},
					{titlename:'护照号',value:'passport',label:''},
					{titlename:'国籍',value:'nationality',label:''},
					{titlename:'微信号',value:'remarks',label:''},
					{titlename:'目前就读年级',value:'grade',label:''},
					{titlename:'学年制',value:'gradeyear',label:''},
					{titlename:'就读专业(中文)',value:'disciplinech',label:''},
					{titlename:'就读专业(英文)',value:'disciplineen',label:''},
					{titlename:'校区(英文)',value:'campus',label:''},
					{titlename:'是否全日制',value:'allday',label:''},
					{titlename:'就读课程',value:'course',label:''},
					{titlename:'留学城市现居地邮编',value:'zipcode',label:''},
					{titlename:'留学城市现居地地址',value:'address',label:''},
					{titlename:'留学学校(中文)',value:'abroadschoolch',label:''},
					{titlename:'留学学校(英文)',value:'abroadschoolen',label:''},
					{titlename:'国内城市现居地邮编',value:'izipcode',label:''},
					{titlename:'国内固定地址（中文）',value:'addressich',label:''},
					{titlename:'国内固定地址（英文）',value:'addressien',label:''},

					{titlename:'紧急联系人信息',value:'',label:''},

					{titlename:'担保人(紧急联系人)姓名',value:'pnamech',label:''},
					{titlename:'与担保人(紧急联系人)的关系',value:'relation',label:''},
					{titlename:'联系电话',value:'pphone',label:''},
					{titlename:'邮箱',value:'pemail',label:''},
					{titlename:'城市',value:'pcity',label:''},
					{titlename:'联系地址(中文)',value:'paddressch',label:''},
					{titlename:'联系地址(英文)',value:'paddressen',label:''},
					{titlename:'邮编',value:'pzipcode',label:''},
					{titlename:'职业(中文)',value:'professionch',label:''},
					{titlename:'职业(英文)',value:'professionen',label:''},
					{titlename:'入住人证件信息',value:'',label:''},
				]
			}
		},
		created() {

		},
		mounted() {
			this.getOrderList();
		},
		methods:{
			getOrderList(){
				this.spinShow = true;
				if(process.browser){
					this.$request.getOrderList().then(res=>{
						this.spinShow = false;
						if(res.code === 200){
							this.orderList = res.order;
						}else this.$message.error(res.msg);
					}).catch(e=>{
						this.spinShow = false;
						this.$message.error('网络错误');
					})
				}
			},
			viewOrder(id){
				this.orderStatus = true;
				this.findUserBillDtl(id)
			},
			findUserBillDtl(id){
				this.$request.findUserBillDtl({billid:id}).then(res=>{
					this.viewOrderData = res;
					this.personalInfo.forEach((item,index)=>{
						for (let i in res){
							if(item.value==i){
								item.label = res[i]
							}
						}
					})


				}).catch(e=>{

				})
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	section{
		position: relative;
		height: 100%;
	}
	ul li{
		list-style: none;
	}
	.orderWrapper li{
		border-bottom: 1px solid #F0F0F0;
		padding: 20px 0px;
		display: flex;
		justify-content: space-between;
	}
	.orderWrapper li:first-child{
		-padding-top: 0px;
	}
	.orderWrapper li:hover{
		-background-color: rgb(245,247,250);
	}
	.orderWrapper li .content-left{
		display: flex;
	}
	.orderWrapper li .content-left .content-main{
		margin-left: 10px;
		.orderNum{
			font-family: PingFangSC-Medium;
			font-size: 15px;
			color: #756c6c;
			letter-spacing: 1.13px;
			line-height: 18px;
			margin: 6px 0 7px;
			font-weight: 500;
		}
		.money{
			span{
				font-size: 20px;
			}
			font-size: 14px;
			color: #3B44AC;
			letter-spacing: 1.5px;
			line-height: 30px;
		}
		.checkIn{
			span{
				margin-left: 6px;
			}
		}
	}
	.orderWrapper li .content-left .img img{
		width: 149px;
		height: 107px;
		margin-right: 8px;
	}
	.orderWrapper li .content-left .content-main .title{
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #333333;
		letter-spacing: 1.13px;
		line-height: 22px;
		margin-bottom: 4px;
	}
	.orderWrapper li .content-left .content-main .orderTime{
		font-family: PingFangSC-Regular;
		color: #666666;
		letter-spacing: 0.76px;
		line-height: 17px;
		margin-bottom: 4px;
	}
	.orderWrapper li .content-right{
		display: flex;
		align-items: flex-end;
	}
	.orderWrapper li .content-right button{
		background: #3B44AC;
		outline: none;
		border-color: #3B44AC;
	}
	.orderDetails .container .viewDetails{
		display: flex;
		margin-bottom: 16px;
		padding: 15px;
		border: 1px solid #3B44AC;
	}
	.orderDetails .container .viewDetails img{
		width: 216px;
		height: 150px;
	}
	.orderDetails .container .viewDetails .content{
		margin-left: 16px;
		width: 100%;
	}
	.orderDetails .container .viewDetails .content .num{
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #666666;
		letter-spacing: 0.89px;
		margin-bottom: 10px;
		line-height: 20px;
	}
	.orderDetails .container .viewDetails .content .num span{
		float: right;
	}
	.orderDetails .container .viewDetails .content h1{
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #484848;
		letter-spacing: 1.13px;
		line-height: 22px;
		margin-bottom: 6px;
	}
	.orderDetails .container .viewDetails .content .info{
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #484848;
		letter-spacing: 0.99px;
		line-height: 20px;
		margin-bottom: 7px;
	}
	.orderDetails .container .viewDetails .content .time{
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #484848;
		letter-spacing: 0.76px;
	}
	.orderDetails .container .personalTitle{
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #333333;
		letter-spacing: 0.8px;
		line-height: 19.31px;
		line-height: 20px;
		margin-bottom: 20px;
	}
	.orderDetails .container .row{
		padding: 0 15px;
	}
	.orderDetails .container .row h1{
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #333333;
		letter-spacing: 0.8px;
		line-height: 19.31px;
		margin-bottom: 15px;
		font-weight: bolder;
	}
	.orderDetails .container .row .itemList{
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #484848;
		letter-spacing: 0;
		line-height: 16px;
		margin-bottom: 20px;
	}
	.orderDetails .container .row .imgW img{
		width: 90px;
		height: 90px;
	}
	.orderDetails .container .row .imgW p{
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #484848;
		letter-spacing: 0;
		line-height: 16px;
		margin-bottom: 12px;
	}
	.billStatus{
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #333333;
		letter-spacing: 0.8px;
		line-height: 19.31px;
		margin-bottom: 20px;
		font-weight: bolder;
	}
</style>
