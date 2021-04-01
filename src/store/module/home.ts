import { ILession, ILessions } from "./../../typings/Home";
import { getSlider, getLessons } from "@/api/home";
import { CATEGORY_TYPES, IHomeState, ISlider } from "@/typings/Home";
import { IGlobalState } from "@/typings/State";
import { Module, Commit } from "vuex";
import * as Types from "../action-types";

const state: IHomeState = {
  currentCategory: CATEGORY_TYPES.ALL,
  sliders: [],
  lessons: {
    hasMore: true, // 是否有更多属性,
    loading: false, // 默认没有正在加载
    offset: 0,
    limit: 5,
    list: [], // 目前已经显示到页面的课程有哪些
  },
};

const home: Module<IHomeState, IGlobalState> = {
  namespaced: true,
  state,
  mutations: {
    [Types.SET_CATEGORY](state: IHomeState, payload: CATEGORY_TYPES) {
      state.currentCategory = payload;
    },
    [Types.SET_SLIDER_LIST](state: IHomeState, payload: ISlider[]) {
      state.sliders = payload;
    },
    [Types.SET_LOADING](state: IHomeState, payload: boolean) {
      state.lessons.loading = payload;
    },
    [Types.SET_LESSON_LIST](state: IHomeState, payload: ILessions) {
      state.lessons.list = [...state.lessons.list, ...payload.list];
      state.lessons.hasMore = payload.hasMore;
      state.lessons.offset = state.lessons.offset + payload.list.length;
    },
  },
  actions: {
    async [Types.SET_SLIDER_LIST]({ commit }: { commit: Commit }) {
      const sliders = await getSlider<ISlider>();
      commit(Types.SET_SLIDER_LIST, sliders);
    },
    async [Types.SET_LESSON_LIST]({ commit }: { commit: Commit }) {
      if (state.lessons.loading) return;
      if (!state.lessons.hasMore) return;
      commit(Types.SET_LOADING, true);
      const lessons = await getLessons<ILessions>(
        state.currentCategory,
        state.lessons.offset,
        state.lessons.limit
      );
      commit(Types.SET_LESSON_LIST, lessons);
      commit(Types.SET_LOADING, false);
    },
  },
};

export default home;
