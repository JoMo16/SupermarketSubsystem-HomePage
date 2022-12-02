<template>
  <div style="width: 100%;min-height: 100%;max-height: 100%;height: 100%;overflow: auto">
    <a-button class="editable-add-btn" style="margin-bottom: 8px" @click="onBack">Back</a-button>
    <a-button class="editable-add-btn" style="float: right" @click="onPay">
      To Pay The Selected
    </a-button>
    <a-table :pagination="{ pageSize: 6, showSizeChanger: false }" bordered
             :data-source="shuJu" :columns="columns">
      <template #bodyCell="{ column,record }">
        <template v-if="column.dataIndex === 'num'">
          <a-input-number @step="change(record)" id="inputNumber" v-model:value="record.num" :min="1"/>
        </template>
        <template v-if="column.dataIndex === 'operation'">
          <a-popconfirm
              v-if="shuJu.length"
              title="Sure to delete?"
              @confirm="onDelete(record.goods)"
          >
            <a>Delete</a>
          </a-popconfirm>
        </template>
      </template>
    </a-table>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import {computed, reactive, ref, toRefs} from 'vue';
import { useRouter } from "vue-router";
import { mapState,mapActions } from "vuex";

export default {
  name: "DetailContent",
  data(){
    return{
      shuJu:[
      ],
      name:[],
      description:[],
      num:[],
      price:[],
      selectedRowKeys: [],
    }
  },
  computed:{
    ...mapState('getInfo',['shoppingCarts'])
  },
  methods:{
    ...mapActions('getInfo',{deleteShopping:'deleteShopping',alertShopping:'alertShopping'}),
    onDelete(goods){
      for (let i = 0;i < this.shuJu.length;i++ ){
        if (this.shuJu[i].goods.toString() === `${ goods }`){
          this.shuJu.splice(i,1)
          this.deleteShopping(goods)
        }
      }
    },
    change(row){
      this.alertShopping(row)
      console.log(row.goods,row.num)
    }
  },
  created() {
    // eslint-disable-next-line no-unused-vars
    const $router = useRouter()
    if (sessionStorage.getItem('token') == null){
      $router.push('/login')
    }

    setTimeout(() => {
      console.log('@@@',this.shoppingCarts)
      this.shuJu = this.shoppingCarts
      console.log(this.shoppingCarts)
      for (let i = 0;i < this.shoppingCarts.length;i++){
        this.name.push(this.shoppingCarts[i].name)
      }
      for (let i = 0;i < this.shoppingCarts.length;i++){
        this.description.push(this.shoppingCarts[i].description)
      }
      for (let i = 0;i < this.shoppingCarts.length;i++){
        this.num.push(this.shoppingCarts[i].num)
      }
      for (let i = 0;i < this.shoppingCarts.length;i++){
        this.price.push(this.shoppingCarts[i].price)
      }
    },2000)

    // location.reload()
  },
  setup() {
    const $router = useRouter();

    const columns = [{
      title: 'name',
      dataIndex: 'name',
    }, {
      title: 'description',
      dataIndex: 'description',
    }, {
      title: 'date',
      dataIndex: 'date',
      width: '16%'
    }, {
      title: 'num',
      dataIndex: 'num',
    }, {
      title: 'operation',
      dataIndex: 'operation',
    }];

    const onBack = () => {
      $router.back(-1)
    };

    const onPay = () => {
      $router.push('/pay')
    };

    const state = reactive({
      selectedRowKeys: [],
    });

    return {
      columns,
      ...toRefs(state),
      onBack,
      onPay,
    };
  },
}
</script>

<style scoped>

</style>