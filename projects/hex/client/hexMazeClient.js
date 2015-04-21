﻿function MazeClient(updateContent, clientTick) {
    var self = this;
    self.players = [];
    self.currentPlayerID = null;
    self.currentPlayer = null;
    var client = this.client = io.connect('198.211.107.235:2222');


    client.on('Game.PlayerLeft', function (data) {

    });


    client.on('Game.PlayerWon', function (data1) {
        window.alert('Player ' + data1 + ' Won!');
        client = null;
    });
    var updates = {};
    client.on('Game.UpdatePosition', function (data) {
        for (var i = 0; i < data.length; i++) {
            if (!updates[data[i].tick]) {
                updates[data[i].tick] = [];
            }
            updates[data[i].tick].push(data[i]);
        }
    });

    var tick = 0;

    client.on('Game.Started', function(data){
        startGame(data);
        //gametick
        setInterval(function () {
            tick++;
            clientTick();


            serverTick();
        }, 1000 / 10);

    });

    function updatePlayers(update) {
        for (var j = 0; j < update.length; j++) {
            for (var i = 0; i < self.players.length; i++) {
                if (self.players[i].userID == update[j].userID) {
                    self.players[i].moveToX = update[j].x;
                    self.players[i].moveToY = update[j].y;
                }
            }
        }
    }

    function serverTick() {

        for (var m in updates) {
            if (m < tick) {

                updatePlayers(updates[m]);

                delete updates[m];
            }

        }

        var update = updates[tick];
        if (update) {
            updatePlayers(update);
            delete updates[tick];

            updateContent();
        }

    }


    /*   client.on('Game.MazeData', function (mazeData) {
     ui. setupGame(players, currentPlayer, mazeData);
     });*/
    client.on('Game.PlayerInfo', function (data) {
        for (var $t1 = 0; $t1 < data.length; $t1++) {

            if (data[$t1].userID === self.currentPlayerID) {
                self.currentPlayer = data[$t1];
            }
        }
        self.players = data;
    });
    client.on('Game.PlayerReflect', function (data) {
        self.currentPlayerID = data.userID;
    });
    this.updatePlayerPosition = function (x, y) {
        client.emit('Game.UpdatePosition', {x: x, y: y });
    };
}