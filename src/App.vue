<template>
  <router-view></router-view>
</template>

<script>
import ShouYe from "@/pages/shouYe/ShouYe";
import LoginRegisterForgot_Password from "@/pages/loginRegisterForgot_Password/LoginRegisterForgot_Password";

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    ShouYe,
    // eslint-disable-next-line vue/no-unused-components
    LoginRegisterForgot_Password,
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html,body{
  width: 100%;
  height: 100%;
}
#app{
  width: 100%;
  height: 100%;
}

/*全局定义JS小鱼儿动态效果的宽高*/
canvas{
  width: 100%;
  height: 180px;
  margin: 0;
  padding: 0;
}
</style>
