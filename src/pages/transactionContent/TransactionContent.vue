<template>
  <NavBar/>
  <DetailContet :name="name" :price="price" :description="description" :discount="discount" :imgname="imgname"
                :commodityId="commodityId" style="padding-top: 72px;width: 100%"/>
  <Footers style="width: 100%;position: fixed;bottom: 0"/>
</template>

<script>
import NavBar from "@/components/NavBar/transactionContent/NavBar";
import Footers from "@/components/Footers";
import DetailContet from "@/pages/transactionContent/detail/DetailContent";

export default {
  name: "TransactionContent",
  props:['name','price','description','discount','imgname','commodityId'],
  components:{
    // eslint-disable-next-line vue/no-unused-components
    NavBar,
    // eslint-disable-next-line vue/no-unused-components
    Footers,
    // eslint-disable-next-line vue/no-unused-components
    DetailContet
  }
}
</script>

<style scoped>

</style>