<template>
  <div class="about">
    <h1>Hello I'm Fajar Pambudhi</h1>
    <h2>My Skillset Vue Project</h2>
    <p>In this case, I'm built the project using Vuex for managing the State & Component for Add New Skill, Delete Skill, and also using Vue Router for routing the page that created. And for the styling, I'm using CSS, Bootstrap, Font Awesome, and Animate CSS for the transition. And this website hosting by Firebase</p>
    <p>
      And if you interested you can contact me to fjrpambudhi@hotmail.com
      <br />Or
    </p>

    <a href="mailto:fjrpambudhi@hotmail.com?subject=Hire%20Me" class="button">Hire Me</a>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>


<style scoped>
h1 {
  text-align: center;
  padding-top: 20px;
}
h2 {
  text-align: center;
  padding-top: 10px;
}
p {
  text-align: center;
  font-size: 18px;
  padding-top: 5px;
}

.button {
  background-color: #0078e7; /* Green */
  border: none;
  border-radius: 25px;
  color: white;
  padding: 10px 35px 10px 35px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  margin: 0;
  position: absolute;
  top: 85%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.button:hover {
  background-color: #1b6ca8;
}
</style>
