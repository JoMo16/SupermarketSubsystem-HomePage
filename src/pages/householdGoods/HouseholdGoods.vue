<template>
  <NavBar/>
  <Detail/>
  <Footers />
</template>

<script>
import NavBar from '@/components/NavBar/householdGoods/NavBar';
import Footers from "@/components/Footers";
import Detail from "@/pages/householdGoods/detail/Detail";
export default {
  name: `HouseholdGoods`,
  components:{
    Detail,
    NavBar,
    Footers,
  }
}
</script>

<style scoped>

</style>