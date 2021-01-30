import Navbar from './navbar/navbar';
import PageHome from './page-home/page-home';

const componentsModule = angular.module('components', [Navbar, PageHome]).name;

export default componentsModule;
