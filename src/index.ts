// Primitives

let x = "my string";
x = "hola";
x = 2;

const y = "A CONSTANT";
y = "OTHER";

let myvar;
myvar = 2;
myvar = "asd";
myvar = [];

let _aNumber: number;
let aNumber = 3;
aNumber = {};

let aBoolean = true;

// Arrays

let myArray: Array<Array<number>> = [[1], [2], [3]];
let _myArray: number[][] = [[1], [2], [3]];

// Tuplas

let tupla: [number, string, boolean] = [2, "hola mundo", true];

// Objects

let myObj: { name: string, lastname: string, courses: number[] };
myObj = { name: "Franco", lastname: "Sanchez", courses: [1, 2] };

let myObj2: {name: string, lastname?: string};
myObj2 = { name: "Wences" };

interface Username {
    name: string
    lastname?: string
}

interface Username {
    age: number
}

let myUsername: Username = { name:"Renato", age: 22 }
myUsername.lastname = "Rodriguez";

// Interserctions & Unions

interface IsTeacher {
    admin: boolean
    since: number
    name: string
}

interface IsDecan extends IsTeacher {
    years: number
}

interface IsAdmin extends IsTeacher {
    admin: true
}

let myUser: IsTeacher & IsAdmin = { admin: true, name: "Franco", since: 123 };
myUser.admin = false;

let myUser2: IsTeacher | IsAdmin = { admin: false, name: "Franco", since: 123 };

let myUser3: IsDecan | IsAdmin = { admin: false, name: "Franco", since: 123, years: 10 };

// Functions

interface HasEmail {
    name?: string
    email: string
}

interface HasPhone {
    name: string
    phone: number
}

type SenderTypes = "email" | "sms" | "facebook"
type SenderPeople = (HasEmail | HasPhone)[]

function contactPeople(method: "email", people: HasEmail[]): void;
function contactPeople(method: "sms", people: HasPhone[]): void;
function contactPeople(method: SenderTypes, people: SenderPeople): void {
    if(method === "email") {
        people.forEach(() => console.log("Enviar email"));
    } else if(method === "sms") {
        people.forEach(() => console.log("Enviar mensaje"));
    }
}

contactPeople("sms", [{ name: "Franco", phone: 123456 }]);

type Color = [number, number, number]
let color: Color = [250, 34, 42];

// Dictionary

interface Agenda {
    [contactName: string]: null | undefined | {
        phone: number
    }
}

let agenda: Agenda = {};
agenda["My Contact"] = { phone: 123456 };
agenda["1234"] = { phone: 654321 };
agenda["1234"] = null;

let newObj: HasPhone = { name: "Dina", phone: 123456 };
const newEmail = { ...newObj, email: "dina@mail.com" } as HasEmail

type ReadOnlyHasEmail = Readonly<HasEmail>
const roEmail: ReadOnlyHasEmail = { name: "Dina", email: "dina@mail.com"}
roEmail.name = "Franco";

type RequiredHasEmail = Required<HasEmail>
const roEmailRequired: RequiredHasEmail = { email: "renato@mail.com" }
roEmailRequired.name = "Renato";

// Generics

let numArray: Array<number> = [1, 2, 3];

function myMap<Type>(arg: Type): number[] {
    return [1, 1, 1]
}

myMap({ ...newObj, email: "dina@mail.com" } as HasEmail);