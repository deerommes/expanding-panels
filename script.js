const panels = document.querySelectorAll('.panel');

[...panels].map(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  [...panels].map(panel => {
    panel.classList.remove('active');
  });
}
