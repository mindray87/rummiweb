<template>
    <div class="row">
        <TileElement
                v-for="tile in tiles"
                v-bind:key="tile.id"
                v-bind:number="tile.number"
                v-bind:color="tile.color"
        ></TileElement>
    </div>
</template>

<script>
    import TileElement from './TileElement.vue';

    export default {
        name: "TileRow",
        components: {
            TileElement
        },
        data: function () {
            return {
                tiles: [
                    {id: 1, number: 1, color: "green"},
                    {id: 2, number: 2, color: "red"},
                    {id: 3, number: 3, color: "yellow"}
                ]
            }
        }
    }
</script>

<style scoped>

</style>

