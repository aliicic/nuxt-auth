<template>
 <div>
    <header>
    <nuxt-link to="/admin">admin</nuxt-link>
    <nuxt-link to="/">home</nuxt-link>
    <div class="user-info" v-if="$auth.loggedIn">
      you are logged in
      <p>
        hello {{$auth.user.name}}
      </p>
       <button @click="$auth.logout()">
        logout
      </button>
    </div>
    <div v-else style="margin-left:auto">
      <nuxt-link to="login">
        please log in
      </nuxt-link>
    </div>
    </header>
    <nuxt keep-alive />
 </div>
</template>

<script>
export default {

   middleware: 'auth',




}
</script>

<style>
header{
  background: black;
  display: flex;
  padding: 10px 30px;
  align-items: center;
}
header a{
  color :white;
  text-decoration: none;
  margin: 15px;
}
div , p {
  color:white
}
button{
  background: white;
  color:black;
}
.user-info{
  margin-left:auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.user-info * {
  margin: 10px;
}
</style>
