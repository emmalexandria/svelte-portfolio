// place files you want to import through the `$lib` alias in this folder.

export class ThemeOption {
  key: string;
  className: string;
  mediaQuery: string;
  enabled: boolean = $state(false);

  constructor(key: string, className: string, mediaQuery: string) {
    this.key = key;
    this.className = className;
    this.mediaQuery = mediaQuery;
  }

  init() {
    if (localStorage.getItem(this.key) == null) {
      this.enabled = window.matchMedia(this.mediaQuery).matches;
      localStorage.setItem(this.key, this.enabled.toString());
    } else {
      this.enabled = (localStorage.getItem(this.key) == 'true');
    }
    if (this.enabled) {
      document.documentElement.classList.add(this.className);
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem(this.key, this.enabled.toString());

    if (this.enabled) {
      document.documentElement.classList.add(this.className);
    } else {
      document.documentElement.classList.remove(this.className);
    }
  }

  resetToAutomatic() {
    localStorage.removeItem(this.key);
  }
}
