function reversename(name) {
    if (name === "") return ""
    return reversename(name.substring(1)) + name[0]
}
// console.log(reversename("apple man"))

function factorial(number) {
    if (number === 1) return 1
    return number * factorial(number - 1)
}
// console.log(factorial(5))

function palindrome(word) {
    if (word.length === 1 || word.length === 0) return true;
    if (word[0] !== word.slice(-1)) return false;

    return palindrome(word.slice(1, -1))
}
// console.log(palindrome("kayak"))

function palindrome2(word) {
    if (word.length === 1 || word.length === 0) return true;
    if (word[0] === word.slice(-1)) return palindrome2(word.slice(1, -1))

    return false;
}
// console.log(palindrome2("kayak"))

function decimalToBinary(number) {
    if (number === 1) return "1";
    return decimalToBinary(Math.floor(number / 2)) + String(number % 2)
}
// console.log(decimalToBinary(2000))

function sumOfNaturalNumbers(number) {
    if (number === 1) return number;

    return number + sumOfNaturalNumbers(number - 1)
}
// console.log(sumOfNaturalNumbers(10))

function binarySearch(numbers, search, left, right) {
    let mid = Math.floor((left + right) / 2);
    if (numbers[mid] === search) return mid;
    if (numbers[mid] > search) return binarySearch(numbers, search, left, mid)
    return binarySearch(numbers, search, mid + 1, right)
}
let numbers = [1, 2, 3, 4, 5, 6]
    // console.log(binarySearch(numbers, 2, 0, 6))

function fibonacci(num) {
    if ((num == 0) || (num == 1)) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(7))