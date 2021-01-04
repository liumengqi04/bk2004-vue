module.exports = {
    // 开发服务器设置
    devServer: {
        //设置 npm run serve 自动打开浏览器
        open: true,
        // 设置 npm run serve 启动后的端口号
        port: 3000,
        // 如果你开始了eslint,不要让eslint在页面中遮罩，它错误会在console.log控制台打印
        overlay: false,
        // vue项目代理请求
        proxy: {
            // 规则

            //vue的代理可以根据项目的需求设置一个或多个代理
            // axios中相对地址开头的字符串  匹配请求uri中的前几位
            //"/api"前缀，在发起网络请求的时候只有符合特定前缀的请求地址才会被代理
            "/api": {
                // 把相对地址中的域名 映射到 目标地址中
                // localhost:3000 => https://api.iynn.cn/film/api/v1/
                target: "https://api.iynn.cn/film/api/v1",
                // 修改host请求的域名为目标域名
                // changeOrigin: false,
                //同时修改请求头中的refer，将地址伪装为api.iynn.cn
                changeOrigin: true,
                // 请求uri和目标uri有一个对应关系
                // 请求/api/login ==> 目标 /v1/api/login
                //重写操作，
                pathRewrite: {
                    //将原先用于标记的前缀替换成空字符串
                    "^/api": "",
                },
            },
        },
    },
};