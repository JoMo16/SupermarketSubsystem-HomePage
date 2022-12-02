<template>
  <div style="width: 100%;">
    <a-divider style="font-size: 14px;font-weight: bold">折扣好货 机不可失 失不再来</a-divider>
    <a-row>
      <a-col v-for="item in shuJu.length" :key="item" :span="8">
        <a-card
            @click="showContent(name[item - 1],price[item - 1],discount[item - 1],
            imgname[item - 1],description[item - 1])"
                size="small" hoverable style="width: 220px">
          <template #cover>
            <img
                alt="example"
                :src="`http://192.168.206.232:8022/CommodityImage/${imgname[item - 1]}`"
            />
          </template>
          <template #actions>
            <span style="color:#3f8600;">{{ (discount[item - 1] * price[item - 1]).toFixed(2) }}</span>
            <span style="color:#cf1322;">{{ price[item - 1] }}</span>
            <ellipsis-outlined key="ellipsis" />
          </template>
          <a-card-meta :title="name[item - 1]" :description="description[item - 1]">
            <template #avatar>
              <a-avatar src="https://joeschmoe.io/api/v1/random" />
            </template>
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
    <a-back-top />
  </div>
</template>

<script>
import { EllipsisOutlined } from "@ant-design/icons-vue";
import {useRoute, useRouter} from "vue-router/dist/vue-router";
import { mapState } from "vuex";

export default {
  name: "DetailContet",
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
  components:{
    EllipsisOutlined
  },
  computed:{
    ...mapState('getInfo',['yohuidata'])
  },
  created() {
    setTimeout(() => {
      this.shuJu = this.yohuidata
      // console.log(this.shuJu)
      for (let i = 0;i < this.yohuidata.length;i++){
        this.name.push(this.yohuidata[i].name)
      }
      for (let i = 0;i < this.yohuidata.length;i++){
        this.description.push(this.yohuidata[i].description)
      }
      for (let i = 0;i < this.yohuidata.length;i++){
        this.discount.push(this.yohuidata[i].discount)
      }
      for (let i = 0;i < this.yohuidata.length;i++){
        this.price.push(this.yohuidata[i].price)
      }
      for (let i = 0;i < this.yohuidata.length;i++){
        this.imgname.push(this.yohuidata[i].imgname)
      }
    },2000)
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
.ant-col{
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>