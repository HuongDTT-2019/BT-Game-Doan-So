function display(arr) {
    let count = 10;
    for (let i = 0; i < arr.length; i++) {
        if (i === count) {
            document.write("</br>");
            count = count + 10;
        }
        document.write(arr[i] + " ");
    }
}

function binSearch(arr, data) {
    let upperBoard = arr.length - 1;
    let lowerBoard = 0;
    while (lowerBoard <= upperBoard) {
        let mid = Math.floor((lowerBoard + upperBoard) / 2);
        if (arr[mid] < data) {
            lowerBoard = mid + 1;
        } else if (arr[mid] > data) {
            upperBoard = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

function startGame(arr, data) {
    let position = binSearch(arr, data);
    for (let i = 0; i < arr.length; i++) {
        if (number_guessing === arr[position]) {
            alert("this is my numbers");
            break;
        } else if (number_guessing > arr[position]) {
            alert("too Height");
            number_guessing = parseInt(prompt("Enter the number guessing"));
        } else if (number_guessing < arr[position]) {
            alert("too Low");
            number_guessing = parseInt(prompt("Enter the number guessing"));
        }
    }
}

let input_number = parseInt(prompt("Enter the limited number"));
let secret_numbers = Math.floor(Math.random() * input_number + 1);
alert("secret:" + secret_numbers);
let nums = [];
for (let i = 1; i <= input_number; i++) {
    nums.push(i);
}
display(nums);
let number_guessing = parseInt(prompt("Enter the number guessing"));
startGame(nums, secret_numbers);


