/*
  Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
  Each letter in magazine can only be used once in ransomNote.

  Example 1:
  Input: ransomNote = "a", magazine = "b"
  Output: false

  Example 2:
  Input: ransomNote = "aa", magazine = "ab"
  Output: false

  Example 3:
  Input: ransomNote = "aa", magazine = "aab"
  Output: true
*/
function canConstruct(ransomNote: string, magazine: string): boolean {
    const charCounts = new Map<string, number>();

    for (const char of magazine) {
        charCounts.set(char, (charCounts.get(char) ?? 0) + 1);
    }

    for (const char of ransomNote) {
        const currentCount = charCounts.get(char) ?? 0;

        if (currentCount === 0) {
            return false;
        }

        charCounts.set(char, currentCount - 1);
    }
    return true;
};