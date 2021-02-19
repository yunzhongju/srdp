<template>
	<div class="serachs">
		<input 
		type="text" 
		v-model="value"
		@input="$emit('onHandleSerach',value)"
		:placeholder="placeholder" /></div>
</template>

<script>
	export default {
		props:{
			placeholder:{
				type:String,
				default:()=>''
			}
		},
		data(){
			return {
				value:''
			}
		}
	}
</script>

<style lang="less" scoped>
	.serachs {
		background-color: #eeeeee;
		display: flex;
		box-shadow: 0 5px 5px #eeeeee;
		justify-content: center;
		align-items: center;
		padding: 20px 40px;
		border-radius: 10px;
		input {
			width: 100%;
			background-color: #eeeeee;
			font-size: 30px;
			border: none;
			outline: none;
		}
	}
</style>
