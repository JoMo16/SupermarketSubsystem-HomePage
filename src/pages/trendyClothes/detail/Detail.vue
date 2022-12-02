<template>
  <a-layout-content :style="{ paddingTop:'72px',width:'65%',margin:'0 auto' }">
    <DeatilHead/>
    <DetailContnet/>
  </a-layout-content>
</template>

<script>
import DeatilHead from "@/pages/trendyClothes/detail/detailHead/DeatilHead";
import DetailContnet from "@/pages/trendyClothes/detail/detailContent/DetailContnet";
import {mapActions} from "vuex";
export default {
  name: `Detail`,
  methods:{
    ...mapActions('getInfo',{searchClothes:'searchClothes'})
  },
  mounted() {
    this.searchClothes()
  },
  components:{
    DeatilHead,
    DetailContnet
  }
}
</script>

<style scoped>

</style>