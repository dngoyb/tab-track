<template>
    <div>
        <v-layout>
            <v-flex xs6>
                <SongMetadata :song="song"></SongMetadata>
            </v-flex>
            <v-flex xs6>
                <lyric :song="song"></lyric>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex xs12>
                <Youtube :youtubeId="song.youtubeId"></Youtube>
            </v-flex>
            <!-- <v-flex xs6>
                <Tab :song="song"></Tab>
            </v-flex>-->
        </v-layout>
    </div>
</template>

<script>
import SongService from "@/services/SongService";
import SongMetadata from "@/components/viewSongs/SongMetadata";
import Lyric from "@/components/viewSongs/Lyric";
// import Tab from "@/components/viewSongs/Tab";
import Youtube from "@/components/viewSongs/Youtube";

export default {
    data() {
        return {
            song: null
        };
    },
    async mounted() {
        const songId = this.$store.state.route.params.songId;
        this.song = (await SongService.show(songId)).data;
    },
    components: {
        SongMetadata,
        Lyric,
        // Tab,
        Youtube
    }
};
</script>
<style scoped>
</style>
