class NavigationService {
    constructor() {
      this.currentPage = 0;
      this.pageTitles = ['Home', 'About'];
      this.currentPageTitle = this.pageTitles[this.currentPage];
    }

    setPage(pageIndex) {
        this.currentPage = pageIndex;
        this.currentPageTitle = this.pageTitles[pageIndex];
    }

  }
  
export default NavigationService;