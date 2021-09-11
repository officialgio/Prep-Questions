/*
Given an array of words and a length l, format the text such that each line has exactly l characters and is fully justified on both the left and the right. Words should be packed in a greedy approach; that is, pack as many words as possible in each line. Add extra spaces when necessary so that each line has exactly l characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right. For the last line of text and lines with one word only, the words should be left justified with no extra space inserted between them.

Example

For
words = ["This", "is", "an", "example", "of", "text", "justification."]
and l = 16, the output should be

textJustification(words, l) = ["This    is    an",
                               "example  of text",
                               "justification.  "]
Input/Output

[execution time limit] 4 seconds (js)

[input] array.string words

An array of words. Each word is guaranteed not to exceed l in length.

Guaranteed constraints:
1 ≤ words.length ≤ 150,
0 ≤ words[i].length ≤ l.

[input] integer l

The length that all the lines in the output array should be.

Guaranteed constraints:
1 ≤ l ≤ 60.

[output] array.string

The formatted text as an array containing lines of text, with each line having a length of l.
*/


// code with explanation 

function textJustification(words, L) {
// The whole problem lies behind going through each line and making sure the number of characters in each line doesn't go over the length.
// Once we get in a line, we will just need to try and add spaces as evenly as possible, unless we're in the last line.    
    
    
    //An array called lines which we will return at the end of our loop
    // An index to represent our position in the array of words.
    let lines = [], index = 0; 
    // Now that we have defined our variables, we will need to start looking through our list of words.
    // outer loop to loop through wwords
    while(index < words.length) {
    // A count of how many letters are in the word at that index
        let count = words[index].length;
    // The position of the next word.
        let last = index + 1;
    // Next, we need to go through all of the words and find out where the number of characters is greater than our length L. If it's not greater than L, then we continue to go on to the next word.
        while(last < words.length) {
        // we've reached the limit for chars in a line.
            if (words[last].length + count + 1 > L) break;
            
            // otherwise increase the amount of chars, and go to the next word
            count += words[last].length + 1;
           last++
        }
        
        // An empty string to represent the line we will add to our lines array
        let line = "";
        // The difference or the number of words between the first and last word in the line
        let difference = last - index - 1;
        
        // Like the question said, if we're on the last line or if there is only one word in the line we will left justify.
        // 1, we left justify
        if (last === words.length || difference === 0) {
            //First, we will loop through the words in our line using our index and last variables and add a space after each word like normal.
            for (let i = index; i < last; i++) {
                line += words[i] + " ";
            }
        // This will add an extra space at the end, so we will remove it using JavaScript's substr function.
        // Now we just have to add spaces to fill in the rest of the line with spaces:
            line = line.substr(0, line.length - 1);
            for (let i = line.length; i < L; i++) {
                line += " ";
            }
        } else { 
            // Now that we've handled the last line, we need to handle the rest of the lines which will be middle justified.
            // now we need to middle justify, which is putting equal amount of spaces between words
            
            
            // A variable to calculate the number of spaces already in the line (max characters minus number of chars in the words, all divided by the difference)
            let spaces = (L - count) / difference;
            // A variable to calculate the remaining spaces to add (using the modulo operator it would be (L - count) % difference)
            let remainder = (L - count) % difference;
            
            // Using our index and last variables again, we can loop through the words for the line and start adding them in.
            
            // As long as we're not at the last word, we can calculate the max amount of spaces we can have based on the remainder, and add those spaces into the line:
            
            for (let i = index; i < last; i++) {
                line += words[i];
                
                if( i < last - 1) {
                    let limit = spaces + ((i - index) < remainder ? 1 : 0)
                    for (let j = 0; j <= limit; j++) {
                        line += " ";
                    }
                }
            }
        }
        // Add the line to our list, and set our new index to the position of the last word in our previous line:
        lines.push(line);
        index = last;
    }
    return lines
}

// clean code version (use this)

function textJustification(words, L) {
    let lines = [], index = 0;
    
    while(index < words.length) {
        let count = words[index].length;
        let last = index + 1;
        
        while(last < words.length) {
            if (words[last].length + count + 1 > L) break;
            count += words[last].length + 1;
            last++;
        }
        
        let line = "";
        let difference = last - index - 1;
        
        // if we're on the last line or the number of words in the line is 
        // 1, we left justify
        if (last === words.length || difference === 0) {
            for (let i = index; i < last; i++) {
                line += words[i] + " ";
            }
            
            line = line.substr(0, line.length - 1);
            for (let i = line.length; i < L; i++) {
                line += " ";
            }
        } else {
            // now we need to middle justify, which is putting equal amount 
            // of spaces between words
            let spaces = (L - count) / difference;
            let remainder = (L - count) % difference;
            
            for (let i = index; i < last; i++) {
                line += words[i];
                
                if( i < last - 1) {
                    let limit = spaces + ((i - index) < remainder ? 1 : 0)
                    for (let j = 0; j <= limit; j++) {
                        line += " ";
                    }
                }
            }
        }
        lines.push(line);
        index = last;
    }
    return lines
}
