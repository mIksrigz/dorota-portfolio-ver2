import * as startingElements from './modules/startingElements.js';
import * as data from './modules/data.js';
import * as renderElements from './modules/renderElements.js';


renderElements.renderVideoSection(startingElements.videos, data.videos);
renderElements.renderPublicationSection(startingElements.publications, data.publications);

startingElements.navList.addEventListener('click', e => {

    if (e.target.href !== undefined) {

        switch (e.target.id) {
            case 'navLink1':
                document.querySelector('#about').removeAttribute('hidden');
                // startingElements.about.removeAttribute('hidden');
                startingElements.publications.setAttribute('hidden', '');
                startingElements.videos.setAttribute('hidden', '');
                startingElements.links.setAttribute('hidden', '');
                break;
            case 'navLink2':
                document.querySelector('#about').setAttribute('hidden', '');
                // startingElements.about.removeAttribute('hidden');
                startingElements.publications.removeAttribute('hidden', '');
                startingElements.videos.setAttribute('hidden', '');
                startingElements.links.setAttribute('hidden', '');
                break;
            case 'navLink3':
                document.querySelector('#about').setAttribute('hidden', '');
                // startingElements.about.removeAttribute('hidden');
                startingElements.publications.setAttribute('hidden', '');
                startingElements.videos.removeAttribute('hidden', '');
                startingElements.links.setAttribute('hidden', '');
                break;
            case 'navLink4':
                document.querySelector('#about').setAttribute('hidden', '');
                // startingElements.about.removeAttribute('hidden');
                startingElements.publications.setAttribute('hidden', '');
                startingElements.videos.setAttribute('hidden', '');
                startingElements.links.removeAttribute('hidden', '');
                break;
            default:
                break;
        }
    }

});