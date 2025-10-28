import LoginForm from '@/components/LoginForm.vue'
import RegisterForm from '@/components/RegisterForm.vue'
import AuthPage from '@/pages/AuthPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth', component: AuthPage, children: [
        { path: 'login', component: LoginForm },
        { path: 'register', component: RegisterForm }
      ]
    }
  ],
})

export default router
