// Description: A spoonerism is an error in speech in which corresponding consonants, vowels, or morphemes are switched between two words in a phrase. For example,

// kite flying becomes fite klying
// Your task is to create a function 'spoon' that takes a string of two words, separated by a space and returns a spoonerism of those words in a string, as in the above example. Note: Input will always contain 2 words

// Sample Input: kite flying

// Sample Output: fite klying

// Test Cases:

// Input#1:
// "not picking"

// Output#1:
// "pot nicking"


// Input#2:
// "horse riding"

// Output#2:
// "rorse hiding"

function spoon(str)
{

    var str = "not picking", 
    index = 0, 
    res = []; 
 
while ((index = str.indexOf(' ', index + 1)) > 0) { 
    res.push(index); 
} 
    // for (let i=0;i<words.length;i++)
    // {
    //     words[i].i
    //     console.log(words)
    // }
}