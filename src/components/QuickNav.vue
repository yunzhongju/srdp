<template>
	<div class="quick-nav">
		<img @click="show = !show" src="../assets/img/floor_btn.png" />
		<transition 
			name="custom-classes-transition" 
			enter-active-class="animated tada" 
			leave-active-class="animated bounceOutLeft">
			<img 
				v-show="show && layout.includes('back')" 
				@click="$emit('onHandleBack')" 
				src="../assets/img/floor_btn_back.png" />
		</transition>
		<transition 
			name="custom-classes-transition" 
			enter-active-class="animated tada" 
			leave-active-class="animated bounceOutLeft">
			<img 
				v-show="show && layout.includes('up')" 
				@click="$emit('onHandleUp')" 
				src="../assets/img/up.png" />
		</transition>
		<transition 
			name="custom-classes-transition" 
			enter-active-class="animated tada" 
			leave-active-class="animated bounceOutLeft">
			<img 
				v-show="show && layout.includes('down')" 
				@click="$emit('onHandleNext')" 
				src="../assets/img/floor_btn_nextpage.png" />
		</transition>
		<transition 
			name="custom-classes-transition" 
			enter-active-class="animated tada" 
			leave-active-class="animated bounceOutLeft">
			<img 
				v-show="show && layout.includes('home')" 
				@click="$emit('onHandleWechat')" 
				src="../assets/img/floor_btn_wechat.png" />
		</transition>
	</div>
</template>

<script>
export default {
	props:{
		layout:{
			type:Array,
			default:()=>['back','up','down','home']
		}
	},
	data() {
		return {
			show: false,
			list:[require('../assets/img/floor_btn_back.png'),
						require('../assets/img/up.png'),
						require('../assets/img/floor_btn_nextpage.png'),
						require('../assets/img/floor_btn_wechat.png')
					]
		};
	},
	methods: {}
};
</script>

<style lang="less" scoped>
.quick-nav {
	display: flex;
	flex-direction: column;
	img {
		margin-bottom: 20px;
		height: 134px;
		width: 134px;
	}
}
</style>
