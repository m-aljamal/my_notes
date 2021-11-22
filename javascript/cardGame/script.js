const createDeck = () => {
  return {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    values: [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"],
    deck: [],
    printedDeck: [],
    initilaizeDeck() {
      const { suits, values, deck } = this;
      for (let value of values) {
        for (let suit of suits) {
          deck.push({
            value,
            suit,
          });
        }
      }
      return deck;
    },
    getCard() {
      const { deck, printedDeck } = this;
      const card = deck.pop();
      printedDeck.push(card);
      return card;
    },
    getMulitpleCards(num) {
      let cards = [];
      for (let i = 0; i < num; i++) {
        const card = this.getCard();
        cards.push(card);
      }
      return cards;
    },
    shuffleDeck() {
      const { deck } = this;
      for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
    },
  };
};

const myDeck = createDeck().initilaizeDeck();
