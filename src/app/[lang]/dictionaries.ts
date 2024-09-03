import "server-only";

const dictionaries = {
  "en-US": () =>
    import("./dictionaries/en-US.json").then((module) => module.default),
  "vi-VN": () =>
    import("./dictionaries/vi-VN.json").then((module) => module.default),
};

export type PropsType = keyof typeof dictionaries;

export const getDictionary = async (locale: PropsType) =>
  dictionaries[locale]();
