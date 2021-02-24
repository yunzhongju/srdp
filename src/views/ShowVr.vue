<template>
	<div class="show-vr">
		<div class="up">
			<iframe
				frameborder='0' 
				align='center' 
				allowfullscreen='true' 
				allow="autoplay"   
				id='iframe' 
				:src="vr"/>
		</div>
		<div class="down">
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
				height:window.innerHeight-750/1080*130
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
	.show-vr{
		display: flex;
		flex-direction: column;
		height: 100%;
		.up{
				flex: 1;
				// background-color: red;
				iframe{
					height: 100%;
					width: 100%;
				}
		}
		.down{
			height: 130px;
			background-color: black;
			display: flex;
			justify-content: space-around;
			background-color: black;
			opacity: .9;
			img{
				margin-left: 20px;
				height: 130px;
				width: 130px;
			}
		}
	}

</style>
