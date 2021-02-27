import NavigationService from './navigation.service';

const ServicesModule = angular
	.module('services', [])
	.service('NavigationService', NavigationService).name;

export default ServicesModule;
