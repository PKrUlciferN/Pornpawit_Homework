import Vue from "vue";
import router from "vue-router";
import profile from "../components/profile";
import contact from "../components/contact";

Vue.use(router);

export default new router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: profile
    },
    {
      path: "/contact",
      component: contact
    }
  ]
});

document.body.style.backgroundColor = "rgba(0, 0, 0, 0.67)";
