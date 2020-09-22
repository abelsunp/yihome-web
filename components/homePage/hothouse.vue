<template>
	<section>
		<Tabs type="card">
			<TabPane label="标签一">标签一的内容</TabPane>
			<TabPane label="标签二">标签二的内容</TabPane>
			<TabPane label="标签三">标签三的内容</TabPane>
		</Tabs>
	</section>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		async asyncData({query,app,params,route}){
			let resData = await app.$request.homeHothouse()
			console.log(resData,99999999999999999)
			return {
				
			} 
		}, 
	}
</script>

<style>
</style>
