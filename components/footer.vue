<template>
	<b-container id="footer">
		<b-row>
			<b-col md="8">
				<b-row>
					<b-col md="3">
						<dl>
							<dt>企业简介</dt>
							<dd><a href="/about">关于我们</a></dd>
							<dd><a href="/contact">联系我们</a></dd>
							<dd><a href="/Join-us">加入我们</a></dd>
						</dl>
					</b-col>
					<b-col md="9">
						<dl>
							<dt>YIHOME忆家</dt>
							<dd>客服电话：17602106152</dd>
							<dd>企业邮箱：service@inyihome.com</dd>
							<dd>企业地址：上海市 宝山区 呼兰西路19号 上海智力产业园北区2号楼201室</dd>
						</dl>
					</b-col>
				</b-row>
			</b-col>
			<b-col md="4">
				<b-row>
					<b-col md="6" style="text-align: center;">
						<img src="@/assets/images/footer/subscription.svg" alt="">
						<p class="info">微信扫一扫，添加专业老师</p>
					</b-col>
					<b-col md="6" style="text-align: center;">
						<img src="@/assets/images/footer/smallProgram.svg" alt="">
						<p class="info">微信扫一扫，添加公众号</p>
					</b-col>
				</b-row>
			</b-col>
		</b-row>
		<p>Copyright 上海颖鸿网络科技有限公司 All Right Reserved 沪ICP备18002555号-1</p>
	</b-container>
</template>

<script>
</script>

<style scoped="scoped">
	.info{
		font-family: PingFangSC-Regular;
		font-size: 10px;
		color: #666666;
		margin-top: 10px;
	}
	#footer{
		padding-top: 30px;
	}
	dl dt{
		font-family: PingFangSC-Medium;
		font-size: 15px;
		color: #333333;
		letter-spacing: 1.09px;
		line-height: 21px;
		margin-bottom: 15px;
	}
	dl dd{
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #666666;
		letter-spacing: 0.87px;
		line-height: 17px;
		margin-bottom: 15px;
	}
	dl dd a{
		color: #666666;
	}
	p{
		font-family: PingFangSC-Regular;
		font-size: 10px;
		color: #666666;
		margin-bottom: 28px;
		margin-top: 4px;
		text-align: center;
	}
</style>
