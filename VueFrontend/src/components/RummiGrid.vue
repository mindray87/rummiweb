<template>
    <div class="grid">

        <TileRow v-for="n in this.$props.grid.ROWS"
                 v-bind:row-number="n"
                 v-bind:cols="getColCount()"
                 v-bind:tiles="getRows"
        />
    </div>
</template>

<script>
    import TileRow from "./TileRow";
    import GridLabel from "./LabelItem";

    export default {
        name: "RummiGrid",
        components: {GridLabel, TileRow},
        props: ["grid"],
        methods: {
            getColCount() {
                return this.$props.grid.COLS
            },
            getRows() {
                let map = groupBy(this.$props.grid.tiles, tile => tile.x);
                let rows = [];
                Array.from(map.keys())
                    .sort()
                    .forEach(i => rows.push(map.get(i)));

                /* returns this [
                    { x: 1, y: 5, tile: { number: 1, color: 'GREEN', joker: false } },
                    { x: 1, y: 1, tile: { number: 1, color: 'WHITE', joker: true } }
                  ]*/
                return rows.reduce((total, currentValue) => total.concat(currentValue), []);
            }
        }
    }

    function groupBy(list, keyGetter) {
        const map = new Map();
        list.forEach((item) => {
            const key = keyGetter(item);
            const collection = map.get(key);
            if (!collection) {
                map.set(key, [item]);
            } else {
                collection.push(item);
            }
        });
        return map;
    }
</script>

<style scoped>
    .grid {
        display: inline-block;
        padding: 0.05em;
        min-width: 400px;
    }
</style>