import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Projects from '../components/Projects.vue';
import Contact from '../components/Contact.vue';
import About from  '../components/About.vue';
// import About from '../components/About.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/contact', component: Contact },
    { path: '/about', component: About}
    // { path: '/about', component: About }
  ]
});

export default router;
