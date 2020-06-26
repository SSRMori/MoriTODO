<template>
  <div v-show="show" id="todoItemWrapper">
    <div id="todoItem">
      <a-checkbox v-on:change="Checked">{{ name }}</a-checkbox>
      <a-button id="todoDelete" type="danger" shape="circle" size="small" v-on:click="deleteItem" />
      <a-modal
        :visible="modalVisible"
        @ok="modalOk"
        @cancel="modalCancel"
        width="250px"
      >
        <a-icon type="question-circle" style="font-size: larger;"/>
        Are you sure you want to delete {{name}}?
      </a-modal>
    </div>
    <a-divider />
  </div>
</template>
<script>
export default {
  name: "todoItem",
  props: ["name"],
  data: function() {
    return {
      show: true,
      modalVisible: false
    };
  },
  methods: {
    Checked: function() {
      this.show = false;
    },
    deleteItem: function() {
      this.modalVisible = true;
    },
    modalOk: function(e) {
      this.show = false;
      this.modalVisible = false;
      this.$notification.open({
        message: this.name + " deleted.",
        style: {
          width: "200px",
          float: "right"
        }
      });
    },
    modalCancel: function(e) {
      this.modalVisible = false;
    }
  }
};
</script>
<style>
#todoItem {
  margin: 0;
  display: flex;
  align-items: center;
  overflow: visible;
}

/* * {
    border: 2px solid red;
} */

#todoItemWrapper .ant-divider {
  margin: 0;
}

#todoItem #todoDelete {
  margin-left: auto;
  margin-right: 5px;
  opacity: 0;
  transform: scale(0.8);
}

#todoItem:hover #todoDelete {
  opacity: 1;
}

#todoItem .ant-checkbox-wrapper {
  font-size: 20px;
}
</style>