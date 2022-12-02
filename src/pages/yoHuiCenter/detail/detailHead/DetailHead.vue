<template>
  <a-carousel style="" autoplay>
    <img
        alt="example"
        :src="`http://192.168.206.232:8022/CommodityImage/1616519345097269f8.jpg`"
    />
    <img
        alt="example"
        :src="`http://192.168.206.232:8022/CommodityImage/Header0.png`"
    />
    <img
        alt="example"
        :src="`http://192.168.206.232:8022/CommodityImage/hwcloud-1201-1208.jpg`"
    />
  </a-carousel>
</template>

<script>
export default {
  name: "DetailHead"
}
</script>

<style scoped>
/*深度选择器*/
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 260px;
  line-height: 260px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>