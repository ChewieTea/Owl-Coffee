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