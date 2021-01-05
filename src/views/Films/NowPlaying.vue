<template>
    <div>
        <div class="loading" v-show="isLoading">
            <van-loading size="24px" type="spinner">加载中...</van-loading>
        </div>
        <van-card v-for="item in list" :key="item.filmId" >
            <!-- 封面图片 -->
            <template #thumb>
                <div>
                    <img :src="item.poster" width="66px" alt="">
                </div>
            </template>
            <!-- 名字 -->
            <template #title>
                <div class="title">
                    {{item.name}}
                    <span class="item">{{item.filmType.name}}</span>
                </div>
            </template>
            <!-- 描述 -->
            <template #desc>
                <div class="desc">
                    <div>观众评分 <span class="grade">{{item.grade}}</span> </div>
                    <div>主演：{{item.actors | parseActors}} </div>
                    <div>{{item.nation}} | {{item.runtime}}分钟 </div>
                    <div class="nowPlayingFilm-buy">购票</div>
                </div>
            </template>
        </van-card>
    </div>
</template>
<script>
//导入vant组件
import Vue from 'vue';
import { Loading,Toast,Card,Tag,Button } from 'vant';

Vue.use(Loading);
Vue.use(Toast);
Vue.use(Card);
Vue.use(Tag);
Vue.use(Button);
//导入地址
import uri from "@/config/uri";
export default {
    data(){
        return{
            //列表的数据组
            list:[],
            isLoading:true,
        }
    },
    //过滤器
    filters:{
        //处理演员信息
        parseActors(actors){
            //由于数据原因，可能没有主演
            if(actors){
                //有主演
                var str = ""
                actors.forEach(el => {
                    str += el.name + ' ';
                    
                });

                return str.substr(0,14) + "...";
            }else{
                return "暂无主演"
            }
        }
    },
    created(){
        this.$http.get(uri.getNowPlaying).then(ret => {
            if(ret.status == 0){
                //请求成功
                this.list = ret.data.films;
                console.log(this.list);
            }else{
                //请求失败
                Toast.fail('网络繁忙');
            }
            //数据加载完成，去除加载组件的
            this.isLoading = false;

        });
    },
    
}
</script>
<style lang="scss" scoped>
    //scoped表示样式只在当前组件内生效，不影响子组件
    .loading{
        text-align: center;
        padding-top: 5px;
        background-color: #fcfcfc;
    }
    img{
        border-radius: 0;
    }
    .title,.desc{
        position: relative;
        left: -20px;
        top: 5px;
    }
    .title{
        font-size: 16px;
        color: #000;
    }
    .item{
        font-size: 9px;
        color: #fff;
        background-color: #d2d6dc;
        height: 14px;
        line-height: 14px;
        padding: 0 2px;
        border-radius: 2px;
    }
    .desc{
        font-size: 13px;
        color: #797D82;
    }
    .grade{
        color: #ffb232;
        font-size: 14px;
    }
    .nowPlayingFilm-buy{
        line-height: 25px;
        height: 25px;
        width: 50px;
        color: #ff5f16;
        font-size: 13px;
        text-align: center;
        border-radius: 2px;
        border: 1px solid #ff5f16;
        position: relative;
        float: right;
        top: -45px;
        left: 20px;

    }

</style>