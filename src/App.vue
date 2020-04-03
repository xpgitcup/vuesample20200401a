<template>
    <div id="app">
        <el-container>
            <!-- 这里是页眉-->
            <el-header>
                <applicationTitle></applicationTitle>
            </el-header>

            <el-container>
                <!-- 这里是菜单-->
                <el-aside width="10%">
                    <div v-if="$store.state.currentUser">
                        {{$store.state.currentUser.username}}
                        <status></status>
                        <menus></menus>
                        <el-button @click="logout">退出</el-button>
                    </div>
                </el-aside>

                <!--这里是主显示区-->
                <el-main>
                    <div v-if="$store.state.currentUser">
                        {{$store.state.currentUser.username}}
                        <status></status>
                        <el-button @click="logout">退出</el-button>
                    </div>
                    <div v-else>
                        <info></info>
                    </div>
                </el-main>
            </el-container>

            <!-- 这里是页脚-->
            <el-footer>
                页脚
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    import applicationTitle from "./components/home/applicationTitle.vue";
    import info from './components/home/info.vue'
    import status from './components/home/status.vue'
    import menus from './components/home/menus.vue'

    export default {
        name: 'App',
        components: {
            applicationTitle,
            info,
            status,
            menus
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        /*margin-top: 60px;*/
    }

    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>
