import { createStore } from "vuex";
import { IGlobalState } from "@/typings/State"
import home from "./module/home"


export default createStore<IGlobalState>({
  mutations: {},
  actions: {},
  modules: {
    home,
  },
});
