// Feladat:
// Járjuk be az oldalon található link-list azonosítójú nav elem a elemeit.
// Olvassuk ki minden elem belső html tartalmát és állítsuk be minden elem 
// title attribútum értékének.
function changeOuterLinks() {
    const aElements = document.querySelectorAll(`nav#link-list a`);
    for (let i = 0; i < aElements.length; i++) {
        aElements[i].setAttribute('title', aElements[i].innerHTML);
    }
}


export { changeOuterLinks };