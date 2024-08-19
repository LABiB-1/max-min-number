function max(numbers){
    let largest = [0];
    for(i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}
numbers = [44, 54, 65, 24, 89, 99, 32];
const mx = max(numbers);
console.log(mx);