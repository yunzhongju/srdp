<template>
	<div class="contain">
		<Logo></Logo>
		<Nav>
			<span @click="$router.push('/news')">新闻动态</span>
			<span>></span>
			<span>详情</span>
		</Nav>
		
		<div class="context">
			<h1>{{type?detail.title+'——'+detail.personName:detail.title}}</h1>
			<div class="info">
				<span v-if="!type">发布时间 : {{detail.addTime|timeFormate}}</span>
				<span v-if="type">发布时间 : {{detail.createTime|handleDate}}</span>
				<span>来源 : {{detail.source?detail.source:detail.origin}}</span>
			</div>
			<div class="newsContent" v-html="detail.content"></div>
		</div>
	</div>
</template>

<script>
	import Logo from '../components/Logo.vue'
	import Nav from '../components/Nav.vue'
	import {getNewsDetailAPI,getHonourUserDetailAPI} from '../api/api.js'
	export default {
		components:{
			Logo,
			Nav,
		},
		data(){
			return{
				id:'',
				detail:'',
				userId:0,
				type:''
			}
		},
		created() {
			this.id=this.$route.query.id
			this.type=this.$route.query.type
			if(this.type){
				getHonourUserDetailAPI({userRecordId:this.id}).then(res=>{
					console.log('honor',res);
					this.detail=res
				})
			}else{
				getNewsDetailAPI({id:this.id,userId:this.userId}).then(res=>{
					this.detail=res
				})
			}
		},
		filters: {
			timeFormate(time) {
				let timer = new Date(time*1000);
				let y = timer.getFullYear();
				let m = timer.getMonth() + 1 < 10 ? '0' + (timer.getMonth() + 1) : timer.getMonth() + 1;
				let d = timer.getDate() > 10 ? timer.getDate() : '0' + timer.getDate();
				let h = timer.getHours() < 10 ? '0' + timer.getHours() : timer.getHours();
				let mint = timer.getMinutes() < 10 ? '0' + timer.getMinutes() : timer.getMinutes();
				return y + '.' + m + '.' + d;
			},
			handleDate(d){
				return d?d.split(' ')[0]:0
			}
		},
	}
</script>

<style lang="less" scoped>
	.context{
		box-sizing: border-box;
		margin-top: 20px;
		height: 1514px;
		background-color: #fff;
		border-radius: 30px;
		padding: 40px 40px;
	}
	h1{
		font-size: 40px;
		font-weight: 700;
		line-height: 150%;
	}
	.info{
		margin-top: 50px;
		display: flex;
		justify-content: space-between;
		color: gray;
		font-size: 30px;
	}
	.newsContent::-webkit-scrollbar { width: 0 !important }
	.newsContent{
		margin-top: 50px;
		height: 1200px;
		overflow-y: auto;
		font-size: 30px;
		line-height: 150%;
		-ms-overflow-style: none;
		overflow: -moz-scrollbars-none;
		p,span{
			
		}
	}
</style>
