<template>
	<div class="menu">
		<span class="active" @click="onBackHome">首页</span>
		<span @click="$router.push('/news')">新闻动态</span>
		<span @click="$router.push('/practice')">实践点</span>
		<span>近期活动</span>
		<span @click="onClose">关闭菜单</span>
	</div>
</template>

<script>
	export default {
		methods:{
			onClose(){
				this.$emit('onClose')
			},
			onBackHome(){
				this.$emit('onBackHome')
			}
		}
	}
</script>

<style lang="less" scoped>
	.menu{
		display: flex;
		flex-direction: column;
		span{
			background-color: #fff;
			font-size: 40px;
			padding: 30px 25px;
			border-radius: 20px;
			margin-bottom: 30px;
			text-align: center;
			opacity: .8;
		}
	}
	.active{
		background-color: #da3338 !important;
		color: #fff !important;
	}
</style>
