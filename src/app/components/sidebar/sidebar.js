import sidebarComponent from './sidebar.component';

const sidebarModule = angular
	.module('sidebar', [])

	.component('sidebar', sidebarComponent).name;

export default sidebarModule;
