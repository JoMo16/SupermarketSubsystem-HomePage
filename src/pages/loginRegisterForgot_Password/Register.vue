<template>
  <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
  >
    <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="formState.username" />
    </a-form-item>

    <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password" />
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";

export default {
  name: `Register`,
  setup() {
    const formState = reactive({
      username: '',
      password: '',
    });
    const onFinish = values => {
      // console.log('Success:', values.username);
      axios.post("/userAccount/register",{
        account:values.username,
        password:values.password
      },{
        headers: {
          'Content-Type': 'application/json'
        }
      }).then( res => {
        if (res.data.msg.code == 406){
          alert('用户已存在,请重新输入')
        }
        if (res.data.msg.code == 200){
          alert('用户注册成功！')
          location.reload()
        }
      })
    };
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

    return {
      formState,
      onFinish,
      onFinishFailed,
    };
  },
}
</script>

<style scoped>

</style>