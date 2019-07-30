<template>
    <div>
       <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Register</div>

                <div class="card-body">
                    <form method="POST" action="#" @submit.prevent="submit">
                      

                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control" name="name"   autocomplete="name" autofocus v-model="form.name">

                               
                                    <span class="invalid-feedback" role="alert">
                                        <strong></strong>
                                    </span>
                                
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control" name="email" v-model="form.email" >

                               
                                    <span class="invalid-feedback" role="alert">
                                        <strong></strong>
                                    </span>
                            
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control " name="password" autocomplete="new-password" v-model="form.password">

                               
                                    <span class="invalid-feedback" role="alert">
                                        <strong> </strong>
                                    </span>
                                
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                   Register
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            form: {
                name: null,
                email: null,
                password: null
            }
        }
    },
    methods: {
        ...mapActions({
            register: 'auth/register',
            shoutOut: 'auth/shoutOut'    
        }),

        submit () {
            this.register({
               payload: this.form
            })

            
        }
    },
}
</script>
