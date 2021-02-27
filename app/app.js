import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';
import ComponentsModule from './components/components';
import ServicesModule from './services/services';
import { AppComponent } from './app.component';

const appModule = angular
	.module('appModule', [
		'ngAnimate',
		'ngAria',
		'ngMessages',
		'ngMaterial',
		ComponentsModule,
		ServicesModule,
	])
	.config([
		'$mdThemingProvider',
		($mdThemingProvider) => {
			$mdThemingProvider
				.theme('default')
				.primaryPalette('brown')
				.accentPalette('amber');
		},
	])

	.component('app', AppComponent);

export default appModule;
