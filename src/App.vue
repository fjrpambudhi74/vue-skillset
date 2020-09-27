<template>
  <div id="app">
    <div id="nav">
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item disabled>|</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
      <!-- <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>-->
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  watch: {
    $route: {
      handler: (to, from) => {
        document.title = to.meta.title;
      },
      immediate: true,
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400&display=swap");

body {
  background-color: #eeeeee;
  font-family: "Open Sans", sans-serif;
  display: grid;
  grid-template-columns: auto;
  justify-items: center;
  align-items: center;
  text-align: center;
}

body,
html {
  margin: 0;
  height: 100%;
}

#app {
  width: 50%;
}

.navbar {
  justify-content: center !important;
}

.nav-link {
  font-size: 18px;
  color: white !important;
}

.nav-link:hover {
  color: lightgray !important;
  text-decoration: underline !important;
}
</style>
