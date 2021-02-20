import axios from 'axios'

axios.defaults.timeout = 10000;
// console.log(axios.defaults,11111);
// axios.defaults.baseURL = 'http://132.232.74.143:5612/';
axios.defaults.baseURL = '/api';
// 请求拦截器
axios.interceptors.request.use(
	config => {
		// 每次发送请求之前判断vuex中是否存在token        
		// 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
		// 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
		// const token = store.state.token;
		// token && (config.headers.Authorization = token);
		return config;
	},
	error => {
		return Promise.error(error);
	})


// 响应拦截器
axios.interceptors.response.use(
	response => {
		// 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据     
		// 否则的话抛出错误
		if (response.status === 200) {
			return Promise.resolve(response);
		} else {
			return Promise.reject(response);
		}
	}
)


/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
	return new Promise((resolve, reject) => {
		axios.get(url, {
			params: params
		}).then(res => {
			resolve(res.data.data);
		}).catch(err => {
			reject(err.data)
		})
	});
}


/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
	return new Promise((resolve, reject) => {
		axios.post(url, QS.stringify(params))
			.then(res => {
				resolve(res.data.data);
			})
			.catch(err => {
				reject(err.data)
			})
	});
}
