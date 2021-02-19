<template>
  <div class="home">
		<div class="contain">
			<!-- logo -->
			<div class="logo">
				<img src="../assets/img/logo.png" alt="">
			</div>
			<!-- 数据 -->
			<div class="sr-show-data">
				<ul>
					<li>
						<span class="color1">{{service.volunteerCount}}</span>
						<span>志愿者</span>
					</li>
					<li>
						<span class="color2">{{service.circleCount}}</span>
						<span>服务队</span>
					</li>
					<li>
						<span class="color3">{{service.serviceLength?service.serviceLength:0}}</span>
						<span>服务时长</span>
					</li>
					<li>
						<span class="color4">{{service.practicePositionCount}}</span>
						<span>实践机构</span>
					</li>
				</ul>
				<div class="sr-show-news" v-if="newsList[0]">
					<h2 class="set-ellipsis2">{{newsList[0].title}}</h2>
					<p class="set-ellipsis2">{{newsList[0].resume?newsList[0].resume:'暂无描述'}}</p>
					<span @click="onHandleToDetail(newsList[0].id)">更多详情></span>
				</div>
			</div>
			<!-- tab -->
			<div class="sr-tabs" v-show="!isFloor">
				<div class="t-item">
					<img src="../assets/img/homepage_pic_1.png" @click="onHandleFloor">
				</div>
				<div class="t-item" @click="$router.push('/trends')">
					<img src="../assets/img/homepage_pic_2.png">
				</div>
				<div class="t-item" @click="$router.push('/practice')">
					<img src="../assets/img/homepage_pic_3.png">
				</div>
				<div class="t-item" @click="$router.push('/news')">
					<img src="../assets/img/h4.png">
				</div>
				<div class="t-item" @click="$router.push('/ycyp')">
					<img src="../assets/img/homepage_pic_5.png">
				</div>
				<div class="t-item" @click="$router.push('/honor')">
					<img src="../assets/img/homepage_pic_6.png">
				</div>
			</div>
			
			<transition name="fade">
				<div v-show="isFloor" class="show-floor">
					<div class="empty" v-if="floorList.length===0"><span>暂无数据</span></div>
					<div class="img-list" v-if="floorList.length!==0">
						<img 
							v-for="(item,index) in floorList" 
							@click="onHandleShowVr(item.vrImage)"
							:src="item.image" alt="" >
					</div>
					<div class="show-tags">
						<span 
							class="tag-item"  
							@click="onHandleChangeTag(item.orgid)"
							v-for="(item,index) in areaList">{{item.orgname}}</span>
					</div>
				</div>
			</transition>
		</div>
		
		<QuickNav 
			v-show="isShowMenu&&isFloor" 
			class="quick-nav" 
			@onHandleBack="isFloor=false"
			@onHandleWechat="isFloor=false"
			:layout="['back','home']"
			key="quick"></QuickNav>
  </div>
</template>

<script>
	import Menu from '../components/Menu.vue'
	import QuickNav from '../components/QuickNav.vue'
	import {getNewsListAPI,
					getAreasAPI,
					getPreviewsAPI,
					getStatisticsAPI,
					getNewsDetailByIdAPI} from '../api/api.js'
