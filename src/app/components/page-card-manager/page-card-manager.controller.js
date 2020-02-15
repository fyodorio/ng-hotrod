class PageCardManagerController {
	/* @ngInject */
	constructor(NavigationService, DataService, UiStateService) {
		this.NavigationService = NavigationService;
		this.DataService = DataService;
		this.UiStateService = UiStateService;
	}

	openCard(id) {
		this.NavigationService.setCurCard(id);
		this.NavigationService.setPage(3);
	}

	deleteCard(id) {
		this.DataService.deleteCard(id);
	}

	createCard(ev) {
		this.UiStateService.cardPrompt(ev);
	}

	cancelEditing() {
		this.UiStateService.$mdDialog.hide();
		this.DataService.cardTitleValue = null;
		this.DataService.cardContentValue = null;
	}

	submitNewCard() {
		const newCard = {
			id: this.DataService.cards.length,
			title: this.DataService.cardTitleValue,
			content: this.DataService.cardContentValue
		};
		this.UiStateService.$mdDialog.hide();
		this.DataService.addCard(newCard);
		this.DataService.cardTitleValue = null;
		this.DataService.cardContentValue = null;
	}
}

export default PageCardManagerController;
