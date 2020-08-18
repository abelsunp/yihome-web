<template>
	<b-container fluid>
		<div class="banner">
			<h1>在忆家，在一家。</h1>
			<img src="@/assets/images/about/joinBanner.png" alt="">
		</div>
		<b-container>
			<h1>加入YIHOME忆家</h1>
			<div class="con_view">
				<h2>简历投递方式：hr@inyihome.com</h2>
				<strong>招聘职位：</strong>
				
				
				<div class="requirements" v-for="(item,$index) in jobArray" :key='$index'>
					<h3>{{$index+1}}、{{item.title}}</h3>
					<span>岗位职责：</span>
					<p v-for="list in item.duty">{{list.content}}</p>
					<span>岗位要求：</span>
					<p v-for="list in item.requirement">{{list.content}}</p>
				</div>
			</div>
		</b-container>
		<div class="chooseHouse">
			<h3>免费留电专业顾问老师帮您快速找房</h3>
			<p @click="freeCall">免费留电</p>
		</div>
	</b-container>
</template>

<script>
  export default{
    data(){
		return {
			title:'YIHOME_加入我们',
			jobArray:[]	
		}
    },
	async asyncData() {
		return {
			jobArray:[
				{
					title:'市场渠道经理',
					duty:[
						{content:'1、负责留学产业链相关业务的B端渠道拓展，不限于同业及同业机构/学校/社区等；'},
						{content:'2、线下活动合作的策划与执行；'},
						{content:'3、维护部门B端客户，已完成终端业绩指标；'},
						{content:'4、完成临时安排的工作。'}
					],
					requirement:[
						{content:'1、有留学/教育行业市场的渠道经验；'},
						{content:'2、能够独立组织制定市场规则，市场销售策略，产品拓展等工作；'},
						{content:'3、吃苦耐劳/勤奋/任劳任怨/高度的工作热情/性格活泼/良好的人际关系；'},
						{content:'4、具备敏锐的市场洞察能力，主观能动性强，以积极主动的心态投入工作，富有创造性，具备关系建立和商务谈判技巧；'},
						{content:'5、责任心强，熟练掌握办公软件。'}
					],
					
				},
				{
					title:'海外市场商务BD',
					duty:[
						{content:'1、负责公司产品信息的租赁和推广，负责海外区域市场销售渠道的建立与完善；'},
						{content:'2、利用各种网络平台及资源开发海外客户，管理并维护客户关系；'},
						{content:'3、接待来访的海外客户，负责商务谈判，持续跟进及客户关系维护。定期整理客户信息，充实信息库。制定自我销售目标，及房源营销策略。'},
					],
					requirement:[
						{content:'1、专科及以上学历，专业不限；'},
						{content:'2、年龄23~30岁，男女不限；'},
						{content:'3、能进行日常英语口语交流；'},
						{content:'4、性格外向，热情，口齿清晰；'},
						{content:'5、有无工作经验均可，对海外留学生活有所了解。'}
					],
					
				}
			]
		}
	},
    key (route) {
      console.log(route)
      return route.fullPath
    },
    head () {
      return {
        title: this.title,
        meta: [
          { hid: 'description', name: 'description', content: '加入YIHOME' }
        ]
      }
    },
    methods:{
      getImageUrl(imageId) {
        const { width, height } = this.mainProps
        return `https://picsum.photos/${width}/${height}/?image=${imageId}`
      },
	  freeCall(){
	  		this.$parent.$parent.freeCallStatus = true;
	  }
    },
    created(){
      
    },
    
  }
</script>

<style scoped="scoped">
	.container-fluid{
		padding: 0;
	}
	.banner{
		position: relative;
	}
	.banner img{
		width: 100%;
		height: auto;
	}
	.banner h1{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		font-family: NotoSansHans-Medium;
		font-size: 44px;
		color: #FFFFFF;
		letter-spacing: 3.52px;
		line-height: 66px;
	}
	
	.chooseHouse {
		height: 188px;
		background: #3B44AC;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items:center;
	}
	.chooseHouse h3{
		font-family: PingFangSC-Medium;
		font-size: 22px;
		color: #FFFFFF;
		letter-spacing: 1.9px;
		line-height: 30px;
		margin-bottom: 19px;
	}
	.chooseHouse p{
		font-family: PingFangSC-Medium;
		font-size: 14px;
		color: #FFFFFF;
		letter-spacing: 1.21px;
		line-height: 20px;
		display: inline-block;
		background: #FB5058;
		border-radius: 17.5px;
		padding: 5px 15px;
		cursor: pointer;
	}
	.container{
		padding: 50px 0 60px;
	}
	.container h1{
		font-family: PingFangSC-Medium;
		font-size: 25px;
		color: #333333;
		letter-spacing: 2px;
		line-height: 36px;
		margin-bottom: 30px;
	}
	.con_view h2{
		font-size: 18px;
		padding-bottom: 32px;
	}
	.con_view strong{
		font-size: 18px;
	}
	.requirements h3{
		font-size: 18px;
		color: #242424;
		padding: 28px 0px 18px 0px;
	}
	.requirements span{
		color: #242424;
		font-size: 14px;
		font-weight: bold;
		height: 40px;
		line-height: 40px;
	}
	.requirements p {
	    color: #242424;
	    font-size: 14px;
	    line-height: 30px;
	}
</style>
