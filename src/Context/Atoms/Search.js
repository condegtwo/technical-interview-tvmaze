import { atom } from "recoil";

export const searchResults = atom({
  key: "searchResultsAtom", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export const firstSearch = atom({
  key: "firstSearchAtom", // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
});
