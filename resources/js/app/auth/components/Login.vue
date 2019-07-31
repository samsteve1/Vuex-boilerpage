<template>
    <div>
       <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Login </div>

                <div class="card-body">
                    <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="errors.root">
                    <!-- <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button> -->
                    {{ errors.root }}
                </div>
                    <form method="POST" action="#" @submit.prevent="submit">
                        

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                            <div class="col-md-6">
                                <input id="email"
                                    type="email" 
                                    class="form-control" 
                                    autocomplete="email" 
                                    autofocus
                                    v-model="form.email"
                                    :class="{' is-invalid': errors.email}"   
                                    >

                               
                                    <span class="invalid-feedback" role="alert" v-if="errors.email">
                                        <strong>{{ errors.email[0] }}</strong>
                                    </span>
                               
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                            <div class="col-md-6">
                                <input id="password" 
                                    type="password" 
                                    class="form-control"   
                                    autocomplete="current-password"
                                    v-model="form.password"
                                    :class="{' is-invalid': errors.password}"    
                                    >

                               
                                    <span class="invalid-feedback" role="alert" v-if="errors.password">
                                        <strong>{{ errors.password[0] }}</strong>
                                    </span>

                            </div>
                            
                        </div>

                        <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember">

                                    <label class="form-check-label" for="remember">
                                       Remember Me
                                    </label>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary" :class="{' disabled' : !ready}">
                                   {{ ready ? 'Login' : 'Signing in' }}
                                   <font-awesome-icon icon="spinner" class="fa-spin" v-if="!ready"/>
                                </button>

                               
                                    <a class="btn btn-link" href="#">
                                       Forgot Your Password?
                                    </a>
                               
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
import {mapActions} from 'vuex'
export default {
    data() {
        return {
            form: {

                email: null,
                password: null
            },
            errors: [],
            ready: true
        }
    },
    methods: {
        ...mapActions({
            login: 'auth/login'
        }),
        submit () {
            this.login({
                payload: this.form,
                context: this
            }).then(() => {
                this.$router.replace({ name: 'home'})
            })
        }
    },
}
</script>