class PageAboutController {
	/* @ngInject */
	constructor(NavigationService) {
		this.NavigationService = NavigationService;
	}

	changePageTo(index) {
		this.NavigationService.setPage(index);
	}
	changeAboutTabTo(index) {
		this.NavigationService.setAboutTab(index);
	}
}

export default PageAboutController;
