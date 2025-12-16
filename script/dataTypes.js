let currentYear = 2025;
console.log("Current Year:", currentYear);
//мы можем изменить значение переменной
currentYear = 2026;
console.log("Updated Year:", currentYear);
//let используется для объявления переменных, которые могут изменяться в будущем
// но вызывать дважды мы не можем
//let currentYear = 2027; // Ошибка: Identifier 'currentYear' has already been declared
const birthYear = 2005;
console.log("Birth Year:", birthYear);
//мы не можем изменить значение константы и не можем вызвать её дважды
//birthYear = 2006; // Ошибка: Assignment to constant variable.
//const birthYear = 2007; // Ошибка: Identifier 'birthYear' has already been declared

var age = 20;
console.log("Age:", age);
//мы можем изменить значение переменной
age = 21;
console.log("Updated Age:", age);
//var также используется для объявления переменных, которые могут изменяться в будущем
//но в отличие от let, var позволяет повторно объявлять переменную
/*let и const более безопаснее и предпочтительны в современном JavaScript 
из-за их блочной области видимости и предотвращения ошибок, связанных с повторным объявлением переменных*/

var age = 22;
console.log("Re-declared Age:", age);
let currentAge = 22;
const name = "Aruzhan";
let isStudent = true;
console.log("Current Age:", currentAge);
console.log("Name:", name);
console.log("Is Student:", isStudent);
// undefined
let undef;
console.log("undefined to string:", String(undef));
console.log("undefined to number:", Number(undef));

// null
let emptyValue = null;
console.log("null to string:", String(emptyValue));
console.log("null to number:", Number(emptyValue));
