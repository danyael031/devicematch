import { mlang } from "src/lib/multilang";
import eslang from "./es.json";
import enlang from "./en.json";

mlang.init({
  languages: {
    "es": eslang,
    "en": enlang
  },
  defaultLang: "es"
})

export { mlang };
