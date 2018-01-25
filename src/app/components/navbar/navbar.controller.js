class NavbarController {
    constructor(UiStateService, NavigationService) {
      this.UiStateService = UiStateService;
      this.NavigationService = NavigationService;
    }

    openSidebar() {
      this.UiStateService.toggleSidebar('left');
    }

    openMenu(mdMenu, ev) {
      this.UiStateService.openMenu(mdMenu, ev);
    }
  }
  
export default NavbarController;