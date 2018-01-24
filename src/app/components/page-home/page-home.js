import pageHomeComponent from './page-home.component';

const pageHomeModule = angular.module('pageHome', [])

.component('pageHome', pageHomeComponent)
.name;

export default pageHomeModule;