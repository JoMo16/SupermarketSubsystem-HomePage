<template>
  <a-layout-content :style="{ paddingTop:'72px',width:'55%',margin:'0 auto' }">
    <DetailHead/>
    <DetailContet/>
  </a-layout-content>
</template>

<script>
import DetailHead from "@/pages/yoHuiCenter/detail/detailHead/DetailHead";
import DetailContet from "@/pages/yoHuiCenter/detail/detailContent/DetailContet";
import { mapActions } from "vuex";

export default {
  name: `Detail`,
  methods:{
    ...mapActions('getInfo',{searchYoHui:'searchYoHui'})
  },
  mounted() {
    this.searchYoHui()
  },
  components:{
    DetailHead,
    DetailContet
  }
}
</script>

<style scoped>

</style>