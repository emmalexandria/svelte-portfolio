// place files you want to import through the `$lib` alias in this folder.

export type { Post } from './types'

export function clickOutside(node: HTMLElement, callback?: Function) {
  const handleClick = (event: Event) => {
    const target = event.target as HTMLElement;
    if (!event.target) {
      return;
    }
    if (node && !node.contains(target) && !event.defaultPrevented) {
      node.dispatchEvent(new CustomEvent('click_outside'));
      if (callback) {
        callback()
      }
    }
  };

  document.addEventListener('click', handleClick, true);

  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
    }
  };
}
