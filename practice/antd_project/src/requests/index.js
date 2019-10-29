import axios from "axios";
import {message} from 'antd'
// baseUrl = 'http://rap2api.taobao.org/app/mock/235072'

const isDev = process.env.NODE_ENV === "development";
const service = axios.create({
  baseURL: isDev ? "http://rap2api.taobao.org/app/mock/235072" : ""
});

service.interceptors.request.use(config => {
  // console.log(config)
  config.data = Object.assign({}, config.data, {
    // token:window.localStorage.getItem('token')
    token: "Lyungui"
  });
  return config;
});

service.interceptors.response.use(resp => {
  //全局查看 进行判断
  if (resp.data.code === 200) {
    return resp.data.data;
  } else {
    //   alert('出错了！')
    message.error(resp.data.errMeg)
    //处理错误
  }
});

// export const getArticles = () => {
//     return service.post('/api/v1/ariticleList')
// }

//如果需要分页的信息传递的话
export const getArticles = (offset = 0, limited = 10) => {
  return service.post("/api/v1/ariticleList", {
    offset,
    limited
  });
};
