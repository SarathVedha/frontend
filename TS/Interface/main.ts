interface vechile {
    modelname: string;
    year: number;
    isGood: boolean;
    details() : string;
}

const tata: vechile = {
    modelname: "TATA",
    year: 2000,
    isGood: true,
    details() : string {
        
        return `modelname: ${this.modelname}, year: ${this.year}, isGood: ${this.isGood}`;
    },
}
console.log(tata.details());

//Extends

interface users {
    id: number;
}

interface person {
    name: string;
    age: number;
}

interface voter extends users, person {
    voterDetails() : string;
}

const voting: voter = {
    id : 1,
    name: "Vedha",
    age: 22,
    voterDetails() {
        
        return `${this.id}, ${this.name}, ${this.age}`;
    },
}
console.log(voting.voterDetails());