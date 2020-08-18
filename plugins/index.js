import Vue from 'vue'
var yihomeGlobalVariable= {
    install(Vue){
		Vue.prototype.yihomeGlobalVariable = 'https://www.inyihome.com';
		
		// if (window.location.host === 'www.inyihome.com') {
		// 	Vue.prototype.yihomeGlobalVariable = 'https://www.inyihome.com'
		// }
		// if (window.location.host === 'www.inyihome.com:10045') {
		// 	Vue.prototype.yihomeGlobalVariable = 'http://www.inyihome.com:10045'
		// }        
        //Vue.prototype.yihomeGlobalVariable = 'https://www.inyihome.com'
    }
}
Vue.use(yihomeGlobalVariable)