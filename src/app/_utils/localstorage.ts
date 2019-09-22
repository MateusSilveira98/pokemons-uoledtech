export namespace LocalStorage {
  export function set (label: string, obj: Object = {}) {
    window.localStorage.setItem(label, JSON.stringify(obj));
  }
  export function get (label: string) {
    let string = window.localStorage.getItem(label);
    return JSON.parse(string);
  }
  export function remove (label: string) {
    window.localStorage.removeItem(label);
  }
  export function clear () {
    window.localStorage.clear();
  }
}