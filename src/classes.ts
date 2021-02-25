class UserAccount {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    };

    logDatails(): void {
        console.log(`The player ${this.name} is ${this.age} years old!!`);
    }
}

class CharAccount extends UserAccount {
    nickname: string;
    level: number;

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age); // Pega as propiedades das classes acima

        this.nickname = nickname;
        this.level = level;
    }
}

const igor = new UserAccount("Igor", 22);
console.log(igor);
console.log(igor.age);
igor.logDatails();

const john = new CharAccount("John", 45, "johnmaster", 80);
console.log(john);