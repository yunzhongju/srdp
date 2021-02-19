import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
	path: '/',
	name: 'Home',
	component: () => import('../views/Home.vue')
}, {
	path: '/ycyp',
	name: 'ycyp',
	component: () => import('../views/Ycyp.vue')
},{
	path: '/honor',
	name: 'honor',
	component: () => import('../views/Honor.vue')
}, {
	path: '/trends',
	name: 'trends',
	component: () => import('../views/Trends.vue')
}, {
	path: '/practice',
	name: 'practice',
	component: () => import('../views/Practice.vue')
}, {
	path: '/ycypdetail',
	name: 'ycypdetail',
	component: () => import('../views/YcypDetail.vue')
}, {
	path: '/video',
	name: 'video',
	component: () => import('../views/Video.vue')
}, {
	path: '/news',
	name: 'news',
	component: () => import('../views/News.vue')
},  {
	path: '/detail',
	name: 'detail',
	component: () => import('../views/Detail.vue')
},{
	path: '/ycyplist',
	name: 'ycyplist',
	component: () => import('../views/YcypList.vue')
}, {
	path: '/showvr',
	name: 'showvr',
	component: () => import('../views/ShowVr.vue')
}]

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

export default router
