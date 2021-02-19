<template>
	<div class="nav">
		<img src="../assets/img/homepage.png" alt="" @click="$router.push('/')">
		<div>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
	
	}
</script>

<style lang="less" scoped>
	.nav{
		display: flex;
		align-items: center;
		font-size: 40px;
		color: #fff;
		margin-top: 55px;
		img{
			margin-right: 25px;
			width: 40px;
			height: 36px;
		}
		span{
			margin-right: 10px;
		}
	}
</style>
