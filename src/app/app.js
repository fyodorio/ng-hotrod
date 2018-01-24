import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';
import Components from './components/components';
import Services from './services/services';
import AppComponent from './app.component';

const appModule = angular.module('app', [
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngMaterial',
    Components,
    Services
])

.component('app', AppComponent)

export default appModule;