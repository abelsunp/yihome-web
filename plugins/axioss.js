import axios from 'axios'

let axiosIns = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  // baseURL: 'https://www.inyihome.com/',
  baseURL: '/',
  // // 超时
  // timeout: 1000000,
});
axios.defaults.headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

axiosIns.defaults.responseType = 'json';

axiosIns.defaults.validateStatus =  (statu) => {
  return true;
};
axiosIns.interceptors.request.use( (config) => {
  if(localStorage.getItem('token')) config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

axiosIns.interceptors.response.use( (response) => {
  let data = response.data;
  let status = response.status;
  if (data && status === 200) {
    // if(data.code === 510) {
    //   User.logout();
    //   return
    // }
    return Promise.resolve(response);
  }else {
    return Promise.reject(response);
  }
});

let ajaxMethod = ['get', 'post', 'put', 'delete'];
let api = {};
let timeout = {
  timeout: 120000,
};

ajaxMethod.forEach((method)=> {
  api[method] = (uri,data,config) => {
    // uri = 'http://47.100.186.108:6898'+ uri
    return new Promise(function (resolve, reject) {

      axiosIns[method](uri,data,config).then((response)=> {
        if (response.status) {
          resolve(response);
        } else {
          resolve(response);
        }
      }).catch((response)=> {
        reject(response)
      })
    })
  }
});

let axiosService = (params) => {
  if(params.method === 'get'){
    return new Promise((resolve, reject) => {
      api.get(params.url,{params: params.params},timeout).then( (res) => {
        resolve(res)
      })
    })
  }else if(params.method === 'delete'){
    return new Promise((resolve, reject) => {
      api.delete(params.url,{},timeout).then( (res) => {
        resolve(res)
      })
    })
  }else if(params.method === 'put'){
    return new Promise((resolve, reject) => {
      api.put(params.url,{},timeout).then( (res) => {
        resolve(res)
      })
    })
  }else{
    return new Promise((resolve, reject) => {
      api.post(params.url,params.data,timeout).then( (res) => {
        resolve(res)
      })
    })
  }
};

export default axiosService;

