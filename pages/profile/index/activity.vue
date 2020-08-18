<template>
	<section>
		<el-tabs v-model="activeName" @tab-click="handleClick">
		    <el-tab-pane label="参与中" name="first">
				暂无
			</el-tab-pane>
		    <el-tab-pane label="已完成" name="second">
				暂无
			</el-tab-pane>
		    <el-tab-pane label="已失效" name="third">
				暂无
			</el-tab-pane>
		</el-tabs>
	</section>
</template>

<script>
	export default{
		data(){
			return {
				activeName: 'first'
			}
		},
		methods:{
			handleClick(tab, event) {
				console.log(tab, event);
			}
		}
	}
</script>

<style scoped="scoped">
	.el-tabs__item:hover{
		color: #3B44AC;
	}
</style>
