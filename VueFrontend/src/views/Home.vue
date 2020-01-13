<template>
  <div id="home">
    <div class="container">
      <TileRow></TileRow>
    </div>
  </div>
</template>

<script>
import TileRow from "../components/TileRow";

export default {
  name: 'Home',
  components: {
    TileRow,
  },
  data() {
    return {
      todos: []
    }
  },
  methods: {
    deleteTodo() {

    }
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }

  #home {
    padding: 5px;
  }

  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }

  .btn:hover {
    background: #666;
  }
</style>
