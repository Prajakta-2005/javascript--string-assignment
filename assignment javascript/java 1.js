

function capitalizeWords(str) {
    // Split the string into an array of words
    let words = str.split(' ');

    // Capitalize the first letter of each word
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    // Join the words back into a single string
    return words.join(' ');
}

// Example usage:
let sentence = "prajakta deepak boritkar";
let capitalizedSentence = capitalizeWords(sentence);
console.log(capitalizedSentence); // Output: "Prajakta Deepak Boritkar"


// Function to check if a word exists in a string
function isExist(sentence, word) {
    // Check if inputs are not strings or are empty
    if (typeof sentence !== 'string' || typeof word !== 'string' || sentence.length === 0 || word.length === 0) {
        return false;
    }
    
    // Convert both the sentence and word to lowercase for case-insensitive comparison
    const lowerCaseSentence = sentence.toLowerCase();
    const lowerCaseWord = word.toLowerCase();
    
    // Check if the word exists in the sentence
    return lowerCaseSentence.includes(lowerCaseWord);
}

// Example usage:
const inputSentence = "The quick brown fox jumps over the lazy dog";
const inputWord = "fox";
const wordExists = isExist(inputSentence, inputWord);
console.log(wordExists); // Output: true


function calculateWordStats(text) {
    // Convert text to lowercase to ensure case-insensitivity
    text = text.toLowerCase();

    // Split the text into words
    const words = text.match(/\b\w+\b/g);

    // Count the frequency of each word
    const wordCount = {};
    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });

    // Calculate total number of words
    const totalWords = words.length;

    // Calculate word density
    const wordDensity = {};
    for (const word in wordCount) {
        wordDensity[word] = wordCount[word] / totalWords;
    }

    return { wordCount, wordDensity };
}

// Example usage
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae tortor id ligula tempor maximus. Sed nec magna quis nisl rhoncus dapibus.";
const { wordCount, wordDensity } = calculateWordStats(text);
console.log("Word Count:", wordCount);
console.log("Word Density:", wordDensity);


function extractFileExtension(filename) {
    // Find the last occurrence of '.' in the filename
    const dotIndex = filename.lastIndexOf('.');

    // If '.' is not found or it's the first character, return an empty string
    if (dotIndex === -1 || dotIndex === 0) {
        return '';
    }

    // Extract the extension substring starting from the character after the last dot
    const extension = filename.substring(dotIndex + 1);

    return extension;
}

// Example usage
const filename1 = "example.txt";
const filename2 = "script.js";
const filename3 = "image.jpeg";

console.log("File extension 1:", extractFileExtension(filename1)); // Output: txt
console.log("File extension 2:", extractFileExtension(filename2)); // Output: js
console.log("File extension 3:", extractFileExtension(filename3)); // Output: jpeg


function removeWhitespace(str) {
    return str.replace(/\s+/g, '');
}
// Example usage
const stringWithWhitespace = "   This is a string   with    whitespace.   ";
const stringWithoutWhitespace = removeWhitespace(stringWithWhitespace);
console.log(stringWithoutWhitespace);

function reverseWords(str) {
    // Split the string into an array of words
    const words = str.split(/\s+/);

    // Reverse the order of words
    const reversedWords = words.reverse();

    // Join the words back into a single string
    const reversedString = reversedWords.join(' ');

    return reversedString;
}
// Example usage
const originalString = "Hello world, how are you?";
const reversedString = reverseWords(originalString);
console.log(reversedString); // Output: "you? are how world, Hello"

//Counting Vowels
function countVowels(text) {
    const vowels = text.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
}

// Example usage:
console.log(countVowels("This is a test.")); // Output: 4
console.log(countVowels("Why?")); // Output: 0



//string palindrome check
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // Check if the string is equal to its reverse
    return cleanedStr === cleanedStr.split('').reverse().join('');
}
// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false



//String truncation
function truncateString(str, num) {
    if (str.length <= num) {
        return str;
    }
    return str.slice(0, num) + '...';
}
// Example usage:
console.log(truncateString("Hello, world!", 5)); // "Hello..."
console.log(truncateString("Short", 10)); // "Short"


//String Masking
function maskString(str) {
    if (str.length <= 4) {
        return str;
    }
    return '*'.repeat(str.length - 4) + str.slice(-4);
}
// Example usage:
console.log(maskString("1234567890")); // "**7890"
console.log(maskString("1234")); // "1234"

//Email validation
function isValidEmail(email) {
    // Regular expression for validating an Email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}
// Example usage:
console.log(isValidEmail("test@example.com")); // true
console.log(isValidEmail("invalid-email")); // false