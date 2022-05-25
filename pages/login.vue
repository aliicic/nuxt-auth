<template>


  <div>
    <h1 style="color:black">Loggin page</h1>
    <input type="text" placeholder="user" v-model="username" />
    <input type="text" placeholder="password" v-model="password" />
    <button @click="loginUser">login</button>
  </div>



</template>

<script>
export default {

      data:()=>({

      username: "",
      password: "",

      }),

    methods : {
        async loginUser() {
      console.log('clicked');

      try{

          let res = await  this.$auth.loginWith("cookie",
        {
          data : {
           username :   this.username,
           password :  this.password
          }
        });


      }catch(e){
          console.log(e);
      }




    },
    }

}
</script>

<style>

</style>
