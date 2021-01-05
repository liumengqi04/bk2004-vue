//封装axios
import axios from "axios";

//对于axios相应结果的处理的封装（响应拦截器）
//例如：之前在学习axios的时候，说axios的网络请求返回结果是在返回对象ret的data属性中。ret.data.data...
axios.interceptors.response.use((ret)=>{
return ret.data || ret;
});

//对于axios请求的处理的封装（请求拦截器）
//例如：之前在node处学习了jwt，需要将其丢到请求中，由于后续每次请求都需要在头中携带jwt，因此可以在此进行封装，让其每次都自动加入header头中

//导出axios
export default axios;