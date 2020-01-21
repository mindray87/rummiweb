Vue.component('rummi-tile-element', {
    template:
        `<div class="btn btn-outline-primary cell rummi_tile"
         :id="id"
         :class="{ selected: selected }"
         v-on:click="select_tile"
         ><span
         v-if="tile != undefined"
         v-bind:style="{ color: tile.tile.color }"
         >{{tile.tile.number}}</span></div>
    `,
    props: ['id'],
    data: function () {
        return {
            selected: false,
        }
    },
    computed: {
        tile: function () {
            return store.getters.getTileById(this.id);
        }
    },
    methods: {
        select_tile: function (event) {
            if (store.state.selected_tile == undefined) {
                if (this.tile != undefined) {
                    store.state.selected_tile = this;
                    this.selected = !this.selected;
                }
            } else if (store.state.selected_tile == this) {
                store.state.selected_tile = undefined;
                this.selected = !this.selected;
            } else {

                if (this.tile == undefined) {
                    this.moveTile(store.state.selected_tile.id, this.id);
                    console.log("moveTile " + store.state.selected_tile.id + "->" + this.id);
                    store.state.selected_tile.selected = false;
                    store.state.selected_tile = undefined;
                } else {
                    store.state.selected_tile.selected = false;
                    store.state.selected_tile = this;
                    this.selected = !this.selected;
                }
            }
        },
        moveTile : function (from, to) {
            $.get("/moveTile/" + from + "->" + to, function () {
                store.dispatch('reload');
            })
        }
    }
});

Vue.component('rummi-tile-row', {
    template:
        `<div class="row">
            <rummi-label-item :label="rowNumber"></rummi-label-item>
            <rummi-tile-element v-for="n in cols"
                     :id="n + '*' + rowNumber"
                     :key="n + '*' + rowNumber"
            />
        </div>`,
    props: ["rowNumber", "cols"]
});

Vue.component('rummi-tile-grid', {
    template:
        `    <div class="grid">

        <rummi-tile-row v-for="n in rows"
                 v-bind:row-number="n"
                 v-bind:cols="cols"
                         :key="n"
                         />
    </div>`,
    props: ["cols", "rows"]
});

Vue.component('rummi-label-item', {
    template:
        `<div class="btn cell">{{label}}
        </div>`,
    props: ["label"]
})

Vue.component('rummi-label-row', {
    template: `
    <div class="row">
        <rummi-label-item :label="' '"></rummi-label-item>
        <rummi-label-item v-for="n in cols"
                   :label="n"
                   :key="n"
        ></rummi-label-item>
    </div>`,
    props: ['cols']
});

Vue.component('rummi-game-info', {
    template: `
    <div class="game-info">
    <div class="col-md-4 mt-4">
        <div class="row">
            <div id="playerInfo" class="alert alert-primary"><span id="playerInfo">{{playerName}}</span> ist playing right now.</div>
        </div>

        <div class="row">
            <div class="btn-group">
                <button v-on:click="command('sort')" id="sortBtn" class="btn btn-primary">> Sort</button>
                <button id="drawBtn" class="btn btn-primary">> Draw</button>
                <button id="finishBtn" class="btn btn-primary">> Finish</button>
            </div>
        </div>

        <div class="row">
            <span v-show="getSelectedTile != undefined" id="selected_tile_label" class="alert alert-primary mt-4">{{getSelectedTile}}</span>
        </div>
    </div>
</div>`,
    computed: {
        playerName: function () {
            let player = this.$store.getters.activePlayer;
            return player.name;
        },
        getSelectedTile: function () {
            return this.$store.getters.selectedTile;
        }
    },
    methods: {
        command: function (command) {
            console.log("command: " + command);
            $.get("/command/" + command, function (data) {
                store.dispatch('reload');
            });

        }
    }
});
Vue.component('rummi-game', {
    template:
        `<div id="home">
        <div class="container">
            <div class="row">
                <rummi-game-info></rummi-game-info>
                <div class="col-md-8 mt-4">
                    <div class="game">
                    
                        <rummi-label-row 
                        :cols="cols"
                        ></rummi-label-row>
                        
                        <rummi-tile-grid 
                        :cols="cols"
                        :rows="rowsField"
                         ></rummi-tile-grid>
                         
                        <div style="margin-bottom: 2em"></div>
                        
                        <rummi-label-row 
                        :cols="cols"
                        ></rummi-label-row>                
                        
                         <rummi-tile-grid 
                        :cols="cols"
                        :rows="rowsRack"
                         ></rummi-tile-grid>    
                    </div>
                </div>
            </div>
        </div>
    </div>`,
    data: function () {
        return {
            cols: "ABCDEFGHIJKLM",
            rowsField: "12345678",
            rowsRack: [9, 10, 11, 12]
        }
    }
});

Vue.component('rummi-header', {

    template:
        `<header class="header">
        <div id="nav">
            <nav class="navbar navbar-dark bg-dark">
                <h1 class="navbar-brand header1">Rummikub
                    <small class="text-muted">by Julian Riegraf & Kira Koch</small>
                </h1>
                <ul class="nav" nav-pills>
                    <li class="nav-item">
                        <button id="gameBtn" class="btn btn-secondary mr-2" to="/">Game</button>
                    </li>
                    <li class="nav-item">
                        <button id="rulesBtn" class="btn btn-secondary" to="/about">Rules</button>
                        <!-- rules -->
                    </li>
                </ul>
            </nav>
        </div>
    </header>`
});

Vue.component('rummi-app', {


    template:
        `<div v-if="loaded">
                <rummi-header></rummi-header>
                <rummi-game></rummi-game>
            </div>`,
    computed: {
        getPlayer: function () {
            return this.$store.getters.activePlayer;
        },
        loaded: function () {
            console.log("returning loading status: " + this.$store.getters.loaded);
            return this.$store.getters.loaded;
        }
    },
    created() {
        this.$store.dispatch('load');
    }
});