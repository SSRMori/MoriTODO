<template>
  <div id="loginWrapper">
    <a-layout>
      <a-layout>
        <a-layout-header>
          <a-page-header title="MoriTODO" sub-title="login" @back="()=>this.$router.go(-1)" />
        </a-layout-header>
        <a-layout-content>
          <a-card id="login-card" :bordered="false">
            <a-avatar :size="64" icon="user" />
            <a-input v-model="userName" placeholder="username">
              <a-icon slot="prefix" type="user" />
            </a-input>
            <a-input-password placeholder="password">
              <a-icon slot="prefix" type="key" />
            </a-input-password>
            <a-button
              id="login-button"
              type="primary"
              :loading="buttonLoading"
              @click="login"
            >{{loginText}}</a-button>
          </a-card>
        </a-layout-content>
        <a-layout-footer>
          <a-icon type="copyright" />Mori Jan. 2020
        </a-layout-footer>
      </a-layout>
      <a-layout-sider width="50%">
        <a-card hoverable>
          <div slot="cover">
            <a-carousel autoplay>
              <img src="https://picsum.photos/400/300"/>
              <img src="https://picsum.photos/400/300" />
              <img src="https://picsum.photos/400/300" />
              <img src="https://picsum.photos/400/300" />
            </a-carousel>
          </div>
          <p>MoriTODO</p>
        </a-card>
      </a-layout-sider>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "login",
  data: function() {
    return {
      username: "",
      password: "",
      buttonLoading: false,
      loginText: "登陆",
      cardLoading: true
    };
  },
  methods: {
    login: function() {
      this.loginText = "";
      this.buttonLoading = true;
    }
  }
};

setTimeout(()=> {
  app.data.cardLoading = false
}, 3000)
</script>

<style>
div#loginWrapper {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #dfe6e9;
  /* text-align: center; */
}
#loginWrapper .ant-layout:first-of-type {
  height: 100%;
}

#loginWrapper .ant-layout-sider,
#loginWrapper .ant-layout-footer,
#loginWrapper .ant-layout-header,
#loginWrapper .ant-layout-content {
  background: #f1f2f6;
}

#loginWrapper .ant-layout-content #login-card {
  background: #f1f2f6;
  text-align: center;
}

#loginWrapper .ant-layout-header {
  padding-left: 0 !important;
  padding-right: auto !important;
}

#loginWrapper .ant-layout-footer {
  text-align: center;
}

#loginWrapper .ant-layout-sider .ant-card {
  width: 60%;
  height: 60%;
  margin: 20% !important;
}

#loginWrapper .ant-layout-content .ant-card {
  width: 60%;
  height: 80%;
  margin: 10% 20% auto auto !important;
}

#loginWrapper .ant-input {
  margin: 5px auto !important;
}
</style>