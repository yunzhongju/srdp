<template>
	<div>
		<div class="contain">
			<!-- logo -->
			<Logo></Logo>
			<Nav>
				<span @click="$router.push('/ycyp')">一村一品</span>
				<span>></span>
				<span @click="$router.push('/ycyplist')">列表</span>
				<span>></span>
				<span>详情</span>
			</Nav>
			<div class="content">
<!-- 				<Serach></Serach>
				<Label></Label>
				<Tags></Tags> -->
				<div class="info">
					<img :src="detail.imagePath" alt="">
					<div class="info-right">
						<h1 class="set-ellipsis1">{{detail.title}}</h1>
						<div class="set-ellipsis4">{{detail.resume?detail.resume:'暂无描述'}}</div>
					</div>
				</div>
				<div class="recommends">
					<div class="recomends-item">
						<span>物</span>
						<div class="show-list">
							<img 
								:src="item.imagePath"
								@click="onHandleClick(item.id)"
								v-for="(item,index) in newsList6">
						</div>
					</div>
					<div class="recomends-item">
						<span>人</span>
						<div class="show-list">
							<img 
								:src="item.imagePath" 
								@click="onHandleClick(item.id)"
								v-for="(item,index) in newsList1">
						</div>
					</div>
					<div class="recomends-item">
						<span>玩</span>
						<div class="show-list">
							<img 
								:src="item.imagePath" 
								@click="onHandleClick(item.id)"
								v-for="(item,index) in newsList4">
						</div>
					</div>
					<div class="recomends-item">
						<span>食</span>
						<div class="show-list">
							<img 
								:src="item.imagePath" 
								@click="onHandleClick(item.id)"
								v-for="(item,index) in newsList2">
						</div>
					</div>
					<div class="recomends-item">
						<span>景</span>
						<div class="show-list">
							<img 
								:src="item.imagePath" 
								@click="onHandleClick(item.id)"
								v-for="(item,index) in newsList5">
						</div>
					</div>
					<div class="recomends-item">
						<span>村</span>
						<div class="show-list">
							<img 
								:src="item.imagePath" 
								@click="onHandleClick(item.id)"
								v-for="(item,index) in newsList3">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Logo from '../components/Logo.vue';
import Nav from '../components/Nav.vue';
import Serach from '../components/Serach.vue';
import Label from '../components/Label.vue'
import Tags from '../components/Tags.vue'
import {getNewsDetailAPI,getNewsListAPI} from '../api/api.js'
export default {
	components: {
		Logo,
		Nav,
		Serach,
		Label,
		Tags
	},
	data(){
		return {
			id:'',
			userId:0,
			detail:'',
			newsList1:[],
			newsList2:[],
			newsList3:[],
			newsList4:[],
			newsList5:[],
			newsList6:[],
			pageSize:10,
			pageNumber:1,
			content:''
		}
	},
	methods:{
		onHandleClick(id){
			this.getNewsDetail({id:id})
		},
		getNewsDetail(params){
			params['userId']=this.userId
			getNewsDetailAPI(params).then(res=>{
				this.detail=res
				this.content=res.content
			})
		},
		getNewsList(params){
			params['userId']=0
			getNewsListAPI(params).then(res=>{
				if(params.channelId===67){
					this.newsList1=res.list
				}else if(params.channelId===68){
					this.newsList2=res.list
				}else if(params.channelId===69){
					this.newsList3=res.list
				}else if(params.channelId===70){
					this.newsList4=res.list
				}else if(params.channelId===71){
					this.newsList5=res.list
				}else if(params.channelId===72){
					this.newsList6=res.list
				}
			})
		}
	},
	created() {
		this.id=this.$route.query.id
		this.getNewsDetail({id:this.id})
		this.getNewsList({channelId:67,pageSize:this.pageSize,pageNumber:this.pageNumber})
		this.getNewsList({channelId:68,pageSize:this.pageSize,pageNumber:this.pageNumber})
		this.getNewsList({channelId:69,pageSize:this.pageSize,pageNumber:this.pageNumber})
		this.getNewsList({channelId:70,pageSize:this.pageSize,pageNumber:this.pageNumber})
		this.getNewsList({channelId:71,pageSize:this.pageSize,pageNumber:this.pageNumber})
		this.getNewsList({channelId:72,pageSize:this.pageSize,pageNumber:this.pageNumber})
	}
};
</script>

<style lang="less" scoped>
.content {
	margin-top: 35px;
	height: 1400px;
	background-color: #fff;
	border-radius: 30px;
	padding: 40px 40px;
}

.info{
	display: flex;
	margin-top: 40px;
	align-items: center;
	padding-bottom: 40px;
	border-bottom: 2px dashed grey;
	img{
		height: 281px;
		width: 281px;
		border-radius: 30px;
	}
	.info-right{
		letter-spacing: 4px;
		color: gray;
		line-height: 40px;
		margin-top: 10px;
		text-align: justify;
		height: 280px;
		width: 532px;
		padding-left: 55px;
		padding-top: 20px;
		display: flex;
		flex-direction: column;
		h1{
			margin-bottom: 20px;
			font-size: 40px;
			color: black;
			font-weight: 700;
		}
	}

}

.recommends::-webkit-scrollbar { width: 0 !important }
.recommends{
	overflow: auto;
	min-height: 900px;
	max-height: 900px;
	margin-top: 23px;
	-ms-overflow-style: none;
	overflow: -moz-scrollbars-none;
	.recomends-item{
		margin-top: 22px;
		span{
			font-size: 33px;
			font-weight: 700;
			border-left: 10px solid #dc4145;
			padding-left: 20px;
		}
		.show-list::-webkit-scrollbar { width: 0 !important }
		.show-list{
			-ms-overflow-style: none;
			overflow: -moz-scrollbars-none;
			margin-top: 22px;
			display: flex;
			overflow-x: auto;
			img{
				width: 303px;
				height: 215px;
				border-radius: 30px;
				margin-right: 30px;
			}
		}	
	}
}
</style>
