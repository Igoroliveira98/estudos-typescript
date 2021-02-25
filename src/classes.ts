class UserAccount {
    public name: string;
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
    private nickname: string;
    level: number;

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age); // Pega as propiedades das classes acima

        this.nickname = nickname;
        this.level = level;
    }

    get getLevel() {
        console.log("------GET------")
        return this.level
    }

    set setLevel(level: number) {
        this.level = level
    }


    logCharDetails(): void {
        console.log(`The player ${this.name} has the char ${this.nickname} at level ${this.level}`);
    }
}

const john = new CharAccount("John", 45, "johnmaster", 80);
console.log(john);
console.log(john.level);
john.logCharDetails();

john.setLevel = 499;
console.log(john.getLevel);

/**
 * Private: não permite que a propiedade de uma classe seja lida ou alterada fora da classe.
 * readonly: permite que a propiedade seja apenas lida.
 * public: permite que a propiedade seja lida e editada em qualquer lugar do código (ela é implícita).
 * protected: permite chamar a propriedade dentro da classe ou da classe extendendo ela, mas não consegue chamar fora da classe.
 */