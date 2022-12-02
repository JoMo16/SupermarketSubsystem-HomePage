<template>
  <h2 style="margin-left: 30px;margin-top: 10px"><router-link to="/">返回主页</router-link></h2>
  <div style="width: 100%;min-height: 100%;max-height: 100%;height: 100%;overflow: auto">
    <a-table :pagination="{ pageSize: 8, showSizeChanger: false }" bordered
             :data-source="searchList" :columns="columns">
      <template #bodyCell="{ column }">
        <template v-if="column.dataIndex === 'operation'">
          King
        </template>
      </template>
    </a-table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SearchPage",
  computed:{
    ...mapState('getInfo',['searchList'])
  },
  setup(){
    const columns = [{
      title: 'name',
      dataIndex: 'name',
    }, {
      title: 'description',
      dataIndex: 'description',
    }, {
      title: 'price',
      dataIndex: 'price',
    }, {
      title: 'type',
      dataIndex: 'type',
    }];

    return{
      columns
    }
  },
}
</script>

<style scoped>

</style>