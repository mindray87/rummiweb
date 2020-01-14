<template>
    <div class="row">
        <LabelItem :label="this.$props.rowNumber" ></LabelItem>
        <TileElement v-for="n in this.$props.cols"
                     v-bind:id="String(n)"
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
        props: ["tiles", "cols", "rowNumber"]
        /* gets this
        [
            { x: 1, y: 5, tile: { number: 1, color: 'GREEN', joker: false } },
            { x: 1, y: 1, tile: { number: 1, color: 'WHITE', joker: true } },
            ...
        ]*/
    }
</script>

<style scoped>

</style>

