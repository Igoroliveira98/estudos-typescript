interface Game {
    title: string;
    description: string;
    readonly genre: string;
    platform?: string[];
    getSmilitars?: (title: string) => void;
}

interface DLC extends Game {
    originalGame: Game;
    newContent: string[];
}


const tlou: Game = {
    title: "The last of us",
    description: "The best game in the world",
    genre: "Action",
    platform: ["ps3", "ps4"]
}

const leftBehind: DLC = {
    title: "The Last of Us - Left behind",
    description: "You play as Ellie before the original game",
    genre: "Action",
    originalGame: tlou,
    newContent: ["New weneapons"],
}




class CreateGame implements Game {
    title: string;
    description: string;
    genre: string;

    constructor(t: string, d: string, g: string) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
}