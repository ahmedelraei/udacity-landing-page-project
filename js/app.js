const sections = Array.from(document.querySelectorAll('section'));
const navBarList = document.getElementById('navbar__list');


document.addEventListener('DOMContentLoaded', _=> {
    sections.map(section => {
        let navItem = document.createElement('li');
        navItem.innerHTML = `<a class="menu__link" href="#${section.getAttribute('id')}">${section.getAttribute('data-nav')}</a>`
        navBarList.appendChild(navItem);
        navItem.addEventListener('click', e => {
            e.preventDefault();
            section.scrollIntoView({behavior: "smooth"});
        })
    })
});

const inViewPort = (section) => {
    const elementPlace = Math.floor(section.getBoundingClientRect().top);
    return elementPlace < 250 && elementPlace >= -250;
}
const addActiveClass = (section) => {
    if(inViewPort(section)){
        section.classList.add('your-active-class');
        section.style.cssText = "box-shadow:20px 20px 50px 15px #000000;border:2px solid #000;border-radius:2px";
        const sectionId= section.id.slice(7,8) -1;
        navBarList.childNodes[sectionId].style.cssText="background-color:#000000;";
        navBarList.childNodes[sectionId].firstChild.style.cssText="color: #ffffff;";
    };
};
const removeActiveClass = (section) => {
    section.classList.remove('your-active-class');
    section.style.cssText = "box-shadow:none;border:none;border-radius:none";
    const sectionId= section.id.slice(7,8) -1;
    navBarList.childNodes[sectionId].style.cssText="background-color:#ffffff;";
    navBarList.childNodes[sectionId].firstChild.style.cssText="color: #000000;";

};

document.addEventListener('scroll', _=> {
    sections.map(section => {
        removeActiveClass(section);
        addActiveClass(section);
    })
});
