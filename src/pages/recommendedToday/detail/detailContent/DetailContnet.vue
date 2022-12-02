<template>
  <a-row>
    <a-col :style="{ marginBottom:'25px' }" v-for="item in shuJu.length" :key="item" :span="6">
      <a-card @click="showContent(name[item - 1],price[item - 1],discount[item - 1],
            imgname[item - 1],description[item - 1])" size="small" hoverable style="width: 220px;margin: 0 auto">
        <template #cover>
          <img
              alt="example"
              :src="`http://192.168.206.232:8022/CommodityImage/${imgname[item - 1]}`"
          />
        </template>
        <a-card-meta :title="name[item - 1]" :description="description[item - 1]">
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
    </a-col>
  </a-row>
</template>

<script>
import { EllipsisOutlined,EyeOutlined,StarOutlined } from "@ant-design/icons-vue";
import {useRoute, useRouter} from "vue-router/dist/vue-router";
import {mapState} from "vuex";

export default {
  name: "DetailContnet",
  data(){
    return{
      shuJu:[
      ],
      name:[],
      description:[],
      discount:[],
      price:[],
      imgname:[],
    }
  },
  computed:{
    ...mapState('getInfo',['tuijiandata'])
  },
  created() {
    setTimeout(() => {
      this.shuJu = this.tuijiandata
      // console.log(this.shuJu)
      for (let i = 0;i < this.tuijiandata.length;i++){
        this.name.push(this.tuijiandata[i].name)
      }
      for (let i = 0;i < this.tuijiandata.length;i++){
        this.description.push(this.tuijiandata[i].description)
      }
      for (let i = 0;i < this.tuijiandata.length;i++){
        this.discount.push(this.tuijiandata[i].discount)
      }
      for (let i = 0;i < this.tuijiandata.length;i++){
        this.price.push(this.tuijiandata[i].price)
      }
      for (let i = 0;i < this.tuijiandata.length;i++){
        this.imgname.push(this.tuijiandata[i].imgname)
      }
    },2000)
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

    const showContent = function (name,price,discount,imgname,description){
      $router.push({
        name:'transactionContent',
        query:{
          name:name,
          price:price,
          discount:discount,
          imgname:imgname,
          description:description,
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

</style>