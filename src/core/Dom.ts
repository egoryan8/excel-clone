export class Dom {
  private $el: Element;
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


