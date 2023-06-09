const humberger = document.getElementById('humberger');
const menu = document.getElementById('mobile-menu');
const menuClose = document.getElementById('menu-close');
const menuItemsNode = document.getElementById('menu-items').childNodes;
const testimonialContainer = document.getElementById('testimonialCard');

const showMenu = () => {
  menu.classList.add('show-menu');
};
const hideMenu = () => {
  menu.classList.remove('show-menu');
};

humberger.addEventListener('click', showMenu);
menuClose.addEventListener('click', hideMenu);
menuItemsNode.forEach((menuItem) => menuItem.addEventListener('click', hideMenu));

/* global testimonials, parseVirtualDom, TestimonialVirtualDom */
testimonials.forEach((testimonial, index) => (
  testimonialContainer.appendChild(
    parseVirtualDom(TestimonialVirtualDom({ ...testimonial, index })),
  )
));