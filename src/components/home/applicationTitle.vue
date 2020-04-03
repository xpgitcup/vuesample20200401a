<template>
    <el-row>
        <el-col :span="2">
            <div class="block" style="float: left">
                <el-image :src="require('../../assets/cup-logo.png')" style="width: 60px; height: 60px">
                </el-image>
            </div>
        </el-col>
        <el-col :span="20">
            <div class="title">液体管道模拟</div>
        </el-col>
        <el-col :span="2">
            <div style="float: right">
                <div v-if="$store.state.currentUser">
                    {{$store.state.currentUser.username}}
                    <el-button @click="logout">退出</el-button>
                </div>
                <div v-else>
                    <router-link to="/Login">登录</router-link>
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "applicationTitle"
    }
</script>

<style scoped>
    .title {
        font-size: 2.2em;
    }
</style>