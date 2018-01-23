import navbarModule from './navbar/navbar';
import Content from './content/content';

const componentsModule = angular.module('components', [
  navbarModule,
  Content
])
.name;

export default componentsModule;