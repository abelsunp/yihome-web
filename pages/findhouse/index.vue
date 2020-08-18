<template>
	<section style="border-bottom: 1px solid #E6E6E6;padding-bottom: 40px;">
		<b-container fluid class="findBanner">
			<!-- <img src="@/assets/images/findhouse_back.png" alt=""> -->
			<!-- <h1>租房预定，送你免费机票+旅游套餐</h1>
			<p>1月23日前提交咨询，抽5000元机票+1888元旅游套餐+300元现金</p>
			<a href="/helptickets" target="_blank">立即咨询</a> -->
			<a href="/helptickets?act=2" target="_blank" style="display: block;width: 100%;height: 100%;"></a>
		</b-container>
		<b-container>
			<div class="searchContent" style="padding-left: 0;" v-if="!$route.query.search">
				<div class="selectCity listitem" style="margin-left: 0;">
					
					<el-select v-model="cityvalue" placeholder="请选择城市" @change="cityChange">
					    <el-option
					      v-for="item in citylist"
					      :key="item.id"
					      :label="item.cityname"
					      :value="item.id">
					    </el-option>
					</el-select>
				</div>
				<div class="selectSchool listitem">
					
					<el-select v-model="schoolvalue" placeholder="请选择学校" @change="schoolChange">
					    <el-option
					      v-for="item in schoollist"
					      :key="item.id"
					      :label="item.schoolname"
					      :value="item.id">
					    </el-option>
					</el-select>
				</div>
				<div class="selectType listitem">
					<el-select v-model="housetypeid" placeholder="请选择民宿或公寓"  @change="housetypeChange">
					    <el-option
					      v-for="item in housetypelist"
					      :key="item.id"
					      :label="item.name"
					      :value="item.id">
					    </el-option>
					</el-select>
				</div>
				<div class="selectPrice listitem">
					<el-select v-model="rent" placeholder="请选择价格"  @change="rentChange">
						<el-option label="不限" value=""> 不限</el-option>
						<el-option label="0-100" value="0,100.">0-100</el-option>
						<el-option label="100-200" value="100,200.">100-200 </el-option>
						<el-option label="200-300" value="200,300.">200-300 </el-option>
						<el-option label="300-400" value="300,400.">300-400 </el-option>
						<el-option label="400-500" value="400,500."> 400-500</el-option>
						<el-option label="500以上" value="500.">500以上 </el-option>
					</el-select>
				</div>
				<div class="selectSort listitem">
					<el-select v-model="order" placeholder="排序" @change="orderChange">
					    <el-option
					      v-for="item in orderlist"
					      :key="item.id"
					      :label="item.name"
					      :value="item.id">
					    </el-option>
					</el-select>
				</div>
				<el-button  @click="otherSearch = !otherSearch">筛选更多</el-button>
				
				<transition name="el-zoom-in-top">
					<div v-show="otherSearch" class="otherSearchWrapper">
						<div class="top">
							<ul>
								<li>
									<div class="searchSubTitle">
										户型选择：
									</div>
									<div class="searchSubContent">
										<el-radio v-model="apartmentid" label="">不限</el-radio>
										<el-radio v-model="apartmentid" label="1">一室</el-radio>
										<el-radio v-model="apartmentid" label="2">二室</el-radio>
										<el-radio v-model="apartmentid" label="3">三室</el-radio>
										<el-radio v-model="apartmentid" label="4">四室</el-radio>
										<el-radio v-model="apartmentid" label="5">五室</el-radio>
										<el-radio v-model="apartmentid" label="6">六室</el-radio>
										<el-radio v-model="apartmentid" label="7">七室以上</el-radio>
									</div>
								</li>
								<li>
									<div class="searchSubTitle">
										租赁状态：
									</div>
									<div class="searchSubContent">
										<el-radio v-model="leaseid" label="">不限</el-radio>
										<el-radio v-model="leaseid" label="1">可整租</el-radio>
										<el-radio v-model="leaseid" label="2">有室友</el-radio>
									</div>
								</li>
								<li>
									<div class="searchSubTitle">
										卫浴类型：
									</div>
									<div class="searchSubContent">
										<el-radio v-model="bathroomid" label="">不限</el-radio>
										<el-radio v-model="bathroomid" label="6">共享卫浴</el-radio>
										<el-radio v-model="bathroomid" label="7">独立卫浴</el-radio>
									</div>
								</li>
							</ul>
						</div>
						<div class="btnWrap">
							<!-- <el-button size="mini">取消</el-button> -->
							<el-button type="primary" size="mini" @click="otherSearchMethod">确认</el-button>
						</div>
					</div>
				</transition>
			</div>
			
			<div v-else style="padding: 20px 0;">
				
			</div>
		</b-container>
		<b-container>
			
			<div class="houseContent">
				<b-row v-if="hasHouse">
					<b-col md="6" sm="6" lg="4" class="listitem" v-for="(item,$index) in houseArray" :key="$index">
						<a :href="'/housedetail?houseid='+item.id" target="_blank">
							<div class="pic-box">
								<div v-if="item.housestatus!='168'" class="saleouthouse"></div>
								<img :src="yihomeGlobalVariable+item.imgurl| imgStrClac('x')" :alt="item.housename">
								<i v-if="item.hasvideo=='1'" class="el-icon-video-play"></i>
							</div>
							<div class="info-box">
								<h5 class="title">{{item.housename}}</h5>
								<h6 class="price">{{item.currencysymbol}}{{item.price}} <span>起/{{item.daw=='0'?'天':item.daw=='1'?'周':'月'}}</span></h6>
								<div class="location">
									<i class="el-icon-location-outline"></i>
									{{item.address}}
								</div>
								<div class="tag">
									<span v-for="(list,$$index) in item.tag?item.tag.slice(0,3):[]" :key="$$index" :style="{ 'background-color':list.color,}">{{list.name}}</span>
								</div>
							</div>
						</a>
					</b-col>
				</b-row>
				<div v-else style="text-align: center;">
					<img src="@/assets/images/nohouse.png" alt="" style="margin: 30px auto;">
					<p>未搜到对应房源，换个搜索条件试试</p>
				</div>
			</div>
			
			<div class="pageWrapper" v-if="paginationStatus">
				<el-pagination
				  @size-change="handleSizeChange"
				  @current-change="handleCurrentChange"
				  :current-page="pageNum"
				  :page-sizes="[12, 18,24,36]"
				  :page-size="pageSize"
				  layout="total, sizes, prev, pager, next, jumper"
				  :total="totalCount">
				</el-pagination>
			</div>
		</b-container>
		
	</section>
