const card = document.querySelector('.card-container');
let cardTouchControls = new Hammer(card);
cardTouchControls.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });

const cardContainerInner = document.querySelector('.card-container-inner');
cardTouchControls.on('swipeleft', () => {
  cardContainerInner.style.transform = 'rotateY(-180deg)';
});
cardTouchControls.on('swiperight', () => {
  cardContainerInner.style.transform = 'rotateY(0)';
});
