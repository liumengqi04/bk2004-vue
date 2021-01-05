<template>
    <div>
        <van-tabs line-width="3.5rem" v-model="active" @click="onClick">
            <van-tab title="正在热映"></van-tab>
            <van-tab title="即将上映"></van-tab>
        </van-tabs>
    </div>
</template>
<script>
//导入vant需要的组件
import Vue from 'vue';
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);
export default {
    data(){
        return{
            active:0,
            urls:["/films/nowPlaying","/films/comingSoon"]
        }
    },
    created(){
        //纠正因为刷新导致的选项卡种错误的情况
        this.active = this.urls.indexOf(this.$route.path)
    },
    methods: {
        //点击切换顶部导航选项卡的事件处理程序
        onClick(index) {
            this.$router.push(this.urls[index])
        },
    },
    
}
</script>