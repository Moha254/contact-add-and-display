<template>
    <div class="container">
       <div class="row">
        <div class="col-md-6">
                <div class="alert alert-danger" v-if="errors.length">
                    <ul class="mb-0">
                        <li v-for="(error,index) in errors" :key="index">
                           {{ error }}
                        </li>
                    </ul>
                </div>
            <form @submit.prevent="SaveContact" novalidate>
               <fieldset>
                   <div class="form-group">
                       <label class="form-label mt-4">Enter Your name</label>
                       <input type="text" class="form-control" v-model="contact.name" placeholder="Enter Your name"> 
                   </div>

                   <div class="form-group">
                       <label class="form-label mt-4">Enter Your email</label>
                       <input type="text" class="form-control" v-model="contact.email" placeholder="Enter Your email"> 
                   </div>

                   <div class="form-group">
                       <label class="form-label mt-4">Enter Your designation</label>
                       <input type="text" class="form-control" v-model="contact.designation" placeholder="Enter Your designation"> 
                   </div>

                   <div class="form-group">
                       <label class="form-label mt-4">Enter Your contact number</label>
                       <input type="text" class="form-control" v-model="contact.contact_no" placeholder="Enter Your contact number"> 
                   </div>

                   <button class="btn btn-primary mt-4 rounded">submit</button>
                </fieldset>
            </form>
        </div>
       </div>
    </div>
</template>

<script>
import axios from 'axios';

export default{
    name: 'AddContact',
    data(){
     return {
        contact:{},
        name :'',
        email :'',
        designation :'',
        contact_no :'',
        errors:[]
     }
     },
    methods:{
          async SaveContact(){
            this.errors=[];
            if(!this.contact.name){
                this.errors.push("Name is required")
            }
            if(!this.contact.email){
                this.errors.push("Email is required")
            }
            if(!this.contact.designation){
                this.errors.push("Designation is required")
            }
            if(!this.contact.contact_no){
                this.errors.push("Contact number is required")
            }
            if(!this.errors.length){
               let formData= new FormData();
               formData.append('name',this.contact.name);
               formData.append('email',this.contact.email);
               formData.append('designation',this.contact.designation);
               formData.append('contact_no',this.contact.contact_no);
               let url='http://127.0.0.1:8000/api/addcontact';
               await axios.post(url,formData).then((response)=>{
                console.log(response.data);
                if(response.status == 200){
                    alert(response.data.message);
                }
               })
            }
          }
    }

}
</script>