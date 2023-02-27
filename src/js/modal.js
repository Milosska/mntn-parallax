const headerBtnEl = document.querySelector('.header__btn');
const modalBtnEl = document.querySelector('.modal__btn');
const backdropEl = document.querySelector('.overlay');

headerBtnEl.addEventListener('click', onClick);
modalBtnEl.addEventListener('click', onClick);
backdropEl.addEventListener('click', onBgClick);

function onClick() {
  toggleBg();
}

function onBgClick(e) {
  if (e.target === e.currentTarget) {
    toggleBg();
  }
}

function toggleBg() {
  backdropEl.classList.toggle('js-hidden');

  if (backdropEl.classList.contains('js-hidden')) {
    document.removeEventListener('keydown', onEscapePress);
    scrollController.enabledScroll();
  } else {
    document.addEventListener('keydown', onEscapePress);
    scrollController.disabledScroll();
  }
}

function onEscapePress(e) {
  if (e.key === 'Escape') {
    toggleBg();
  }
}

const scrollController = {
  scrollPosition: 0,
  disabledScroll() {
    scrollController.scrollPosition = window.scrollY; //щоб не підскакувало вверх при закритті модалки

    document.body.style.cssText = `
      overflow: hidden;
      position: fixed;
      top: -${scrollController.scrollPosition}px;
      left: 0;
      height: 100vh;
      width: 100vw;
      padding-right: ${window.innerWidth - document.body.offsetWidth}px
    `;
    document.documentElement.style.scrollBehavior = 'unset';
  },
  enabledScroll() {
    document.body.style.cssText = '';
    window.scroll({ top: scrollController.scrollPosition });
    document.documentElement.style.scrollBehavior = '';
  },
};
