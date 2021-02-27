import ngHotrodLogo from '../../../assets/img/icon-ng-hotrod-light.svg';
import githubLogo from '../../../assets/img/icon-github.png';

class NavbarController {
	constructor(NavigationService) {
		this.NavigationService = NavigationService;
		this.ngHotrodLogo = ngHotrodLogo;
		this.githubLogo = githubLogo;
	}
}

NavbarController.$inject = ['NavigationService'];

export default NavbarController;
