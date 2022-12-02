<template>
  <a-divider type="vertical" style="height: 560px;position: absolute; left: 70px;
   top: 80px;background-color: darkgray" />
  <h1 style="width: 89%;margin: 0px auto 0 auto;padding-top: 10px">
    <router-link to="/" class="mark">E购</router-link><span class="mark">
    &nbsp;&nbsp;&nbsp;&nbsp;订单页</span></h1>
  <div style="width: 89%;position: absolute;left: 120px;margin-top: 20px">
    <a-descriptions
        title="Order preview"
        bordered
    >
<!--      :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"-->
      <a-descriptions-item label="所有订单">
        <a-table :loading="false"
            :pagination="{ showSizeChanger:false,pageSize: 6 }" :dataSource="shuJu" :columns="columns" >
          <template #bodyCell="{ column,text,record  }">
            <template v-if="column.dataIndex === 'photo'">
              <a :ky="text">{{ text || record}}</a>
            </template>
            <template v-if="column.dataIndex === 'total'">
              {{ record.price * record.num }}
            </template>
            <template v-if="column.dataIndex === 'shipping_address'">
              默认首选收货地址
            </template>
            <template v-if="column.dataIndex === 'receiver'">
              默认用户
            </template>
            <template v-if="column.dataIndex === 'pay_by'">
              支付宝
            </template>
            <template v-if="column.dataIndex === 'courier'">
              默认快递公司
            </template>
          </template>
        </a-table>
      </a-descriptions-item>
    </a-descriptions>
    <div style="margin-top: 20px;display: flex;justify-content: center">
      <a-button @click="goShopping" type="link">返回购物车</a-button>
      <a-button type="text" style="color:#e56464;">提交订单</a-button>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import {reactive, toRefs} from "vue";
import { mapActions,mapState } from "vuex";

export default {
  name: `Pay`,
  data(){
    return{
      shuJu:[]
    }
  },
  methods:{
    ...mapActions('getInfo',{getShoppingCarts:'getShoppingCarts'})
  },
  computed:{
    ...mapState('getInfo',['shoppingCarts'])
  },
  created() {
    this.getShoppingCarts()
    setTimeout(()=>{
      this.shuJu = this.shoppingCarts
      console.log(this.shuJu)
    },2000)
  },
  components:{
  },
  setup() {
    const $router = useRouter();
    const state = reactive({
      selectedRowKeys: [],
    });
    const onSelectChange = selectedRowKeys => {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      state.selectedRowKeys = selectedRowKeys;
    };
    const goShopping = function (){
      $router.push('/shopping')
    }
    const dataSource = [
          {
            key: '1',
            photo: '待填充1',
            name: '港荣蒸蛋糕(箱)1',
            description: '港荣蒸蛋糕,好吃不上火！港荣蒸蛋糕,好吃不上火！港荣蒸蛋糕,好吃不上火！',
            courier: '顺丰快递',
            unit_price: '59',
            quantity: '22',
            total: '108',
            pay_by: '支付宝',
            shipping_address: '四川省成都市郫都区青龙镇429号',
            receiver: '罗榆卓',
          },
        ]
    const columns = [
          {
            title: '商品名称',
            dataIndex: 'name',
            key: 'name',
            width: '11%',
            ellipsis: true,
          },
          {
            title: '商品简介',
            dataIndex: 'description',
            key: 'description',
            width: '17%',
            ellipsis: true,
          },
          {
            title: '快递公司',
            dataIndex: 'courier',
            key: 'courier',
            ellipsis: true,
          },
          {
            title: '单价',
            dataIndex: 'price',
            key: 'price',
            ellipsis: true,
            sorter: {
              compare: (min,max) => min.unit_price - max.unit_price,
              multiple: 2,
            }
          },
          {
            title: '数量',
            dataIndex: 'num',
            key: 'num',
            ellipsis: true,
            sorter: {
              compare: (min,max) => min.quantity - max.quantity,
              multiple: 1,
            }
          },
          {
            title: '总价',
            dataIndex: 'total',
            key: 'total',
            ellipsis: true,
            sorter: {
              compare: (min,max) => min.total - max.total,
              multiple: 3,
            }
          },
          {
            title: '支付方式',
            dataIndex: 'pay_by',
            key: 'pay_by',
            ellipsis: true,
          },
          {
            title: '收货地址',
            dataIndex: 'shipping_address',
            key: 'shipping_address',
            width: '18%',
            ellipsis: true,
          },
          {
            title: '收货人',
            dataIndex: 'receiver',
            key: 'receiver',
            ellipsis: true,
          },
        ]

    return {
      onSelectChange,
      dataSource,
      columns,
      ...toRefs(state),
      goShopping,
    };
  },
}
</script>

<style scoped>
.mark{
  font-weight: bolder;
  font-family: 方正舒体;
}
</style>