<template>
	<div 
		class="select" 
		@click="show=!show">
		<span>{{placeheld}}</span>
		<span :class="{'animated':1,'rotateIn':show}">▼</span>
		<span class="close" v-show="placeheld!='请选择期数'" @click.stop="onHandleClear">x</span>
		<div class="select-choose scale-in-top" v-show="show && list.length!==0">
			<span v-for="(item,index) in list" @click="onHandleClickTip(item)">{{item.recordCode}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			list:{
				type:Array,
				default:()=>[]
			}
		},
		data(){
			return {
				show:false,
				placeheld:'请选择期数',
			}
		},
		methods:{
			onHandleClickTip(item){
				this.placeheld=item.recordCode
				// this.show=false
				this.$emit('onHandleClickTime',item)
			},
			onHandleClear(){
				this.placeheld='请选择期数'
				this.$emit('onHandleClear')
			}
		}
	}
</script>

<style lang="less" scoped>
	.select{
		position: relative;
		width: 50%;
		border-radius: 10px;
		border: 1px solid gray;
		font-size: 30px;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 20px 20px;
		color: grey;
	}
	.select-choose{
		overflow: auto;
		border-radius: 10px;
		width: 100%;
		position: absolute;
		bottom: -310px;
		left: 0;
		height: 300px;
		z-index: 999;
		background-color: #fff;
		border: 1px solid gray;
		display: flex;
		flex-direction: column;
		opacity: 1;
		span{
			padding: 10px 30px;
			margin: 10px 10px;
			color: black;
		}
	}
	.scale-in-top {
		-webkit-animation: scale-in-top 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
		        animation: scale-in-top 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	}
	.close{
		position: absolute;
		right: 80px;
		top: 20px;
		background-color: gainsboro;
		border-radius: 50%;
		color: #fff;
		padding: 2px 7px 5px 7px;
		text-align: center;
		font-size: 20px;
	}
</style>
