<template>
	<b-container fluid v-loading="loadingStatus">
		<b-container class="story">
			<h1 class="title">精彩的故事，因为精彩的你</h1>
			<p class="info">在忆家，发现更精彩的留学生涯</p>
			 <p v-if="!listitemData">暂无数据....</p> 
			<b-row>
				<b-col md="6" sm="6" lg="4" class="listitem" v-for="(item,$index) in listitemData" :key="$index">
					<a :href="commonGlobalPath+'/storydetails?id='+item.id" target="_blank">
						<div class="img">
							<div  class="el-image">
								<img v-if="!item.imgUrl" src="../../assets/images/zhan1.jpeg" class="april-img" style="object-fit: cover;">
								<img v-else :src="yihomeGlobalVariable+item.imgUrl | imgStrClac('l')"  class="april-img" style="object-fit: cover;">
							</div>
						</div>
						<div class="content">
							<h5>{{item.title}}</h5>
							<p v-html="item.info"></p>
						</div>
					</a>
				</b-col>
			</b-row>
			
			
			<b-row style="position: relative;" v-if="loadingStatus">
				<b-col md="6" sm="6" lg="4" class="listitem" v-for="(item,$index) in 6" :key="$index">
					<div class="img skeleton">
						
					</div>
					<div class="content skeletonContent">
						<h5></h5>
						<p></p>
					</div>
				</b-col>
			</b-row>
			
			<!-- <div class="block" v-if="pageStatus">
				<el-pagination
				  @size-change="handleSizeChange"
				  @current-change="handleCurrentChange"
				  :current-page="pageNum"
				  :page-sizes="[6, 9, 12, 15]"
				  :page-size="pageSize"
				  layout="total, sizes, prev, pager, next, jumper"
				  :total="totalCount">
				</el-pagination>
			</div> -->
		</b-container>
	</b-container>
</template>

<script>
	export default{
		// layout:'otherHeader',
		data(){
			return {
				loadingStatus:false,
				pageStatus:false,
				listitemData:[],
				totalCount:null,
				pageNum:1,
				pageSize:60,
			}
		},
		/* async asyncData({query,app,params,route}){
			console.log(app,111)
			return app.$request.getStory({'page':'1','limit':'6',type: 3}).then(res=>{
				var resData = res.data;
				resData.forEach(function(item,index){
					item.titleimg = 'https://www.inyihome.com'+item.titleimg
				})
				return {
					listitemData: res.data,
					totalCount : res.count
				}
			})
			
		}, */
		filters:{
			imgStrClac:function(str,num){
				let res = str.replace(/(.*)\./,'$1'+num+'.');   //$1 + 替换后的字符
				return res;
			}
		},
		created(){
			
		},
		mounted(){
			this.getList();
		},
		methods:{
			getList(){
				this.loadingStatus = true;
				this.$request.getStory({type: 1}).then(res=>{
					this.loadingStatus = false;
					if(res.code === 200){
						this.listitemData = res.data;
						console.log(this.listitemData)
					}else{
						this.$message.error(res.msg);
					}
				}).catch(e=>{
					this.loadingStatus = false;
				})
			},
			handleSizeChange(val){
				this.pageNum = 1;
				this.pageSize = val;
				this.getList()
			},
			handleCurrentChange(val){
				this.pageNum = val
				this.getList()
			}
		}
	}
</script>

<style scoped="scoped">
	.container-fluid{
		padding-bottom: 40px;
		border-bottom: 1px solid #E6E6E6;
	}
	a{
		text-decoration: none;
	}
	.story{
		overflow: hidden;
	}
	.story .listitem{
	  margin-bottom: 30px;
	}
	.story .listitem a{
		display: block;
	}
	.story .listitem:hover a{
		transition: all 0.5s;
		    box-shadow: 0 1px 6px rgba(0,0,0,.2);
	}
	.story .title{
	  font-family: NotoSansHans-Medium;
	  font-size: 32px;
	  color: #333333;
	  letter-spacing: 2.79px;
	  margin-top: 55px;
	  margin-bottom: 14px;
	  line-height: 48px;
	}
	.story .info{
		font-family: NotoSansHans-Regular;
		font-size: 16px;
		color: #484848;
		letter-spacing: 1.33px;
		margin-bottom: 33px;
		line-height: 24px;
	}
	.story .content{
	  padding: 15px;
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
	.el-image{
		border-radius: 4px;
	}
	@keyframes ant-skeleton-loading{
		0%{
			background-position: 100% 50%;
		}
		50%{
			background-position: 0 50%;
		}
	}
	.skeleton,.skeletonContent{
		background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
		background-size: 400% 100%;
		animation: ant-skeleton-loading 1.4s ease infinite;
	}
	.skeletonContent{
		margin-top: 15px;
	}
</style>
