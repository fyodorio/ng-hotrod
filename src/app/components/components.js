import Navbar from './navbar/navbar';
import Sidebar from './sidebar/sidebar';
import Content from './content/content';
import PageHome from './page-home/page-home';
import PageAbout from './page-about/page-about';

const componentsModule = angular.module('components', [
  Navbar,
  Sidebar,
  Content,
  PageHome,
  PageAbout
])
.name;

export default componentsModule;