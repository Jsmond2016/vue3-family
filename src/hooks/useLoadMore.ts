import { IGlobalState } from "@/typings/State";
import { Ref, onMounted, computed } from "vue";
import { Store } from "vuex";
import _ from "lodash";

export function useLoadMore(
  ele: Ref<null | HTMLElement>,
  store: Store<IGlobalState>,
  actType: string
) {
  let element: HTMLElement;

  function _loadMore() {
    const containerHeight = element.clientHeight;
    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight;

    if (containerHeight + scrollTop + 20 >= scrollHeight) {
      store.dispatch(actType);
    }
  }

  onMounted(() => {
    element = ele.value as HTMLElement;
    element.addEventListener(
      "scroll",
      _.debounce(() => {
        _loadMore();
      }, 200)
    );
  });

  const isLoading = computed(() => {
    return store.state.home.lessons.loading;
  });

  const hasMore = computed(() => {
    return store.state.home.lessons.hasMore;
  });

  return {
    isLoading,
    hasMore,
  };
}
