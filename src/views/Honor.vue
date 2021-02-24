<template>
	<div class="contain">
		<Logo></Logo>
		<Nav>
			<span>光荣榜</span>
		</Nav>
		<div class="context">
			<Serach placeholder="搜索关键词"></Serach>
			<div class="choose">
				<span 
					:class="{'active':activeList.includes(item.sortNum)}" 
					@click="onHandleClickTips(item)"
					v-for="(item,index) in tips">
					{{item.title}}
					<img src="../assets/img/choice_p.png" v-show="activeList.includes(item.sortNum)">
					<img src="../assets/img/choice_n.png" v-show="!activeList.includes(item.sortNum)">
				</span>
			</div>
			<PullDown 
				class="PullDown" 
				:list="times" 
				@onHandleClear="onHandleClear"
				@onHandleClickTime="onHandleClickTime"></PullDown>
			<div class="show-list">
				<div class="empty" v-if="honorList.length===0">暂无数据</div>
				<div class="list-item" v-for="(item,index) in honorList">
					<img src="../assets/img/newsitem.png" alt="">
					<div class="right">
						<h1>{{item.title}}——{{item.personName}}</h1>
						<div>
							<span>{{item.createTime|handleDate}}</span>
							<span>来源: {{item.origin}}</span>
						</div>
						<p @click="onHandleToDetail(item.userRecordId)">【查看详情】</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Logo from '../components/Logo.vue'
	import Nav from '../components/Nav.vue'
	import Serach from '../components/Serach.vue'
	import PullDown from '../components/PullDown.vue'
	import {getHonourListAPI,getHonourRecordAPI,getHonourUserTipAPI} from '../api/api.js'
	export default {
		components:{
			Logo,
			Nav,
			Serach,
			PullDown
		},
		data(){
			return {
				honorList:[],
				tips:[],
				activeList:[],
				times:[],
				recordId:''
			}
		},
		methods:{
			onHandleToDetail(id){
				this.$router.push({
					path:'/detail',
					query:{
						id:id,
						type:'honor'
					}
				})
			},
			onHandleClickTime(item){
				console.log(item);
				this.recordId=item.recordId
				this.getHonourList({recordId:item.recordId})
			},
			onHandleClear(){
				this.recordId=''
				this.getHonourList()
			},
			onHandleClickTips(item){
				if(this.activeList.includes(item.sortNum)){
					this.activeList=this.activeList.filter((num)=>{return num!==item.sortNum})
				}else{
					this.activeList.push(item.sortNum)
				}
				let tip=this.activeList.join(";")
				console.log(tip);
				this.getHonourList({tip:tip,recordId:this.recordId})
			},
			getHonourList(params={}){
				getHonourListAPI(params).then(res=>{
					console.log('list',res);
					this.honorList=res
				})
			},
			getHonourRecord(){
				getHonourRecordAPI().then(res=>{
					console.log('time',res);
					this.times=res
				})
			},
			getHonourUserTip(){
				getHonourUserTipAPI().then(res=>{
					console.log('tip',res);
					this.tips=res
				})
			}
		},
		created() {
			this.getHonourList()
			this.getHonourRecord()
			this.getHonourUserTip()
		},
		filters:{
			handleDate(d){
				return d.split(' ')[0]
			}
		}
	}
</script>

<style lang="less" scoped>
	.empty{
		color: grey;
		font-size: 40px;
	}
	.PullDown{
		margin-top: 30px;
	}
	.context{
		box-sizing: border-box;
		margin-top: 20px;
		height: 1514px;
		background-color: #fff;
		border-radius: 30px;
		padding: 40px 40px;
	}
	.choose{
		overflow-x: auto;
		width: 100%;
		span{
			margin-top: 20px;
			display: inline-block;
			padding: 23px 25px;
			font-size: 30px;
			color: #848484;
			background-color: #eee;
			border-radius: 20px;
			margin-right: 40px;
			img{
				height: 30px;
				width: 30px;
			}
		}
	}
	.active{
		background-color: #dc4145 !important;
		color: #fbe9ea !important;
	}
	.show-list::-webkit-scrollbar { width: 0 !important }
	.show-list{
		margin-top: 20px;
		display: flex;
		flex-direction: column;
		height: 1100px;
		overflow-y: auto;
		-ms-overflow-style: none;
		overflow: -moz-scrollbars-none;
		.list-item{
			display: flex;
			justify-content: space-between;
			margin-top: 30px;
			.right{
				flex: 1;
				box-sizing: border-box;
				padding-left: 20px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				font-size: 30px;
				h1{
					font-size: 40px;
					font-weight: 700;
					line-height: 120%;
				}
				div{
					display: flex;
					justify-content: space-between;
					font-size: 28px;
					color: gray;
					text-align: left;
				}
				p{
					color: red;
					font-weight: 700;
				}
			}
			img{
				width: 340px;
				height: 230px;
				border-radius: 20px;
			}
		}
	}
</style>
