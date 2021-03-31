/** 课程目录 */
export enum CATEGORY_TYPES {
  ALL,
  REACT,
  VUE,
  NODE,
}

export interface ILession {
  title: string;
  video: string;
  poster: string;
  price: number;
  category?: string;
}

export interface ILessions {
  hasMore: boolean;
  loading: boolean;
  offset: number;
  limit: number;
  list: ILession[];
}

export interface ISlider {
  url: string;
}

export interface IHomeState {
  currentCategory: CATEGORY_TYPES;
  sliders: ISlider[];
  lessons: ILessions;
}
