<template>
    <div class="row">
        <LabelItem :label="this.$props.rowNumber"></LabelItem>
        <TileElement v-for="n in this.$props.cols"
                     v-bind:tile="getTileOrEmpty(getTiles(), getRowNumber(), n)"
                     v-bind:id="gridName + '_' + rowNumber + '_' + n"
                     v-on:tile-clicked="onTileClick"
        />
    </div>
</template>

<script>
    import TileElement from './TileElement.vue';
    import LabelItem from "./LabelItem";

    export default {
        name: "TileRow",
        components: {
            LabelItem,
            TileElement
        },
        props: ["tiles", "cols", "rowNumber", "gridName"],
        /* gets this
        [
            { x: 1, y: 5, tile: { number: 1, color: 'GREEN', joker: false } },
            { x: 1, y: 1, tile: { number: 1, color: 'WHITE', joker: true } },
            ...
        ]*/
        methods: {
            getTiles() {
                return this.$props.tiles
            },
            getRowNumber() {
                return this.$props.rowNumber
            },
            getTileOrEmpty(array, x, y) {
                let t = array.find(function (element) {
                    return element.x == x && element.y == y;
                });

                if (t == undefined) {
                    return {}
                } else {
                    return t.tile
                }
            },
            onTileClick: function (tileId) {
                this.$emit('tile-clicked', tileId)
            }
        }
    }
</script>

<style scoped>

</style>

