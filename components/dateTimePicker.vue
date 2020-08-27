<template>
	<section class="selectWrapper">
		<div class="wrapper">
			<!-- <div class="houseTypeChoose">
				<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
				    <el-tab-pane label="民宿" name="first" value="147"></el-tab-pane>
				    <el-tab-pane label="公寓" name="second" value="148"></el-tab-pane>
				</el-tabs>
			</div> -->
			<div class="wrapperSe">
				<el-autocomplete style="width: 100%;"
					v-model="state"
					:fetch-suggestions="querySearchAsync"
					placeholder="请输入城市/大学/房源名称"
					:trigger-on-focus="false"
					popper-class="searchName"
					@select="searchSelect">
					<template slot-scope="{ item }">
						
						<!-- <p v-if="item.disabled">抱歉，没有搜索结果，请重新输入</p> -->
						<!-- <div v-else> -->
							<span class="icon">
								<i v-if="item.type=='country'" class="el-icon-location-outline"></i>
								<i v-if="item.type=='city'" class="el-icon-location-outline"></i>
								<i v-if="item.type=='school'" class="el-icon-school"></i>
								<i v-if="item.type=='house'" class="el-icon-house"></i>
							</span>
							<span class="name" style="margin-left: 16px;">{{ item.value }}</span>
							<span style="float: right;" class="count">{{ item.housecount?item.housecount+' 套':'' }}</span>
						<!-- </div> -->
					</template>
				</el-autocomplete>
				<div class="search">
					<el-button type="primary" @click="findHouse">立即找房</el-button>
				</div>
			</div>
		</div>
		<!-- <div class="item">
			<el-date-picker
			  v-model="value2"
			  type="daterange"
			  align="right"
			  unlink-panels
			  range-separator=""
			  start-placeholder="开始日期"
			  end-placeholder="结束日期"
			  :picker-options="pickerOptions">
			</el-date-picker>
		</div> -->
		
	</section>
</template>

<script>
	export default{
		data(){
			return {
				options: [{
				  value: '147',
				  label: '民宿'
				}, {
				  value: '148',
				  label: '公寓'
				}],
				housetypeid:'147',
				restaurants:[],
				state:'',
				activeName: 'first',
				list:[],
			}
		},
		created(){
			
		},
		methods:{
			querySearchAsync(queryString,callback){
				console.log(queryString,11111111,this.state)
				
				this.$request.findHouseSearchAll({value:queryString}).then(res=>{
					for(let i of res.data){
						i.value = i.titlename;  //将想要展示的数据作为value
					}
					this.list = res.data;
					/* if(this.list.length==0){
						callback([{value:'',disabled:true}]);
						return
					} */
					callback(this.list);
				}).catch(e=>{
					
				}) 
			},
			searchSelect(item){
				console.log(item) // country city school house
				
				/* 如果选择的是国家 */
				var str = item.id;
				/* this.$router.push({ name: 'findhouse',a: {query: item.id} }); */
				if(item.type=="house"){
					window.open('/housedetail?'+item.id,'_self')
					return;
				}
				window.open('/findhouse?'+item.id,'_self')
			},
			handleClick(tab, event) {
				this.list = [];
				this.state = ''
				if(tab.label=="民宿"){
					this.housetypeid = '147'
				}else{
					this.housetypeid = '148'
				}
			},
			findHouse(){
				/* this.$request.newfindhouse({ housetype: this.housetypeid,search:this.state}).then(res=>{
					console.log(res)
				}).catch(e=>{
					this.$message.error('网络错误');
				}) */
				if(this.StrTrim(this.state)==""){
					this.$message({
						message: '请输入搜索内容',
						type: 'warning'
					});
					return;
				}
				//window.open('/findhouse?housetype='+this.housetypeid+'&search='+this.state,'_self')
				window.open('/findhouse?search='+this.state,'_self')
			},
			StrTrim(str){
				return str.replace(/(^\s*)|(\s*$)/g, ""); 
			}
		}
	}
</script>

<style scoped="scoped">
	.selectWrapper{
		display: flex;
		justify-content: center;
	}
	.wrapper{
		width: 77%;
	}
	.wrapperSe{
		display: flex;
		flex-wrap: nowrap;
		justify-content: center;
	}
	
	.search button{
		width: 151px;
		height: 65px;
		background-color: #3B44AC;
		border-color: #3B44AC;
		border-top-left-radius: 0px;
		border-bottom-left-radius: 0px;
		font-size: 17px;
	}
	.search button:focus{
		background: #3B44AC;
	}
</style>
<style>
	.selectWrapper .el-input__inner{
		height: 65px;
		line-height: 65px;
		border-radius: 0;
		outline: none;
		border-top-left-radius: 4px;
		border-bottom-left-radius: 4px;
		font-size: 17px;
	}
	.selectWrapper .el-input__inner::-webkit-input-placeholder {
		/* placeholder颜色  */
		color: #4c4c4c;
	}
	.selectWrapper .el-input__inner:focus{
		border-color: #fff;
	}
	.selectWrapper .houseTypeChoose .el-tabs--card>.el-tabs__header{
		border-bottom: none;
		margin-bottom: 0;
	}
	.selectWrapper .houseTypeChoose .el-tabs--card>.el-tabs__header .el-tabs__nav{
		background-color: rgba(0,0,0,.49);
		border: none;
	}
	.selectWrapper .houseTypeChoose .el-tabs--card>.el-tabs__header .el-tabs__item{
		color: #fff;
		font-size: 16px;
	}
	.selectWrapper .houseTypeChoose .el-tabs__item.is-active{
		background-color: #fff;
		color: #333!important;
	}
</style>
