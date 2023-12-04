function logger() {
    console.log("Hello World");
}

//calling - running - invoking function means running it.
logger();
logger();
logger();

function juiceMaker(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const juicer = juiceMaker(5, 5);
console.log(juicer);

const appleOrangeJuice = juiceMaker(2,4);
console.log(appleOrangeJuice);