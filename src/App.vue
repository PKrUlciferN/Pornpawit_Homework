<template>
  <div id="app">
    <router-link class="link" :to="{ path: '/' }">Profile</router-link>
    <router-link class="link" :to="{ path: '/contact' }">Contact</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  margin: 0px;
  text-align: right;
}
.link {
  font-family: cursive;
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  color: white;
}
.router-link-exact-active {
  background-color: rgba(28, 226, 186, 0.67);
}
</style>