</template>

<script>
	import $ from 'jquery';
	export default{
		data(){
			return {
				otherSearch:false,
				paginationStatus:false,
				hasHouse:true,
				options: [{
				  value: '选项1',
				  label: '黄金糕'
				}],
				value: '',
				
				houseArray:[],
				
				
				cityvalue:'',
				citylist:[],
				schoolvalue:'',
				schoollist:[],
				
				
				housetypelist:[
					{id:'',name:'不限'},
					{id:147,name:'民宿'},
					{id:148,name:'公寓'},
				],
				rentlist:[
					{id:'',name:'不限'},
					{id:'0,100.',name:'0-100'},
					{id:'100,200.',name:'100-200'},
					{id:'200,300.',name:'200-300'},
					{id:'300,400.',name:'330-400'},
					{id:'400,500.',name:'400-500'},
					{id:'500.',name:'500以上'},
				],
				orderlist:[
					{id:'',name:'综合'},
					{id:'updatetime desc',name:'最近更新'},
					{id:'price desc',name:'价格从高到低'},
					{id:'price asc',name:'价格从低到高'}
				],
				
				
				countryid: this.$route.query.countryid,
				cityid: this.$route.query.cityid?this.$route.query.cityid:'',
				schoolid: this.$route.query.schoolid?this.$route.query.schoolid:'',
				search:this.$route.query.search?this.$route.query.search:'',
				housetypeid: '',
				apartmentid: '',//户型
				leaseid: '',//租赁状态
				bathroomid: '',//卫浴类型
				rent: '',
				order: '',
				
				//pagenum:0,
				dataArray:[],
				totalCount:0,
				pageNum:1,
				pageSize:12,
			}
		},
		filters:{
			imgStrClac:function(str,num){
				let res = str.replace(/(.*)\./,'$1'+num+'.');   //$1 + 替换后的字符
				return res;
			}
		},
		mounted() {
			
			/* 获取countryID  */
			//console.log();
			//this.findhouseList()
			
			/* 城市 学校 赋值 */
			//如果不存在国家ID 则返回重新搜索
			/* if(!this.$route.query.countryid){
				this.$confirm('缺少筛选条件，请重新筛选', '提示', {
				  confirmButtonText: '确定',
				  cancelButtonText: '取消',
				  type: 'warning'
				}).then(() => {
					this.$router.push({path:'/'})
				}).catch(() => {
					this.$router.push({path:'/'})
				});
				return;
			}
			 */
			this.findcityschool();
			
			this.findhouseList(this.countryid,this.cityid,this.schoolid,this.housetypeid,this.apartmentid,this.leaseid,this.bathroomid,this.rent,this.order,'',this.pageNum,this.pageSize,this.search)
			
		},
		methods:{
			otherSearchMethod(){
				this.pageNum = 1;
				this.pageSize = 12;
				this.otherSearch = !this.otherSearch;
				this.findhouseList(this.countryid,this.cityid,this.schoolid,this.housetypeid,this.apartmentid,this.leaseid,this.bathroomid,this.rent,this.order,'',this.pageNum,this.pageSize,this.search)
				
			},
			handleSizeChange(val){//一页显示的数量
				
				this.pageSize = val;
				this.pageNum = 1;
				console.log(val,111)
				debugger
				this.findhouseList(this.countryid,this.cityid,this.schoolid,this.housetypeid,this.apartmentid,this.leaseid,this.bathroomid,this.rent,this.order,'',this.pageNum,val,this.search)
				$("html,body").animate({ scrollTop: 0 }, 500);//100为滚动条的位置，1000为滚动的时延
			},
			handleCurrentChange(val){
				console.log(val)
				this.pageNum = val;
				this.findhouseList(this.countryid,this.cityid,this.schoolid,this.housetypeid,this.apartmentid,this.leaseid,this.bathroomid,this.rent,this.order,'',val,this.pageSize,this.search)
				$("html,body").animate({ scrollTop: 0 }, 500);//100为滚动条的位置，1000为滚动的时延
			},
			findcityschool(){
				this.$request.findcityschool().then(res=>{
					res.forEach((item,index)=>{
						if(this.$route.query.countryid == item.id){
							this.citylist = item.city;
							item.city.forEach((item2,index2)=>{
								if(this.$route.query.cityid ==item2.id ){
									this.cityvalue = item2.id;
									this.schoollist = item2.school;
									item2.school.forEach((item3,index3)=>{
										if(this.$route.query.schoolid ==item3.id ){
											this.schoolvalue = item3.id;
											return;
										}
									})
									
								}
							})
							
						}
					})
				}).catch(e=>{
					
				})
			},
			cityChange(val){
				this.citylist.forEach((item,index)=>{
					if(val == item.id){
						this.schoolvalue = '';
						this.schoollist = item.school;
						return;
					}
				})
				this.pageNum = 1;
				this.pageSize = 12;
				
				this.housetypeid = '';
				this.apartmentid = '';
				this.leaseid = '';
				this.bathroomid = '';
				this.rent = '';
				this.order = 'updatetime desc';
				this.cityid = val;
				this.cityvalue = val;
				console.log(val)
				this.findhouseList(this.countryid,val,this.schoolvalue,this.housetypeid,this.apartmentid,this.leaseid,this.bathroomid,this.rent,this.order,'cityChange',this.pageNum,this.pageSize,this.search)
				
			},
			schoolChange(val){
				console.log(val)
				this.housetypeid = '';
				this.apartmentid = '';
				this.leaseid = '';
				this.bathroomid = '';
				this.rent = '';
				this.order = 'updatetime desc';
				this.schoolid = val;
				this.schoolvalue = val;
				this.pageNum = 1;
				this.pageSize = 12;
				this.findhouseList(this.countryid,this.cityvalue,val,this.housetypeid,this.apartmentid,this.leaseid,this.bathroomid,this.rent,this.order,'schoolChange',this.pageNum,this.pageSize,this.search)
			},
			housetypeChange(val){
				this.pageNum = 1;
				this.pageSize = 12;
				this.findhouseList(this.countryid,this.cityvalue,this.schoolvalue,val,this.apartmentid,this.leaseid,this.bathroomid,this.rent,this.order,'',this.pageNum,this.pageSize,this.search)
			},
			orderChange(val){
				this.pageNum = 1;
				this.pageSize = 12;
				this.findhouseList(this.countryid,this.cityvalue,this.schoolvalue,this.housetypeid,this.apartmentid,this.leaseid,this.bathroomid,this.rent,val,'',this.pageNum,this.pageSize,this.search)
			},
			rentChange(val){
				this.pageNum = 1;
				this.pageSize = 12;
				//console.log(this.rent);console.log(val)
				this.findhouseList(this.countryid,this.cityvalue,this.schoolvalue,this.housetypeid,this.apartmentid,this.leaseid,this.bathroomid,val,this.order,'',this.pageNum,this.pageSize,this.search)
			},
			/* 查找房源 */
			findhouseList(countryid,cityid,schoolid,housetypeid,apartmentid,leaseid,bathroomid,rent,order,statusChange,pageNum,pageSize,search){
				const houseloading = this.$loading({
					lock: true,
					text: '正在加载',
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.7)'
				});
				this.$request.newfindhouse(
					{
						countryid: countryid,
						cityid: cityid,
						schoolid: schoolid,
						housetypeid: housetypeid,
						apartmentid: apartmentid,
						leaseid: leaseid,
						bathroomid: bathroomid,
						rent: rent,
						order: order,
						search:search,
						page:pageNum,
						limit:pageSize
					}
				).then(res=>{
					houseloading.close()
					if(res.data.length){
						this.hasHouse = true;
						if(res.count>6){
							this.paginationStatus = true;
						}else{
							this.paginationStatus = false;
						}
						this.totalCount = res.count;
						
						this.houseArray = res.data;
						
						if(statusChange=='cityChange'){
											window.open('/findhouse?countryid='+this.$route.query.countryid+'&cityid='+this.cityvalue+'','_self')
											// this.$router.push({ path: 'findhouse/',query:{
											// 	countryid:this.$route.query.countryid,
											// 	cityid:this.cityvalue,
											// }}); 
										}else if(statusChange=='schoolChange'){
											
						window.open('/findhouse?countryid='+this.$route.query.countryid+'&cityid='+this.cityvalue+'&schoolid='+this.schoolvalue+'','_self')
											// this.$router.push({ path: 'findhouse/',query:{
											// 	countryid:this.$route.query.countryid,
											// 	cityid:this.cityvalue,
											// 	schoolid:this.schoolvalue,
											// }});
										}
						
						// if(statusChange=='cityChange'){
						// 	this.$router.push({ name: 'findhouse',query:{
						// 		countryid:this.$route.query.countryid,
						// 		cityid:this.cityvalue,
						// 	}}); 
						// }else if(statusChange=='schoolChange'){
						// 	this.$router.push({ name: 'findhouse',query:{
						// 		countryid:this.$route.query.countryid,
						// 		cityid:this.cityvalue,
						// 		schoolid:this.schoolvalue,
						// 	}});
						// }
						
					}else{
						this.paginationStatus = false;
						this.hasHouse = false;
					}
				}).catch(e=>{
					houseloading.close();
					this.$message.error('网络错误');
				})
			},
		}
	}
