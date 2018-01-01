<template>
  <div>
    <h1 v-text="title"></h1>
    <ul>
      <li v-for="item in items" class="finished">
      {{item.label}}
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: 'This is a todo list',
      items: [
        {
          label: 'coding',
          isFinished: true
        },
        {
          label: 'walking',
          isFinished: true
        }
      ]
    }
  }
}
</script>

<style>
.finished {
  color: #f00;
  text-decoration: line-through;
}
</style>