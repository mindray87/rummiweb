<template>
    <div class="col-md-4 mt-4">
        <div class="row">
            <span class="alert alert-primary">{{ this.$props.currentPlayer}} ist playing right now.</span>
        </div>

        <div class="row">
            <div class="btn-group">
                <button id="sortBtn" class="btn btn-primary">> Sort</button>
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
    export default {
        name: "GameInfo",
        props: ["currentPlayer"]
    }
</script>

<style scoped>

</style>