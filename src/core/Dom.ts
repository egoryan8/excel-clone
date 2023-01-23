export class Dom {
  $el: HTMLElement;
  constructor(selector: string | HTMLElement) {
    this.$el = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector;
  }

  html(html: string) {
    if (typeof html === 'string') {
      this.$el.insertAdjacentHTML('afterbegin', html);
      return this;
    }
    return this.$el.outerHTML.trim();
  }

  on(event: string, callback: any) {
    this.$el.addEventListener(event, callback);
  }

  off(event: string, callback: any) {
    this.$el.removeEventListener(event, callback);
  }

  clear() {
    this.html('');
    return this;
  }

  append(node: Element | Dom) {
    if (node instanceof Dom) {
      node = node.$el;
    }
    if (Element.prototype.append) {
      this.$el.append(node);
    } else {
      this.$el.appendChild(node);
    }
  }

  closest(selector: string) {
    // @ts-ignore
    return $(this.$el.closest(selector));
  }

  getCoords() {
    return this.$el.getBoundingClientRect();
  }
}

export function $(selector: string | HTMLElement) {
  return new Dom(selector);
}

$.create = (tagName: string, classes = '') => {
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }
  return $(el);
};


