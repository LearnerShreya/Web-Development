// Select tooltip element
const tooltip = document.getElementById('tooltip');

// Add event listeners to all planets
document.querySelectorAll('.planet, .sun, .moon').forEach((element) => {
  element.addEventListener('mouseenter', (e) => {
    const name = e.target.dataset.name;
    const info = e.target.dataset.info;
    tooltip.style.opacity = '1';
    tooltip.style.top = `${e.pageY}px`;
    tooltip.style.left = `${e.pageX}px`;
    tooltip.innerHTML = `<strong>${name}</strong><br>${info}`;
  });

  element.addEventListener('mousemove', (e) => {
    tooltip.style.top = `${e.pageY}px`;
    tooltip.style.left = `${e.pageX}px`;
  });

  element.addEventListener('mouseleave', () => {
    tooltip.style.opacity = '0';
  });
});
