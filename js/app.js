const sections = Array.from(document.querySelectorAll('section'));

window.onload = _=> {
    sections.map(section => {
        let navItem = document.createElement('li');
        navItem.innerHTML = `<a class="menu__link" href="#${section.getAttribute('id')}">${section.getAttribute('data-nav')}</a>`
        document.getElementById('navbar__list').appendChild(navItem);
    })
}

document.addEventListener('scroll', _=> {
    let sectionInPositionId = location.hash.slice(1);
    let sectionInPosition = document.getElementById(sectionInPositionId);

    sections.map(section => {
        if (section.id === sectionInPositionId){
            if (!sectionInPosition.classList.contains('your-active-class')){
                sectionInPosition.classList.add('your-active-class')
            }

        } else{
            section.classList.remove('your-active-class')
        }
    })
});
