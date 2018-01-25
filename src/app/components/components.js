import Navbar from './navbar/navbar';
import Sidebar from './sidebar/sidebar';
import Content from './content/content';
import PageHome from './page-home/page-home';
import PageAbout from './page-about/page-about';
import PageCardManager from './page-card-manager/page-card-manager';

const componentsModule = angular.module('components', [
  Navbar,
  Sidebar,
  Content,
  PageHome,
  PageAbout,
  PageCardManager
])
.name;

export default componentsModule;