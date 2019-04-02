class PageHomeController {
	constructor(NavigationService) {
		this.NavigationService = NavigationService;
	}

	changePageTo(index) {
		this.NavigationService.setPage(index);
	}
}

export default PageHomeController;
