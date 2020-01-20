Vue.component('rummi-tile-element', {
    template:
        `<div class="btn btn-outline-primary cell rummi_tile"
         :id="id"
         :class="{ selected: selected }"
         v-on:click="select_tile"
         > </div>
    `,
    props: ['id'],
    data: function () {
        return {
            selected: false
        }
    },
    methods: {
        select_tile: function (event) {
            console.log("tile selected!");
            this.selected = !this.selected;
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
    <div class="col-md-4 mt-4">
        <div class="row">
            <div id="playerInfo" class="alert alert-primary"><span id="playerInfo">_</span> ist playing right now.</div>
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
    </div>`
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


/*    template:
        `<div>
            <rummi-header></rummi-header>
            <rummi-game></rummi-game>
        </div>`*/

    template:
        `<div>
            <div v-if="isLoaded">{{getPlayer()}}</div>
        </div>`,
    data : function () {
      return {
          isLoaded: false
      }
    },
    computed: {
        getPlayer () {
            return this.$store.getters.activePlayer;
        },
        loaded(){
            return this.$store.getters.loaded;
        }
    },
    created () {
        this.$store.dispatch('relaod');
    }

});