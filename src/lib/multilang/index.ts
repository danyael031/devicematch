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
  private cachedSnapshot: MultiLangSnapshot = { lt: () => '', langTranslation: { translation: {} }, selectedLang: '', setLanguage: () => { } };

  constructor() { }

  private emitChange() {
    for (let listener of this.listeners) {
      listener();
    }
  }

  init(config: MultiLangConfig) {
    this.multiLangConfig = config;
    this.selectedLang = config.defaultLang;
    this.generateSnapshot();
  }

  private generateSnapshot() {
    this.cachedSnapshot = {
      lt: (key) => this.lt(key),
      selectedLang: this.selectedLang,
      setLanguage: (key) => this.setLanguage(key),
      langTranslation: this.getSelectedTranslation()
    }
  }

  setLanguage(key: string) {
    if (!this.multiLangConfig.languages[key]) {
      throw new Error('Language does not exist.');
    }
    this.selectedLang = key;
    this.generateSnapshot();
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
