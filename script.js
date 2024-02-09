function isPalindrome(num) {
    // Convert the number to a string and check if it reads the same backward
    return num.toString() === num.toString().split('').reverse().join('');
}

function nextPalindrome(number) {
    // Increment the number until a palindrome is found
    while (true) {
        number++;

        // Check if the incremented number is a palindrome
        if (isPalindrome(number)) {
            return number;
        }
    }
}

const input = prompt("Enter a palindrome number");
alert(nextPalindrome(input));
