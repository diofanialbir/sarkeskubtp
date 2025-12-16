// Kalau ingin klik di mana saja pada card membuka file:
document.querySelectorAll('.card-hukum').forEach(card => {
  card.addEventListener('click', event => {
    const button = card.querySelector('.btn-ikon');
    if (!button) return;
    if (event.target === button || button.contains(event.target)) return;
    button.click();
  });
});
