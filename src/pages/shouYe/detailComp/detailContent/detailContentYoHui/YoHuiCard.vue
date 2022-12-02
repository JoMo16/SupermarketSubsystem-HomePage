<template>
  <a-card @click="showContent(name,price,discount,imgname,description,commodityinfoid)"
          size="small" hoverable style="width: 220px">
    <template #cover>
      <img
          alt="example"
          :src="`http://192.168.206.232:8022/CommodityImage/${imgname}`"
      />
    </template>
    <template #actions>
      <span style="color:#3f8600;">{{ (discount * price).toFixed(2) }}</span>
      <span style="color:#cf1322;">{{ price }}</span>
      <ellipsis-outlined key="ellipsis" />
    </template>
    <a-card-meta :title="name">
      <template #avatar>
        <a-avatar src="https://joeschmoe.io/api/v1/random" />
      </template>
    </a-card-meta>
  </a-card>
</template>

<script>
import { EllipsisOutlined } from "@ant-design/icons-vue";
import { useRouter , useRoute } from 'vue-router'
import { mapState } from "vuex";

export default {
  name: "yoHuiCard",
  data(){
    return{
      shuJu:[],
      name:'',
      discount:'',
      price:'',
      imgname:'',
      description:'',
      commodityinfoid:'',
    }
  },
  components:{
    EllipsisOutlined
  },
  props:['item'],
  computed:{
    ...mapState('getInfo',['yohuidata'])
  },
  mounted() {
    setTimeout(() => {
      this.shuJu = this.yohuidata
      this.name = this.shuJu[this.item - 1].name
      this.discount = this.shuJu[this.item - 1].discount
      this.price = this.shuJu[this.item - 1].price
      this.imgname = this.shuJu[this.item - 1].imgname
      this.description = this.shuJu[this.item - 1].description
      this.commodityinfoid = this.shuJu[this.item - 1].commodityinfoid
    },2000)

  },
  setup(){
    // eslint-disable-next-line no-unused-vars
    const $router = useRouter()
    // eslint-disable-next-line no-unused-vars
    const $route = useRoute()

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
  }
}
</script>

<style scoped>

</style>