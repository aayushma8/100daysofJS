// using reduce method to solve the same question
const findLongestWord = (str) => {
    if(str.trim().length === 0){
        return false;
    }
// converting to array
strArr = str.split(" ");
 return strArr.reduce(
    (accumulator, currentWord) => (currentWord.length > accumulator.length ? currentWord : accumulator),
    ""
 );
};

console.log(
    findLongestWord("Hi! My name is Aayushma.")
    );