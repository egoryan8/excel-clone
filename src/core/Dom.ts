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

  find(selector: string) {
    return $(this.$el.querySelector(selector) as HTMLElement);
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

  get data() {
    return this.$el.dataset;
  }

  closest(selector: string) {
    // @ts-ignore
    return $(this.$el.closest(selector));
  }

  getCoords() {
    return this.$el.getBoundingClientRect();
  }

  findAll(selector: string) {
    return this.$el.querySelectorAll(selector);
  }

  css(style = {}) {
    // @ts-ignore
    Object.keys(style).forEach((key) => this.$el.style[key] = style[key]);
  }

  id(parse?: any): any {
    if (parse) {
      const parsed = this.id().split(':');
      return {
        row: +parsed[0],
        col: +parsed[1],
      };
    }
    return this.data.id;
  }

  focus() {
    this.$el.focus();
    return this;
  }

  addClass(className: string) {
    this.$el.classList.add(className);
  }

  removeClass(className: string) {
    this.$el.classList.remove(className);
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


