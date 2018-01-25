class UiStateService {
    constructor($mdSidenav, $mdMenu) {
      this.$mdSidenav = $mdSidenav;
      this.$mdMenu = $mdMenu;
    }

    toggleSidebar(id) {
        this.$mdSidenav(id).toggle();
    }
    openMenu(mdMenu, ev) {
      mdMenu.open(ev);
    }
  }
  
export default UiStateService;