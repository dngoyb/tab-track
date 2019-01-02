<template>
    <v-layout>
        <v-flex xs4>
            <panel title="songs metadata">
                <v-text-field type="text" label="Title" v-model="song.title" :rules="[required]"></v-text-field>
                <v-text-field type="text" label="Artist" v-model="song.artist" :rules="[required]"></v-text-field>
                <v-text-field type="text" label="Album" v-model="song.album" :rules="[required]"></v-text-field>
                <v-text-field
                    type="text"
                    label="Album Image Url"
                    v-model="song.albumImage"
                    :rules="[required]"
                ></v-text-field>
                <v-text-field type="text" label="Genre" v-model="song.genre" :rules="[required]"></v-text-field>
                <v-text-field
                    type="text"
                    label="Youtube Id"
                    v-model="song.youtubeId"
                    :rules="[required]"
                ></v-text-field>
            </panel>
        </v-flex>
        <v-flex xs8>
            <panel title="Songs structure" class="ml-2">
                <v-text-field
                    type="text"
                    label="Lyric"
                    v-model="song.lyric"
                    multi-line
                    :rules="[required]"
                ></v-text-field>
                <v-text-field
                    type="text"
                    label="Tab"
                    v-model="song.tab"
                    multi-line
                    :rules="[required]"
                ></v-text-field>
            </panel>
            <div class="alert-danger" v-if="error">{{error}}</div>
            <v-flex xs12>
                <v-btn class="cyan" dark @click="create">Create</v-btn>
            </v-flex>
        </v-flex>
    </v-layout>
</template>
<script>
import Panel from "@/components/Panel";
import SongService from "@/services/songService";
export default {
    data() {
        return {
            song: {
                title: null,
                artist: null,
                album: null,
                albumImage: null,
                genre: null,
                youtubeId: null,
                lyric: null,
                tab: null
            },
            error: null,
            required: value => !!value || "required"
        };
    },
    components: {
        Panel
    },
    methods: {
        async create() {
            this.error = null;
            const areAllFieldsFilledIn = Object.keys(this.song).every(
                (key => !!this.song[key])
            );
            if (!areAllFieldsFilledIn) {

                this.error = "Please fill in all required fields";
                return;
            }
            try {
                await SongService.post(this.song);
                this.$router.push({
                    name: "songs"
                });
            } catch (err) {
                console.log(err);
            }
        }
    }
};
</script>
<style scoped>

</style>
