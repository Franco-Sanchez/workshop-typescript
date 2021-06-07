// Primitives
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var x = "my string";
x = "hola";
x = 2;
var y = "A CONSTANT";
y = "OTHER";
var myvar;
myvar = 2;
myvar = "asd";
myvar = [];
var _aNumber;
var aNumber = 3;
aNumber = {};
var aBoolean = true;
// Arrays
var myArray = [[1], [2], [3]];
var _myArray = [[1], [2], [3]];
// Tuplas
var tupla = [2, "hola mundo", true];
// Objects
var myObj;
myObj = { name: "Franco", lastname: "Sanchez", courses: [1, 2] };
var myObj2;
myObj2 = { name: "Wences" };
var myUsername = { name: "Renato", age: 22 };
myUsername.lastname = "Rodriguez";
var myUser = { admin: true, name: "Franco", since: 123 };
myUser.admin = false;
var myUser2 = { admin: false, name: "Franco", since: 123 };
var myUser3 = { admin: false, name: "Franco", since: 123, years: 10 };
function contactPeople(method, people) {
    if (method === "email") {
        people.forEach(function () { return console.log("Enviar email"); });
    }
    else if (method === "sms") {
        people.forEach(function () { return console.log("Enviar mensaje"); });
    }
}
contactPeople("sms", [{ name: "Franco", phone: 123456 }]);
var color = [250, 34, 42];
var agenda = {};
agenda["My Contact"] = { phone: 123456 };
agenda["1234"] = { phone: 654321 };
agenda["1234"] = null;
var newObj = { name: "Dina", phone: 123456 };
var newEmail = __assign(__assign({}, newObj), { email: "dina@mail.com" });
var roEmail = { name: "Dina", email: "dina@mail.com" };
roEmail.name = "Franco";
var roEmailRequired = { email: "renato@mail.com" };
roEmailRequired.name = "Renato";
// Generics
var numArray = [1, 2, 3];
function myMap(arg) {
    return [1, 1, 1];
}
myMap(__assign(__assign({}, newObj), { email: "dina@mail.com" }));
