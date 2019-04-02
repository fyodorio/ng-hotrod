import pageCardComponent from './page-card.component';

const pageCardModule = angular
	.module('pageCard', [])

	.component('pageCard', pageCardComponent).name;

export default pageCardModule;
