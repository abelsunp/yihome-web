<template lang="html">
  <div class="loading-page" v-if="loading">
    <p>正在加載...</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  created(){
	
  },
  methods: {
    start () {
      this.loading = false
    },
    finish () {
		let that = this;
		setTimeout(function() {
			that.loading = false
		}, 1000);
      
    }
  }
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
  z-index: 999999999;
}
</style>