<template>
  <div id="addWrapper">
    <a-layout>
      <a-layout-header>
        <a-page-header title="Add new" @back="() => {this.$router.go(-1)}" />
      </a-layout-header>
      <a-layout-content>
        <a-form-model :model="form" :rules="rules" layout="horizontal">
          <a-form-model-item ref="name" label="Name" prop="name">
            <a-input id="nameInput" v-model="form.name" maxlength="15" />
          </a-form-model-item>
          <a-form-model-item label="Description">
            <a-input
              id="descriptionInput"
              v-model="form.description"
              type="textarea"
              style="resize: none;"
            />
          </a-form-model-item>
          <a-button id="submitButton" type="primary" block v-on:click="submit">Create</a-button>
        </a-form-model>
      </a-layout-content>
      <a-layout-footer>
        <a-icon type="copyright" />Mori June 2020
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<script>
import database from "./script/file";
export default {
  name: "add",
  data() {
    return {
      form: {
        name: "",
        description: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please input the name of your todo item",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submit: function() {
      console.log("submit form");
      if (this.form.name.length == 0) {
        console.log("Error no name");
        this.$message.error("Please input the name of your todo item");
        document.getElementById("nameInput").focus();
      } else {
        database.addItem(this.form.name, this.form.description);
        this.$message.info("Item created");
        this.$router.push({ path: "/index" });
      }
    }
  }
};
</script>
<style>
#addWrapper {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

#addWrapper .ant-layout {
  height: 100%;
  width: 100%;
  margin: 0;
  position: absolute;
}
#addWrapper .ant-layout-header,
#addWrapper .ant-layout-footer {
  height: 15%;
}
#addWrapper .ant-layout-content,
#addWrapper .ant-layout-header,
#addWrapper .ant-layout-footer {
  background: #f1f2f6;
  position: relative;
}

#addWrapper .ant-layout-header {
  padding-left: 0;
}

#addWrapper .ant-layout-footer {
  text-align: center;
}

#addWrapper .ant-layout-content {
  height: 70%;
  width: 80%;
  margin: auto;
  display: flex;
}
#addWrapper .ant-form {
  width: 100%;
}

#addWrapper #descriptionInput {
  height: 7em;
}
</style>