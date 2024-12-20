import type {
  Listener,
  MultiLangConfig,
  LanguageTranslation,
  MultiLangSnapshot
} from './types.ts'

export class MultiLang {

  private listeners: Array<Listener> = [];
  private multiLangConfig: MultiLangConfig = { languages: {}, defaultLang: '' };
  private selectedLang: string = '';
  private cachedSnapshot: MultiLangSnapshot = { lt: () => '', langTranslation: { translation: {} } };

  constructor() { }

  private emitChange() {
    for (let listener of this.listeners) {
      listener();
    }
  }

  init(multiLangConfig: MultiLangConfig) {
    this.multiLangConfig = multiLangConfig;
    this.selectedLang = multiLangConfig.defaultLang;
  }

  selectLanguage(key: string) {
    if (!this.multiLangConfig.languages[key]) {
      throw new Error('Language does not exist.');
    }
    this.selectedLang = key;

    const lt = this.lt
    const langTranslation = this.getSelectedTranslation()

    this.cachedSnapshot = { lt, langTranslation }

    this.emitChange();
  }

  subscribe(listener: Listener) {
    this.listeners = [...this.listeners, listener];
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  lt(key: string): string {
    if (this.multiLangConfig.languages[this.selectedLang].translation[key]) {
      return this.multiLangConfig.languages[this.selectedLang].translation[key];
    }

    return key;
  }

  getSnapshot(): MultiLangSnapshot {
    return this.cachedSnapshot
  }

  getSelectedTranslation(): LanguageTranslation {
    return this.multiLangConfig.languages[this.selectedLang];
  }

}

export const mlang = new MultiLang();
