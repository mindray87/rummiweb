<template>
    `<header class="header">
        <div id="nav">
            <nav class="navbar navbar-dark bg-dark">
                <h1 class="navbar-brand header1">Rummikub
                    <small class="text-muted">by Julian Riegraf & Kira Koch</small>
                </h1>
                <ul class="nav" nav-pills>
                    <li class="nav-item">
                        <router-link id="gameBtn" class="btn btn-secondary mr-2" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link id="rulesBtn" class="btn btn-secondary" to="/about">About</router-link>
                        <!-- rules -->
                    </li>
                </ul>
            </nav>
        </div>
    </header>`
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>


