<template>
    <div id="home">
        <div class="container">
            <div class="row">
                <GameInfo :current-player="getActivePlayer().name"></GameInfo>
                <div class="col-md-8 mt-4">
                    <div class="game">
                        <LabelRow :cols="getField().COLS"></LabelRow>
                        <RummiGrid :grid="getField()"></RummiGrid>
                        <div style="margin-bottom: 2em"></div>
                        <RummiGrid :grid="getRack(getActivePlayer()).grid"></RummiGrid>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import RummiGrid from "../components/RummiGrid";
    import jsonFile from "../assets/grid";
    import GameInfo from "../components/GameInfo";
    import LabelRow from "../components/LabelRow";

    export default {
        name: 'Home',
        components: {
            LabelRow,
            GameInfo,
            RummiGrid
        },
        data() {
            return {
                json: jsonFile
            }
        },
        methods: {
            getActivePlayer() {
                let playerIdx = this.$data.json.activePlayerIndex
                return this.$data.json.players[playerIdx]
            },
            getField() {
                return this.$data.json.field
            },
            getRack(player) {
                return this.$data.json.racks.filter(function (el) {
                    return el.player === player.name;
                })[0]
            }
        }
    }
</script>

<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.4;
    }

    #home {
        padding: 5px;
    }

    .game {
        padding: 0.05em;
        margin: auto;
        width: auto;
        border-radius: 10px;
    }

</style>
