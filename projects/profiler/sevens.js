function Pile(name) {
    this.name = name;
    this.cards = [];

}

function CardGame(obj) {
    this.spaces = [];
    this.textAreas = [];
    this.users = [];
    this.users.push({
        username: 'a',
        cards: new Pile()
    });
    this.users.push({
        username: 'b',
        cards: new Pile()

    });
    this.users.push({
        username: 'c',
        cards: new Pile()
    });
    this.deck = new Pile();
    for (var i = 0; i < 13; i++) {
        for (var a = 0; a < 4; a++) {
            this.deck.cards.push({
                value: i,
                type: a,
                appearance: {
                    effects: []
                }
            });
        };
    }
}

Array.prototype.sortCards = function () {
    return this;
}
Array.prototype.remove = function (it) {

    this.splice(this.indexOf(it), 1);

};

Array.prototype.where = function (call) {
    var ar = [];
    for (var i = 0; i < this.length; i++) {
        if (call(this[i])) {
            ar.push(this[i]);
        }
    }
    return ar;

};

Array.prototype.forEach = function (call) {
    var result=false;
    for (var i = 0; i < this.length; i++) {
        if (result=call(this[i],i)) {
            return result;
        }
    }
    return undefined;

};

Array.prototype.any = function (call) {

    for (var i = 0; i < this.length; i++) {
        if (call(this[i])) {
            return true;
        }
    }
    return false;

};

function TableSpace(obj) {
    this.appearance = {};
    this.appearance.innerStyle = {};
    this.appearance.effects = [];
    this.pile = new Pile();
}

function TableTextArea(obj) {

}

function Effect$Bend() {

}

function Effect$Highlight() {

}

var _ = {
    numbers: function (low, high) {
        var m = [];
        for (var i = low; i < high; i++) {
            m.push(i);
        };

        return m;
    },
    clone: function (it) {

        return it.slice(0);

    },
    floor: function (f) {
        return Math.floor(f);
    },
    random: function (f) {
        return Math.random();
    }
};

var shuff = {
    log: function (f) {
        console.log(f);
    },
    askQuestion: function (user, question, answers, cg) {
        if (answers.length > 0) {
            return 1;
        } else {
            return 0;
        }
    },
    declareWinner: function () {
        return true;
    }
};

