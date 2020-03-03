import NavigationService from './navigation.service';

const servicesModule = angular
	.module('services', [])
	.service('NavigationService', NavigationService).name;

export default servicesModule;
