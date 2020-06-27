<template>
  <div id="timelineWrapper">
    <a-layout>
      <a-layout-header>
        <a-page-header title="Timeline" @back="() => {this.$router.go(-1)}" />
      </a-layout-header>
      <a-layout-content>
        <a-timeline mode="alternate">
          <timelineItem v-for="item in items" v-bind:item="item"/>
        </a-timeline>
        <a-empty v-if="empty"/>
      </a-layout-content>
    </a-layout>
  </div>
</template>
<script>
import timelineItem from "./timelineItem";
import database from "./script/file";
export default {
  name: "timeline",
  components: { timelineItem },
  data: function() {
    return {
      // name/description/action/order/time
      items: [],
      empty: false
    };
  },
  created() {
    var list = database.readAllItems();
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i].status == "created") {
        this.items.push({
          name: list[i].name,
          description: list[i].description,
          action: "Created",
          order: list[i].createTime.order,
          time: list[i].createTime.string
        });
      } else if (list[i].status == "done") {
        this.items.push({
          name: list[i].name,
          description: list[i].description,
          action: "Created",
          order: list[i].createTime.order,
          time: list[i].createTime.string
        });
        this.items.push({
          name: list[i].name,
          description: list[i].description,
          action: "Done",
          order: list[i].Time.order,
          time: list[i].Time.string
        });
      } else if (list[i].status == "deleted") {
        this.items.push({
          name: list[i].name,
          description: list[i].description,
          action: "Created",
          order: list[i].createTime.order,
          time: list[i].createTime.string
        });
        this.items.push({
          name: list[i].name,
          description: list[i].description,
          action: "Deleted",
          order: list[i].Time.order,
          time: list[i].Time.string
        });
      }
    }
    this.items.sort((a, b) => {
      return b.order - a.order;
    });
    // console.log(this.items);
    if (this.items.length == 0) {
        this.empty = true
    }
  }
};
</script>
<style>
#timelineWrapper {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  overflow-y: auto;
  background-color: #f1f2f6;
}

#timelineWrapper .ant-layout-header {
  background-color: #f1f2f6;
  padding-left: 0;
  height: 15%;
}

#timelineWrapper .ant-layout-content {
  background: #f1f2f6;
}
</style>