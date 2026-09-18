// A blocked badge must not leave a broken image or hide the repository link.
document.querySelectorAll('.github-stars img').forEach((image) => {
  const fallback = () => {
    image.hidden = true;
    image.nextElementSibling.hidden = false;
  };
  image.addEventListener('error', fallback, { once: true });
  if (image.complete && image.naturalWidth === 0) fallback();
});
