<template>
  <a-card @click="showContent(name,price,discount,imgname,description,commodityinfoid)"
          size="small" hoverable style="width: 220px;margin: 0 auto">
    <template #cover>
      <img
          alt="example"
          :src="`http://192.168.206.232:8022/CommodityImage/${imgname}`"
      />
    </template>
    <a-card-meta :title="name" >
      <template #avatar>
        <a-avatar src="https://joeschmoe.io/api/v1/random" />
      </template>
    </a-card-meta>
    <div style="margin-top: 9px;padding-top: 10px">
      <a-row>
        <a-col :style="{color:'blue'}" :span="8">
          12k
          <eye-outlined />
        </a-col>
        <a-col :style="{color:'deeppink'}" :span="8">
          9k
          <star-outlined />
        </a-col>
        <a-col :span="8">
          <ellipsis-outlined/>
        </a-col>
      </a-row>
    </div>
  </a-card>
</template>

<script>
import { EllipsisOutlined,EyeOutlined,StarOutlined } from "@ant-design/icons-vue";
import { useRouter , useRoute } from 'vue-router'
import {mapState} from "vuex";

export default {
  name: "tuiJianCard",
  props:['id','item'],
  data(){
    return{
      shuJu:[],
      price:[],
      description:[],
      discount:[],
      commodityinfoid:[],
      name:'你好，世界！',
      imgname:'123',
    }
  },
  computed:{
    ...mapState('getInfo',['lingshidata','homedata','wujindata','biguadata','zhaoliudata','tuijiandata'])
  },
  mounted() {
    // console.log('####',this.lingshidata)
    if (this.id.toString() === "lingShi"){
      setTimeout(() => {
        this.shuJu = this.lingshidata
        this.name = this.shuJu[this.item - 1].name
        this.price = this.shuJu[this.item - 1].price
        this.description = this.shuJu[this.item - 1].description
        this.discount = this.shuJu[this.item - 1].discount
        this.imgname = this.shuJu[this.item - 1].imgName
        this.commodityinfoid = this.shuJu[this.item - 1].commodityinfoid
      },2000)
    }
    if (this.id.toString() === "yongPing"){
      setTimeout(() => {
        this.shuJu = this.homedata
        this.name = this.shuJu[this.item - 1].name
        this.price = this.shuJu[this.item - 1].price
        this.description = this.shuJu[this.item - 1].description
        this.discount = this.shuJu[this.item - 1].discount
        this.imgname = this.shuJu[this.item - 1].imgName
        this.commodityinfoid = this.shuJu[this.item - 1].commodityinfoid
      },2000)
    }
    if (this.id.toString() === "qiCai"){
      setTimeout(() => {
        this.shuJu = this.wujindata
        this.name = this.shuJu[this.item - 1].name
        this.price = this.shuJu[this.item - 1].price
        this.description = this.shuJu[this.item - 1].description
        this.discount = this.shuJu[this.item - 1].discount
        this.imgname = this.shuJu[this.item - 1].imgName
        this.commodityinfoid = this.shuJu[this.item - 1].commodityinfoid
      },2000)
    }
    if (this.id.toString() === "biGua"){
      setTimeout(() => {
        this.shuJu = this.biguadata
        this.name = this.shuJu[this.item - 1].name
        this.price = this.shuJu[this.item - 1].price
        this.description = this.shuJu[this.item - 1].description
        this.discount = this.shuJu[this.item - 1].discount
        this.imgname = this.shuJu[this.item - 1].imgName
        this.commodityinfoid = this.shuJu[this.item - 1].commodityinfoid
      },2000)
    }
    if (this.id.toString() === "yiWu"){
      setTimeout(() => {
        this.shuJu = this.zhaoliudata
        // console.log('@@@',this.shuJu)
        this.name = this.shuJu[this.item - 1].name
        this.price = this.shuJu[this.item - 1].price
        this.description = this.shuJu[this.item - 1].description
        this.discount = this.shuJu[this.item - 1].discount
        this.imgname = this.shuJu[this.item - 1].imgName
        this.commodityinfoid = this.shuJu[this.item - 1].commodityinfoid
      },2000)
    }
    if (this.id.toString() === "tuiJian"){
      setTimeout(() => {
        this.shuJu = this.tuijiandata
        this.name = this.shuJu[this.item - 1].name
        this.price = this.shuJu[this.item - 1].price
        this.description = this.shuJu[this.item - 1].description
        this.discount = this.shuJu[this.item - 1].discount
        this.imgname = this.shuJu[this.item - 1].imgname
        this.commodityinfoid = this.shuJu[this.item - 1].commodityinfoid
      },2000)
    }
  },
  components:{
    EllipsisOutlined,
    EyeOutlined,
    StarOutlined
  },
  setup(){
    // eslint-disable-next-line no-unused-vars
    const $router = useRouter()
    // eslint-disable-next-line no-unused-vars
    const $route = useRoute()

    // const showContent = function (){
    //   $router.push("/transactionContent");
    // }

    const showContent = function (name,price,discount,imgname,description,commodityinfoid){
      $router.push({
        name:'transactionContent',
        query:{
          name:name,
          price:price,
          discount:discount,
          imgname:imgname,
          description:description,
          commodityId:commodityinfoid,
        }
      });
    }

    return{
      showContent
    }
  },
}
</script>

<style scoped>
.ant-col{
  text-align: center;
  font-weight: lighter;
  font-size: small;
}
</style>