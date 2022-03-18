<template>
  <div class="todo">
    <div class="item">
      <img
        class="circle"
        v-bind:src="todo.done ? require('@/assets/checked.png') : require('@/assets/circle.png')"
        alt="Left icon"
        v-on:click="doneToDo()"
        ref="circle"
      />
      <h2 v-bind:class="{ done: todo.done }">
        {{ todo.title }}
      </h2>
      <img
        class="cancel"
        src="@/assets/cancel.png"
        alt="Cancel"
        v-on:click="removeToDo()"
      />
    </div>
  </div>
</template>


<script>
export default {
  props: ["todo"],
  methods: {
      removeToDo() {
        this.$emit('removeClicked', this.todo._id)
      },
      doneToDo() {
          this.$emit('doneClicked', this.todo._id)
      }
  }
}
</script>


<style>
.todo {
  padding: 0.5em;
  font-size: 1.2em;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
}

.item {
  width: 26.5em;
  height: 2em;
  display: relative;
}

.item .circle {
  position: absolute;
  left: calc(50vw - 26.5em / 2);
}

.item h2 {
  position: absolute;
  left: calc(50vw - 7em);
}

.item .cancel {
  position: absolute;
  left: calc(50vw + 10.5em);
}

.done {
  text-decoration: line-through;
  color: gray;
}

.circle,
.cancel {
  width: 2em;
  height: 2em;

  cursor: pointer;
}

.circle:hover,
.cancel:hover {
  transform: scale(1.1);
  transition-duration: 0.2s;
}

.cancel:hover {
  transition-duration: 0.1s;
  /* Change cancel icon color from black to red  */
  filter: invert(18%) sepia(92%) saturate(6493%) hue-rotate(356deg)
    brightness(87%) contrast(100%);
}

/* Mobile */
@media only screen and (max-width: 600px) {
  .item {
    width: 80vw;
    height: 3em;
  }

  .item .circle {
  position: absolute;
  left: 1.5em;
  }

  .item h2 {
    position: absolute;
    left: calc(50vw - 4em);
    width: 60vw;
    word-break: break-all;
  }

  .item .cancel {
    position: absolute;
    left: calc(80vw + 0.5em);
  }

}
</style>