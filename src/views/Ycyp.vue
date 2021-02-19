<template>
	<div class="ycyp">
		<div class="contain">
			<!-- logo -->
			<Logo></Logo>
			<!-- top -->
			<Top><img src="../assets/img/village.png" alt="" /></Top>
			<!-- tab -->
			<div class="tabs" v-if="channelList.length!==0">
				<div class="tabs-left">
					<div class="item size1" @click="onHandleClick(channelList[2].channelid)">
						<img :src="channelList[2].channelBgpic" class="size1">
						<span class="position1">{{channelList[2].name}}</span>
					</div>
					<div class="item size2" @click="onHandleClick(channelList[0].channelid)">
						<img :src="channelList[0].channelBgpic" class="size2">
						<span class="position1">{{channelList[0].name}}</span>
					</div>
				</div>
				<div class="tabs-right">
					<div class="item size3" @click="onHandleClick(channelList[1].channelid)">
						<img :src="channelList[1].channelBgpic" class="size3">
						<span class="position2">{{channelList[1].name}}</span>
					</div>
					<div style="display: flex;justify-content: space-between;">
						<div style="display: flex;flex-direction: column;">
							<div class="item size4" @click="onHandleClick(channelList[3].channelid)">
								<img :src="channelList[3].channelBgpic" class="size4">
								<span class="position1">{{channelList[3].name}}</span>
							</div>
							<div class="item size5" @click="onHandleClick(channelList[5].channelid)">
								<img :src="channelList[5].channelBgpic" class="size5">
								<span class="position1">{{channelList[5].name}}</span>
							</div>
						</div>
						<div>
							<div class="item size6" @click="onHandleClick(channelList[4].channelid)">
								<img :src="channelList[4].channelBgpic" class="size6">
								<span class="position1">{{channelList[4].name}}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Logo from '../components/Logo.vue';
import Top from '../components/Top.vue';
import {getChannelListAPI} from '../api/api.js'
export default {
	components: {
		Logo,
		Top
	},
	data(){
		return {
			channelList:[],
			parentId:73,
			pageSize:6,
			pageNumber:1
		}
	},
	methods:{
		onHandleClick(id){
			this.$router.push({
				path:'/ycyplist',
				query:{
					channelId:id
				}
			})
		},
		getChannelList(params){
			getChannelListAPI(params).then(res=>{
				console.log(res,111111111);
				this.channelList=res.list
			})
		}
	},
	created() {
		this.getChannelList({parentId:this.parentId,pageSize:this.pageSize,pageNumber:this.pageNumber})
	}
};
</script>

<style lang="less" scoped>
span{
	color: #fff;
	font-size: 50px;
	font-weight: 700;
}
.position1{
	position: absolute;
	left: 45px;
	bottom: 45px;
}
.position2{
	position: absolute;
	left: 45px;
	bottom: 90px;
}
.size1{
	width: 323px;
	height: 608px;
}
.size2{
	width: 323px;
	height: 384px;
}
.size3{
	height: 250px;
	width: 597px;
}
.size4{
	width: 244px;
	height: 330px;
}
.size5{
	width: 244px;
	height: 384px;
}
.size6{
	width: 325px;
	height: 742px;
}
.tabs {
	display: flex;
	margin-top: 60px;
	justify-content: space-between;
	img{
		border-radius: 20px;
	}
	div{
		margin-bottom: 30px;
		border-radius: 20px;
	}
	.tabs-left{
		display: flex;
		flex-direction: column;
	}
	.item{
		position: relative;
	}
}
</style>
