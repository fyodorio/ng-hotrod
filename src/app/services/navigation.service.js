class NavigationService {
    constructor(DataService) {
      this.DataService = DataService;
      this.currentCard = localStorage.getItem('currentCard') !== null 
        ? angular.fromJson(localStorage.getItem('currentCard')) 
        : 0;
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
        },
        {
          id: 3,
          title: this.DataService.cards[this.currentCard].title || '',
          children: this.DataService.cards || []
        }
      ];
      this.currentPage = localStorage.getItem('currentPage') !== null 
        ? angular.fromJson(localStorage.getItem('currentPage')) 
        : 0;
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

    setCurCard(id) {
      this.currentCard = id;
      localStorage.setItem('currentCard', angular.toJson(this.currentCard));
      this.pages[3].title = this.DataService.cards[id].title;
    }

    setAboutTab(tabIndex) {
      this.currentAboutTab = tabIndex;
      localStorage.setItem('currentAboutTab', angular.toJson(this.currentAboutTab));
    }

    clearCardPage() {
      this.pages[3] = {
        id: 3,
        title: '',
        children: []
      };
    }
  }
  
export default NavigationService;