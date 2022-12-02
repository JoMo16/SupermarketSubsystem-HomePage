<template>
  <NavBar/>
  <Detail/>
  <Footers />
</template>

<script>
import NavBar from '@/components/NavBar/supermarket/NavBar';
import Footers from "@/components/Footers";
import Detail from "@/pages/supermarket/detail/Detail";
export default {
  name: `Supermarket`,
  components:{
    NavBar,
    Footers,
    Detail,
  }
}
</script>

<style scoped>

</style>