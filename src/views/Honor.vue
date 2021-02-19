<template>
	<div class="contain">
		<Logo></Logo>
		<Nav>
			<span>光荣榜</span>
		</Nav>
		<div class="context">
			<Serach placeholder="搜索关键词"></Serach>
			<div class="choose">
				<span class="active">
					时代楷模
					<img src="../assets/img/choice_p.png" alt="">
				</span>
				<span>
					时代楷模
					<img src="../assets/img/choice_n.png" alt="">
				</span>
				<span>
					时代楷模
					<img src="../assets/img/choice_n.png" alt="">
				</span>
				<span>
					时代楷模
					<img src="../assets/img/choice_n.png" alt="">
				</span>
				<span>
					时代楷模
					<img src="../assets/img/choice_n.png" alt="">
				</span>
			</div>
			
			<div class="show-list">
				<div class="list-item">
					<img src="../assets/img/newsitem.png" alt="">
					<div class="right">
						<h1>【时代楷模】雪域高原上的守望耕耘者——嘉律</h1>
						<div>
							<span>2020.01.01</span>
							<span>来源: 西藏文明网</span>
						</div>
						<p @click="onHandleToDetail">【查看详情】</p>
					</div>
				</div>
				
				<div class="list-item">
					<img src="../assets/img/newsitem.png" alt="">
					<div class="right">
						<h1>【时代楷模】雪域高原上的守望耕耘者——嘉律</h1>
						<div>
							<span>2020.01.01</span>
							<span>来源: 西藏文明网</span>
						</div>
						<p>【查看详情】</p>
					</div>
				</div>
				<div class="list-item">
					<img src="../assets/img/newsitem.png" alt="">
					<div class="right">
						<h1>【时代楷模】雪域高原上的守望耕耘者——嘉律</h1>
						<div>
							<span>2020.01.01</span>
							<span>来源: 西藏文明网</span>
						</div>
						<p>【查看详情】</p>
					</div>
				</div>
				<div class="list-item">
					<img src="../assets/img/newsitem.png" alt="">
					<div class="right">
						<h1>【时代楷模】雪域高原上的守望耕耘者——嘉律</h1>
						<div>
							<span>2020.01.01</span>
							<span>来源: 西藏文明网</span>
						</div>
						<p>【查看详情】</p>
					</div>
				</div>
				<div class="list-item">
					<img src="../assets/img/newsitem.png" alt="">
					<div class="right">
						<h1>【时代楷模】雪域高原上的守望耕耘者——嘉律</h1>
						<div>
							<span>2020.01.01</span>
							<span>来源: 西藏文明网</span>
						</div>
						<p>【查看详情】</p>
					</div>
				</div>
				<div class="list-item">
					<img src="../assets/img/newsitem.png" alt="">
					<div class="right">
						<h1>【时代楷模】雪域高原上的守望耕耘者——嘉律</h1>
						<div>
							<span>2020.01.01</span>
							<span>来源: 西藏文明网</span>
						</div>
						<p>【查看详情】</p>
					</div>
				</div>
				<div class="list-item">
					<img src="../assets/img/newsitem.png" alt="">
					<div class="right">
						<h1>【时代楷模】雪域高原上的守望耕耘者——嘉律</h1>
						<div>
							<span>2020.01.01</span>
							<span>来源: 西藏文明网</span>
						</div>
						<p>【查看详情】</p>
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
	import {getHonourListlAPI} from '../api/api.js'
	export default {
		components:{
			Logo,
			Nav,
			Serach
		},
		data(){
			return {
				honorList:[]
			}
		},
		methods:{
			onHandleToDetail(){
				this.$router.push('/detail')
			}
		},
		created() {
			getHonourListlAPI({}).then(res=>{
				console.log(res);
			})
		}
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
		height: 1000px;
		overflow-y: auto;
		-ms-overflow-style: none;
		overflow: -moz-scrollbars-none;
		.list-item{
			display: flex;
			justify-content: space-between;
			margin-top: 30px;
			.right{
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
					font-size: 30px;
					color: gray;
					align-items: center;
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
