class NavbarController {
    constructor(UiStateService, NavigationService) {
      this.name = 'Navbar Component';
      this.UiStateService = UiStateService;
      this.NavigationService = NavigationService;
    }

    openSidebar() {
      this.UiStateService.toggleSidebar('left');
    }
  }
  
export default NavbarController;