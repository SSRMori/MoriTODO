<template>
  <div id="indexWrapper">
    <a-layout>
      <a-layout>
        <a-layout-header>
          <a-page-header title="MoriTODO" sub-title="A simple todo application">
            <a-dropdown slot="extra">
              <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                <a-icon
                  type="user"
                  style="border: 2px solid black; border-radius: 50%; color: black; font-size: 20px"
                />
              </a>
              <a-menu slot="overlay">
                <a-menu-item>
                  <a @click="goToLogin">Sign in</a>
                </a-menu-item>
                <a-menu-divider />
                <a-menu-item>
                  <a @click="goToRegister">Register</a>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </a-page-header>
        </a-layout-header>
        <a-layout-content>Content</a-layout-content>
        <a-layout-footer>
          <a-icon type="copyright" />Mori Jan. 2020
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "index",
  data: function() {
    return {}
  },
  methods: {
    goToLogin: function() {
      this.$router.push({ path: '/login' })
    },
    goToRegister: function() {
      this.$router.push({ path: '/register'})
    }
  }
};
</script>

<style>
#indexWrapper {
  width: 100vw;
  height: 100vh;
  background-color: #f1f2f6;
  padding: 0;
  display: flex;
}


#indexWrapper .ant-layout {
  width: 100vw;
  height: 100vh;
  margin: 0;
  position: absolute;
}

#indexWrapper .ant-layout-content,
#indexWrapper .ant-layout-header,
#indexWrapper .ant-layout-footer {
  background: #f1f2f6;
}

#indexWrapper .ant-layout-footer {
  text-align: center;
}
</style>