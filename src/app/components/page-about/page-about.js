import pageAboutComponent from './page-about.component';

const pageAboutModule = angular.module('pageAbout', [])

.component('pageAbout', pageAboutComponent)
.name;

export default pageAboutModule;