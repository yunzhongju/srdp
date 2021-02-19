<template>
	<div>
		<div class="contain">
			<!-- logo -->
			<Logo></Logo>
			<Top><img src="../assets/img/practice.png" alt=""></Top>
			<div class="content">
				<img src="../assets/img/b3.png" alt="" @click="$router.push('/news')">
				<img src="../assets/img/b2.png" alt="" @click="$router.push('/video')">
				<img src="../assets/img/b1.png" alt="" @click="$router.push('/practice')">
			</div>
		</div>
	</div>
</template>

<script>
	import Logo from '../components/Logo.vue'
	import Top from '../components/Top.vue'
	export default {
		components:{
			Logo,
			Top
		}
	}
</script>

<style scoped lang="less">
	.content{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 133px;
		img{
			width: 397px;
			height: 441px;
		}
	}
	
	img:nth-child(3){
		margin-left: 280px;
	}
</style>
