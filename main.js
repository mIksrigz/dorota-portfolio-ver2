import * as startingElements from './modules/startingElements.js';
import * as data from './modules/data.js';
import * as renderElements from './modules/renderElements.js';


renderElements.renderVideoSection(startingElements.videos, data.videos);
renderElements.renderPublicationSection(startingElements.publications, data.publications);