Vue.config.productionTip = false;


const store = new Vuex.Store({
    state: {
        game: {},
        loaded: false
    },
    getters: {
        activePlayer: state => state.game.players[state.game.activePlayerIndex],
        loaded: state => state.loaded

    },
    mutations: {
        getGameJson(state, data) {
            state.game = data;
            console.log(JSON.stringify(state));
        },
        startLoading(state){
            state.loaded = false;
        },
        stopLoading(state){
            state.loaded = true;
        }
    },

    actions: {
        relaod(state) {
            state.commit('startLoading');
            console.log("store is reloading");
            $.get("/json", function (data) {
                state.commit('getGameJson', data);
            });
            state.commit('stopLoading');
        }
    }


});


new Vue({
    render: h => h('rummi-app'),
    store
}).$mount('#app')
