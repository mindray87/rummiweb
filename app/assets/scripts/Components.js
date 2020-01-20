Vue.component('rummi-tile-element', {
    template:
        `<div class="btn btn-outline-primary cell"
         :id="id">_</div>
    `,
    props: ['id']
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

        <rummi-tile-row v-for="n in [1,2,3,4,5,6]"
                 v-bind:row-number="n"
                 v-bind:cols="['A','B','C','D']"
                         :key="n"
                         />
    </div>`
});

Vue.component('rummi-label-item', {
    template:
        `<div class="btn cell">{{label}}
        </div>`,
    props: ["label"]
})

Vue.component('rummi-label-row', {
    template:`
    <div class="row">
        <rummi-label-item :label="' '"></rummi-label-item>
        <rummi-label-item v-for="n in cols"
                   :label="n"
                   :key="n"
        ></rummi-label-item>
    </div>`,
    props: ["cols"]
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
                        <rummi-label-row :cols="['A','B','C','D']"></rummi-label-row>
                        <rummi-tile-grid></rummi-tile-grid>
                        <div style="margin-bottom: 2em"></div>
                        <rummi-tile-grid></rummi-tile-grid>
                    </div>
                </div>
            </div>
        </div>
    </div>`
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
        `<div>
            <rummi-header></rummi-header>
            <rummi-game></rummi-game>
        </div>`

});