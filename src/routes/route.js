import AddContact from '../components/AddContact'
import Header from '../components/Header.vue'
import ContactList from '../components/ContactList'
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        name: 'ContactList',
        path: '/',
        component: ContactList
    },
    {
        name: 'AddContact',
        path: '/add_contact',
        component: AddContact
    },
    {
        name: 'Header',
        path: '/header',
        component: Header
    }

];
 
const router = createRouter({
    history: createWebHistory(),
    routes
}
);
 
export default router;