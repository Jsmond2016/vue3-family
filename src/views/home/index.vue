<template>
  <div class="home">
    {{category}}
    <HomeHeader
      :category="category"
      @setCurrentCategory="setCurrentCategory"
    ></HomeHeader>
    <HomeSwiper></HomeSwiper>
    <HomeList></HomeList>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import HomeHeader from "./home-header.vue";
import HomeList from "./home-list.vue";
import HomeSwiper from "./home-swiper.vue";
import { useStore, Store } from "vuex"
import { IGlobalState } from '@/typings/State';
import { Types } from "@/store/action-types";
import { CATEGORY_TYPES } from '@/typings/Home';


function useCategory(store: Store<IGlobalState>) {
  let category = computed(() => store.state.home.currentCategory)

  function setCurrentCategory(category: CATEGORY_TYPES) {
    store.commit(`home/${Types.SET_CATEGORY}`, category)
  }
  
  return {
    category,
    setCurrentCategory
  }
}


export default defineComponent({
  components: {
    HomeHeader,
    HomeList,
    HomeSwiper,
  },
  setup(props, ctx) {
    console.log("ctx: ", ctx);
    console.log("props: ", props);
    const store = useStore<IGlobalState>();
    const { category } = useCategory(store)
    return {
      category
    }
  },
});
</script>