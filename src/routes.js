import BlogPage from "./components/pages/Blogpage.vue"
import HomePage from "./components/pages/HomePage.vue"
import ContactPage from "./components/pages/ContactPage.vue"
import SinglePage from "./components/pages/SinglePage.vue"

export const routes =
    [
        { path: '/', component: HomePage, name: 'home' },
        { path: '/articles', component: BlogPage, name: 'blog' },
        { path: '/contact', component: ContactPage, name: 'contact' },
        { path: '/articles/:id(\\d+)', component: SinglePage, name: 'single', props: true }
    ]