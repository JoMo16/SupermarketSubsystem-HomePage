<template>
  <div class="detailContent">
    <detail-content-yo-hui id="yoHui"/>
    <detail-content-son-mo-ban id="tuiJian" title="今日推荐"/>
    <detail-content-son-mo-ban id="lingShi" title="零食超市"/>
    <detail-content-son-mo-ban id="yongPing" title="家庭用品"/>
    <detail-content-son-mo-ban id="qiCai" title="五金器材"/>
    <detail-content-son-mo-ban id="biGua" title="文艺壁挂"/>
    <detail-content-son-mo-ban id="yiWu" title="潮流衣物"/>
    <div style="width: 190px;height: 300px;
      position: fixed;top: 40%;left: 86%">
      <a-anchor>
        <a-anchor-link href="#yoHui" title="优惠中心" />
        <a-anchor-link href="#tuiJian" title="今日推荐" />
        <a-anchor-link href="#lingShi" title="零食超市" />
        <a-anchor-link href="#yongPing" title="家庭用品"/>
        <a-anchor-link href="#qiCai" title="五金器材"/>
        <a-anchor-link href="#biGua" title="文艺壁挂" />
        <a-anchor-link href="#yiWu" title="潮流衣物" />
      </a-anchor>
    </div>
    <detail-content-info/>
  </div>
<!--  detailContent-->
</template>

<script>
import detailContentYoHui from "@/pages/shouYe/detailComp/detailContent/detailContentYoHui/DetailContentYoHui";
import DetailContentSonMoBan from "@/pages/shouYe/detailComp/detailContent/detailContentSonMoBan/DetailContentSonMoBan";
import DetailContentInfo from "@/pages/shouYe/detailComp/detailContent/detailContentInfo/DetailContentInfo";
export default {
  name: "detailZouMa",
  components:{
    detailContentYoHui,
    DetailContentSonMoBan,
    DetailContentInfo
  }
}
</script>

<style scoped>
.detailContent{
  width: 71%;
  margin: 0 auto;
}
</style>
<style>

</style>