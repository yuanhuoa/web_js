<template>
  <header>
    <h1>{{title}}</h1>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {
      title: 'this is header.'
    }
  }
}
</script>

<style scoped>
  header {
    background: pink;
    padding: 10px;
  }
  h1 {
    margin: 0;
    color: #222;
    text-align: center;
  }
</style>
