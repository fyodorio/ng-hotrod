class ContentController {
	/* @ngInject */
	constructor(NavigationService) {
		this.NavigationService = NavigationService;
	}

	isPageShown(index) {
		return this.NavigationService.currentPage === index;
	}
}

export default ContentController;
