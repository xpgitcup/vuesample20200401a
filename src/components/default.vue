<template>
    <div v-if="$store.state.currentUser">
        <status></status>
    </div>
    <div v-else>
        <info></info>
    </div>
</template>

<script>

    import Status from "./home/status";
    import Info from "./home/info";

    export default {
        name: "default",
        components: {
            Info,
            Status
        }
    }

</script>

<style scoped>

</style>