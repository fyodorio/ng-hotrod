class DataService {
    constructor() {
        this.cards = localStorage.getItem('cards') !== null 
        ? angular.fromJson(localStorage.getItem('cards')) 
        : [
            {
                id: 0,
                title: 'Issues',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                id: 1,
                title: 'Achievements',
                content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
                id: 2,
                title: 'Trade-offs',
                content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            }
        ]
        this.cardTitleValue = null;
        this.cardContentValue = null;
    }

    getCards() {
        return this.cards;
    }

    getCard(id) {
        return this.cards.find(card => card.id === id)
    }

    addCard(data) {
        this.cards.push(data);
        localStorage.setItem('cards', angular.toJson(this.cards));
    }

    editCard(id, data) {
        const cardIndex = this.cards.findIndex(card => card.id === id);
        this.cards[cardIndex] = data;
    }

    deleteCard(id) {
        this.cards = this.cards.filter(card => card.id !== id);
    }

  }
  
export default DataService;