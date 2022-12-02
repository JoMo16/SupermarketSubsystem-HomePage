<template>
  <!--  暗锚点-->
  <a :id="id" style="position: relative;top: -82px;"></a>
  <h2 style="margin: 28px 0 0 0">优惠中心</h2>
  <yo-hui-card-set/>
  <div style="display: flex;justify-content: center">
    <a-button @click="showContent" style="width: 89%;margin-top: 16px" type="text">查看更多</a-button>
  </div>
</template>

<script>
import yoHuiCardSet from "@/pages/shouYe/detailComp/detailContent/detailContentYoHui/YoHuiCardSet";
import { useRouter , useRoute } from 'vue-router'

export default {
  name: "detailContentYoHui",
  components:{
    yoHuiCardSet
  },
  props:['id'],
  setup(){
    // eslint-disable-next-line no-unused-vars
    const $router = useRouter()
    // eslint-disable-next-line no-unused-vars
    const $route = useRoute()

    const showContent = function (){
      $router.push("/yohui");
    }

    return{
      showContent
    }
  },
}
</script>

<style scoped>

</style>