<template>
  <a-layout-header :style="{ position: 'fixed', zIndex: 10, width: '100%' }">
    <a-row :style="{ lineHeight:'52px' }">
      <a-col :span="4" :style="{ backgroundColor:'white',textAlign:'center',height:'52px'}">
        <router-link to="/"><span class="mark">E购</span></router-link>
      </a-col>
      <a-col :span="17" :style="{ lineHeight:'52px'}">
        <a-menu @click="menuEvent" v-model:selectedKeys="current" mode="horizontal">
          <a-menu-item key="shouYe">
            <template #icon>
              <crown-outlined /> <!-- 通过 style fontsize 可以改变图标的大小 -->
            </template>
            <router-link to="/">首页</router-link>
          </a-menu-item>
          <a-menu-item key="yoHui">
            <template #icon>
              <gift-outlined />
            </template>
            <router-link to="/yohui">优惠中心</router-link>
          </a-menu-item>
          <a-menu-item key="tuiJian">
            <template #icon>
              <fire-outlined />
            </template>
            <router-link to="/recommendedToday">今日推荐</router-link>
          </a-menu-item>
          <a-sub-menu key="fenLei">
            <template #icon>
              <appstore-outlined />
            </template>
            <template #title>分类</template>
            <a-menu-item-group title="所有专区">
              <a-menu-item key="setting:1">
                <router-link to="/supermarket">零食超市</router-link>
              </a-menu-item>
              <a-menu-item key="setting:2">
                <router-link to="/householdGoods">家庭用品</router-link>
              </a-menu-item>
              <a-menu-item key="setting:3">
                <router-link to="/hardware">五金器材</router-link>
              </a-menu-item>
              <a-menu-item key="setting:4">
                <router-link to="/artWallHanging">文艺壁挂</router-link>
              </a-menu-item>
              <a-menu-item key="setting:5">
                <router-link to="/trendyClothes">潮流衣物</router-link>
              </a-menu-item>
            </a-menu-item-group>
          </a-sub-menu>
          <a-menu-item key="shopping">
            <template #icon>
              <shopping-cart-outlined />
            </template>
            <router-link to="/shopping">购物车</router-link>
          </a-menu-item>
        </a-menu>
      </a-col>
      <a-col :span="3" :style="{ backgroundColor:'white',textAlign:'center' }">
        <a-tooltip placement="left">
          <template #title>
            <span class="sp1">请点击登陆</span>
          </template>
          <a @click="goLoginOrPersonCenter">
            <a-avatar size="22px">
              <template #icon><UserOutlined /></template>
            </a-avatar>
          </a>
        </a-tooltip>
      </a-col>
    </a-row>
  </a-layout-header>
</template>

<script>
import { ref } from "vue";
import { useRouter , useRoute } from 'vue-router'
import { CrownOutlined,GiftOutlined,FireOutlined,
  AppstoreOutlined,ShoppingCartOutlined,UserOutlined} from '@ant-design/icons-vue';

export default {
  name: 'NavBar',
  components: {
    CrownOutlined,
    GiftOutlined,
    FireOutlined,
    AppstoreOutlined,
    ShoppingCartOutlined,
    UserOutlined
  },
  setup(){
    // eslint-disable-next-line no-unused-vars
    const $router = useRouter()
    // eslint-disable-next-line no-unused-vars
    const $route = useRoute()
    let msg = ref('你好，世界！')
    const current = ref(['setting:4']);
    // eslint-disable-next-line no-unused-vars
    const menuEvent = function ({ item, key, keyPath }){
      // console.log('@@12',item,'@@23',key,'$$12',keyPath)
      // console.log($router,$route)
      // $router.push('/login')
      // alert("暂未实现")
    }
    const goLoginOrPersonCenter = function (){
      if (window.sessionStorage.getItem('token') == null){
        $router.push('/login');
      } else {
        $router.push('/personalCenter');
      }
    }
    return {msg,current,menuEvent,goLoginOrPersonCenter}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ant-layout-header{
  padding: 0;
  height: 52px;
}
.mark{
  font-weight: bolder;
  font-family: 方正舒体;
  font-size: 26px;
}
.sp1{
  font-weight: lighter;
  font-size: smaller;
}
</style>