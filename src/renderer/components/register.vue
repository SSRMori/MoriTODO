<template>
  <div id="registerWrapper">
    <a-layout>
      <a-layout>
        <a-layout-header>
          <a-page-header title="MoriTODO" sub-title="register" @back="() => this.$router.go(-1)" />
        </a-layout-header>
        <a-layout-content>Content</a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
      </a-layout>
      <a-layout-sider width="50%">
        <a-card hoverable>
          <div slot="cover">
            <a-carousel autoplay>
              <img src="https://picsum.photos/400/300?random=1" />
              <img src="https://picsum.photos/400/300?random=2" />
              <img src="https://picsum.photos/400/300?random=3" />
              <img src="https://picsum.photos/400/300?random=4" />
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
  name: "register"
};
</script>
<style>
#registerWrapper {
  width: 100vw;
  height: 100vh;
  background-color: #f1f2f6;
}

#registerWrapper .ant-layout-sider,
#registerWrapper .ant-layout-footer,
#registerWrapper .ant-layout-header,
#registerWrapper .ant-layout-content {
  background: #f1f2f6;
}

#registerWrapper .ant-layout {
  width: 100%;
  height: 100%;
}

#registerWrapper .ant-layout-sider .ant-card {
  width: 60%;
  height: 60%;
  margin: 20% !important;
}
</style>