<template>
  <div id="app">
    <h1 id="title">todos</h1>

    <ToDo
        v-bind:todo="todo"
        v-for="todo in todos"
        v-bind:key="todo._id"
        v-on:doneClicked="doneToDo"
        v-on:removeClicked="removeToDo"
    />

    <div id="placeholder" v-if="!countOfToDos">
      <img src="@/assets/to-do-list.png" alt="check-list" />
      <h2>Add your first todo</h2>
      <h3>What do you want to get done today?</h3>
    </div>

    <form id="newToDoForm" v-on:submit.prevent>
      <label for="newToDo"></label>
      <input
        id="newToDo"
        type="text"
        name="newToDo"
        autocomplete="off"
        maxlength="30"
        placeholder="E.g. Buy something"
        v-on:keyup.enter="addToDo"
        v-model="newToDo"
      />
    </form>
  </div>
</template>

<script>
import ToDo from "./ToDo.vue";

export default {
  components: {
    ToDo
  },
  data() {
    return {
      newToDo: "",
      todos: [
        { title: "Buy something", done: false, _id: Math.random() },
        { title: "Do something", done: false, _id: Math.random() },
      ],
      countOfToDos: 2
    }
  },
  methods: {
    addToDo() {
      if(this.newToDo) {
        this.todos.push({
          title: this.newToDo,
          done: false,
          _id: Math.random(),
        })

        this.newToDo = ""
        this.countOfToDos++
      }
    },
    removeToDo(_id) {
      const index = this.todos.findIndex((todo) => todo._id === _id)
      this.todos.splice(index, 1)
      this.countOfToDos--
    },
    doneToDo(_id) {
      const index = this.todos.findIndex((todo) => todo._id === _id)
      this.todos[index].done = !this.todos[index].done
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Tangerine");

* {
  margin: 0;
  padding: 0;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

#app {
  height: 95vh;
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
}

#title {
  align-self: center;

  font-size: 5em;
  color: gray;
}

#placeholder {
  align-self: center;
  text-align: center;

  padding: 1em;
}

#placeholder h2 {
  font-size: 1.5em;
  margin-top: 0.5em;
}

#placeholder h3 {
  font-size: 1em;
  margin-top: 1em;
}

#placeholder img {
  width: 70px;
}

#newToDoForm {
  margin-top: 1em;
  align-self: center;
}

#newToDo {
  width: 25em;
  height: 1em;

  padding: 0.5em;
  font-size: 1.2em;

  border: 2px solid black;
  border-radius: 0.2em;
}
</style>