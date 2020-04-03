import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/', name: 'Home', component: () => import('../components/default.vue'),
            children: [
                {path: '', name: 'status', component: () => import('../components/home/status')},
                {path: 'topography', name: 'topography', component: () => import('../components/basic/topography')},
                {path: 'stations', name: 'stations', component: () => import('../components/basic/stations')}
            ]
        },
        {path: '/Login', name: 'Login', component: Login},
        {path: 'stations', name: 'stations', components: () => import('../components/basic/stations')}
    ]
})
