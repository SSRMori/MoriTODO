<template>
  <a-timeline-item v-bind:color="color">
    <a-popover>
      {{this.item.time}}
      <br />
      {{this.item.name}}
      <br />
      {{this.item.action}}
      <span slot="content">{{this.item.description}}</span>
    </a-popover>
  </a-timeline-item>
</template>
<script>
export default {
  name: "timelineItem",
  props: ["item"],
  data: function() {
    return {
      color: ""
    };
  },
  created() {
    if (this.item.action == "Done") {
      this.color = "green";
    } else if (this.item.action == "Created") {
      this.color = "blue";
    } else if (this.item.action == "Deleted") {
      this.color = "red";
    }
  }
};
</script>
<style>
</style>