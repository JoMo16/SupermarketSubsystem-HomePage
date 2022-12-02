<template>
  <!--  相关信息  -->
  <div style="width: 89%;margin: 10px auto 0px auto;padding-bottom: 50px">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="Info 1">
        我们致力于更好的服务
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        ---
        We are committed to better service
      </a-tab-pane>
      <a-tab-pane key="2" tab="Info 2" force-render>
        我们始终站在顾客的角度出发
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        ---
        We always stand in the customer's point of view
      </a-tab-pane>
      <a-tab-pane key="3" tab="Info 3">
        全心全意为顾客服务
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        ---
        Serve customers wholeheartedly
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: "DetailContentInfo",
  setup() {
    return {
      activeKey: ref('1'),
    };
  },
}
</script>

<style scoped>

</style>