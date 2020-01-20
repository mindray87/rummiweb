<template>
    <div class="col-md-4 mt-4">
        <div class="row">
            <span class="alert alert-primary">{{ this.$props.currentPlayer}} ist playing right now.</span>
        </div>

        <div class="row">
            <div class="btn-group">
                <button id="sortBtn" class="btn btn-primary"
                        v-on:click="onClick"
                >> Sort
                </button>
                <button id="drawBtn" class="btn btn-primary">> Draw</button>
                <button id="finishBtn" class="btn btn-primary">> Finish</button>
            </div>
        </div>

        <div class="row">
            <span id="selected_tile_label" class="invisible alert alert-primary mt-4"></span>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "GameInfo",
        props: ["currentPlayer"],
        methods: {
            onClick() {
                console.log("sort button clicked");
                axios.get('http://localhost:9000/command/sort')
                    .catch(err => console.log(err));
                this.$emit('reload-json');
            }
        }
    }
</script>

<style scoped>

</style>