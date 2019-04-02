import UiStateService from './ui-state.service';
import NavigationService from './navigation.service';
import DataService from './data.service';

const servicesModule = angular
	.module('services', [])

	.service('UiStateService', UiStateService)
	.service('NavigationService', NavigationService)
	.service('DataService', DataService).name;

export default servicesModule;
