/*
  Given a pattern and a string s, find if s follows the same pattern.

  Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

  Each letter in pattern maps to exactly one unique word in s.
  Each unique word in s maps to exactly one letter in pattern.
  No two letters map to the same word, and no two words map to the same letter.

  Example 1:
  Input: pattern = "abba", s = "dog cat cat dog"
  Output: true

  Explanation:
  The bijection can be established as:
  'a' maps to "dog".
  'b' maps to "cat".

  Example 2:
  Input: pattern = "abba", s = "dog cat cat fish"
  Output: false

  Example 3:
  Input: pattern = "aaaa", s = "dog cat cat dog"
  Output: false
*/

function wordPattern(pattern: string, s: string): boolean {
    const words = s.split(" ");
    const charToWord = new Map<string, string>();
    const wordToChar = new Map<string, string>();

    if (pattern.length !== words.length) {
        return false;
    }

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        if (charToWord.has(char)) {
            if (charToWord.get(char) !== word) return false;
        } else {
            charToWord.set(char, word);
        }

        if (wordToChar.has(word)) {
            if (wordToChar.get(word) !== char) return false;
        } else {
            wordToChar.set(word, char);
        }
    }
    return true;
};