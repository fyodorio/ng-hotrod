class SidebarController {
    constructor(UiStateService) {
      this.name = 'Sidebar Component';
      this.UiStateService = UiStateService;
    }

    closeSidebar() {
      this.UiStateService.toggleSidebar('left');
    }
  }
  
export default SidebarController;