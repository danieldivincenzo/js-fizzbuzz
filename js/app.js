for (let i = 0; i < 100; i++) {
    //stampo prima tutti i numeri da 1 a 100
    let num = i + 1

    // SE un numero è multiplo di 3 e di 5 stampo FizzBuzz
    // ALTRIMENTI SE è multiplo di 3 stampo Fizz
    // ALTRIMENTI SE è multiplo di 5 stampo Buzz

    if ((num % 3) === 0 && (num % 5) === 0) {
        num = "FizzBuzz"
    } else if ((num % 3) === 0) {
        num = "Fizz"
    } else if ((num % 5) === 0) {
        num = "Buzz"
    }
    console.log(num)
}