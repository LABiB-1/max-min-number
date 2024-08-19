function min(numbers){
    let lowest = numbers[0];
    for(let i = 0; i < numbers. length; i ++){
        const index = i;
        const element = numbers[index];
        if(element < lowest){
            lowest = element;
        }
    }
    return lowest ;
}
number = [22, 54, 34, 45, 24, 983, 90, 122];
console.log(min(number));

