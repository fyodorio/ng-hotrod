import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';
import Components from './components/components';
import AppComponent from './app.component';

const appModule = angular.module('app', [
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngMaterial',
    Components
])

.component('app', AppComponent)

export default appModule;