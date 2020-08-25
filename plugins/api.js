import axios from 'axios'
import axiosService from './axioss.js'

import qs from 'qs'
// axios 配置
// axios.defaults.timeout = 5000
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// axios.defaults.baseURL = 'https://www.inyihome.com'
//axios.defaults.baseURL = 'https://www.inyihome.com'


// var baseURL = 'https://inyihome.com/yihome-admin';
//baseURL = 'http://www.inyihome.com:10045';

	// if (location.host === 'www.inyihome.com') {
	// 	baseURL = 'https://www.inyihome.com'
	// }else if (location.host === 'www.inyihome.com:10045') {
	// 	baseURL = 'http://www.inyihome.com:10045'
	// }else{
	// 	//baseURL = 'http://www.inyihome.com:10045'
	// }



// axios.defaults.baseURL = baseURL;

// if (window.location.host === 'www.inyihome.com') {
// 	Vue.prototype.yihomeGlobalVariable = 'https://www.inyihome.com'
// }
// if (window.location.host === 'www.inyihome.com:10045') {
// 	Vue.prototype.yihomeGlobalVariable = 'http://www.inyihome.com:10045'
// }

// POST传参序列化
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  return Promise.reject(error)
})
// 返回状态判断
axios.interceptors.response.use((res) => {
  if (res.status === 200) {
    return res
  } else {
    return Promise.reject(res)
  }
}, (error) => {
  return Promise.reject(error)
})

