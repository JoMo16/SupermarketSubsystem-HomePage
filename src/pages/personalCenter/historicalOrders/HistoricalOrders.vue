<template>
  <div style="width: 100%;min-height: 100%;max-height: 100%;height: 100%;overflow: auto">
    <a-table :pagination="{ pageSize: 8, showSizeChanger: false }" bordered
             :data-source="shuJu" :columns="columns">
      <template #bodyCell="{ column }">
        <template v-if="column.dataIndex === 'operation'">
            King
        </template>
      </template>
    </a-table>
  </div>
</template>

<script>
import { reactive } from "vue";
import { mapActions,mapState } from "vuex";

export default {
  name: "HistoricalOrders",
  data(){
    return{
      shuJu:[]
    }
  },
  methods:{
    ...mapActions('getInfo',{searchOrder:'searchOrder'})
  },
  computed:{
    ...mapState('getInfo',['orders'])
  },
  created() {
    this.searchOrder()
    setTimeout(() => {
      this.shuJu = this.orders
    },2000)
  },
  setup() {
    const columns = [{
      title: 'commodityName',
      dataIndex: 'commodityName',
    }, {
      title: 'courierName',
      dataIndex: 'courierName',
    }, {
      title: 'createTime',
      dataIndex: 'createTime',
    }, {
      title: 'payChannelName',
      dataIndex: 'payChannelName',
    }];

    var dataSource = reactive([{
      key: 0,
      name: 'Edward King 0',
      date: '2001-01-09',
      num: 19,
      description: 'London, Park Lane no. 0',
    }, {
      key: '14',
      name: 'Edward King 1',
      date: '2001-01-09',
      num: 1,
      description: 'London, Park Lane no. 1',
    }]);

    return {
      columns,
      dataSource,
    };
  },
}
</script>

<style scoped>

</style>