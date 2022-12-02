<template>
  <NavBar/>
  <Detail/>
  <Footers/>
</template>

<script>
import NavBar from '@/components/NavBar/recommendedToday/NavBar';
import Footers from "@/components/Footers";
import Detail from "@/pages/recommendedToday/detail/Detail";
export default {
  name: `RecommendedToday`,
  components:{
    NavBar,
    Footers,
    Detail,
  }
}
</script>

<style scoped>

</style>