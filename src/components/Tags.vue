<template>
	<div class="filter">
		<span :class="{'active':active===0}" @click="onHandleClick(0)">全部</span>
		<span 
			@click="onHandleClick(index+1,item)"
			:class="{'active':active===index+1}"
			v-for="(item,index) in list">{{item.orgname}}</span>
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
				active:0
			}
		},
		methods:{
			onHandleClick(index,item={}){
				this.active=index
				this.$emit('onHandleClick',item)
			}
		}
	}
</script>

<style lang="less" scoped>
	.filter {
		display: flex;
		flex-wrap: wrap;
		margin-top: 20px;
		span {
			margin-top: 20px;
			padding: 20px 30px;
			color: grey;
			background-color: #eee;
			font-size: 30px;
			border-radius: 10px;
			margin-right: 33px;
		}
	}
	.active {
		color: #dc4145 !important;
	}
</style>
