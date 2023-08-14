function countWords(string) {
    const words = string.split(" "); //split the string and convert into array of words
    const wordCountMap = new Map(); //store each word 
  
    for (let word of words) { //iterates on each word of the string 
      if (wordCountMap.has(word)) {//checks the repetation of the words in the string
        wordCountMap.set(word, wordCountMap.get(word) + 1);//if repetetation then count is incremented by 1
      } else {
        wordCountMap.set(word, 1); //if it is onny one time in the string then then initional count 1 is shown
      }
    }
  
    return wordCountMap;
  }
  
  // Example usage:
  const text = "the pw skills is the unicorn of the pw companny and the pw armys";
  const wordCount = countWords(text);
  console.log(wordCount);


//   output:-
// Map(9) {        
//     'the' => 4,   
//     'pw' => 3,    
//     'skills' => 1,
//     'is' => 1,
//     'unicorn' => 1,
//     'of' => 1,
//     'companny' => 1,
//     'and' => 1,
//     'armys' => 1
//   }