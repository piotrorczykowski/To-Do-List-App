<template>
  <div id="app">
    <h1 id="title">todos</h1>

    <div id="placeholder">
      <img src="@/assets/to-do-list.png" alt="check-list" width="80px">
      <h2>Add your first todo</h2>
      <h3>What do you want to get done today?</h3>
    </div>
    
    <form id="newToDoForm" action="">
      <label for="newToDo"></label>
      <input type="text" id="newToDo" name="newToDo" placeholder="E.g. Buy something">
    </form>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  #app {
    height: 90vh;
    display: flex;
    flex-direction: column;
    margin-top: 10vh;
  }


  #title {
    align-self: center;
    width: auto;

    font-size: 6em;
    color: gray;
  }

  #placeholder {
    align-self: center;
    text-align: center;

    padding: 2em;
  }

  #placeholder h2 {
    font-size: 2em;
    margin-top: 0.5em;
  }

  #placeholder h3 {
    margin-top: 1em;  
  }

  #newToDoForm {
    align-self: center;
  }

  #newToDo {
    width: 30em;
    height: 1em;

    padding: 0.5em;
    font-size: 1.2em;

    border: 4px solid black;
    border-radius: 0.2em;
  }

</style>