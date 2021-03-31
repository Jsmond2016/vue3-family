<template>
  <div class="home">
    {{ category }}
    <HomeHeader
      :category="category"
      @setCurrentCategory="setCurrentCategory"
    ></HomeHeader>
    <Suspense>
      <template #default>
        <HomeSwiper></HomeSwiper>
      </template>
      <template #fallback>
        <div>loading...</div>
      </template>
    </Suspense>
    <HomeList :lessonList="lessonList"></HomeList>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import HomeHeader from "./home-header.vue";
import HomeList from "./home-list.vue";
import HomeSwiper from "./home-swiper.vue";
import { useStore, Store } from "vuex";
import { IGlobalState } from "@/typings/State";
import { Types } from "@/store/action-types";
import { CATEGORY_TYPES } from "@/typings/Home";

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
    return store.state.home.lessons.list
  })
  onMounted(() => {
    if (!lessonList.value.length) {
      store.dispatch(`/home/${Types.SET_LESSON_LIST}`)
    }
  })
  return {
    lessonList
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
    // 分类
    const { category } = useCategory(store);
    // 课程
    const { lessonList } =  useLessonsList(store)
    return {
      category,
      lessonList
    };
  },
});
</script>
