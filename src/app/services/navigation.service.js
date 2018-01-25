class NavigationService {
    constructor() {
      this.pages = [
        {
          id: 0,
          title: 'Home',
          children: []
        },
        {
          id: 1,
          title: 'About',
          children: [
            {
              id: 0,
              label: 'History'
            },
            {
              id: 1,
              label: 'Features'
            }
          ]
        },
        {
          id: 2,
          title: 'Card Manager',
          children: []
        }
      ];
      this.currentPage = localStorage.getItem('currentPage') !== null 
        ? angular.fromJson(localStorage.getItem('currentPage')) 
        : 0 ;
      this.currentPageTitle = this.pages[this.currentPage].title;
      this.currentAboutTab = localStorage.getItem('currentAboutTab') !== null 
        ? angular.fromJson(localStorage.getItem('currentAboutTab')) 
        : 0 ;
    }

    setPage(pageIndex) {
      this.currentPage = pageIndex;
      localStorage.setItem('currentPage', angular.toJson(this.currentPage));
      this.currentPageTitle = this.pages[this.currentPage].title;
    }

    setAboutTab(tabIndex) {
      this.currentAboutTab = tabIndex;
      localStorage.setItem('currentAboutTab', angular.toJson(this.currentAboutTab));
    }
  }
  
export default NavigationService;