<template>
    <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="基础参数" name="1">
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="topography" class="main">地形</router-link>
                </li>
            </ul>
        </el-collapse-item>
        <el-collapse-item title="设备" name="2">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
    </el-collapse>
</template>

<script>
    export default {
        name: "menus"
    }
</script>

<style scoped>

</style>