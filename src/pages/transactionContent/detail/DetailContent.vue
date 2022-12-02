<template>
  <div style="width: 100%;height: 100%">
    <a-row>
      <a-col :style="{ display:'flex',justifyContent:'right', }" :span="16">
        <div style="width: 800px;
        margin-top: 20px">
          <a-carousel autoplay>
            <div>
              <img
                  style="object-fit: cover ;width: 100%"
                  alt="example"
                  :src="`http://192.168.206.232:8022/CommodityImage/${imgname}`"
              />
            </div>
          </a-carousel>
          <h2 style="margin-top: 20px">{{ name }}</h2>
          <h2 style="margin-top: 20px">{{ commodityId }}</h2>
          <p>{{ description }}</p>
        </div>
      </a-col>
      <a-col :span="8">
        <div style="width: 280px;
        margin-top: 20px;margin-left: 80px">
          <h2>商品价格</h2>
          <p style="font-size: 20px">{{ price }}￥</p>
<!--          <h2>购买数量</h2>-->
<!--          <p style="font-size: 20px">400</p>-->
          <a-divider style="border-color: #c0bfbf;"></a-divider>
          <h2>添加至购物车</h2>
          <a-button @click="getTo123(commodityId)" size="large">
            <template #icon><send-outlined /></template>
            Go To Shopping Cart
          </a-button>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { SendOutlined } from '@ant-design/icons-vue';
import { useRouter , useRoute } from 'vue-router'
import { mapActions } from "vuex";

export default {
  name: "DetailContent",
  props:['name','price','description','discount','imgname','commodityId'],
  components:{
    SendOutlined,
  },
  methods:{
    getTo123(commodityId){
      // console.log(commodityId)
      this.addtoshopping(commodityId)
      this.goCart(commodityId)
    },
    ...mapActions('getInfo',{addtoshopping:'addtoshopping'}),
  },
  created() {

  },
  setup(){
    // eslint-disable-next-line no-unused-vars
    const $router = useRouter()
    // eslint-disable-next-line no-unused-vars
    const $route = useRoute()



    const goCart = function (){
      $router.push('/shopping')
    }

    return{
      goCart
    }
  }
}
</script>

<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 350px;
  line-height: 350px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>