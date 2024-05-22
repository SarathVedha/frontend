//type
type User = { id: number; username: string; age: number; dob: Date };

const vedha : User = {
    id: 1,
    username: "Vedha",
    age: 22,
    dob: new Date("2000-04-12")
}

const vijay : User = {
    id: 2,
    username: "Vijay",
    age: 40,
    dob: new Date("1985-04-12")
}

const sethu : User = {
    id: 3,
    username: "Sethu",
    age: 50,
    dob: new Date("1980-04-12") 
}

const userdetails = (user: User) : void => {
    console.log(user);
};
userdetails(vedha);
userdetails(sethu);

// union type
type stringOrNumber = string | number;

function print(val:stringOrNumber) : void {
    
    console.log(val);
}
print(12);
print("Vedha");

type themes = "Dark" | "Light";

let theme : themes = "Dark";
console.log(theme);
