import { atom } from "recoil";

export const randomIdsState = atom({
  key: "randomIdsState",
  default: [],
});

export const randomAnswerState = atom({
  key: "randomAnswerState",
  default: [],
});

export const selectAnswerState = atom({
  key: "selectAnswerState",
  default: "",
});
