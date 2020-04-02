<template>
    <div id="app">
        <el-container>
            <el-header>
                <el-row>
                    <el-col :span="1">
                        <div class="block" style="flex: auto">
                            <el-image :src="require('./assets/cup-logo.png')" style="width: 60px; height: 60px">
                            </el-image>
                        </div>
                    </el-col>
                    <el-col :span="2">
                        <div style="font-size: 1.2em">液体管道模拟</div>
                        <!--                        <el-tag size="24em" type="info">液体管道模拟</el-tag>-->
                    </el-col>
                    <el-col :span="18">
                        <el-row>
                            <el-button>默认按钮</el-button>
                            <el-button type="primary">主要按钮</el-button>
                            <el-button type="success">成功按钮</el-button>
                            <el-button type="info">信息按钮</el-button>
                            <el-button type="warning">警告按钮</el-button>
                            <el-button type="danger">危险按钮</el-button>
                        </el-row>
                    </el-col>
                    <el-col :span="3">
                        右边
                    </el-col>
                </el-row>
            </el-header>
            <el-header>
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">处理中心</el-menu-item>
                    <el-menu-item index="2">处理中心</el-menu-item>
                    <el-menu-item index="3" disabled>消息中心</el-menu-item>
                    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
                </el-menu>
            </el-header>
            <el-container>
                <el-aside width="10%">
                    asider
                    <el-row>
                        <el-button>默认按钮</el-button>
                        <el-button type="primary">主要按钮</el-button>
                        <el-button type="success">成功按钮</el-button>
                        <el-button type="info">信息按钮</el-button>
                        <el-button type="warning">警告按钮</el-button>
                        <el-button type="danger">危险按钮</el-button>
                    </el-row>
                </el-aside>

                <el-main>
                    <el-row>
                        <el-button plain>朴素按钮</el-button>
                        <el-button type="primary" plain>主要按钮</el-button>
                        <el-button type="success" plain>成功按钮</el-button>
                        <el-button type="info" plain>信息按钮</el-button>
                        <el-button type="warning" plain>警告按钮</el-button>
                        <el-button type="danger" plain>危险按钮</el-button>
                    </el-row>

                    <el-row>
                        <el-tag>张三1</el-tag>
                        <el-tag>李四1</el-tag>
                        <el-tag>王五1</el-tag>
                        <el-tag>赵六1</el-tag>
                        <el-tag>孙七1</el-tag>
                        <el-tag>马八1</el-tag>
                    </el-row>

                    <el-row>
                        <el-button round>圆角按钮</el-button>
                        <el-button type="primary" round>主要按钮</el-button>
                        <el-button type="success" round>成功按钮</el-button>
                        <el-button type="info" round>信息按钮</el-button>
                        <el-button type="warning" round>警告按钮</el-button>
                        <el-button type="danger" round>危险按钮</el-button>
                    </el-row>

                    <el-row>
                        <el-button icon="el-icon-search" circle></el-button>
                        <el-button type="primary" icon="el-icon-edit" circle></el-button>
                        <el-button type="success" icon="el-icon-check" circle></el-button>
                        <el-button type="info" icon="el-icon-message" circle></el-button>
                        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
                        <el-button type="danger" icon="el-icon-delete" circle></el-button>
                    </el-row>

                    <div>
                        <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
                        <el-link type="primary">主要链接</el-link>
                        <el-link type="success">成功链接</el-link>
                        <el-link type="warning">警告链接</el-link>
                        <el-link type="danger">危险链接</el-link>
                        <el-link type="info">信息链接</el-link>
                    </div>

                    <img alt="Vue logo" src="./assets/logo.png">
                    <HelloWorld msg="Welcome to Your Vue.js App"/>
                </el-main>

            </el-container>
            <el-footer>
                页脚
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'App',
        components: {
            HelloWorld
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
