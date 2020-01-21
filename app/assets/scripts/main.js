Vue.config.productionTip = false;

const store = new Vuex.Store({
    state: {
        game: {},
        selectedTile: undefined,
        loaded: false
    },
    getters: {
        activePlayer: state => state.game.players[state.game.activePlayerIndex],
        loaded: state => state.loaded,
        getTileById: (state) => (id) => {
            let idComp = id.split("*");
            let col = idComp[0].charCodeAt(0) - 64;
            let row = idComp[1];
            if (row < 8){ // in field
                return state.game.field.tiles.find(t => t.y == col && t.x == row);
            } else { // in grid
                row = row - 8;
                return state.game.racks[state.game.activePlayerIndex].grid.tiles.find(t => t.y == col && t.x == row);
            }
        }

    },
    mutations: {
        getGameJson(state, data) {
            console.log("state.game updated.");
            state.game = data;
        },
        startLoading(state){
            state.loaded = false;
        },
        stopLoading(state){
            state.loaded = true;
        }
    },

    actions: {
        load(state) {
            console.log("store is reloading");
            state.commit('startLoading');
            $.get("/json", function (data) {
                state.commit('getGameJson', data);
                state.commit('stopLoading');
            });
        },
        reload(state) {
            $.get("/json", function (data) {
                state.commit('getGameJson', data);
            });
        }
    }


});

connectWebSocket()

new Vue({
    el: '#app',
    store,
    template: '<rummi-app></rummi-app>'
});

function connectWebSocket() {
    var websocket = new WebSocket("ws://" + location.host + "/websocket");
    websocket.setTimeout

    websocket.onopen = function (event) {
        console.log("Connected to Websocket");
    }

    websocket.onclose = function () {
        console.log('Connection with Websocket Closed!');
    };

    websocket.onerror = function (error) {
        console.log('Error in Websocket Occured: ' + error);
    };

    websocket.onmessage = function (e) {
        console.log("Websocket message received.")
        if (typeof e.data === "string") {
            let json = JSON.parse(e.data);
            store.commit('getGameJson', json);
        }
    };
}