class SidebarController {
	/* @ngInject */
	constructor(UiStateService, NavigationService) {
		this.UiStateService = UiStateService;
		this.NavigationService = NavigationService;
	}

	navigateTo(page) {
		this.NavigationService.setPage(page);
		this.UiStateService.toggleSidebar('left');
	}
}

export default SidebarController;
