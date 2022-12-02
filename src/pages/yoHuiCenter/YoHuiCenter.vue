<template>
  <NavBar/>
  <Detail/>
  <Footers />
</template>

<script>
import NavBar from '@/components/NavBar/yoHuiCenter/NavBar';
import Detail from "@/pages/yoHuiCenter/detail/Detail";
import Footers from "@/components/Footers";
export default {
  name: `YoHuiCenter`,
  components:{
    NavBar,
    Footers,
    Detail
  }
}
</script>

<style scoped>

</style>