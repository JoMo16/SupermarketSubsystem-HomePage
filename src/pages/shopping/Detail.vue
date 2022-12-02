<template>
  <a-layout-content class="context">
    <DetailHead/>
    <DetailContent/>
  </a-layout-content>
</template>

<script>
import DetailHead from "@/pages/shopping/detailHead/DetailHead";
import DetailContent from "@/pages/shopping/detailContent/DetailContent";
import {mapActions} from "vuex";
export default {
  name: `Detail`,
  methods:{
    ...mapActions('getInfo',{getShoppingCarts:'getShoppingCarts'})
  },
  created() {
    this.getShoppingCarts()
  },
  components:{
    DetailHead,
    DetailContent
  }
}
</script>

<style scoped>
.context{
  height: 88%;
  width: 65%;
  margin: 0 auto;
  padding-top: 70px;
  /*background-color: aqua;*/
}
</style>