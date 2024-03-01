// Scroll Timeline Observer
//* This fully works. Like completely, it works. It's only adding background colours right now, that's down to the CSS and once that's adjusted I should be able to add both animations flawlessly i'm so god damn smart bloody look at me go.
const observerUp = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting && hiddenUpElements) {
        entry.target.classList.add('upward');
      } else if (entry.isIntersecting && hiddenSideElements) {
        entry.target.classList.add('side');
      } else {
        entry.target.classList.remove('upward');
        entry.target.classList.remove('side');
      }
    });
  });
  
const hiddenUpElements = document.querySelectorAll('.hiddenUp');
hiddenUpElements.forEach((el) => observerUp.observe(el));

const hiddenSideElements = document.querySelectorAll('.hiddenSide');
hiddenSideElements.forEach((el) => observerSide.observe(el));



var navMenu = document.getElementById("nav-menu");

function showMenu() {
    navMenu.style.right = "0";
}
function hideMenu() {
    navMenu.style.right = "-160px";
}

// Scroll Animation

const scrollers = document.querySelectorAll('.scroller');

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimationRow();
}

function addAnimationRow() {
    scrollers.forEach((scroller) => { // Scroller row
        scroller.setAttribute('data-animated', true);
    });
        const scrollerInner = document.querySelector('.scroller-items'); // row
        const scrollerContent = Array.from(scrollerInner.children); // duplicate child wrap?

        scrollerContent.forEach(item => { // duplicate children/items
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', true);
            scrollerInner.appendChild(duplicatedItem);
        })
}