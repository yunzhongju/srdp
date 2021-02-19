<template>
	<div>
		<div class="contain">
			<!-- logo -->
			<Logo></Logo>
			<Top><img src="../assets/img/practiceplace.png" alt=""></Top>
			<div class="content">
				<!-- 搜索 -->
				<Serach placeholder="搜索关键词"></Serach>
				<Tags :list="areaList" @onHandleClick="onHandleClickTag"></Tags>
<!-- 				<div class="filter">
					<div class="filter-item" @click="showPopup=true">
						<span>类型</span>
						<img src="../assets/img/down.png" />
					</div>
					<div class="filter-item">
						<span>日期</span>
						<img src="../assets/img/down.png" />
					</div>
					<div class="filter-item">
						<span>状态</span>
						<img src="../assets/img/down.png" />
					</div>
					<div class="filter-item">
						<img class="list-icon" src="../assets/img/list.png" />
						<span>地图模式</span>
					</div>
				</div> -->
				<div class="show-list-outer">
					<div class="show-list-inner">
						<div class="show-list-item" v-for="(item,index) in list">
							<img :src="item.image" />
							<div class="right">
								<h1 class="set-ellipsis1">{{item.title}}</h1>
								<p>
									<span class="set-ellipsis1">{{item.addr}}</span>
									<span><2.1km</span>
								</p>
								<div>
									<span>{{item.time}}</span>
									<span>{{item.phone}}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<van-popup 
			v-model="showPopup" 
			position="bottom" 
			round
			:safe-area-inset-bottom="true">
				<div style="padding: 20px 0;">
					<van-datetime-picker
						v-model="currentDate"
						type="date"
						:min-date="minDate"
						:max-date="maxDate"
					/>
				</div>
			</van-popup>
		
		<QuickNav
			class="quick-nav"
			@onHandleWechat="$router.push('/')"
			@onHandleBack="$router.go(-1)"
			></QuickNav>
	</div>
</template>

<script>
import Logo from '../components/Logo.vue';
import Serach from '../components/Serach.vue'
import QuickNav from '../components/QuickNav.vue'
import Tags from '../components/Tags.vue'
import Top from '../components/Top.vue'
import { Popup,DatetimePicker } from 'vant';
import {getAreasAPI,getNewsListAPI} from '../api/api.js'
export default {
	components: {
		Logo,
		Serach,
		Top,
		QuickNav,
		Tags,
		'van-popup':Popup,
		'van-datetime-picker':DatetimePicker
	},
	data() {
		return {
			minDate: new Date(2020, 0, 1),
			maxDate: new Date(2025, 10, 1),
			parentId:542224,
			areaList:[],
			currentDate: new Date(),
			value1:'',
			showPopup:false,
	options: [{
				value: '选项1',
				label: '黄金糕'
			}, {
				value: '选项2',
				label: '双皮奶'
			}, {
				value: '选项3',
				label: '蚵仔煎'
			}, {
				value: '选项3',
				label: '蚵仔煎'
			}, {
				value: '选项3',
				label: '蚵仔煎'
			}],
			value: '',
			list: [
				{
					id: 1,
					image: 'https://img.yasuotu.com/uploads/2021/01/05/5ff4034a8b754_5ff4034a9dd76.png?time=1609827147',
					title: '高新区新文明实践中心撒大萨达大苏打',
					addr: '高新区新文明实践中心十大打算打的啊大苏打',
					time: '开放时间:9:00-21:00',
					phone: '电话:1323****2432'
				},
				{
					id: 1,
					image: 'https://img.yasuotu.com/uploads/2021/01/05/5ff4034a8b754_5ff4034a9dd76.png?time=1609827147',
					title: '高新区新文明实践中心撒大萨达大苏打',
					addr: '高新区新文明实践中心十大打算打的啊大苏打',
					time: '开放时间:9:00-21:00',
					phone: '电话:1323****2432'
				},
				{
					id: 1,
					image: 'https://img.yasuotu.com/uploads/2021/01/05/5ff4034a8b754_5ff4034a9dd76.png?time=1609827147',
					title: '高新区新文明实践中心撒大萨达大苏打',
					addr: '高新区新文明实践中心十大打算打的啊大苏打',
					time: '开放时间:9:00-21:00',
					phone: '电话:1323****2432'
				},
				{
					id: 1,
					image: 'https://img.yasuotu.com/uploads/2021/01/05/5ff4034a8b754_5ff4034a9dd76.png?time=1609827147',
					title: '高新区新文明实践中心撒大萨达大苏打',
					addr: '高新区新文明实践中心十大打算打的啊大苏打',
					time: '开放时间:9:00-21:00',
					phone: '电话:1323****2432'
				}
			]
		};
	},
	methods:{
		onHandleClickTag(item){
			
		},
		getAreas(params){
			getAreasAPI(params).then(res=>{
				this.areaList=res
			})
		},
	},
	created() {
		this.getAreas({parentId:this.parentId})
	}
};
</script>

<style lang="less" scoped>
.quick-nav{
		position: fixed;
		right: 0;
		top: 500px;
	}
.content {
	padding: 40px 40px;
	margin-top: 40px;
	background-color: #fff;
	border-radius: 30px;
	height: 1200px;
}
.serach {
	background-color: #eeeeee;
	display: flex;
	box-shadow: 0 5px 10px #eeeeee;
	justify-content: center;
	align-items: center;
	padding: 30px 50px;
	border-radius: 10px;
	input {
		width: 100%;
		background-color: #eeeeee;
		font-size: 44px;
		border: 0;
	}
}

.change-mode{
	margin-top: 5px;
	display: flex;
	align-items: center;
	height: 100%;
	font-size: 30px;
	color: grey;
	img{
		width: 40px;
		height: 31px;
	}
	span{
		margin-left: 15px;
	}
}
.label {
	display: flex;
	margin-top: 37px;
	flex-wrap: wrap;
	span {
		margin-bottom: 20px;
		margin-right: 40px;
		padding: 17px 17px;
		background-color: #eee;
		font-size: 30px;
		color: #606060;
		font-weight: 600;
		border-radius: 10px;
	}
}
.active {
	color: #fff !important;
	background-color: #db414b !important;
}
.show-list-inner {
	display: flex;
	flex-direction: column;
	min-height: 880px;
	max-height: 880px;
	overflow: auto;
	-ms-overflow-style: none;
	overflow: -moz-scrollbars-none;
	.show-list-item {
		display: flex;
		margin-bottom: 37px;
		.right {
			flex: 1;
			padding: 10px 0;
			font-size: 30px;
			color: #575757;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			p {
				display: flex;
				justify-content: space-between;
			}
			div {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				span {
					margin-bottom: 20px;
				}
			}
			h1 {
				font-size: 45px;
				font-weight: 700;
				color: black;
			}
		}
	}
	img {
		border-radius: 20px;
		width: 342px;
		height: 228px;
		margin-right: 37px;
	}
}
.show-list-inner::-webkit-scrollbar { width: 0 !important }
.show-list-outer{
	margin-top: 40px;
}
.el-filter{
	margin-top: 30px;
}
// .set-option{
// 	font-size: 30px;
// }
</style>