export function fetch (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(`${url}?${qs.stringify(params)}`, params)
      .then(res => {
        resolve(res.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}


export function fetchPost (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(`${url}`, params)
        .then(res => {
          resolve(res.data)
        })
        .catch((error) => {
          reject(error)
        })
  })
}

const request = {
 /* getJson:() => fetch('/e-bank/app/user/profile.do'),
  getNotice:(params) => fetch('/e-bank/opNotice/whetherShowFront.do',{'describe': 'table','pageSize': 50,'pageNo': 1}), */
  /* 精彩故事 */
  // getStory:(postData) => fetch('/front/findnews',postData),
  getStory: (data) => {
    let config = {
      url: `/yihome-admin/api/home/house/news`,
      data,
      method: 'post',
    };
    return new Promise((resolve,reject)=>{ axiosService(config).then( (data) => { resolve(data.data) }).catch() })
  },
  /* 故事详情 */
  getStorydetails:(postData) => fetch('/front/findnewsdetail',postData),
  
  
  /* 注册 */
  //验证邮箱是否注册
  verificationEmail:(postData) => fetch('/front/valemail',postData),
  sendvalcodem:(postData) => fetch('/front/sendvalcode',postData),
  valvalcode:(postData) => fetch('/front/valvalcode',postData),
  
  /* 登录 */
  loginval:(postData) => fetch('/front/loginval',postData),
  
  
  /* 找回密码 */
  
  /* 房源搜索 */
  // findHouseSearchAll:(postData) => fetch('/front/findHouseSearchAll',postData),
  findHouseSearchAll: (params) => {
    let config = {
      url: `/yihome-admin/api/home/house/getQueryCondition`,
      params,
      method: 'get',
    };
    return new Promise((resolve,reject)=>{ axiosService(config).then( (data) => { resolve(data.data) }).catch() })
  },

  /* 国家城市学校 */
  // findcityschool:(postData) => fetch('/front/findcityschool',postData),
  findcityschool: (params) => {
    let config = {
      url: `/yihome-admin/api/home/house/getSchoolByCity`,
      params,
      method: 'get',
    };
    return new Promise((resolve,reject)=>{ axiosService(config).then( (data) => { resolve(data.data) }).catch() })
  },

  getAllCity: (params) => {
    let config = {
      url: `/yihome-admin/api/home/house/getAllCity`,
      params,
      method: 'get',
    };
    return new Promise((resolve,reject)=>{ axiosService(config).then( (data) => { resolve(data.data) }).catch() })
  },

  /* 查找房源 */
  getfindhouse:(postData) => fetch('/front/getfindhouse',postData),
  
  /* 房间详情 */
  // findhousedetail:(postData) => fetch('/front/findhousedetailnew',postData),

  findhousedetail: (params) => {
    let config = {
      url: `/yihome-admin/api/home/house/getApiHouseDetail`,
      params,
      method: 'get',
    };
    return new Promise((resolve,reject)=>{ axiosService(config).then( (data) => { resolve(data.data) }).catch() })
  },
  
  /* 新的登录注册找回密码 */
  //发送验证码
  // sandcode:(postData) => fetch('/front/sandcode',postData), //findpass 忘记密码     register 注册   login 登录
  // sandcode:(postData) => fetch('/api/user/users/sendCodeMsg',postData), //findpass 忘记密码     register 注册   login 登录
  sandcode:(data) => {
    let config = {
      url: `/yihome-admin/api/user/users/sendCodeMsg?${qs.stringify(data)}`,
      data,
      method: 'post',
    };
    return new Promise((resolve,reject)=>{ axiosService(config).then( (data) => { resolve(data.data) }).catch() })
  }, //findpass 忘记密码     register 注册   login 登录
  //注册
  // register:(postData) => fetch('/front/register',postData),
  // register:(postData) => fetch('/api/user/users/register',postData),
  register: (data) => {
    let config = {
      url: `/yihome-admin/api/user/users/register`,
      data,
      method: 'post',
    };
    return new Promise((resolve,reject)=>{ axiosService(config).then( (data) => { resolve(data.data) }).catch() })
  },
  forgetPassword: (data) => {
    let config = {
      url: `/yihome-admin/api/user/users/forgetPassword`,
      data,
      method: 'post',
    };
    return new Promise((resolve,reject)=>{ axiosService(config).then( (data) => { resolve(data.data) }).catch() })
  },
  //登录
  loginin: (data) => {
    let config = {
      url: `/yihome-admin/api/user/users/login`,
      data,
      method: 'post',
    };
    return new Promise((resolve,reject)=>{ axiosService(config).then( (data) => { resolve(data.data) }).catch() })
  },
  //忘记密码
  passReset:(postData) => fetch('/front/forget',postData),

  /* 首页推荐房源 */
  finddiscounthouse:(postData) => fetch('/front/finddiscounthouse',postData),


  valLicenselogin:(postData) => fetch('/front/valLicenselogin',postData),

  checklogin:(postData) => fetch('/front/checklogin',postData),

  newfindhouse:(postData) => fetch('/front/newfindhouse',postData),

  getUserInfo:(postData) => fetch('/front/findpersonal',postData),

  //保存用户信息
  saveuserInfo:(postData) => fetch('/user/saveuser',postData),


  //个人中心取消收藏

  //房间收藏
  insertfavorite:(postData) => fetch('/front/insertfavorite',postData),//userid houseid

  //检查是否收藏
  valfavorite:(postData) => fetch('/front/valfavorite',postData),//userid houseid
  //删除收藏
  deletefavorite:(postData) => fetch('/front/deletefavorite',postData),//userid houseid

  //修改昵称
  resetNetName:(postData) => fetch('/front/reset',postData),

  //房间 提交咨询
  houseapply:(postData) => fetch('/front/houseapply',postData),

  //生成初始订单
  findorder:(postData) => fetch('/front/findorder',postData),

  //生成订单
  buildorder:(postData) => fetch('/front/buildorder',postData),

  //订单详情
  findUserBillDtl:(postData) => fetch('/front/findUserBillDtl',postData),

  //homepage 精品房型提交信息type=1    helptickets提交信息type=0
  savehelptickets:(postData) => fetch('/front/savehelptickets',postData),


  //homepage 免费通话
  saveuserphone:(postData) => fetch('/user/saveuserphone',postData),

  //首页 特惠房源 城市+房源信息
  homeHothouse:(postData) => fetch('/front/hothouse?v=4560',postData),


  // service.getOrderadd = (data: object = {}) => {
  //   let config = {
  //     url: `${mete.order}/add`,
  //     data,
  //     method: 'post',
  //   };
  //   return new Promise((resolve,reject)=>{ axiosService(config).then( (data:any) => { resolve(data.data) }).catch() })
  // };

  // homeHotcity:(postData) => fetch('/api/home/house/getHotCity',postData),
  homeHotcity: (params) => {
    let config = {
      url: `/yihome-admin/api/home/house/getHotCity`,
      params,
      method: 'get',
    };
    return new Promise((resolve,reject)=>{ axiosService(config).then( (data) => { resolve(data.data) }).catch() })
  },
  getDiscountsCity: (params) => {
    let config = {
      url: `/yihome-admin/api/home/house/getDiscountsCity`,
      params,
      method: 'get',
    };
    return new Promise((resolve,reject)=>{ axiosService(config).then( (data) => { resolve(data.data) }).catch() })
  },
  searHouse: (data) => {
    let config = {
      url: `/yihome-admin/api/home/house/searchHouse`,
      data,
      method: 'post',
    };
    return new Promise((resolve,reject)=>{ axiosService(config).then( (data) => { resolve(data.data) }).catch() })
  },
  getApiRoomType: (params) => {
    let config = {
      url: `/yihome-admin/api/home/house/getApiRoomType`,
      params,
      method: 'get',
    };
    return new Promise((resolve,reject)=>{ axiosService(config).then( (data) => { resolve(data.data) }).catch() })
  },
};


export default ({ app }, inject) => {
  inject('request', request)
}
