const fadeInElements = document.querySelectorAll('.main-wrap');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target); // 一度表示されたら監視を停止
    }
  });
});

fadeInElements.forEach(element => {
  observer.observe(element);
});