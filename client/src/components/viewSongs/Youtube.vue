<template>
    <panel title="Youtube Video" class="mt-2">
        <v-layout>
            <v-flex>
                <youtube :video-id="youtubeId" @ready="ready" @playing="playing"></youtube>
            </v-flex>
        </v-layout>
    </panel>
</template>
<script>
import Panel from "@/components/Panel";
export default {
    props: ["youtubeId"],
    components: {
        Panel
    }
};
</script>
<style scoped>
</style>


