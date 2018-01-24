class ContentController {
    constructor(NavigationService) {
      this.name = 'Content Component';
      this.NavigationService = NavigationService;
    }

    isPageShown(index) {
      return this.NavigationService.currentPage === index;
    }
  }
  
export default ContentController;