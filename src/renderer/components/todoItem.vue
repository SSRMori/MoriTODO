<template>
  <div id="todoItemWrapper">
    <div id="todoItem">
      <a-popover v-bind:title="name">
        <a-checkbox v-on:change="Checked" v-bind:checked="check">{{ name }}</a-checkbox>
        <span slot="content">{{description}}</span>
      </a-popover>
      <a-button id="todoDelete" type="danger" shape="circle" size="small" v-on:click="deleteItem" />
      <a-modal :visible="modalVisible" @ok="modalOk" @cancel="modalCancel" width="250px">
        <a-icon type="question-circle" style="font-size: larger;" />
        Are you sure you want to delete {{name}}?
      </a-modal>
    </div>
    <a-divider />
  </div>
</template>
<script>
import database from "./script/file";
export default {
  name: "todoItem",
  props: ['id', "name", 'description'],
  data: function() {
    return {
      modalVisible: false,
      check: false
    };
  },
  created(){
  },
  methods: {
    Checked: function() {
      this.check = true
      database.itemFinish(this.id);
      this.$message.info(this.name + " finished.")
      this.$emit('done')
      setTimeout(()=>{this.check = false}, 500)
    },
    deleteItem: function() {
      this.modalVisible = true;
    },
    modalOk: function(e) {
      this.modalVisible = false;
      this.$message.warning(this.name + " deleted.")
      this.$emit('delete')
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