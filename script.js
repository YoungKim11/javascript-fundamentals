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


// const age1 = calcAge1(1991);

// //functiond decleration - can be called before initializing
// function calcAge1(birthYear) {
//     return 2023 - birthYear;
// }
// console.log(age1);


// //function expression
// const calcAge2 = function (birthYear) {
//     return 2023 - birthYear
// }

// const age2 = calcAge2(1998);
// console.log(age1, age2);


// const calcAge3 = birthYear => 2023 - birthYear;

// const age3 = calcAge3(1991);

// console.log(age3);

// const yearsToRetire = (birthYear, fullName) => {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//     return `${fullName} retires in ${retirement} years`;
// }

// console.log(yearsToRetire(1991, 'Darrick Robarge'));
// console.log(yearsToRetire(1998, 'Jadaine Fraser'));

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function juiceMaker(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice;
}

console.log(juiceMaker(2, 3));


