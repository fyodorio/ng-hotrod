class PageCardManagerController {
    constructor(NavigationService, DataService) {
      // this.NavigationService = NavigationService;
      this.DataService = DataService;
    }

    // changePageTo(index) {
    //   this.NavigationService.setPage(index);
    // }
    deleteCard(id) {
      this.DataService.deleteCard(id);
    }
  }
  
export default PageCardManagerController;