<template>
  <a-descriptions title="User Info">
    <a-descriptions-item label="Name">
      {{ name }}
    </a-descriptions-item>
    <a-descriptions-item label="Birthday">
      {{ birthday }}
    </a-descriptions-item>
    <a-descriptions-item label="Sex">
      {{ sex }}
    </a-descriptions-item>
  </a-descriptions>
  <a-button @click="getInfo" type="primary">退出登陆</a-button>
</template>

<script>
import { onMounted,ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router/dist/vue-router";

export default {
  name: `Center`,
  setup(){
    let name = ref('123');
    let birthday = ref('');
    let sex = ref('');

    const $router = useRouter()

    axios.post("/userInfo/get",{
    },{
      headers: {
        token: window.sessionStorage.getItem('token')
      }
    }).then( res => {
      name.value = res.data.data.nickname
      birthday.value = res.data.data.birthday
      sex.value = res.data.data.sex ? '男' : '女'
    })

    onMounted( () => {

    })

    const getInfo = function (){
      window.sessionStorage.removeItem('token')
      $router.push('login')
    }
    return{
      getInfo,
      name,
      birthday,
      sex
    }
  }
}
</script>

<style scoped>

</style>