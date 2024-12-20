import { createContext, useContext, useSyncExternalStore } from "react";
import { MultiLangProviderProps, MultiLangSnapshot } from "./types";

const MultiLangContext = createContext<MultiLangSnapshot>({
  lt: () => { return '' },
  langTranslation: { translation: {} },
  selectedLang: ''
})

export function MultiLangProvider({ children, mlang }: MultiLangProviderProps) {
  const snapshot = useSyncExternalStore<MultiLangSnapshot>((s) => mlang.subscribe(s), () => mlang.getSnapshot());

  return (
    <MultiLangContext.Provider value={snapshot}>
      {children}
    </MultiLangContext.Provider>
  )
}

export function useMultiLang(): MultiLangSnapshot {
  const a = useContext(MultiLangContext)
  return a
}
