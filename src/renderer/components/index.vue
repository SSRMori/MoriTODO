<template>
  <div id="indexWrapper">
    <a-layout>
      <a-layout>
        <a-layout-header>
          <p>
            <a-icon id="indexLogo" type="check-square" theme="twoTone" two-tone-color="#7bed9f" />
            <span>Mori TODO</span>
          </p>
        </a-layout-header>
        <a-layout-content>
          <div id="todoList">
            <todoItem v-for="item in todoItems" v-bind:name="item.name"></todoItem>
          </div>
          <a-button id="moreTodo" icon="down" block dashed v-on:click="scrollDown" />
        </a-layout-content>
        <a-layout-footer>
          <a-icon type="copyright" />Mori Jan. 2020
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import todoItem from "./todoItem";
import database from "./script/file";
export default {
  name: "index",
  components: { todoItem },
  data: function() {
    return {
      more: true,
      todoItems: []
    };
  },
  created() {
    database.createDB();
    var items = database.readUnfinishedItems();
    var i;
    for (i = 0; i < items.length; i++) {
      this.todoItems.push(items[i]);
    }
  },
  methods: {
    scrollDown: function() {
      var height = Number(document.getElementById("todoList").scrollTop);
      height += 100;
      document.getElementById("todoList").scrollTop = height.toString();
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

/* #indexWrapper * {
  border: solid 2px red;
} */

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
  position: relative;
}

#indexWrapper .ant-layout-header {
  height: 15%;
}

#indexWrapper .ant-layout-footer {
  text-align: center;
  height: 15%;
}

#indexWrapper .ant-layout-content {
  height: 70%;
}

#indexWrapper .ant-layout-header p {
  font-size: 20px;
  font-weight: 700;
  display: inline-block;
}

#indexWrapper .ant-layout-header p:hover {
  animation-name: headShake;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

@keyframes headShake {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  6.5% {
    -webkit-transform: translateX(-6px) rotateY(-9deg);
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    -webkit-transform: translateX(5px) rotateY(7deg);
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    -webkit-transform: translateX(-3px) rotateY(-5deg);
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    -webkit-transform: translateX(2px) rotateY(3deg);
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

#indexWrapper .ant-layout-content {
  padding: 5% 0;
}

#indexWrapper #todoList {
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0 20%;
  max-height: 90%;
  height: 90%;
}

#indexWrapper #todoList::-webkit-scrollbar {
  width: 0;
}

#indexWrapper #moreTodo {
  margin: 0 20%;
  width: 60%;
  background-color: #f1f2f6;
  animation-name: pulse;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}

@keyframes pulse {
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}
</style>