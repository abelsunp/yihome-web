<template>
	<section>
		
		<email-reset v-if="currentStatus=='toemail'" @on-result-change="onResultChange"></email-reset>
		<phone-reset v-else @on-result-change="onResultChange"></phone-reset>
		<i class="el-icon-circle-close back" @click="goback"></i>
	</section>
</template>

<script>
	import phoneReset from '@/components/resetType/phoneReset.vue';
	import emailReset from '@/components/resetType/emailReset.vue';
	export default{
		layout: 'loginRegister',
		components:{
			phoneReset,
			emailReset
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
