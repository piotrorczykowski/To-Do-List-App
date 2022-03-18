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
import ToDo from "./ToDo.vue"
import axios from '../axios'

export default {
  components: {
    ToDo
  },
  data() {
    return {
      newToDo: "",
      todos: [],
      countOfToDos: 0
    }
  },
  async created() {
    try {
      const res = await axios.get('/todos')
      this.todos = res.data
      this.countOfToDos =  res.data.length
    } catch(err) {
      console.log(err.message)
    }
  },
  methods: {
    async addToDo() {
      if(this.newToDo) {
        try {
          //  add to backend
          const res = await axios.post('/todos', {
            title: this.newToDo
          })

          //  add to frontend
          this.todos.push(res.data)
  
          this.countOfToDos++
          this.newToDo = ""
        } catch(err) {
          console.log(err.message)
        }
      }
    },
    async removeToDo(_id) {
      const index = this.todos.findIndex((todo) => todo._id === _id)

      try {
        //  remove from backend
        await axios.delete('/todos/' + _id)

        //  remove from frontend
        this.todos.splice(index, 1)
        this.countOfToDos--
      } catch(err) {
        console.log(err.message)
      }
    },
    async doneToDo(_id) {
      const index = this.todos.findIndex((todo) => todo._id === _id)

      try {
        //  edit todo in backend
        const res = await axios.put('/todos/' + _id, {
          title: this.todos[index].title,
          done: !this.todos[index].done
        })

        //  rewrite frontend todo by todo from backend
        this.todos[index] = res.data
      } catch(err) {
        console.log(err.message)
      }
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
  height: 80vh;
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

/* Mobile */
@media only screen and (max-width: 600px) {
  #app {
    width: 100vw;

  }

  #newToDo {
    width: 80vw;
  }
}
</style>