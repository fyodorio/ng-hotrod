import controller from './navbar.controller';
import './navbar.scss';

const navbarComponent = {
	bindings: {},
	template: `
		<md-toolbar class="navbar">
			<div class="md-toolbar-tools">
				<div flex layout="row" layout-align="start center">
					<img class="ng-hotrod-logo" ng-src="{{ $ctrl.ngHotrodLogo }}" alt="GitHub">
					<h2 class="active-page-name" md-truncate>{{ $ctrl.NavigationService.currentPageTitle }}</h2>
				</div>
				<a 
					class="github-link" href="https://github.com/fyodorio/ng-hotrod" 
					layout="row" 
					layout-align="center center">
					<img ng-src="{{ $ctrl.githubLogo }}" alt="GitHub">
					<div>GitHub</div>
				</a>
			</div>
		</md-toolbar>
	`,
	controller,
};

export default navbarComponent;
