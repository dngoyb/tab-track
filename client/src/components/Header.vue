<template>
    <v-toolbar fixed class="cyan" dark>
        <v-toolbar-title class="mr-4">
            <span class="home" @click="navigateTo({name: 'root'})">TabTracker</span>
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn
                v-if="!$store.state.isUserLoggedIn"
                flat
                dark
                @click="navigateTo({name: 'songs'})"
            >Browse</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn
                v-if="!$store.state.isUserLoggedIn"
                flat
                dark
                @click="navigateTo({name: 'login'})"
            >login</v-btn>
        </v-toolbar-items>
        <v-toolbar-items>
            <v-btn
                v-if="!$store.state.isUserLoggedIn"
                flat
                dark
                @click="navigateTo({name: 'register'})"
            >sign up</v-btn>
        </v-toolbar-items>
        <v-toolbar-items>
            <v-btn v-if="$store.state.isUserLoggedIn" flat dark @click="logout">
                <span right>logout</span>
                <v-icon small>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    methods: {
        navigateTo(route) {
            this.$router.push(route);
        },
        logout() {
            this.$store.dispatch("setToken", null);
            this.$store.dispatch("setUser", null);
            this.$router.push({
                name: "root"
            });
        }
    }
};
</script>
<style scoped>
.home {
    cursor: pointer;
}
</style>

f
