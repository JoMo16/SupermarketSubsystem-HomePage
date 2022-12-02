<template>
  <NavBar/>
  <Detail/>
  <Footers />
</template>

<script>
import NavBar from '@/components/NavBar/artWallHanging/NavBar';
import Footers from "@/components/Footers";
import Detail from "@/pages/artWallHanging/detail/Detail";
export default {
  name: `ArtWallHanging`,
  components:{
    Detail,
    NavBar,
    Footers,
  }
}
</script>

<style scoped>

</style>