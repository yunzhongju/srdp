<template>
	<div :style="'height:'+height+'px;'">
		<!-- <Vr :vr="vr"></Vr> -->
		<div style="height: 93.2%;">
			<iframe
				width="100%" 
				height='100%' 
				frameborder='0' 
				align='center' 
				allowfullscreen='true' 
				allow="autoplay"   
				id='iframe' 
				:src="vr"/>
		</div>
		<div class="show-back">
			<transition
			    name="custom-classes-transition"
			    enter-active-class="animated bounceInLeft"
			    leave-active-class="animated bounceOutLeft"
			>
			    <img 
						v-show="show" 
						@click="$router.go(-1)"
						src="../assets/img/floor_btn_back.png" alt="">
			</transition>
			<img @click="show=!show" src="../assets/img/floor_btn.png" alt="">
			<transition
			    name="custom-classes-transition"
			    enter-active-class="animated bounceInRight"
			    leave-active-class="animated bounceOutRight"
			>
			    <img 
						v-show="show" 
						@click="$router.push('/')"
						src="../assets/img/floor_btn_wechat.png" alt="">
			</transition>
		</div>
	</div>
</template>

<script>
	import Vr from '../components/Vr.vue'
	export default {
		components:{
			Vr
		},
		data(){
			return {
				vr:'',
				show:true,
				height:window.innerHeight
			}
		},
		created() {
			this.vr=this.$route.query.vr
		},
		methods:{

		}
	}
</script>

<style lang="less" scoped>
	.show-back{
		position: fixed;
		display: flex;
		justify-content: space-around;
		background-color: black;
		bottom: 0;
		width: 100%;
		left: 0;
		z-index: 10000;
		opacity: .9;
		img{
			margin-left: 20px;
			height: 130px;
			width: 130px;
		}
	}
</style>
