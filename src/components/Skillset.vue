<template>
  <div class="container">
    <div class="skillset">
      <h1>My Skillset</h1>
      <form @submit.prevent="addSkill">
        <input
          class="inputSkill"
          type="text"
          placeholder="Add New Skill & Press Enter . . ."
          v-model="newSkill"
        />
      </form>
      <ul>
        <transition-group
          name="list"
          enter-active-class="animated bounceInUp"
          leave-active-class="animated bounceOutDown"
        >
          <li v-for="(skill, index) in skills" v-bind:key="index">
            {{ skill }}
            <i v-on:click="removeSkills(index)" class="fa fa-trash"></i>
          </li>
        </transition-group>
      </ul>
    </div>
    <div>
      <p>There are currently {{ countSkills }} Skills</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Skillset",
  data() {
    return {
      newSkill: "",
    };
  },
  computed: {
    ...mapState(["title", "skills"]),
    ...mapGetters(["countSkills"]),
  },
  methods: {
    ...mapMutations(["ADD_SKILL"]),
    ...mapActions(["removeSkill"]),
    addSkill: function () {
      this.ADD_SKILL(this.newSkill);
      this.newSkill = "";
    },
    removeSkills: function (skill) {
      this.removeSkill(skill);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
@import "https://fonts.googleapis.com/css2?family=Alata&display=swap";

.skillset {
  background: #fff;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #ddf3f5;
  border-left: 5px solid #006a71;
  margin-bottom: 2px;
  color: #3e5252;
}

p {
  text-align: center;
  padding: 30px 0;
  color: #3e5252;
  text-decoration: underline;
  font-size: 18px;
}

input {
  margin-top: 10px;

  border: none;
  padding: 20px;
  width: calc(100% - 0px);
  font-size: 18px;
  box-shadow: 0 5px 5px lightgrey;
  margin-bottom: 7px;
  outline: none;
}

i {
  float: right;
  padding-right: 10px;
  cursor: pointer;
}
h1 {
  text-align: center;
  padding-top: 20px;
  font-size: 40px;
  font-family: "Alata", sans-serif;
  /* text-transform: uppercase; */
}

.container {
  box-shadow: 0px 0px 40px lightgray;
}
</style>
