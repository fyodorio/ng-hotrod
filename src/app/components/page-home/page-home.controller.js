class PageHomeController {
    constructor(NavigationService) {
      this.name = 'Page Home Component';
      this.NavigationService = NavigationService;
    }

    changePageTo(index) {
      this.NavigationService.setPage(index);
    }

  }
  
export default PageHomeController;