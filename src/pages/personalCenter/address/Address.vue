<template>
  <div style="width: 100%;min-height: 100%;max-height: 100%;height: 100%;overflow: auto">
    <a-button class="editable-add-btn" style="margin-bottom: 8px" @click="onBack">Back</a-button>
    <a-button class="editable-add-btn" style="margin-bottom: 8px;margin-left: 20px"
              @click="showDrawer">Add</a-button>
    <a-drawer
        v-model:visible="visible"
        class="custom-class"
        style="color: red"
        title="Basic Drawer"
        placement="right"
        @after-visible-change="afterVisibleChange"
    >
      地址： <a-input style="margin-bottom: 10px" v-model:value="test1" placeholder="Basic usage" />
      电话：<a-input style="margin-bottom: 10px" v-model:value="test2" placeholder="Basic usage" />
      收件人：<a-input style="margin-bottom: 10px" v-model:value="test3" placeholder="Basic usage" />
      <a-button type="primary" @click="addAddress">添加地址</a-button>
    </a-drawer>
<!--    <a-popconfirm-->
<!--        v-if="dataSource.length"-->
<!--        title="Sure to delete?"-->
<!--        @confirm="onDeleteAllSelect(selectedRowKeys)"-->
<!--    >-->
<!--      <a-button class="editable-add-btn" style="float: right;">-->
<!--        Delete Selected-->
<!--      </a-button>-->
<!--    </a-popconfirm>-->
    <a-table
             :pagination="{ pageSize: 8, showSizeChanger: false }" bordered
             :data-source="shuJu" :columns="columns">
      <template #bodyCell="{ column,record }">
        <template v-if="column.dataIndex === 'operation'">
          <a-popconfirm
              v-if="shuJu.length"
              title="Sure to delete?"
              @confirm="deleteAddressDe(record)"
          >
            <a>Delete</a>
          </a-popconfirm>
        </template>
      </template>
    </a-table>
  </div>
</template>

<script>
import {useRouter} from "vue-router/dist/vue-router";
import {reactive, ref, toRefs} from "vue";
import { mapActions,mapState } from "vuex";

export default {
  name: `Address`,
  data(){
    return{
      shuJu:[],
    }
  },
  computed:{
    ...mapState('getInfo',['address'])
  },
  methods:{
    deleteAddressDe(row){
      // console.log(row.useraddressid)
      this.deleteAddress(row.useraddressid)
      // for (let i = 0;i < this.shuJu.length;i++ ){
      //   if (this.shuJu[i].useraddressid.toString() === `${ row.useraddressid }`){
      //     this.shuJu.splice(i,1)
      //   }
      // }
      location.reload()
    },
    addAddress(){
      let row = []
      row.push(this.test1)
      row.push(this.test2)
      row.push(this.test3)
      this.addAddress123(row)
      this.test1 = ''
      this.test2 = ''
      this.test3 = ''
      this.visible = false
      location.reload()
    },
    ...mapActions('getInfo',{searchAddress:'searchAddress',addAddress123:'addAddress',deleteAddress:'deleteAddress'}),
  },
  created() {
    this.searchAddress()
    setTimeout(() => {
      this.shuJu = this.address
    },2000)
  },
  setup() {
    const $router = useRouter();

    let test1 = ref('')
    let test2 = ref('')
    let test3 = ref('')

    const columns = [{
      title: 'receivepersonname',
      dataIndex: 'receivepersonname',
    }, {
      title: 'address',
      dataIndex: 'address',
    }, {
      title: 'phonenum',
      dataIndex: 'phonenum',
    }, {
      title: 'operation',
      dataIndex: 'operation',
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

    const onDelete = (key) => {
      for (let i = 0;i < dataSource.length;i++ ){
        if (dataSource[i].key.toString() === `${ key }`){
          dataSource.splice(i,1)
        }
      }
    };

    const onDeleteAllSelect = (selectedRowKeys) => {
      for (let i = 0;i < selectedRowKeys.length;i++ ){
        for (let j = 0;j <dataSource.length;j++){
          if (dataSource[j].key.toString()  === `${ selectedRowKeys[i] }`){
            dataSource.splice(j,1)
          }
        }
      }
    };

    const onBack = () => {
      $router.back(-1)
    };

    const state = reactive({
      selectedRowKeys: [],
    });

    const onSelectChange = selectedRowKeys => {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      state.selectedRowKeys = selectedRowKeys;
    };

    const visible = ref(false);
    const afterVisibleChange = bool => {
      console.log('visible', bool);
    };
    const showDrawer = () => {
      visible.value = true;
    };

    return {
      columns,
      onDelete,
      dataSource,
      ...toRefs(state),
      onSelectChange,
      onBack,
      onDeleteAllSelect,
      visible,
      afterVisibleChange,
      showDrawer,
      test1,
      test2,
      test3,
    };
  },
}
</script>

<style scoped>

</style>