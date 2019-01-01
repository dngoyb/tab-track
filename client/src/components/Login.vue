<template>
    <v-layout column>
        <v-flex xs6 offset="xs3">
            <div class="white elevation-2">
                <v-toolbar flat dense class="cyan" dark>
                    <v-toolbar-title>Login</v-toolbar-title>
                </v-toolbar>
                <div class="pl-4 pr-4 pt-2 pb-2">
                    <v-container>
                        <v-layout row wrap>
                            <v-flex xs12>
                                <v-text-field label="Email" v-model="email"></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field type="password" label="Password" v-model="password"></v-text-field>
                            </v-flex>
                            <div class="error" v-html="error"></div>

                            <v-flex xs12>
                                <v-btn class="cyan" dark @click="login">Login</v-btn>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </div>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
import AuthService from "@/services/AuthService";
export default {
    data() {
        return {
            email: "",
            password: "",
            error: null
        };
    },
    methods: {
        async login() {
            try {
                const response = await AuthService.login({
                    email: this.email,
                    password: this.password
                });
                this.$store.dispatch("setToken", response.data.token);
                this.$store.dispatch("setUser", response.data.user);
            } catch (error) {
                this.error = error.response.data.error;
            }
        }
    }
};
</script>

<style scoped>
.error {
    color: red;
}
</style>


