<template>
  <NavBar/>
  <Detail/>
  <Footers />
</template>

<script>
import NavBar from '@/components/NavBar/trendyClothes/NavBar';
import Footers from "@/components/Footers";
import Detail from "@/pages/trendyClothes/detail/Detail";
export default {
  name: `TrendyClothes`,
  components:{
    Detail,
    NavBar,
    Footers,
  }
}
</script>

<style scoped>

</style>