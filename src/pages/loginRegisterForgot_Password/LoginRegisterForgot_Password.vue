<template>
  <div class="loginAndSegister">
    <div class="content">
      <h2 style="text-align: center;font-size: 28px;margin-bottom: 30px;
          margin-left: 60px;position: relative;z-index: 2">Login</h2>
      <div style="width: 400px;height: 360px;position: absolute;
      background-color: white;
      top: 50%;left: 50%;transform: translate(-43%,-50%);
      border-radius: 3%;opacity: 0.86">
      </div>
      <a-form
          style="width: 76%;margin: 0 auto"
          :model="formState"
          :label-col="{ span: 8 }"
          :wrapper-col="{ span: 16 }"
          name="normal_login"
          class="login-form"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
      >
        <a-form-item
            label="Account"
            name="account"
            :rules="[{ required: true, message: 'Please input your account!' }]"
        >
          <a-input v-model:value="formState.account">
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
            label="Password"
            name="password"
            :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password v-model:value="formState.password">
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item style="width: 100%;margin-left: 125px">
          <a-form-item name="remember" no-style>
            <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
            <router-link style="margin-left: 18px" to="/">Back to Home</router-link>
          </a-form-item>
        </a-form-item>

        <a-form-item style="width: 100%;margin-left: 125px">
          <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
            <span>Log in</span>
          </a-button>

          <span style="margin-left: 10px;margin-right: 8px">Or</span>
          <router-link @click="showDrawer" to="">register now!</router-link>
        </a-form-item>
      </a-form>
    </div>

<!--    注册表单-->
    <a-drawer
        :mask-closable="false"
        title="Create a new account"
        :width="720"
        :visible="visible"
        :body-style="{ paddingBottom: '80px' }"
        :footer-style="{ textAlign: 'right' }"
        @close="onClose"
    >
      <router-view/>
    </a-drawer>

    <div class="footer">
      <div id="jsi-flying-fish-container"></div>
    </div>
  </div>
</template>

<script>
import {reactive, computed, ref } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
// eslint-disable-next-line no-unused-vars
import axios from "axios";
import { useRouter } from "vue-router/dist/vue-router";

export default {
  name: "loginAndSegister",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    UserOutlined,
    // eslint-disable-next-line vue/no-unused-components
    LockOutlined,
  },
  setup(){
    const $router = useRouter();

    //登陆表单
    const formState = reactive({
      account: '',
      password: '',
      remember: true,
    });
    const onFinish = values => {
      console.log('Success:', values.account);
      console.log('Success:', values.password);
      axios.post("/userAccount/login",{
        account:values.account,
        password:values.password
      },{
        headers: {
          'Content-Type': 'application/json'
        }
      }).then( res => {
        console.log('data', res)
        if (res.data.flag){
          $router.push('/personalCenter')
          window.sessionStorage.setItem('token',res.data.data)
        } else {
          alert('账号信息错误，请重新输入')
        }
      })
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
    const disabled = computed(() => {
      return !(formState.account && formState.password);
    });

    //抽屉
    const visible = ref(false);
    const showDrawer = () => {
      visible.value = true
    }
    const onClose = () => {
      visible.value = false;
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
    return{
      formState,
      onFinish,
      onFinishFailed,
      disabled,
      visible,
      onClose,
      showDrawer
    }
  }
}
</script>

<style scoped>
.loginAndSegister{
  width: 100%;
  height: 100%;
  /*background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);*/
  background: url("../../assets/pixiv42.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.content{
  width: 500px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-65%);
  border-radius: 3%;
  /*background: white;*/
}
:deep(.ant-form-item-required){
  font-size: 16px;
}

/*定义动态底部鱼的 CSS 样式*/
.footer{
  width:100%;
  position: fixed;
  bottom: -4px;
  left: 0;
  z-index: 2;
}
#jsi-flying-fish-container{
  margin: 0;
  padding: 0;
}
</style>