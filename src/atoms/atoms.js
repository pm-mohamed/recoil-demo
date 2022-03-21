import { atom } from "recoil";

export const number = atom({
  key: "number",
  default: "",
});

export const name = atom({
  key: "name",
  default: "",
});

export const expiry = atom({
  key: "expiry",
  default: "",
});
export const cvc = atom({
  key: "cvc",
  default: "",
});
export const focus = atom({
    key: "focus",
    default: "",
  });
