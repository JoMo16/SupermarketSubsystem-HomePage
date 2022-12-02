<template>
  <a-layout-footer :style="{ backgroundImage: 'linear-gradient(to right, #434343 0%, black 100%)',
  textAlign:'center',height:'50px',lineHeight:'48px',padding:'0'}">
    <div style="color:white;font-size: 16px">
      <span>
        Copyright ©2022 Created by
      </span>
      <span class="mark">
        E购
      </span>
    </div>
  </a-layout-footer>
</template>

<script>
export default {
  name: `Footers`
}
</script>

<style scoped>
.mark{
  font-weight: bolder;
  font-family: 方正舒体;
  font-size: 19px;
}
</style>