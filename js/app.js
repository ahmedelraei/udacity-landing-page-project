/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sections = Array.from(document.querySelectorAll('section'));
const menu = document.getElementById('navbar__list');
const numberOfListItems = sections.length;


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

const createListItem = () => {
    for (section of sections){
        let sectionName = section.getAttribute('data-nav');
        let sectionLink = section.getAttribute('id');
        let listItem = document.createElement('li');

        listItem.innerHTML = `<a class="menu__link" href="#${sectionLink}">${sectionName}</a>`;

        menu.appendChild(listItem);
    }
}

const sectionInViewPort = (elem) => {
    let sectionPosition = elem.getBoundingClientRect();
    return (sectionPosition >= 0);
}

const toggleActive = () => {
    for (section of sections){
        if (sectionInViewPort(section)){
            if (!section.classList.contains('your-active-class')){
                section.classList.add('your-active-class')
            }
        } else{
            section.classList.remove('your-active-class')
        }
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

createListItem();

// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', toggleActive);
