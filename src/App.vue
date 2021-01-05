<template>
  <div id="app">
    <!-- 测试vant组件使用，用完即删 -->
    <!-- <van-cell title="选择单个日期" :value="date" @click="show = true" />
    <van-calendar v-model="show" @confirm="onConfirm" /> -->
    <Footer />
    <router-view/>
  </div>
</template>
<script>
//导入底部导航组件
import Footer from '@/components/Navigation/Footer'
//导入vant组件
  //vant测试代码 用完即删

/* import Vue from 'vue';
import { Calendar,Cell } from 'vant';
Vue.use(Calendar);
Vue.use(Cell); */
//导入uri地址（测试用）
// import uri from '@/config/uri'
export default {
  //注册组件
  components:{
    Footer,
  },
  //vant测试代码 用完即删
   /* data() {
    return {
      date: '',
      show: false,
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
  }, */
  created(){
    //测试网络请求是否可用，用完即删
    // this.$http.get(uri.getCities).then(ret => console.log(ret));
  },
};
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
</style>