export default {
  name: 'Home',
  components: {
		Menu,
		QuickNav,
  },
	data(){
		return {
			floorList:[],
			areaList:[],
			newsList:[],
			detail:'',
			service:'',
			isShowMenu:true,
			isFloor:false,
			isChange:false,
			audit:1,
			pageSize:1,
			pageNumber:1,
			parentId:542224,
			communityId:542224100,
			userId:0
		}
	},
	methods:{
		onHandleChangeTag(id){
			this.getPreviews({communityId:id,pageSize:this.pageSize,pageNumber:this.pageNumber})
		},
		onHandleToDetail(id){
			this.$router.push({
				path:'/detail',
				query:{
					id:id
				}
			})
		},
		onHandleShowVr(vr){
			this.$router.push({
				path:'/showvr',
				query:{
					vr:vr
				}
			})
		},
		onClose(){
			this.isShowMenu=false
			this.isFloor=false
		},
		onBackHome(){
			this.isFloor=false
		},
		onHandleFloor(){
			this.isFloor=true
			this.isShowMenu=true
		},
		onHandleChangeImg(){
			this.isChange=!this.isChange
		},
		getAreas(params){
			getAreasAPI(params).then(res=>{
				this.areaList=res
			})
		},
		getNewsList(params){
			params['userId']=this.userId
			getNewsListAPI(params).then(res=>{
				this.newsList=res.list
			})
		},
		getPreviews(params){
			getPreviewsAPI(params).then(res=>{
				if(res.list.length===0){
				}
				this.floorList=res.list
			})
		},
		getStatistics(){
			getStatisticsAPI({}).then(res=>{
				console.log(res);
				this.service=res
			})
		}
	},
	created() {
		this.getStatistics()
		this.getNewsList({pageSize:this.pageSize,pageNumber:this.pageNumber})
		this.getAreas({parentId:this.parentId})
		this.getPreviews({communityId:this.communityId,pageSize:this.pageSize,pageNumber:this.pageNumber})
	}
}
</script>
<style lang="less" scoped>
	.home{
		width: 100%;
		height: 100%;
	}
	.logo{
		padding-top: 103px;
		width: 100%;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.sr-show-data{
		margin-top: 106px;
		background-color: #eef6f8;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		padding: 40px 40px;
		ul{
			display: flex;
			justify-content: space-between;
			li{
				width: 25%;
				display: flex;
				flex-direction: column;
				align-items: center;
				span:first-child{
					font-size: 50px;
					font-weight: 600;
				}
				span:last-child{
					color: #a4a8a9;
					font-size: 33px;
					margin-top: 10px;
				}
			}
			li:nth-child(1){
				border-right: 2px solid #d5dce4;
			}
			li:nth-child(3){
				border-left: 2px solid #d5dce4;
				border-right: 2px solid #d5dce4;
			}
		}
		.sr-show-news{
			margin-top: 26px;
			border-top: 2px dashed #d5dce4;
			padding: 25px 0;
			display: flex;
			flex-direction: column;
			h2{
				font-size: 40px;
				font-weight: 700;
				line-height: 120%;
			}
			p{
				margin-top: 30px;
				font-size: 30px;
				color: #a4a8a9;
				line-height: 130%;
			}
			span{
				margin-top: 20px;
				font-size: 30px;
				color: #286da2;
				align-self: flex-end;
			}
		}
	}
	.sr-tabs{
		margin-top: 24px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.t-item{
			margin-bottom: 18px;
		}
		img{
			height: 369px;
			width: 307px;
		}
	}
	.show-floor{
		margin-top: 20px;
		.img-list::-webkit-scrollbar { width: 0 !important }
		.empty{
			background-color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 756px;
			border-radius: 20px;
			span{
				font-size: 40px;
				color: grey;
			}
		}
		.img-list{
			width: 100%;
			border-radius: 20px;
			height: 756px;
			overflow-y: auto;
			-ms-overflow-style: none;
			overflow: -moz-scrollbars-none;
			img{
				width: 948px;
				height: 756px;
			}
		}
		.show-tags::-webkit-scrollbar { width: 0 !important }
		.show-tags{
			-ms-overflow-style: none;
			overflow: -moz-scrollbars-none;
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			margin-top: 20px;
			overflow-y: auto;
			height: 100px;
			font-size: 40px;
			.tag-item{
				font-size: 40px;
				background-color: black;
				color: #fff;
				opacity: .8;
				padding: 30px 30px;
				border-radius: 20px;
				margin: 0 20px;
			}
		}
	}
	.color1{
		color: #cb4d21;
	}
	.color2{
		color: #5e88a8;
	}
	.color3{
		color: #048e60;
	}
	.color4{
		color: #e46334;
	}
	.active{
		border: 2px solid red;
	}
	.menu{
		position: fixed;
		top: 877px;
		left: -20px;
	}
	.quick-nav{
		position: fixed;
		right: 0;
		top: 800px;
	}
</style>