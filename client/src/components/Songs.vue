<template>
    <v-layout column>
        <v-flex xs6 offset="xs3">
            <panel title="songs">
                <v-btn
                    slot="action"
                    fab
                    medium
                    right
                    absolute
                    middle
                    class="green"
                    @click="navigateTo({name: 'song-create'})"
                >
                    <v-icon>add</v-icon>
                </v-btn>

                <div class="song" v-for="song in songs" :key="song.id">
                    <v-layout>
                        <v-flex xs6>
                            <div class="song-title">{{song.title}}</div>
                            <div class="song-artist">{{song.artist}}</div>
                            <div class="song-genre">{{song.genre}}</div>
                            <v-btn
                                class="cyan"
                                dark
                                @click="navigateTo({name: 'song', params: {songId: song.id}})"
                            >view</v-btn>
                        </v-flex>
                        <v-flex xs6>
                            <img class="album-image" :src="song.albumImage">
                        </v-flex>
                    </v-layout>
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
    methods: {
        navigateTo(route) {
            this.$router.push(route);
        }
    },
    async mounted() {
        this.songs = (await songService.getAllSongs()).data;
    }
};
</script>
<style scoped>
.song-title {
    font-size: 30px;
}
.song-artist {
    font-size: 23px;
}
.song-genre {
    font-size: 17px;
}
.album-image {
    width: 70%;
    margin: 0 auto;
}
</style>
