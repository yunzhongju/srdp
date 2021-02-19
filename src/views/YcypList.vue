<template>
	<div>
		<div class="contain">
			<!-- logo -->
			<Logo></Logo>
			<Nav>
				<span @click="$router.push('/ycyp')">一村一品</span>
				<span>></span>
				<span>列表</span>
			</Nav>
			<div class="content">
				<Serach placeholder="搜索关键词" @onHandleSerach="onHandleSerach"></Serach>
				<!-- <Label></Label> -->
				<Tags :list="areaList" @onHandleClick="onHandleClickTag"></Tags>
				<div class="show-list">
					<div class="empty" v-if="newsList.length===0"><span>暂无数据</span></div>
					<div 
						class="list-item" 
						v-for="(item,index) in newsList"
						@click="onHandleNewsDetail(item.id)">
						<img :src="item.imagePath" alt="">
						<div><span>白金村</span></div>
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
import {getAreasAPI,getNewsListAPI} from '../api/api.js'
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
			areaList:[],
			parentId:542224,
			channelId:'',
			pageSize:10,
			pageNumber:1,
			newsList:[]
		}
	},
	methods:{
		onHandleNewsDetail(id){
			this.$router.push({
				path:'/ycypdetail',
				query:{
					id:id
				}
			})
		},
		onHandleSerach(value){
			console.log(value);
			this.getNewsList({channelId:this.channelId,pageSize:this.pageSize,pageNumber:this.pageNumber,searchContent:value})
		},
		onHandleClickTag(tag){
			console.log(tag);
			if(tag!=={}){
				this.getNewsList({channelId:this.channelId,pageSize:this.pageSize,pageNumber:this.pageNumber,district:tag.orgid})
			}else{
				this.getNewsList({channelId:this.channelId,pageSize:this.pageSize,pageNumber:this.pageNumber})
			}
			
		},
		getAreas(params){
			getAreasAPI(params).then(res=>{
				this.areaList=res
			})
		},
		getNewsList(params){
			params['userId']=0
			getNewsListAPI(params).then(res=>{
				this.newsList=res.list
			})
		}
	},
	created() {
		this.channelId=this.$route.query.channelId
		this.getAreas({parentId:this.parentId})
		this.getNewsList({channelId:this.channelId,pageSize:this.pageSize,pageNumber:this.pageNumber})
	}
};
</script>

<style lang="less" scoped>
	.content {
		margin-top: 35px;
		height: 1480px;
		background-color: #fff;
		border-radius: 30px;
		padding: 40px 40px;
	}
	.show-list::-webkit-scrollbar { width: 0 !important }
	.show-list{
		margin-top: 20px;
		min-height: 1100px;
		max-height: 1100px;
		overflow: auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		-ms-overflow-style: none;
		overflow: -moz-scrollbars-none;
		padding: 0 20px;
		.list-item{
			position: relative;
			margin-top: 45px;
			height: 332px;
			width: 389px;
			img{
				height: 332px;
				width: 389px;
				border-radius: 30px;
			}
			div{
				height: 100%;
				width: 100%;
				position: absolute;
				top: 0;
				left: 0;
				display: flex;
				justify-content: center;
				align-items: center;
				span{
					font-size: 50px;
					font-weight: 700;
					color: #fff;
				}
			}
		}
	}
	.empty{
		height: 200px;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		color: grey;
		font-size: 40px;
	}
</style>
