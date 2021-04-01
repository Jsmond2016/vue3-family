<template>
  <div class="home">
    <HomeHeader
      :category="category"
      @setCurrentCategory="setCurrentCategory"
    ></HomeHeader>
    <div class="home-container" ref="refreshElem">
      <Suspense>
        <template #default>
          <HomeSwiper></HomeSwiper>
        </template>
        <template #fallback>
          <div>loading...</div>
        </template>
      </Suspense>
      <HomeList :lessonList="lessonList"></HomeList>
      <div v-if="isLoading">loading...</div>
      <div v-if="!hasMore">我是有底线的...</div>
    </div>
  </div>
</template>
<style lang="scss">
.home-container {
  position: absolute;
  top: 65px;
  bottom: 50px;
  width: 100%;
  overflow-y: scroll;
  z-index: -1;
}
</style>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import HomeHeader from "./home-header.vue";
import HomeList from "./home-list.vue";
import HomeSwiper from "./home-swiper.vue";
import { useStore, Store } from "vuex";
import { IGlobalState } from "@/typings/State";
import * as Types from "@/store/action-types";
import { CATEGORY_TYPES } from "@/typings/Home";
import { useLoadMore } from '@/hooks/useLoadMore'

function useCategory(store: Store<IGlobalState>) {
  let category = computed(() => store.state.home.currentCategory);

  function setCurrentCategory(category: CATEGORY_TYPES) {
    store.commit(`home/${Types.SET_CATEGORY}`, category);
  }

  return {
    category,
    setCurrentCategory,
  };
}

function useLessonsList(store: Store<IGlobalState>) {
  const lessonList = computed(() => {
    return store.state.home.lessons.list;
  });
  onMounted(() => {
    if (!lessonList.value.length) {
      store.dispatch(`home/${Types.SET_LESSON_LIST}`);
    }
  });
  return {
    lessonList,
  };
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
    // 分类
    const { category, setCurrentCategory } = useCategory(store);
    // 课程
    const { lessonList } = useLessonsList(store);
    // 获取真实 dom
    const refreshElem = ref<null | HTMLElement>(null)
    const {isLoading, hasMore } = useLoadMore(refreshElem, store, `home/${Types.SET_LESSON_LIST}`)
    
    
    
    return {
      category,
      setCurrentCategory,
      lessonList,
      refreshElem,
      isLoading,
      hasMore
    };
  },
});
</script>
