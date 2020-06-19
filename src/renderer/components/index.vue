<template>
  <div id="wrapper">
    <Layout :style="{height: '100vh'}">
      <Layout>
        <Header :style="{backgroundColor: settings.style.backgroundColor}">Header</Header>
        <Content :style="{backgroundColor: settings.style.backgroundColor}">Content</Content>
        <Footer :style="{backgroundColor: settings.style.backgroundColor}">Footer</Footer>
      </Layout>
      <Sider
        hide-trigger
        :style="{backgroundColor: settings.style.backgroundColor, width: '50vw !important', maxWidth: '50vw !important', flex: '0 0 50vw'}"
      >
        <Card style="width:60%; margin: 20% auto;" v-on:load="showCard()">
          <div id="cardContent">
            <!-- <Carousel v-model="cardVal" autoplay loop>
              <CarouselItem>
                <div> -->
                  <img src="@/assets/1.jpg" />
                <!-- </div>
              </CarouselItem>
            </Carousel> -->
          </div>
        </Card>
      </Sider>
    </Layout>
  </div>
</template>

<script>
export default {
  name: "index",
  data: function() {
    return {
      settings: {
        style: {
          backgroundColor: "#f1f2f6"
        }
      },
      cardVal: 0
    }
  }
};
</script>

<style>
div#wrapper {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #dfe6e9;
}
</style>