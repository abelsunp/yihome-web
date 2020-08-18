<template>
	<section>
		<phone-register v-if="currentStatus=='tophone'"  @on-result-change="onResultChange"></phone-register>
		<email-register v-else  @on-result-change="onResultChange"></email-register>
		<i class="el-icon-circle-close back" @click="goback"></i>
	</section>
</template>

<script>
	import emailRegister from '@/components/registerType/emailRegister.vue';
	import phoneRegister from '@/components/registerType/phoneRegister.vue';
	export default{
		layout: 'loginRegister',
		components:{
			emailRegister,
			phoneRegister
		},
		data(){
			return {
				currentStatus:'tophone'
			}
		},
		methods:{
			onResultChange(val){
				console.log(val)
				this.currentStatus = val;
			},
			goback(){
				this.$router.push({path:'/'})
			}
		}
		
	}
</script>

<style scoped="scoped">
	section{
		height: 100%;
		position: relative;
	}
	.back{
		font-size: 40px;
		position: absolute;
		right: 20px;
		top: 20px;
		cursor: pointer;
	}
</style>
