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


new Vue({
    el: '#app',
    store,
    template: '<rummi-app></rummi-app>'
});
