<template>
	<div id="app" :style="'height:'+h+'px'">
		<transition name="fade">
			<router-view></router-view>
		</transition>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				h:window.innerHeight
			}
		}
	}
</script>
<style lang="less">
#app {
	background-image: url("./assets/img/background.jpg");
	background-size: 100%;
	background-repeat: no-repeat;
	background-position: right bottom, left top;
	height: 1922px; 
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.4s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}
}
</style>
