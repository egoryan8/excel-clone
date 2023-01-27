export class Emmiter {
  private listeners: Record<string, any>;
  constructor() {
    this.listeners = {};
  }

  // уведомляем слушателей если они есть
  emit(event: string, ...args: any) {
    if (!Array.isArray(this.listeners[event])) {
      return false;
    }
    this.listeners[event].forEach((listener: (...args: any) => void) => {
      listener(...args);
    });
    return true;
  }

  // подписываемся на уведомление
  subscribe(event: string, fn: () => void) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(fn);
    return () => {
      this.listeners[event] = this.listeners[event].filter((listener: (...args: any) => void) => listener !== fn);
    };
  }
}
