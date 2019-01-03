<template>
    <panel title="Song Metadata">
        <v-layout>
            <v-flex xs6>
                <div class="song-title">{{song.title}}</div>
                <div class="song-artist">{{song.artist}}</div>
                <div class="song-genre">{{song.genre}}</div>
            </v-flex>
            <v-flex xs6>
                <img class="album-image" :src="song.albumImage">
                <br>
                <div class="song-genre">{{song.album}}</div>
            </v-flex>
        </v-layout>
    </panel>
</template>

<script>
import Panel from "@/components/Panel";
export default {
    props: ["song"],
    components: {
        Panel
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
