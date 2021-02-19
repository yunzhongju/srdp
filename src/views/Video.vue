<template>
	<div>
		<div class="contain">
			<!-- logo -->
			<Logo></Logo>
			<Nav>
				<span @click="$router.push('/trends')">实践动态</span>
				<span>></span>
				<span>视频新闻</span>
			</Nav>
			<div class="content">
				<div class="video-item" v-for="(item,index) in videoList">
					<video 
						v-show="currentIndex===index" 
						:ref="'video'+index"
						:src="item.filePath" controls></video>
					<img :src="item.imagePath" alt="" v-show="currentIndex!==index">
					<div class="show-play_n" v-show="currentIndex!==index"><img 
						@click="onHandlePlay(index)" 
						src="../assets/img/play_n.png" alt=""></div>
					<div class="show-title" v-show="currentIndex!==index"></div>
					<div class="show-title1" v-show="currentIndex!==index">>
						<span class="set-ellipsis1">{{item.title}}</span></div>
				</div>
			</div>
		</div>
		<QuickNav 
		 class="quick"
		 @onHandleUp="onHandleUp"
		 @onHandleNext="onHandleNext"
		 @onHandleWechat="$router.push('/')"
		 @onHandleBack="$router.go(-1)"></QuickNav>
	</div>
</template>
<script>
	import Logo from '../components/Logo.vue'
	import Nav from '../components/Nav.vue'
	import QuickNav from '../components/QuickNav.vue'
	import {getVideoListAPI} from '../api/api.js'
	export default {
		components:{
			Logo,
			Nav,
			QuickNav
		},
		data(){
			return {
				videoList:[],
				currentIndex:'',
				pageNumber:1,
				pageSize:2,
			}
		},
		methods:{
			onHandleUp(){
				if(this.pageNumber==1)return
				this.currentIndex=''
				this.pageNumber-=1
				this.getVideoList({audit:this.audit,pageSize:this.pageSize,pageNumber:this.pageNumber})
			},
			onHandleNext(){
				this.currentIndex=''
				this.pageNumber+=1
				this.getVideoList({audit:this.audit,pageSize:this.pageSize,pageNumber:this.pageNumber})
			},
			onHandlePlay(index){
				let video=this.$refs['video'+index][0]
				if(!this.currentIndex){
					this.currentIndex=index
					video.play()
				}else{
					let videoCurrent=this.$refs['video'+this.currentIndex][0]
					if(this.currentIndex!==index){
						videoCurrent.pause()
					}
					this.currentIndex=index
					video.play()
				}
			},
			getVideoList(params){
				getVideoListAPI(params).then(res=>{
					// console.log(res);
					this.videoList=res.list
				})
			}
		},
		created() {
			this.getVideoList({pageSize:this.pageSize,pageNumber:this.pageNumber})
		}
	}
</script>

<style lang="less" scoped>
	.quick{
		position: fixed;
		top: 500px;
		right: 0;
	}
	.content{
		height: 1259px;
		margin-top: 30px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.video-item{
		height: 582px;
		width: 948px;
		position: relative;
		border-radius: 30px;
		img{
			height: 582px;
			width: 948px;
			border-radius: 30px;
		}
		video{
			height: 582px;
			width: 948px;
			border-radius: 30px;
			background-color: black;
		}
		.show-play_n{
			position: absolute;
			top: 225px;
			left: 408px;
			img{
				height: 130px;
				width: 130px;
			}
		}
		.show-title{
			width: 100%;
			height: 78px;
			position: absolute;
			bottom: 0;
			left: 0;
			border-bottom-right-radius: 30px;
			border-bottom-left-radius: 30px;
			background-color: black;
			opacity: 0.5;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.show-title1{
			width: 100%;
			height: 78px;
			position: absolute;
			bottom: 0;
			left: 0;
			border-bottom-right-radius: 30px;
			border-bottom-left-radius: 30px;
			display: flex;
			justify-content: center;
			align-items: center;
			span{
				font-size: 35px;
				font-weight: 700;
				color: #fff;
				padding: 0 20px;
			}
		}
	}
</style>
