import UiStateService from './ui-state.service';
import NavigationService from './navigation.service';

const servicesModule = angular.module('services', [])

.service('UiStateService', UiStateService)
.service('NavigationService', NavigationService)

.name;

export default servicesModule;