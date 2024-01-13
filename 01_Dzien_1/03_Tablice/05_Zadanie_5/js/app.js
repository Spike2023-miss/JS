function multiply(array) {
    const result =array.reduce(function (prev,curr) {
        return prev * curr;
    }, 1);
    return result;
}
console.log(multiply([1,2,3,4,5,6,7]))
console.log(multiply([1,1,1,1]))
console.log(multiply([2,8,3,7]))