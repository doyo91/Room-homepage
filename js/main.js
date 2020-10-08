const hero = document.getElementById("hero");
const title = document.getElementById("title");
const description = document.getElementById("description");
const btnMenuOpen = document.getElementById("openMenu");
const btnMenuClose = document.getElementById("closeMenu");
const nav = document.getElementById("menu");

btnMenuOpen.addEventListener("click", () => {
  nav.style.display = "flex";
  btnMenuOpen.style.display = "none";
});
btnMenuClose.addEventListener("click", () => {
  nav.style.display = "none";
  btnMenuOpen.style.display = "block";
});

// const titles = [
//   "Discover innovative ways to decorate",
//   "We are available all across the globe",
//   "Manufactured with the best materials",
// ];

// const descriptions = [
//   "We provide unmatched quality, comfort, and style for property owners    across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
//   "With stores all over the world, it's easy for you to find furniture for  your home or place of business. Locally, we’re in most major cities  throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
//   "Our modern furniture store provide a high level of quality. Our company     has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
// ];
