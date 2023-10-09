import "server-only";

type Locale = "en";

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
