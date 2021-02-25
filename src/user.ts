// with types we can define the types of informations for one account as at exemple:

type AccountInfo = {
    id: number;
    name: string;
    email?: string;
}

const account: AccountInfo = {
    id: 123,
    name: "Igor",
}


// ?: it mean "optional"

type CharInfo = {
    nickname: string;
    level: number;
}

const char: CharInfo = {
    nickname: "igor",
    level: 100,
}

// intersection: 
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
    id: 123,
    name: "igor",
    nickname: "snowblind",
    level: 50
}