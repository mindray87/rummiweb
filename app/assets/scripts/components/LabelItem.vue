<template>
    <div class="btn cell">{{this.$props.label}}
    </div>
</template>

<script>
    export default {
        name: "LabelItem",
        props: ["label"]
    }
</script>

<style scoped>
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