<template>
    <v-layout column>
        <v-flex xs6 offset="xs3">
            <panel title="songs">
                <div v-for="song in songs" :key="song.id">
                    {{song.title}} -
                    {{song.artist}} -
                    {{song.album}}
                </div>
            </panel>
        </v-flex>
    </v-layout>
</template>
<script>
import Panel from "@/components/Panel";
import songService from "@/services/songService";
export default {
    components: {
        Panel
    },
    data() {
        return {
            songs: null
        };
    },
    async mounted() {
        this.songs = (await songService.getAllSongs()).data;
    }
};
</script>
<style scoped>
</style>
