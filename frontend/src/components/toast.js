// Toast Notification System
import { icons } from '../icons.js';

class ToastManager {
  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'toast-container';
    document.body.appendChild(this.container);
  }

  show(message, type = 'success', duration = 3500) {
    const toast = document.createElement('div');
    toast.className = 'toast-message';

    let iconSvg = icons.check(18);
    if (type === 'urgent' || type === 'error') {
      iconSvg = icons.alert(18);
      toast.style.background = '#EF4444';
    } else if (type === 'orange') {
      iconSvg = icons.sparkle(18);
      toast.style.background = '#EA580C';
    } else if (type === 'info') {
      iconSvg = icons.info(18);
      toast.style.background = '#2563EB';
    }

    toast.innerHTML = `
      <span style="display:flex;align-items:center;">${iconSvg}</span>
      <span>${message}</span>
    `;

    this.container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, duration);
  }
}

export const toast = new ToastManager();
