"use strict";
var tlou = {
    title: "The last of us",
    description: "The best game in the world",
    genre: "Action",
    platform: ["ps3", "ps4"]
};
var leftBehind = {
    title: "The Last of Us - Left behind",
    description: "You play as Ellie before the original game",
    genre: "Action",
    originalGame: tlou,
    newContent: ["New weneapons"],
};
var CreateGame = /** @class */ (function () {
    function CreateGame(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
    return CreateGame;
}());
