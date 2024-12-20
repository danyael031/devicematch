import { ReactNode } from "react";
import { MultiLang } from ".";

export type Listener = () => void;

export type LanguageTranslation = {
  translation: { [key: string]: string };
}

export type LangMap = {
  [key: string]: LanguageTranslation;
}

export type MultiLangConfig = {
  languages: LangMap,
  defaultLang: string,
}

export type MultiLangSnapshot = {
  lt: (key: string) => string,
  langTranslation: LanguageTranslation,
  selectedLang: string,
  setLanguage: (key: string) => void,
}

export interface MultiLangProviderProps {
  children: ReactNode,
  mlang: MultiLang

}
