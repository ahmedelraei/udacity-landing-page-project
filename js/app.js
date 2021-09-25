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


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

const sectionIsInPostition = (elem) => {
    let sectionPos = elem.getBoundingClientRect();
    return (sectionPos >= 0);
}

const makeActive = () => {
    for (section of sections){
        if (sectionIsInPostition(section)){
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

const buildListItem = () => {
    for (section of sections){
        let sectionName = section.getAttribute('data-nav');
        let sectionLink = section.getAttribute('id');
        let listItem = document.createElement('li');

        listItem.innerHTML = `<a class="menu__link" href="#${sectionLink}">${sectionName}</a>`;

        menu.appendChild(listItem);
    }
}


// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', makeActive);


buildListItem();
