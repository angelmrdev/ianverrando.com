// _template-loader.js – Encargado de cargar templates dinámicos

export function importTemplate(filePath, targetSelector) {
    fetch(filePath)
      .then(res => res.text())
      .then(data => {
        const target = document.querySelector(targetSelector);
        if (target) target.innerHTML = data;
      });
  }
  
  // Cargar nav y footer globalmente
  document.addEventListener('DOMContentLoaded', () => {
    importTemplate('_components/nav.html', 'header');
    importTemplate('_components/footer.html', 'footer');
  });
