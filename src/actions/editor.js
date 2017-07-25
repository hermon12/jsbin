export const SET_THEME = '@@editor/SET_THEME';
export const SET_OPTION = '@@editor/SET_OPTION';
export const SET_SOURCE = '@@editor/SET_SOURCE';
export const TOGGLE_THEME = '@@editor/TOGGLE_THEME';
export const SET_SPLITTER_WIDTH = '@@editor/SET_SPLITTER_WIDTH';

export function toggleTheme() {
  return { type: TOGGLE_THEME };
}

export function setSplitterWidth(value) {
  return { type: SET_SPLITTER_WIDTH, value };
}

export function setTheme(theme) {
  return { type: SET_THEME, theme };
}

export function setSource(source) {
  return { type: SET_SOURCE, source };
}

export function set(option, value) {
  return { type: SET_OPTION, option, value };
}