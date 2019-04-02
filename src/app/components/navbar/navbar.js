import navbarComponent from './navbar.component';

const navbarModule = angular
	.module('navbar', [])

	.component('navbar', navbarComponent).name;

export default navbarModule;
