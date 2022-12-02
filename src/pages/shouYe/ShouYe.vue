<template>
  <nav-bar/>
  <detail/>
  <footers/>
</template>

<script>
import NavBar from "@/components/NavBar/shouYe/NavBar";
import Detail from "@/pages/shouYe/Detail";
import Footers from "@/components/Footers";
export default {
  name: "ShouYe",
  components:{
    NavBar,
    Detail,
    Footers,
  }
}
</script>

<style scoped>

</style>