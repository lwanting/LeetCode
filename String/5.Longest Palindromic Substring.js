/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    const s1 = palindrome(s, i, i);
    const s2 = palindrome(s, i, i + 1);
    const temp = s1.length > s2.length ? s1 : s2;
    result = temp.length > result.length ? temp : result;
  }
  return result;
};
const palindrome = (s, left, right) => {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return s.slice(left + 1, right)
}