function sevens() {
    var self = this;
    self.spades = new Pile('spades');
    self.clubs = new Pile('clubs');
    self.hearts = new Pile('hearts');
    self.diamonds = new Pile('diamonds');

    self.cardGame = new CardGame({
        numberOfCards: 52,
        size: {
            width: 16,
            height: 12
        }
    });

    self.constructor = function () {

        self.cardGame.spaces.push(new TableSpace({
            visible: true,
            vertical: true,
            stack: false,
            name: 'Clubs',
            x: 5,
            y: 4,
            width: 0,
            height: 6,
            pile: self.clubs,
            numberOfCardsHorizontal: 1,
            numberOfCardsVertical: -1,
            resizeType: 1
        }));
        self.cardGame.spaces.push(new TableSpace({
            visible: true,
            vertical: true,
            stack: false,
            name: 'Hearts',
            x: 7,
            y: 4,
            width: 0,
            height: 6,
            pile: self.hearts,
            numberOfCardsHorizontal: 1,
            numberOfCardsVertical: -1,
            resizeType: 1
        }));
        self.cardGame.spaces.push(new TableSpace({
            visible: true,
            vertical: true,
            stack: false,
            name: 'Diamonds',
            x: 9,
            y: 4,
            width: 0,
            height: 6,
            pile: self.diamonds,
            numberOfCardsHorizontal: 1,
            numberOfCardsVertical: -1,
            resizeType: 1
        }));
        self.cardGame.spaces.push(new TableSpace({
            visible: true,
            vertical: true,
            stack: false,
            name: 'Spades',
            x: 11,
            y: 4,
            width: 0,
            height: 6,
            pile: self.spades,
            numberOfCardsHorizontal: 1,
            numberOfCardsVertical: -1,
            resizeType: 1
        }));

        self.cardGame.textAreas.push(new TableTextArea({
            name: 'SpadesText',
            x: 5,
            y: 3,
            text: 'Clubs'
        }));
        self.cardGame.textAreas.push(new TableTextArea({
            name: 'HeartsText',
            x: 7,
            y: 3,
            text: 'Hearts'
        }));
        self.cardGame.textAreas.push(new TableTextArea({
            name: 'DiamondsText',
            x: 9,
            y: 3,
            text: 'Diamonds'
        }));
        self.cardGame.textAreas.push(new TableTextArea({
            name: 'SpadesText',
            x: 11,
            y: 3,
            text: 'Spades'
        }));
    };
    self.createUser = function (user, userIndex, text) {
        var sp;
        var tta;

        user.userIndex = userIndex;
        switch (userIndex) {
            case 0:
            case 1:
            case 3:
            case 4:
                self.cardGame.spaces.push(sp = new TableSpace({
                    vertical: false,
                    visible: true,
                    stack: false,
                    name: 'User' + userIndex,
                    width: 3,
                    height: 0,
                    bend: true,
                }));
                self.cardGame.textAreas.push(tta = new TableTextArea({
                    name: 'Text' + userIndex,
                    text: text
                }));
                break;
            case 2:
            case 5:
                var rotate = 0;
                if (userIndex == 2) {
                    rotate = -90;
                } else {
                    rotate = -90;
                }
                self.cardGame.spaces.push(sp = new TableSpace({
                    vertical: true,
                    visible: true,
                    stack: false,
                    name: 'User' + userIndex,
                    width: 0,
                    height: 3,
                    bend: true
                }));
                sp.appearance.innerStyle.rotate = rotate;

                self.cardGame.textAreas.push(tta = new TableTextArea({
                    name: 'Text' + userIndex,
                    text: text
                }));
                break;
        }
        sp.user = user;
        sp.appearance.effects.push(new Effect$Bend({
            degrees: userIndex > 2 ? -15 : 15
        }));

        var space = sp;
        switch (userIndex) {
            case 0:
                space.x = 4;
                space.y = 2;
                break;
            case 1:
                space.x = 9;
                space.y = 2;
                break;
            case 2:
                space.x = 13;
                space.y = 5;
                break;
            case 3:
                space.x = 9;
                space.y = 12;
                break;
            case 4:
                space.x = 4;
                space.y = 12;
                break;
            case 5:
                space.x = 3;
                space.y = 5;
                break;
        }
        var textArea = tta;
        textArea.x = space.x;
        textArea.y = space.y - 1;
        return sp;
    };

    self.runGame = function () {
        if (!self.cardGame.users || self.cardGame.users.length == 0) {

            return true;
        }
        _.numbers(1, 20).forEach(function () {
            self.cardGame.deck.cards = self.shuffle(self.cardGame.deck.cards);
        });

        self.cardGame.users.forEach(function (u, ind) {
            shuff.log('::' + u.userName);

            var sp = self.createUser(u, ind, u.userName);
            sp.pile = u.cards;
        });


        while (self.cardGame.deck.cards.length > 0) {
            self.cardGame.users.forEach(function (u) {
                if (self.cardGame.deck.cards.length > 0) {
                    u.cards.cards.push(self.cardGame.deck.cards[0]);
                    self.cardGame.deck.cards.remove(self.cardGame.deck.cards[0]);
                }
            });
        }


        self.cardGame.users.forEach(function (u) {
            u.cards.cards.sortCards();
        });

        var CardTypes = ['Diamonds', 'Clubs', 'Hearts', 'Spades'];
        var CardNames = ['Ace', 'Deuce', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];

        while (true) {
            var result = self.cardGame.users.forEach(function (u) {

                var usable = u.cards.cards.where(function (c) {
                    return (c.type == 3 && (c.value == 6 || self.spades.cards.any(function (_c) {
                            return _c.value == c.value + 1 || _c.value == c.value - 1;
                        }))) ||
                        (c.type == 1 && (c.value == 6 || self.clubs.cards.any(function (_c) {
                            return _c.value == c.value + 1 || _c.value == c.value - 1;
                        }))) ||
                        (c.type == 2 && (c.value == 6 || self.hearts.cards.any(function (_c) {
                            return _c.value == c.value + 1 || _c.value == c.value - 1;
                        }))) ||
                        (c.type == 0 && (c.value == 6 || self.diamonds.cards.any(function (_c) {
                            return _c.value == c.value + 1 || _c.value == c.value - 1;
                        })));
                });
                var answers = [];
                answers.push('Skip');
                usable.sortCards().forEach(function (card) {
                    answers.push(CardNames[card.value] + ' Of ' + CardTypes[card.type]);
                });


                var sp = self.cardGame.spaces;
                for (var i = 0; i < sp.length; i++) {


                    sp[i].appearance.effects = [];


                    if (sp[i].user == u) {
                        if (usable.length == 0) {
                            sp[i].appearance.effects.push(new Effect$Highlight({
                                radius: 55,
                                color: 'rgba(255,0,84,0.7)',
                                opacity: .5
                            }));
                        } else {

                            sp[i].appearance.effects.push(new Effect$Highlight({
                                radius: 55,
                                color: 'rgba(112,255,84,0.7)',
                                opacity: .5
                            }));
                        }
                    } else if (sp[i].user) {
                        sp[i].appearance.effects.push(new Effect$Highlight({
                            radius: 55,
                            color: 'rgba(119,25,84,0.2)',
                            opacity: .2
                        }));

                    }


                    if (!sp[i].user) {

                        var op = sp[i].pile.cards.length / 13;

                        var red = '112';
                        if (sp[i].pile.cards.length == 13) {
                            red = '255';
                        }

                        sp[i].appearance.effects.push(new Effect$Highlight({
                            radius: 25 + sp[i].pile.cards.length * 2,
                            color: 'rgba(' + red + ',12,' + parseInt(op * 255) + ',' + op + ')',
                            opacity: op
                        }));
                    } else {
                        sp[i].appearance.effects.push(new Effect$Bend({
                            degrees: sp[i].user.userIndex > 2 ? -15 : 15
                        }));
                    }

                    for (var ij = 0; ij < sp[i].pile.cards.length; ij++) {
                        var card = sp[i].pile.cards[ij];
                        card.appearance.effects = [];


                        if (card.value == 6 && !sp[i].user) {

                            card.appearance.innerStyle.rotate = 90;
                        }

                        for (var j = 0; j < usable.length; j++) {
                            var m = usable[j];
                            if (m.value == card.value && m.type == card.type) {
                                card.appearance.effects.push(new Effect$Highlight({
                                    radius: 5,
                                    color: 'rgba(35,170,255,0.55)',
                                    opacity: .55
                                }));
                                break;
                            }
                        }


                    }
                }


                shuff.log('asking question');
                var de = shuff.askQuestion(u, 'Which card would you like to play?', answers, self.cardGame);
                shuff.log('asked question: ' + de);

                if (de > 0 && usable.length >= de) {
                    var rm = usable[de - 1];

                    switch (rm.type) {
                        case 3:
                            u.cards.cards.remove(rm);
                            self.spades.cards.push(rm);
                            self.spades.cards.sortCards().reverse();
                            break;
                        case 1:
                            u.cards.cards.remove(rm);
                            self.clubs.cards.push(rm);
                            self.clubs.cards.sortCards().reverse();
                            break;
                        case 2:
                            u.cards.cards.remove(rm);
                            self.hearts.cards.push(rm);
                            self.hearts.cards.sortCards().reverse();
                            break;
                        case 0:
                            u.cards.cards.remove(rm);
                            self.diamonds.cards.push(rm);
                            self.diamonds.cards.sortCards().reverse();
                            break;
                    }

                    if (u.cards.cards.length == 0) {

                        for (var i = 0; i < sp.length; i++) {

                            if (sp[i].user == u) {
                                sp[i].appearance.effects.push(new Effect$Highlight({
                                    radius: 100,
                                    color: 'rgba(255,255,255,0.7)',
                                    opacity: .7
                                }));
                                break;
                            }
                        }
                        shuff.declareWinner(u);

                        return true;
                    }
                }
                return false;
            });
            if (result) {
                return true;
            }

        }


    };


    self.shuffle = function (arbs) {
        var indes = 0;
        var vafb = _.clone(arbs);

        vafb.forEach(function (fs) {
            var vm = _.floor(_.random() * vafb.length);
            vafb[indes] = vafb[vm];
            indes++;
            vafb[vm] = fs;
        });

        arbs = vafb;

        return arbs;
    };

    console.log('thiaas(');
    return self;
}


var sev = new sevens();
sev.constructor();
sev.runGame();