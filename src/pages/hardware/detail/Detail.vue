<template>
  <a-layout-content :style="{ paddingTop:'72px',width:'65%',margin:'0 auto' }">
    <DeatilHead/>
    <DetailContnet/>
  </a-layout-content>
</template>

<script>
import DeatilHead from "@/pages/hardware/detail/detailHead/DeatilHead";
import DetailContnet from "@/pages/hardware/detail/detailContent/DetailContnet";
import {mapActions} from "vuex";
export default {
  name: `Detail`,
  methods:{
    ...mapActions('getInfo',{searchHardware:'searchHardware'})
  },
  mounted() {
    this.searchHardware()
  },
  components:{
    DeatilHead,
    DetailContnet
  }
}
</script>

<style scoped>

</style>