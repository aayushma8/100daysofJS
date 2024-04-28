///find longest word from the given string.
const findLongestWord = (str) => {
    if(str.trim().length === 0){
        return false;
    }
// converting to array
strArr = str.split(" ");
strArr = strArr.sort((a, b) => b.length-a.length);
// use a.length-b.length to find out the shortest word.
console.log(strArr);
return strArr[0];
};
console.log(
    findLongestWord("Hi! My name is Aayushma.")
    );