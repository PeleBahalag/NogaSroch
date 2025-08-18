import { createRouter, createWebHistory } from 'vue-router'
import RickGrimes from '../components/RickGrimes.vue'  
import HomePage from '../components/HomePage.vue'
//מערך המפרט את כל הראוטים שלנו לפי שם וקומפוננטה מתאימה
const routes = [
  { path: '/', component: HomePage },//זה הראוט הדיפולטי, עמוד הבית שיופיע בפתיחת הלומדה
  { path: '/about', component: RickGrimes }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
export default router
