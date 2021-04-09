describe('Dom manipuláció tesztelése', () => {
    const template = `
    <nav id="link-list">
        <a href="https://training360.com/">Training360-link</a>
        <a href="https://preply.com/">Preply-link</a>
        <a href="https://www.w3schools.com/">W3-link</a>
        <a href="https://fontawesome.com/">FontAwesome-link</a>
        <a href="https://ngrx.io/">ngrx-link</a>
    </nav>
    `;

    beforeEach(() => {
        document.body.innerHTML = template;
    });

    test('Title attribútum vizsgálata', () => {
        const { changeOuterLinks } = require('../dom');
        changeOuterLinks();
        const aElements = document.querySelectorAll(`nav#link-list a`);
        expect(aElements[0].getAttribute('title')).toBe('Training360-link');
        expect(aElements[1].getAttribute('title')).toBe('Preply-link');
        expect(aElements[2].getAttribute('title')).toBe('W3-link');
        expect(aElements[3].getAttribute('title')).toBe('FontAwesome-link');
        expect(aElements[4].getAttribute('title')).toBe('ngrx-link');
    });
});
