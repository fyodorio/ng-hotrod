import pageCardManagerComponent from './page-card-manager.component';

const pageCardManagerModule = angular
	.module('pageCardManager', [])

	.component('pageCardManager', pageCardManagerComponent).name;

export default pageCardManagerModule;
