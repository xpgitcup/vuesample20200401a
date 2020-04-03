<template>
    <div v-if="$store.state.currentUser">
        {{$store.state.currentUser.username}}
        <status></status>
    </div>
    <div v-else>
        <info></info>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>

</style>