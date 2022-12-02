<template>
  <a-row :style="{ width:'90%',margin:'0 auto' }">
    <a-col v-for="item in 8" :key="item" :xs="24" :sm="12" :md="8" :lg="6">
      <yo-hui-card :item="item" />
    </a-col>
  </a-row>
</template>

<script>
import yoHuiCard from "@/pages/shouYe/detailComp/detailContent/detailContentYoHui/YoHuiCard";
// eslint-disable-next-line no-unused-vars
import { mapActions } from "vuex";

export default {
  name: "yoHuiCardSet",
  methods:{
    ...mapActions('getInfo',{searchYoHui:'searchYoHui'})
  },
  mounted() {
    this.searchYoHui()
  },
  components:{
    // eslint-disable-next-line vue/no-unused-components
    yoHuiCard
  },
}
</script>

<style scoped>
.ant-card{
  margin: 0 auto;
}
.ant-col{
  margin-top: 18px;
}
</style>