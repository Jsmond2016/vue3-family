import { CATEGORY_TYPES, IHomeState } from '@/typings/Home';
import { IGlobalState } from "@/typings/State"
import { Module } from "vuex"
import { Types } from '../action-types';

const state: IHomeState = {
  currentCategory: CATEGORY_TYPES.ALL,
  sliders: [],
  lessions: {
    hasMore: true, // 是否有更多属性,
    loading: false, // 默认没有正在加载
    offset: 0,
    limit: 5,
    list: [], // 目前已经显示到页面的课程有哪些
  } 
}

const home: Module<IHomeState, IGlobalState> = {
  namespaced: true,
  state,
  mutations: {
    [Types.SET_CATEGORY](state, payload: CATEGORY_TYPES) {
      state.currentCategory = payload
    }
  }
}

export default home