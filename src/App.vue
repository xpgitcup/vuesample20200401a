<template>
    <div id="app">
        <Layout>
            <Header class="ivu-layout-header">
                <ul class="ivu-menu ivu-menu-light ivu-menu-horizontal">
                    <div class="wrapper-header-nav">
                        <div class="ivu-drawer-wrap">
                            <img src="./assets/cup-logo.png" height="64" width="64"/>
                        </div>
                        <div class="ivu-drawer-wrap">液体管道模拟</div>
                    </div>
                </ul>
            </Header>
            <Layout>
                <Sider>
                    左侧
                </Sider>
                <Content>
                    主题
                </Content>
            </Layout>
            <Footer>

            </Footer>
        </Layout>
    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    export default {
        name: 'App',
        components: {}
    }
</script>

<style scoped>
    .ivu-layout-header {
        background-color: dodgerblue;
    }
</style>
