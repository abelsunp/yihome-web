<template>
	<section>
		<account-login v-if="currentStatus=='toemail'" @on-result-change="onResultChange"></account-login>
		<phone-login v-else @on-result-change="onResultChange"></phone-login>
		<i class="el-icon-circle-close back" @click="goback"></i>
	</section>
</template>

<script>
	import accountLogin from '@/components/loginType/accountLogin.vue';
	import phoneLogin from '@/components/loginType/phoneLogin.vue';
	export default{
		layout: 'loginRegister',
		components:{
			accountLogin,
			phoneLogin
		},
		data(){
			return {
				currentStatus:'toemail'
			}
		},
		methods:{
			onResultChange(val){
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
		font-weight: normal;
	}
</style>