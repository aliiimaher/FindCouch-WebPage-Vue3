import { createStore } from "vuex";

import coachesModule from "./modules/coaches/index";

const store = createStore({
  modules: {
    coaches: coachesModule,
  },
});

export default store;
