class PageAboutController {
    constructor(NavigationService) {
      this.name = 'Page About Component';
      this.NavigationService = NavigationService;
    }

    changePageTo(index) {
      this.NavigationService.setPage(index);
    }
  }
  
export default PageAboutController;