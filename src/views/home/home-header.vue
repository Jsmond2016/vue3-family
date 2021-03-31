<template>
  <div class="home-header">
    <img src="@/assets/logo.png">
    <van-dropdown-menu>
      <van-dropdown-item v-model="state.value1" :options="option1" />
    </van-dropdown-menu>
  </div>
</template>

<script lang="ts">
import { CATEGORY_TYPES } from "@/typings/Home";
import { defineComponent, PropType, reactive } from "vue";

export default defineComponent({
  props: {
    category: {
      type: Number as PropType<CATEGORY_TYPES>,
    },
  },
  emits: ["setCurrentCategory"],
  setup(props, ctx) {
    const state = reactive({
      value1: CATEGORY_TYPES.ALL,
    });
    const option1 = [
      { text: "全部课程", value: CATEGORY_TYPES.ALL },
      { text: "React", value: CATEGORY_TYPES.REACT },
      { text: "Vue", value: CATEGORY_TYPES.VUE },
      { text: "Nodejs", value: CATEGORY_TYPES.NODE },
    ];

    return {
      state,
      option1,
    };
  },
});
</script>

<style lang="scss">
.home-header {
  height: 65px;
  background: #2a2a2a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5%;
  position: fixed;
  top: 0;
  left: 0;
  width: 95%;
  img {
    height: 50px;
  }
  .van-dropdown-menu__bar {
    background: #2a2a2a;
  }
  .van-dropdown-menu__title {
    color: white;
  }
}
</style>