</script>

<style scoped="scoped">
	.saleouthouse{
		position: absolute;
		background-size:50% 50%;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.16);
		background-image: url(~assets/images/saleout_l.png);
		background-position: center;
		background-repeat: no-repeat;
	}
	.findBanner{
		height: 450px;
		max-height: 450px;
		padding: 0;
		overflow: hidden;
		background-image: url(~assets/images/pc.jpg);
		background-size: cover;
		background-position: center;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.findBanner h1{
		font-family: PingFangSC-Bold;
		font-size: 45px;
		color: #3B44AC;
		letter-spacing: 1.35px;
		line-height: 63px;
		margin-bottom: 8px;
	}
	.findBanner p{
		font-family: PingFangSC-Regular;
		font-size: 18px;
		color: #3B44AC;
		letter-spacing: 0.68px;
		line-height: 25px;
		margin-bottom: 18px;
	}
	.findBanner a{
		/* display: block;
		width: 134px;
		height: 46px;
		background: #3B44AC;
		border-radius: 2px;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0.61px;
		line-height: 46px;
		text-align: center; */
	}
	.searchContent{
		width: 100%;
		height: 74px;
		padding: 18px 25px;
		display: flex;
		position: relative;
	}
	.searchContent .listitem{
		margin-left: 20px;
	}
	.selectCity{
		margin-left: 0;
	}
	.selectSort{
		margin-right: 20px;
	}
	.mapWrapper{
		width: 100%;
		/* height: calc(100vh - 134px);
		min-height: 768px; */
		display: flex;
	}
	.otherSearchWrapper{
		position: absolute;
		background: #FFFFFF;
		box-shadow: 0 2px 10px 0 rgba(0,0,0,0.10);
		border-radius: 4px;
		right: 0;
		top: 75px;
		padding: 25px 25px 0;
		z-index: 999;
	}
	.otherSearchWrapper ul li{
		list-style: none;
		display: flex;
		margin-bottom: 15px;
	}
	.otherSearchWrapper .btnWrap{
		text-align: right;
		padding: 10px 0;
	}
	.otherSearchWrapper .searchSubTitle{
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #666666;
		letter-spacing: 0.99px;
		margin-right: 15px;
		min-width: 75px;
	}
	.houseContent .listitem {
		margin-bottom: 20px;
	}
	.houseContent .listitem a{
		display: block;
	}
	.houseContent .listitem:hover a{
		box-shadow: 0 0 10px 0 rgba(0,0,0,0.10)
	}
	.houseContent .listitem .pic-box{
		position: relative;
		width: 100%;
		height: 270px;
		border: 1px solid #E0E0E0;
		border-bottom: 0;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}
	.houseContent .listitem .pic-box a{
		position: absolute;
		top: 0;
		left: 0;
		display: inline-block;
		width: inherit;
		height: 270px;
	}
	.houseContent .listitem .el-icon-video-play{
		position: absolute;
		left: 10px;
		top: 10px;
		font-size: 30px;
		color: #fff;
	}
	
	.houseContent .listitem .pic-box img{
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}
	.houseContent .listitem .info-box{
		border: 1px solid #E0E0E0;
		border-top: none;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		padding: 0 15px;
		position: relative;
		height: 160px;
		overflow: hidden;
		padding-bottom: 20px;
	}
	
	.houseContent .listitem .info-box h5{
		font-family: PingFangSC-Bold;
		font-size: 16px;
		color: #333333;
		letter-spacing: 1.13px;
		line-height: 22px;
		margin: 14px 0 3px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		
	}
	.houseContent .listitem .info-box .price{
		font-family: PingFangSC-Bold;
		font-size: 18px;
		color: #3B44AC;
		letter-spacing: 1.27px;
		line-height: 25px;
		margin-bottom: 3px;
	}
	.houseContent .listitem .info-box .price span{
		font-family: PingFangSC-Regular;
		font-size: 10px;
		color: #4C4C4C;
		letter-spacing: 0.71px;
		line-height: 14px;
		margin-left: 3px;
	}
	.houseContent .listitem .info-box .location{
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #4C4C4C;
		letter-spacing: 0.85px;
		margin-bottom: 10px;
		position: relative;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.houseContent .listitem .info-box .tag{
		-margin-top: 16px;
	}
	.houseContent .listitem .info-box .tag span{
		display: inline-block;
		background: rgba(0,0,0,.03);
		padding: 6px 8px;
		margin-right: 8px;
		margin-bottom: 5px;
		border-radius: 2px;
		white-space: nowrap;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #FFFFFF;
		letter-spacing: 0.85px;
	}
	.pageWrapper{
		padding: 30px 0;
		text-align: center;
		margin-bottom: 30px;
	}
</style>
