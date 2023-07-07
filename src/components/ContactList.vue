<template>
    <div class="container">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">name</th>
                    <th scope="col">email</th>
                    <th scope="col">designation</th>
                    <th scope="col">contact number</th>
                </tr>
            </thead>
            <tbody v-for="contact in contacts" :key="contact.id">
                <tr class="table-secondary">
                    <td scope="row">{{ contact.id }}</td>
                    <td scope="row">{{ contact.name }}</td>
                    <td scope="row">{{ contact.email }}</td>
                    <td scope="row">{{ contact.designation }}</td>
                    <td scope="row">{{ contact.contact_no }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
 
<script>
import axios from 'axios';

export default {
    name: 'ContactList',
    data() {
       return {
        contacts:Array
    }
    },
    created() {
         this.getContacts();
    },
    methods: {
       async getContacts() {
        await axios.get('http://127.0.0.1:8000/api/contacts').then(response=>{
            this.contacts = response.data.contacts;
            console.log(this.contacts);
        }).catch(error=>{
            console.log(error);
        });
       }
    },
    mounted(){
        console.log('this is the contact list')
       }
}
</script>