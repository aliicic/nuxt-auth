<!-- Please remove this file from your project -->
<template>
  <div>
    <h1 style="color:black">home page</h1>

    <div>
      <button @click="fetch()">
        fetch user
      </button>
      {{fUser}}
    </div>

  </div>
</template>

<script>
export default {
  name: "NuxtTutorial",

  data: () => ({


      fUser : ''

  }),

  methods: {


   async fetch(){

    try{

      this.fUser = await this.$auth.fetchUser()

    }catch(e){

    }

   }
  },
  mounted(){
    console.log(this.$store.state.auth.loggedIn);
    // console.log(this.$auth.user.name);
  }
};
</script>

// this.$axios.post('/wp-json/jwt-auth/v1/token', {
//           username: this.username,
//           password: this.password
//         }).then((resp) => {
//           this.$auth.setToken('local', 'Bearer ' + resp.data.token)
//           this.$auth.setRefreshToken('local', resp.data.refresh_token)
//           this.$axios.setHeader('Authorization', 'Bearer ' + resp.data.token)
//           this.$auth.ctx.app.$axios.setHeader('Authorization', 'Bearer ' + resp.data.token)
//           this.$axios.get('/wp-json/wp/v2/users/me').then((resp) => { this.$auth.setUser(resp.data); this.$router.push('/') })
//         })
