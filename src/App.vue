<template>
    <div id="app">
        <Layout>
            <Header>
                <Menu mode="horizontal" :theme="theme1" active-name="1">
                    <MenuItem name="1">
                        <Icon type="ios-paper"/>
                        内容管理
                    </MenuItem>
                    <MenuItem name="2">
                        <Icon type="ios-people"/>
                        用户管理
                    </MenuItem>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-stats"/>
                            统计分析
                        </template>
                        <MenuGroup title="使用">
                            <MenuItem name="3-1">新增和启动</MenuItem>
                            <MenuItem name="3-2">活跃分析</MenuItem>
                            <MenuItem name="3-3">时段分析</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="留存">
                            <MenuItem name="3-4">用户留存</MenuItem>
                            <MenuItem name="3-5">流失用户</MenuItem>
                        </MenuGroup>
                    </Submenu>
                    <MenuItem name="4">
                        <Icon type="ios-construct"/>
                        综合设置
                    </MenuItem>
                </Menu>
                <br>
            </Header>
            <Layout>
                <Sider>
                    <p>Change theme</p>
                    <RadioGroup v-model="theme1">
                        <Radio label="light"></Radio>
                        <Radio label="dark"></Radio>
                        <Radio label="primary"></Radio>
                    </RadioGroup>
                </Sider>
                <Content :theme="theme1">
                    Content
                    <Table :columns="columns1" :data="data1"></Table>
                </Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    </div>
</template>

<script>

    export default {
        name: 'App',
        components: {},
        data() {
            return {
                theme1: 'primary',
                columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
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
        margin-top: 60px;
    }
</style>
