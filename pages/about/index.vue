<template>
	<b-container fluid>
		<div class="banner">
			<h1>海外生活有忆家</h1>
			<img src="@/assets/images/about/aboutBanner.png" alt="">
		</div>
		<div class="others">
			<div class="others-cont">
				<div class="others-cont-items" @click="jump('/contact')">联系YIHOME</div>
				<div class="others-cont-items" @click="jump('/join-us')">加入YIHOME</div>
			</div>
		</div>
		<b-container>
			<div class="main-content">
				<h1 class="title">海外生活有忆家</h1>
				<p class="info">上海颖鸿网络科技有限公司是国内领先的“海外留学生高端长租公寓”运营平台，<br/>公司一直秉承“Better life in YIHOME”的理念，<br/>希望通过打造以公寓为核心的生活服务平台从而构建全新的海外租住生态圈。
自成2017年成立以来，<br/>YIHOME就一直致力于为海外留学生提供长期租住解决方案。作为一家创业型互联网海外租房公司，<br/>YIHOME可谓是发展迅猛，如今已经在英国以及澳洲站稳脚跟并着手开拓其他欧美市场。<br/>YIHOME不仅探索出一套成熟稳定的盈利模式也凭借着自己的创新理念吸引了一大批精英的加入和合作。<br/>虽然长路漫漫，但是YIHOME会一直在路上。</p>
			</div>
			<div class="main-content">
				<h1 class="title">我们的房东房客正引领未来</h1>
				<p class="info">
					我们一直致力创建一个更好的平台，成就每一次独特的海外留学租房体验。<br/>始终秉承客户第一、拥抱变化、诚信敬业、团队合作为核心价值观，<br/>用心服务每一位客户，真诚对待每一位合作伙伴。<br/>和业界同仁们一起为留学生租房做出自己的努力。
				</p>
			</div>
			<b-row>
				<b-col  md="6" sm="6" lg="6">
					<img src="@/assets/images/about/1.png" alt="YIHOME_为出海及海归提供更优质的生活化服务">
				</b-col>
				<b-col  md="6" sm="6" lg="6">
					<img src="@/assets/images/about/2.png" alt="YIHOME_为出海及海归提供更优质的生活化服务">
				</b-col>
				<b-col  md="6" sm="6" lg="6">
					<img src="@/assets/images/about/3.png" alt="YIHOME_为出海及海归提供更优质的生活化服务">
				</b-col>
				<b-col  md="6" sm="6" lg="6">
					<img src="@/assets/images/about/4.png" alt="YIHOME_为出海及海归提供更优质的生活化服务">
				</b-col>
			</b-row>
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
        title:'YIHOME_企业简介',
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
          { hid: 'description', name: 'description', content: '关于YIHOME' }
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
	  },
	jump(path){
		this.$router.push({path })
	}
    },
    created(){
      
    },
    
  }
</script>

<style lang="scss" scoped="scoped">
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
	.container{
		padding: 50px 0 82px;
	}
	.others{
		width: 100%;
		height: 100px;
		background: rgba(246, 246, 246, 1);
		&-cont{
			position: relative;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			width: 560px;
			display: flex;
			&-items{
				width: 250px;
				line-height: 50px;
				border-radius: 25px;
				display: inline-block;
				background-color: #fff;
				border: 2px solid rgb(60,71,170);
				text-align: center;
				color: rgb(60,71,170);
				font-size: 18px;
				cursor: pointer;
				transition: all .3s linear;
				&:hover{
					background-color: rgb(60,71,170);
					color: #fff;
				}
				&:first-child{
					background-color: rgba(247, 71, 56, 1);
					border-color: rgba(247, 71, 56, 1);
					margin-right: 60px;
					color: #fff;
					&:hover{
						border-color: rgba(206, 23, 30, 1);
						background-color: rgba(206, 23, 30, 1);
					}
				}
			}
		}
	}
	.container h1{
		font-family: PingFangSC-Medium;
		font-size: 30px;
		color: #4A4A4A;
		letter-spacing: 2.4px;
		text-align: left;
		line-height: 42px;
		margin-bottom: 30px;
	}
	.main-content{
		.title{
			text-align: center;
		}
		.info{
			font-family: PingFangSC-Regular;
			font-size: 16px;
			color: #484848;
			letter-spacing: 1.38px;
			line-height: 32px;
			margin-bottom: 60px;
			text-align: center;
		}
	}

	.main-info .info{
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #484848;
		letter-spacing: 1.38px;
		line-height: 22px;
		margin-bottom: 40px;
	}
	h2{
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #505050;
		letter-spacing: 1.38px;
		line-height: 22px;
		margin-bottom: 8px;
	}
	.sub-info{
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #505050;
		letter-spacing: 1.21px;
		line-height: 22px;
		margin-bottom: 50px;
	}
	.row img{
		width: 100%;
		height: auto;
		margin-bottom: 10px;
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
</style>
