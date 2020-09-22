

/* import Vue from 'vue'
import VueGoogleMaps from 'vue-google-maps'
Vue.use(VueGoogleMaps, {
	load: {
		//填入申请的apiKey账号
		apiKey: 'AIzaSyBvJmcaYjx2WDBwhoQtxJNIHwfvodK2UEk',
		libraries: ['places'],
		useBetaRenderer: false,
	},
}) */
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyBvJmcaYjx2WDBwhoQtxJNIHwfvodK2UEk',
		libraries: 'places', // This is required if you use the Autocomplete plugin
	},
})