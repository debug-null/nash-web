
import NProgress from 'nprogress'
export default function ({store, redirect, req, router, app: { $axios }})  {
    // 数据访问前缀
    $axios.defaults.baseURL = 'http://XXX/api';
    if(process.server){
        // 获取服务端的token
        // var token = getCookie.getcookiesInServer(req).token;
    }
    if(process.client){
        // 获取客户端token
        // var token = getCookie.getcookiesInClient('token');
    }
    // request拦截器
    $axios.onRequest(config => {
        if(process.client){
            // 客户端下，请求进度条开始
            NProgress.start();
        }
        // 将获取到token加入到请求头中
        // config.headers.common['Authorization'] = token;
    });
    // response拦截器，数据返回后，可以先在这里进行一个简单的判断
    $axios.interceptors.response.use(
        response => {
            if(process.client){
                // 客户端下， 请求进度条结束
                NProgress.done();
            }
            // return response
            if(response.data.code == 401){
                // todo
            }else if(response.data.code == 404){
                // todo
            }
            else{
                // 请求接口数据正常，返回数据
                return response
            }
        },
        error => {
            if(process.client){
                NProgress.done();
            }
            if(error.response.status == 500){
                // http状态500，服务器内部错误，重定向到500页面
                redirect("/500.htm")
            }
            if(error.response.status == 404){
                // http状态500，请求API找不到，重定向到404页面
                redirect("/404.html")
            }
            return Promise.reject(error.response)   // 返回接口返回的错误信息
        })
}