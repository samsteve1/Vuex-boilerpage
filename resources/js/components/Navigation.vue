<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                
                    <router-link class="navbar-brand" :to="{name: 'home'}">Vuex SPA</router-link>
               
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">

                    </ul>
                    <ul class="navbar-nav ml-auto" v-if="!user.authenticated">
                        <li class="nav-item">
                            <router-link :to="{name: 'login'}" class="nav-link">Login</router-link>
                        </li>
                           
                        <li class="nav-item">
                             <router-link :to="{name: 'register'}" class="nav-link">Register</router-link>
                        </li>
                           
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto" v-if="user.authenticated">
                        <!-- Authentication Links --> 
                            <li class="nav-item">
                               <router-link :to="{name: 'timeline'}" class="nav-link">{{ 'Timeline' }}</router-link>
                            </li>
                            
                            <li class="nav-item dropdown" v-if="user.authenticated">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  {{ user.data.name }} <span class="caret"></span>
                                </a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#" @click.prevent="signout">
                                       Logout
                                    </a>
                                </div>
                            </li>
                      
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: mapGetters({
        user: 'auth/user'
    }),
    methods: {
        ...mapActions({
            logout: 'auth/logout'
        }),
        signout () {
            this.logout().then(() => {
                this.$router.replace({ name: 'home' })
            })
        }
    },
    
}
</script>