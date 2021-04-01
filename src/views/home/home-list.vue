<template>
  <div class="home-list">
    <van-card
      v-for="ll in lessonList"
      :key="ll.id"
      :price="ll.price"
      :title="ll.title"
      :thumb="ll.poster"
    >
      <template #tags>
        <van-tag plain type="danger"></van-tag>
      </template>
    </van-card>
  </div>
</template>
<script lang="ts">
import { ILession } from "@/typings/Home";
import { computed, defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    lessonList: {
      type: [] as PropType<ILession[]>,
    },
  },
  setup() {
    const formatCategory = (type: number) => {
      switch (type) {
        case 1:
          return "React 课程";
        case 2:
          return "Vue 课程";
      }
    };
    return {
      formatCategory,
    };
  },
});
</script>