import contentComponent from './content.component';

const contentModule = angular
	.module('content', [])

	.component('content', contentComponent).name;

export default contentModule;
