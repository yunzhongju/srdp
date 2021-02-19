<template>
	<div class="top">
		<slot></slot>
	</div>
</template>

<script>
	export default {
	}
</script>

<style lang="less" scoped>
.top {
	width: 950px;
	margin-top: 38px;

	img {
		height: 100%;
		width: 100%;
		border-radius: 20px;
	}
}
</style>
