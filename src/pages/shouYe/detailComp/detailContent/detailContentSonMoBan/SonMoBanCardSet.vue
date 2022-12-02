<template>
  <a-row :style="{ width:'90%',margin:'0 auto' }">
    <a-col v-for="item in 8" :key="item" :xs="24" :sm="12" :md="8" :lg="6">
      <tui-jian-card :id="id" :item="item" />
    </a-col>
  </a-row>
</template>

<script>
import tuiJianCard from "@/pages/shouYe/detailComp/detailContent/detailContentSonMoBan/SonMoBanCard";
import { mapActions } from "vuex";

export default {
  name: "tuiJianCardSet",
  components:{
    tuiJianCard
  },
  methods:{
    ...mapActions('getInfo',{searchSnack:'searchSnack',searchHomeItem:'searchHomeItem',
      searchWallHanging:'searchWallHanging',searchHardware:'searchHardware',searchClothes:'searchClothes',
      searchTuiJian:'searchTuiJian',searchYoHui:'searchYoHui'}),
  },
  mounted() {
    // console.log('####',this.id)
    if (this.id.toString() === "tuiJian"){
      this.searchTuiJian()
    }
    if (this.id.toString() === "lingShi"){
      this.searchSnack()
    }
    if (this.id.toString() === "yongPing"){
      this.searchHomeItem()
    }
    if (this.id.toString() === "qiCai"){
      this.searchHardware()
    }
    if (this.id.toString() === "biGua"){
      this.searchWallHanging()
    }
    if (this.id.toString() === "yiWu"){
      this.searchClothes()
    }
  },
  props:['id'],
}
</script>

<style scoped>
.ant-col{
  margin-top: 22px;
}
</style>