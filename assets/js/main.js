document.querySelector('.scroll-arrow').addEventListener('click', function() {
    window.scrollBy({
      top: window.innerHeight, // Скролл вниз на высоту окна
      behavior: 'smooth' // Плавный скроллинг
    });
  });