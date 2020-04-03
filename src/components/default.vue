<template>
    <el-container>
        <!-- 这里是页眉-->
        <el-header>
            <applicationTitle></applicationTitle>
        </el-header>

        <el-container>
            <!-- 这里是菜单-->
            <el-aside width="10%">
                <div v-if="$store.state.currentUser">
                    <menus></menus>
                </div>
            </el-aside>

            <!--这里是主显示区-->
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>

        <!-- 这里是页脚-->
        <el-footer>
            页脚
        </el-footer>
    </el-container>
</template>

<script>
    import applicationTitle from "./home/applicationTitle.vue";
    import menus from './home/menus.vue'

    export default {
        name: "default",
        components: {
            applicationTitle,
            menus
        }
    }

</script>

<style scoped>

</style>