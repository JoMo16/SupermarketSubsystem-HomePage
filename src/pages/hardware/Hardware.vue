<template>
  <NavBar/>
  <Detail/>
  <Footers />
</template>

<script>
import NavBar from '@/components/NavBar/hardware/NavBar';
import Footers from "@/components/Footers";
import Detail from "@/pages/hardware/detail/Detail";
export default {
  name: `Hardware`,
  components:{
    Detail,
    NavBar,
    Footers,
  }
}
</script>

<style scoped>

</style>