import Navbar from './navbar/navbar';
import PageHome from './page-home/page-home';

const ComponentsModule = angular.module('components', [Navbar, PageHome]).name;

export default ComponentsModule;
