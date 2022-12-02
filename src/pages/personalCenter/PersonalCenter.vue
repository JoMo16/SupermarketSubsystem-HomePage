<template>
  <a-divider type="vertical" style="height: 560px;position: absolute; left: 70px;
   top: 80px;background-color: darkgray" />
  <h1 style="width: 80%;margin: 0px auto 0 auto;padding-top: 10px">
    <router-link to="/" class="mark">E购</router-link><span class="mark">
    &nbsp;&nbsp;&nbsp;&nbsp;个人中心界面</span></h1>
  <a-tabs style="width: 80%;margin: 0px auto 0 auto" v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="地址信息">
      <router-view />
    </a-tab-pane>
    <a-tab-pane key="2" tab="订单历史" force-render>
      <router-view name="historicalOrders"/>
    </a-tab-pane>
    <a-tab-pane key="3" tab="个人中心">
      <router-view name="center"/>
    </a-tab-pane>
  </a-tabs>
  <Footers style="position: fixed;bottom: 0;width: 100%" />
</template>

<script>
import Footers from "@/components/Footers";

export default {
  name: "PersonalCenter",
  components: {
    Footers,
  },
}
</script>

<style scoped>
.mark{
  font-weight: bolder;
  font-family: 方正舒体;
}
</style>