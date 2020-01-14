<template>
    <div class="row">
        <LabelItem :label="' '"></LabelItem>
        <LabelItem v-for="n in this.$props.cols"
                   :label="n"
        ></LabelItem>
    </div>
</template>

<script>
    import LabelItem from "./LabelItem";
    export default {
        name: "LabelRow",
        components: {LabelItem},
        props: ["cols"]
    }
</script>

<style scoped>

</style>