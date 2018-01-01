import Vue from 'vue'
import Router from 'vue-router'
import vueStudy from '@/vue-study/vue-study'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vueStudy',
      component: vueStudy
    }
  ]
})
