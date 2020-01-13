<template>
    <div class="btn btn-outline-primary cell"
         :class="[color]"
         :id="id">
        {{ number }}
    </div>
</template>

<script>
    export default {
        name: "TileElement",
        props: ["id", "number", "color"]
    }
</script>

<style scoped>
    .green {
        color: green;
    }

    .red {
        color: red;
    }

    .yellow {
        color: yellow;
    }

    .cell {
        display: inline-block;
        float: left;
        margin: 0.1em;
        text-align: center;
        background-color: lightgray;
        width: 2.7em;
        height: 2.7em;
    }
</style>

