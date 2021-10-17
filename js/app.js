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


document.addEventListener('scroll', _=> {
    let sectionInPositionId = location.hash.slice(1);
    let sectionInPosition = document.getElementById(sectionInPositionId);

    sections.map(section => {
        if (section.id === sectionInPositionId && !sectionInPosition.classList.contains('your-active-class')){
            sectionInPosition.classList.add('your-active-class')
        } 
        else{
            section.classList.remove('your-active-class')
        }
    })
});
