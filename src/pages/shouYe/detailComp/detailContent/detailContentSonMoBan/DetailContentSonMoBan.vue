<template>
  <!--  暗锚点-->
  <a :id="id" style="position: relative;top: -60px;"></a>
  <h2 style="margin: 20px 0 0 0">{{ title }}</h2>
  <tui-jian-card-set :id="id"/>
  <div style="display: flex;justify-content: center">
    <a-button  @click="showContent(id)" style="width: 89%;margin-top: 16px;margin-bottom: 9px;" type="text">查看更多</a-button>
  </div>
</template>

<script>
import tuiJianCardSet from "@/pages/shouYe/detailComp/detailContent/detailContentSonMoBan/SonMoBanCardSet";
// eslint-disable-next-line no-unused-vars
import {ref,} from "vue";
import {useRoute, useRouter} from "vue-router/dist/vue-router";

export default {
  name: "detailContentTuiJian",
  components:{
    tuiJianCardSet
  },
  setup(){
    // eslint-disable-next-line no-unused-vars
    const $router = useRouter()
    // eslint-disable-next-line no-unused-vars
    const $route = useRoute()

    const showContent = function (id){
      if (id.toString() === "tuiJian"){
        $router.push('/recommendedToday')
      }
      if (id.toString() === "lingShi"){
        $router.push('/supermarket')
      }
      if (id.toString() === "yongPing"){
        $router.push('/householdGoods')
      }
      if (id.toString() === "qiCai"){
        $router.push('/hardware')
      }
      if (id.toString() === "biGua"){
        $router.push('/artWallHanging')
      }
      if (id.toString() === "yiWu"){
        $router.push('/trendyClothes')
      }
    }

    return{
      showContent,
    }
  },
  props:['title','id'],
}
</script>

<style scoped>

</style>