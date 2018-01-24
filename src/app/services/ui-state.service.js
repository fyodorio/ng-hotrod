class UiStateService {
    constructor($mdSidenav) {
      this.isSidebarOpen = false;
      this.$mdSidenav = $mdSidenav;
    }

    toggleSidebar(id) {
        this.$mdSidenav(id).toggle();
    }

  }
  
export default UiStateService;