<template>
  <div v-if="sliderList.length" class="swiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="l in sliderList" :key="l.url">
        <img :src="l.url" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { computed, defineComponent } from "vue";
import { Types } from "@/store/action-types";

export default defineComponent({
  // 异步的 async 只能和 suspense 结合使用
  async setup() {
    let store = useStore();
    let sliderList = computed(() => {
      return store.state.home.sliders;
    });
    if (!sliderList.value.length) {
      await store.dispatch(`/home/${Types.SET_SLIDER_LIST}`);
    }

    return {
      sliderList,
    };
  },
});
</script>
