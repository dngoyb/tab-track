<template>
    <v-layout column>
        <v-flex xs6 offset="xs3">
            <panel title="Register">
                <form name="tab-tracker-form" autocomplete="off">
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
                                <v-btn class="cyan" dark @click="register">Register</v-btn>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </form>
            </panel>
        </v-flex>
    </v-layout>
</template>

<script>
import AuthService from "@/services/AuthService";
import Panel from "@/components/Panel";
export default {
    data() {
        return {
            email: "",
            password: "",
            error: null
        };
    },
    methods: {
        async register() {
            try {
                const response = await AuthService.register({
                    email: this.email,
                    password: this.password
                });
                this.$store.dispatch("setToken", response.data.token);
                this.$store.dispatch("setUser", response.data.user);
            } catch (error) {
                this.error = error.response.data.error;
            }
        }
    },
    components: {
        Panel
    }
};
</script>

<style scoped>
.error {
    color: red;
}
</style>


