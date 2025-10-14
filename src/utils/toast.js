let container;

function ensureContainer() {
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-root';
    container.style.position = 'fixed';
    container.style.left = '50%';
    container.style.bottom = '24px';
    container.style.transform = 'translateX(-50%)';
    container.style.zIndex = '9999';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '8px';
    document.body.appendChild(container);
  }
}

export function showToast(message, { duration = 5000 } = {}) {
  ensureContainer();

  const el = document.createElement('div');
  el.textContent = message;

  el.style.padding = '12px 16px';
  el.style.borderRadius = '8px';
  el.style.background = 'rgba(24,24,24,0.9)';
  el.style.color = '#fff';
  el.style.fontSize = '14px';
  el.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)';
  el.style.opacity = '0';
  el.style.transition = 'opacity .2s ease';

  container.appendChild(el);

  requestAnimationFrame(() => {
    el.style.opacity = '1';
  });

  const remove = () => {
    el.style.opacity = '0';
    setTimeout(() => {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 200);
  };

  const timer = setTimeout(remove, duration);

  el.addEventListener('click', () => {
    clearTimeout(timer);
    remove();
  });
}
