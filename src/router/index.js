import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
        }, {
            path: '/Login',
            name: 'Login',
            component: Login
        }]
})
