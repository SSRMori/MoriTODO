<template>
  <div id="indexWrapper">
    <div id="cover">
      <div>
        <a-icon id="logo" type="check-square" theme="twoTone" two-tone-color="#7bed9f" />
        <p>Mori TODO</p>
      </div>
    </div>
    <a-layout>
    <a-layout>
      <a-layout-header>
        <a-page-header title="MoriTODO" sub-title="A simple todo application">
          <a-dropdown slot="extra" trigger="['hover', 'click']">
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
                <a href="javascript:;">Register</a>
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
    <a-layout-sider></a-layout-sider>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "index",
  methods: {
      goToLogin: function(){
          this.$router.push({path: '/login'})
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

#cover {
  width: 100vw;
  height: 100vh;
  background-color: #70a1ff;
  animation-name: coverDisappear;
  animation-delay: 0s;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  z-index: 1;
}

@keyframes coverDisappear {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    z-index: -1;
  }
}

#cover p {
  font-size: 40px;
  text-align: center;
  font-weight: 900;
  color: white;
  opacity: 0;
  animation-name: letterAppear;
  animation-delay: 2.5s;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}

@keyframes letterAppear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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

#indexWrapper .ant-layout-sider {
    width: 0;
    height: 0;
}

#logo {
  transform: translateY(-500px);
  animation-name: logoDrop, logoUp, logoDropSecond;
  animation-delay: 0s, 1s, 1.5s;
  animation-duration: 1s, 0.5s, 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.6, 0.01, 1, 0.44),
    cubic-bezier(0.08, 0.68, 0.51, 0.99), cubic-bezier(0.6, 0.01, 1, 0.44);
}

@keyframes logoDrop {
  0% {
    transform: translateY(-500px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes logoUp {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-50px);
  }
}

@keyframes logoDropSecond {
  0% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>