<template>
    <div class="btn btn-outline-primary cell"
         v-bind:style="{color: tile.color}"
         :class="{clicked:clicked}"
         v-on:click="onClick"
    >
        {{tile.number}}
    </div>
</template>

<script>
    export default {
        name: "TileElement",
        props: ["tile", "id"],
        data: function () {
            return {
                clicked: false
            }
        },
        methods: {
            onClick() {
                console.log(this.$data.clicked);
                this.$emit('tile-clicked', this.$props.id);
                this.$data.clicked = !this.$data.clicked;
            },

            deselect() {
                this.$data.clicked = false;
            }
        }
    }
</script>

<style scoped>

    .clicked {
        border-style: solid;
        border-color: black;
        border-width: 2px;
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

