const parallaxEl = document.querySelector('.parallax__item');
const heroEl = document.querySelector('.hero__container');
const cloudsEl = document.querySelector('.parallax__clouds');
const mountainsEl = document.querySelector('.parallax__mountains');
const manEl = document.querySelector('.parallax__man');

// // Indexes
const forClouds = 1;
const forMountains = 2;
const forMan = 5;

// Animation speed
const SPEED = 0.02;

window.onload = function () {
  if (!parallaxEl) {
    return;
  }

  heroEl.addEventListener('mousemove', onMouseMove);
};

function onMouseMove(evt) {
  if (evt.currentTarget !== heroEl) {
    return;
  }
  // Client mouse coordinates
  const clientX = evt.clientX;
  const clientY = evt.clientY;

  // ParallaxEl position margines (unviewed)
  const parallaxLeftOffset = parallaxEl.getBoundingClientRect().left;
  const parallaxTopOffset = parallaxEl.getBoundingClientRect().top;

  // When client mouse is at the screen center, coordX/coordY === parallaxEl center
  const coordX =
    clientX + parallaxLeftOffset - 0.5 * parallaxEl.offsetWidth * SPEED;
  const coordY =
    clientY + parallaxTopOffset - 0.5 * parallaxEl.offsetHeight * SPEED;

  // Set coordinates in %
  const x = ((coordX / parallaxEl.offsetWidth) * 100).toFixed(2);
  const y = ((coordY / parallaxEl.offsetWidth) * 100).toFixed(2);

  // Make elements move
  cloudsEl.setAttribute(
    'style',
    `transform: translate(${x / forClouds}px, ${y / forClouds}px);`
  );
  mountainsEl.setAttribute(
    'style',
    `transform: translate(${x / forMountains}px, ${y / forMountains}px);`
  );
  manEl.setAttribute(
    'style',
    `transform: translate(${x / forMan}px, ${y / forMan}px);`
  );
}
