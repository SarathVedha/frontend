class User {

    private bonus : number = 2000.00;

    constructor(public id : number, public name : string, public age : number, public dob : Date, public location : string) {}

    public userDetails() : string {
        
        return `id: ${this.id}, name: ${this.name}, age: ${this.age}, dob: ${this.dob.toDateString()}, location: ${this.location}`;
    }

    public isVoting() : boolean {
        
        return this.age >= 18;
    }

    public getBonus() : number {

        return this.bonus;
    }
}

const vedha = new User(1, "vedha", 22, new Date("2000-04-12"), "TRT");
console.log(vedha);
console.log(vedha.userDetails());
console.log(vedha.isVoting());
console.log(vedha.getBonus());