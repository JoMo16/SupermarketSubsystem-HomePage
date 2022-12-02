<template>
  <NavBar/>
  <Detail/>
  <Footers style="position: fixed;bottom: 0;width: 100%"/>
</template>

<script>
import NavBar from '@/components/NavBar/shoppingCart/NavBar';
import Footers from "@/components/Footers";
import Detail from "@/pages/shopping/Detail";
export default {
  name: `Shopping`,
  components:{
    NavBar,
    Footers,
    Detail
  }
}
</script>

<style scoped>

</style>