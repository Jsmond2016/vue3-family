import { CATEGORY_TYPES } from "@/typings/Home";
import axios from "./index";

export function getSlider<T>() {
  return axios.get<T, T>("/slider/list");
}

export function getLessons<T>(
  category: CATEGORY_TYPES,
  offset = 0,
  limit = 5
) {
  return axios.get<T, T>(
    `/lesson/list?category=${category}&offset=${offset}&limit=${limit}`
  );
}
