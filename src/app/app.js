import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';
import appComponent from './app.component';

const appModule = angular.module('app', [
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngMaterial'
])

.component('app', appComponent)

export default appModule;