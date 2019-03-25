<template>
  <v-app id="app">
  
    <div id="nav">
 
      <router-link to="/">
             <div style="text-align:center">
  <img src="./assets/logo_transparent.png" width="200px"/>
  </div>
      
      </router-link>
      <!--  |
      <router-link to="/about">About</router-link> -->
      <!-- <router-link :to="{ name: 'petition', params: { stream: 241584 } }">Petition</router-link> -->
    </div>
    <router-view />

  </v-app>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 0px 16px;
  a {
    font-weight: bold;
    color: #2c3e50;
   
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
a {
   text-decoration: none!important;
}
</style>
