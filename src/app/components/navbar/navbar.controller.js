class NavbarController {
	constructor(UiStateService, NavigationService, DataService) {
		this.UiStateService = UiStateService;
		this.NavigationService = NavigationService;
		this.DataService = DataService;
	}

	openSidebar() {
		this.UiStateService.toggleSidebar('left');
	}

	openMenu(mdMenu, ev) {
		UiStateService.openMenu(mdMenu, ev);
	}

	clearData() {
		this.DataService.clearData();
		this.NavigationService.setPage(0);
	}
}

export default NavbarController;
