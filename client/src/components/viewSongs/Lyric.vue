<template>
    <panel title="Lyric" class="ml-2">
        <v-layout>
            <v-flex>
                <textarea readonly v-model="song.lyric" class="my-text-area"></textarea>
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
textarea{
    width: 100%;
    font-family: monospace;
    border: none;
    height: 241px;
    border-style: none;
    border-color: transparent;
    overflow: auto;
    padding: 40px;
    text-align: center;
}
</style>


