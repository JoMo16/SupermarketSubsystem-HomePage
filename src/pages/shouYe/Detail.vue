<template>
  <a-layout-content>
    <detail-head/>
    <detail-content/>
    <a-back-top />
  </a-layout-content>
</template>

<script>
import detailHead from "@/pages/shouYe/detailComp/DetailHead";
import detailContent from "@/pages/shouYe/detailComp/detailContent/DetailContent";

export default {
  name: `Details`,
  components:{
    detailHead,
    detailContent
  }
}
</script>

<style scoped>
.ant-layout-content{
  background-color: #fafafa;
}
</style>