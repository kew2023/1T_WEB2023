<template>
  <div class="wrapper-todo">
    <div class="title has-text-centered">
      My Todo List!
    </div>

    <form @submit.prevent="addTodo">
      <div class="field is-grouped mb-5">
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="Add a todo" v-model="newtodoContent">
      </p>
      <p class="control">
        <button :disabled="!newtodoContent" class="button is-info">
          Add
        </button>
      </p>
    </div>

    </form>

    <div v-for="todo in todos" :key="todo.id" class="card mb-5">
      <div class="card-content">
        <div class="content">
          <div class="columns is-mobile is-vcentered">
            <div class="column">{{ todo.content }}</div>
            <div class="column is-5 has-text-right">
              <button class="button is-light">&check;</button>
              <button class="button is-danger ml-2">&cross;</button>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
// import
import { ref } from 'vue'

import { v4 as uuidv4 } from 'uuid';


// todos
const todos = ref([
  {
    id: 1,
    content: 'Todo 1',
    done: false
  },
  {
    id: 2,
    content: 'Todo 2',
    done: false
  },
  {
    id: 3,
    content: 'Todo 3',
    done: false
  }
])

// add todo
const newtodoContent = ref(''); 

const addTodo = () => {
  const newTodo = {
    id: uuidv4(),
    content: newtodoContent.value,
    done: false
  }
  todos.value.unshift(newTodo)
  newtodoContent.value = ''
}

</script>

<style>
@import "../node_modules/bulma/css/bulma.min.css";

.wrapper-todo {
  width: 400px;
  padding: 20px;
  margin: 0 auto;
}
</style>