<template>
	<div>
		<div class="contain">
			<!-- logo -->
			<Logo></Logo>
			<!-- top -->
			<Top>
				<img src="../assets/img/news.png" alt="">
			</Top>
			<div class="content">
				<div class="show-data">
					<div 
						class="data-item" 
						v-for="(item,index) in newsList" 
						@click="onHandleToDetail(item.id)">
						<img :src="item.imagePath" alt="" />
						<div>
							<h1 class="set-ellipsis2">{{item.title}}</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
		<QuickNav 
			class="quick-nav"
			@onHandleUp="onHandleUp"
			@onHandleNext="onHandleNext"
			@onHandleWechat="$router.push('/')"
			@onHandleBack="$router.go(-1)"
			></QuickNav>
			
			<div class="loading">
				<van-loading 
					v-show="loading"
					color="#1989fa">加载中...</van-loading>
			</div>
	</div>
</template>

<script>
import Logo from '../components/Logo.vue';
import Top from '../components/Top.vue'
import {getNewsListAPI} from '../api/api.js'
import QuickNav from '../components/QuickNav.vue'
import { Loading } from 'vant';
export default {
	components: {
		Logo,
		Top,
		QuickNav,
		'van-loading':Loading
	},
	data() {
		return {
			loading:false,
			pageNumber:2,
			pageSize:10,
			audit:1,
			newsList:[],
			userId:0
		};
	},
	methods:{
		onHandleToDetail(id){
			this.$router.push({
				path:'/detail',
				query:{
					id:id
				}
			})
		},
		onHandleUp(){
			if(this.pageNumber==1)return
			this.pageNumber-=1
			this.getNewsList({audit:this.audit,pageSize:this.pageSize,pageNumber:this.pageNumber})
		},
		onHandleNext(){
			this.pageNumber+=1
			this.getNewsList({audit:this.audit,pageSize:this.pageSize,pageNumber:this.pageNumber})
		},
		getNewsList(params){
			this.loading=true
			params['userId']=0
			getNewsListAPI(params).then(res=>{
				this.newsList=res.list
				this.loading=false
			})
		}
	},
	created() {
		this.getNewsList({pageSize:this.pageSize,pageNumber:this.pageNumber})
	}
};
</script>

<style lang="less" scoped>
	.quick-nav{
		position: fixed;
		right: 0;
		top: 500px;
	}
.content{
	min-height: 1250px;
	max-height: 1250px;
	overflow: auto;
	margin-top: 60px;
	-ms-overflow-style: none;
	overflow: -moz-scrollbars-none;
}
.content::-webkit-scrollbar { width: 0 !important }
.show-data {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	.data-item {
		display: flex;
		width: 462px;
		flex-direction: column;
		margin-bottom: 30px;
		img{
			height: 269px;
		}
		div {
			padding: 20px 30px;
			background-color: #dbf0f5;
			h1 {
				font-size: 30px;
				font-weight: 600;
				line-height: 120%;
				text-align: justify;
			}
			p {
				position: relative;
				margin-top: 16px;
				font-weight: 600;
				display: flex;
				font-size: 24px;
				color: #73767d;
				span:nth-child(1){
					width: 320px;
				}
				.more {
					color: #4e85d8;
					position: absolute;
					right: 0;
					top: 0;
					font-size: 24px;
				}
			}
		}
	}
}
.loading{
	height: 100px;
	width: 100px;
	position: fixed;
	top: 50%;
	left: 50%;
	van-loading{
		font-size: 50px !important;
	}
}
</style>
