// function logger() {
//     console.log("Hello World");
// }

// //calling - running - invoking function means running it.
// logger();
// logger();
// logger();

// function juiceMaker(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const juicer = juiceMaker(5, 5);
// console.log(juicer);

// const appleOrangeJuice = juiceMaker(2,4);
// console.log(appleOrangeJuice);


const age1 = calcAge1(1991);

//functiond decleration - can be called before initializing
function calcAge1(birthYear) {
    return 2023 - birthYear;
}
console.log(age1);


//function expression
const calcAge2 = function (birthYear) {
    return 2023 - birthYear
}

const age2 = calcAge2(1998);
console.log(age1, age2);