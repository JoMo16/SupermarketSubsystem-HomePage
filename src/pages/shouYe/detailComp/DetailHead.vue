<template>
  <div class="detailHead">
    <h2  style="position: relative;z-index: 4"><span>输之其名&nbsp;&nbsp;&nbsp;得你所想</span></h2>
    <a-input-search
        v-model:value="value"
        placeholder="请输入商品的名称"
        style="width: 370px;position: relative;z-index: 4;"
        size="large"
        @search="searchUUU"
    />
    <a-divider style="position: relative;z-index: 4">
      <span style="font-size: 14px">精选好物 等你来购</span>
    </a-divider>
    <div class="footer">
      <div id="jsi-flying-fish-container"></div>
    </div>
  </div>
</template>

<script>
import { ref,computed } from "vue";
import { useRouter } from "vue-router/dist/vue-router";
// eslint-disable-next-line no-unused-vars
import { mapState,mapActions } from 'vuex';

export default {
  name: "detailHead",
  methods:{
    searchUUU(searchValue){
      // console.log(searchValue)
      // this.search(searchValue)
      this.searchVa(searchValue)
      this.search()
    },
    ...mapActions('getInfo',{searchVa:'searchVa'})
  },
  // mounted() {
  //   this.searchSnack()
  // },
  // computed:{
  //   ...mapState('getLingShiInfo',['lingshidata'])
  // },
  setup() {
    const value = ref('');
    // eslint-disable-next-line no-unused-vars
    const $router = useRouter();

    computed({})

    const search = () => {
      $router.push('/searchPage')
    };

    // 动态引入JS编写的动态小鱼儿文件
    function loadJS( url, callback ){
      var script = document.createElement('script'),
          fn = callback || function(){};
      script.type = 'text/javascript';
      //IE
      if(script.readyState){
        script.onreadystatechange = function(){
          if( script.readyState == 'loaded' || script.readyState == 'complete' ){
            script.onreadystatechange = null;
            fn();
          }
        };
      }else{
        //其他浏览器
        script.onload = function(){
          fn();
        };
      }
      script.src = url;
      document.getElementsByTagName('head')[0].appendChild(script);
    }
    //用法
    loadJS('js/fish.js',function(){
      // console.log('引入动态小鱼儿');
    });

    return {
      value,
      search,
    };
  }
}
</script>

<style scoped>
  h2{
    padding: 100px 0px 20px 0px;
  }
  .detailHead{
    text-align: center;
  }

  /*定义动态底部鱼的 CSS 样式*/
  .footer{
    width:100%;
    height: 180px;
    position: absolute;
    bottom: -4px;
    top: 52px;
    left: 0;
    z-index: 3;
  }
  #jsi-flying-fish-container{
    margin: 0;
    padding: 0;
  }
</style>