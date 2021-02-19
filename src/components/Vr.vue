<template>
	<div :style="'height:'+height+'px;'">
		<iframe 
			width="100%" 
			height='1800px' 
			frameborder='0' 
			align='center' 
			allowfullscreen='true' 
			allow="autoplay"   
			id='iframe' 
			:src="vr"/>
	</div>
</template>

<script>
	export default {
		props:{
			vr:{
				type:String,
				default:()=>''
			}
		},
		data(){
			return{
				url:'https://penglai.baidu.com/pano-share.html?shareId=share_92b91dd30',
				height:window.innerHeight
			}
		},
		created() {
			
		}
	}
</script>

<style>
	#iframe{

	}
</style>
