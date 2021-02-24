import {
	get,
	post
} from '../util/requests.js'

//获取新闻列表
export const getNewsListAPI = params =>{return get('/wxa/news/getNewsList', params)} 
//获取新闻详情
export const getNewsDetailAPI = params => {return get('/wxa/news/getNewsDetailById', params)}
//光荣榜
export const getHonourListAPI = params => {return get('/honour/getHonourList', params)}
//获取光荣榜记录年份
export const getHonourRecordAPI = params => {return get('/honour/getHonourRecord', params)}
//获取光荣榜人员详情
export const getHonourUserDetailAPI = params => {return get('/honour/getHonourUserDetail', params)}
//获取光荣榜人员标签
export const getHonourUserTipAPI = params => {return get('/honour/getHonourUserTip', params)}
//获取视频列表
export const getVideoListAPI = params => {return get('/wxa/video/getVideoList', params)}
//获取行政区划（新）
export const getAreasAPI = params => {return get('/common/getAreas', params)}
// 根据区划ID获取楼层导览图
export const getPreviewsAPI = params => {return get('/web/floorPreview/getPreviews', params)}
// 获取新闻详情
export const getNewsDetailByIdAPI = params => {return get('/web/news/getNewsDetailById', params)}
// 获取志愿者统计
export const getStatisticsAPI = params => {return get('/getStatistics', params)}
// 获取栏目
export const getChannelListAPI = params => {return get('/wxa/news/getChannelList', params)}