import { selector } from "recoil";
import { firstSearch } from "../Atoms/Search";

export const firstSearchSelector = selector({
  key: "firstSearchSelector", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => get(firstSearch),
});
