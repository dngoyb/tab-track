<template>
    <panel title="Tab" class="mt-2 ml-2">
        <v-layout>
            <v-flex>
                <textarea readonly v-model="song.tab"></textarea>
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
    height: 300px;
    border-style: none;
    border-color: transparent;
    overflow: auto;
    padding: 40px;
    text-align: center;
}
</style>


