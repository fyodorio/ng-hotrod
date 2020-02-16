class UiStateService {
	/* @ngInject */
	constructor($mdSidenav, $mdDialog, $document) {
		this.$mdSidenav = $mdSidenav;
		this.$mdDialog = $mdDialog;
		this.$document = $document;
	}

	toggleSidebar(id) {
		this.$mdSidenav(id).toggle();
	}

	openMenu(mdMenu, ev) {
		mdMenu.open(ev);
	}

	cardPrompt(ev) {
		this.$mdDialog.show({
			contentElement: '#card-dialog',
			parent: angular.element(this.$document.find('body')),
			targetEvent: ev
		});
	}
}

export default UiStateService;
