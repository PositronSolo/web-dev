const btn = document.getElementsByClassName('card__btn')[0];

btn.onclick = () => {
  btn.classList.toggle('card__btn--active');
}