<template>
	<section style="margin-top: 32px;">
		
    		<div class="inputAndSelectBox" style="width: 500px;">
    			<!-- <img v-if="flag" :src='flag|toLowerCase' style="position: absolute;z-index: 999;transform: translate(8px,14px);"/> -->
				<el-select v-model="phoneCountryCd" class="phoneNumberInput" :maxlength=20 placeholder="请选择" style="width: 104px;" clearable popper-class="componentsPhoneSelect" @visible-change="phoneSelectShow" @change="phonechange">
				    <el-option
				      v-for="(item,$index) in phoneData"
				      :key="item.$index"
				      :label="'+'+item.phone_head"
				      :value="item.phone_head">
				      	<img style="float: left;margin-top: 11px;margin-right: 10px;" :src='item.country_cd|toLowerCase'/>
				       	<span style="float: left">{{ item.cn_country }}</span>
						<span style="float: right; color: #8492a6; font-size: 13px;margin-left: 10px;">+{{ item.phone_head }}</span>
				    </el-option>
			  	</el-select>
				<el-input v-model.trim="phoneNumber" @keyup.native="phoneMethod" placeholder="请输入联系电话" clearable :maxlength=20 style="width: 214px;" @change="phoneNumberChange"></el-input>
    		</div>
		
	</section>
</template>
<script>
	import $ from 'jquery';
	export default{
		props: {
		  	dataDetails: Object,
		},
		data(){
			return {
				flag:'',
				phoneData:[],
				oldPhoneData:[],
				phoneCountryCd:'',
				phoneNumber:'',
			}
		},
		filters:{
			toLowerCase(val){
				return `${this.yihomeGlobalVariable}/upload/newStatic/flags/`+val.toLowerCase()+'.png'
			}
		},
		created(){
	    	this.flag = this.phoneCountryCd;
	    	
	    	if(this.dataDetails.phoneCountryCd){
	    		
	    		this.phoneCountryCd=this.dataDetails.phoneCountryCd;
	    		this.flag = this.dataDetails.phoneCountryCd;
	    		
	    		
	    	}
	    	
	    },
	    mounted(){
	    	var that = this;
			//手机地区选择
			$(document).on("input propertychange", ".componentsPhoneSelect .select", function(){
				that.selectSearch($(this).val(),'phone')
			});
			this.getCountryData();
	    },
	    methods:{
			phoneMethod(){
				console.log(11111)
				this.phoneNumber=this.phoneNumber.replace(/[^\.\d]/g,'');
				this.phoneNumber=this.phoneNumber.replace('.','');
			},
	    	getCountryData(){
				
				this.phoneData =[
					{"en_country":"China","cn_country":"中国","country_cd":"CN","phone_head":"86"},
					{"en_country":"Hong Kong","cn_country":"中国香港","country_cd":"HK","phone_head":"852"},	
					{"en_country":"Macau","cn_country":"中国澳门","country_cd":"MO","phone_head":"853"},	
					{"en_country":"Taiwan","cn_country":"中国台湾","country_cd":"TW","phone_head":"886"},	
					{"en_country":"Australia","cn_country":"澳大利亚","country_cd":"AU","phone_head":"61"},
					{"en_country":"United Kingdom","cn_country":"英国","country_cd":"GB","phone_head":"44"},
				]
				
				this.oldPhoneData =[
					{"en_country":"China","cn_country":"中国","country_cd":"CN","phone_head":"86"},
					{"en_country":"Hong Kong","cn_country":"中国香港","country_cd":"HK","phone_head":"852"},	
					{"en_country":"Macau","cn_country":"中国澳门","country_cd":"MO","phone_head":"853"},	
					{"en_country":"Taiwan","cn_country":"中国台湾","country_cd":"TW","phone_head":"886"},	
					{"en_country":"Australia","cn_country":"澳大利亚","country_cd":"AU","phone_head":"61"},
					{"en_country":"United Kingdom","cn_country":"英国","country_cd":"GB","phone_head":"44"},
				]
				
				/* var that = this;
				$.ajax({
					url:'./country.json',
					type:"GET",
					success:function(res){
						console.log(res)
						that.phoneData = res;
						that.oldPhoneData = res;
					}
				}) */
			},
			phoneSelectShow(status){
				/* if(status){
					this.phoneData = this.oldPhoneData;
					if($(".componentsPhoneSelect .select").length=="0"){
						$(".componentsPhoneSelect").prepend("<div class='inputWrap'><input class='select' placeholder='请输入名称' type='text' /></div>");
					}
					setTimeout(function(){
						$(".componentsPhoneSelect .select").focus()
					},100)
				}else{
					$(".componentsPhoneSelect .select").val("")
				} */
			},
			phonechange(){
				this.dataDetails.phoneCountryCd = this.phoneCountryCd;
				this.flag = this.phoneCountryCd;
	      		this.$emit("on-result-phone-change",this.dataDetails);
	      	},
	      	selectSearch (parmas,parmas2) {
	    		var newArry = [];
	    		if(parmas==""){
	    			//当输入框为空时 还原原始数据
    				this.phoneData = this.oldPhoneData;
	    		}else{
	    			var ss = this.oldPhoneData;
	    			ss.forEach(function (item, index) {
						if(item.cn_country.indexOf(parmas)>-1||item.phone_head.indexOf(parmas)>-1){
							newArry.push(item)
						}
					});
    				this.phoneData = newArry;
	    		}
	      	},
	      	phoneNumberChange(){
				this.dataDetails.phoneNumber = this.phoneNumber;
	      		this.$emit("on-result-phone-change",this.dataDetails);
	      	}
	    }
	}
</script>
<style scoped="scoped">
	.kycColor{
		font-family: PingFang SC;
	    font-size: 14px;
	    color: #2096F3;
	    letter-spacing: 1.05px;
	}
	.labelTitle{
		font-family: PingFang SC;
	    font-size: 16px;
	    letter-spacing: 0;
	    padding: 0px;
	    color: #2C2E2F;
	    margin: 24px 0px 9px;
	}
</style>
<style >
	.componentsPhoneSelect .inputWrap {
		padding: 0 20px;
		padding-top: 10px;
	}
	.componentsPhoneSelect .inputWrap input{
		box-sizing: border-box;
	    color: #606266;
	    display: inline-block;
	    font-size: inherit;
	    height: 40px;
	    line-height: 40px;
	    outline: 0;
	    padding: 0 15px;
	    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
	    width: 100%;
	    -webkit-appearance: none;
	    background-color: #fff;
	    background-image: none;
	    border: 1px solid #BDBDBD;
	    border-radius: 8px;
	}
</style>