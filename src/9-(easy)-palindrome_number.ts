// link to problem: https://leetcode.com/problems/palindrome-number

function isPalindrome(num: number): boolean {
  for (let step = 0, str = String(num); step < (str.length / 2); step++) {
    if (!(str[step] === str[str.length - (step + 1)])) {
      return false;
    }
  }

  return true;
}

console.log('test1: true =>', isPalindrome(0));
console.log('test1: true =>', isPalindrome(121));
console.log('test1: true =>', isPalindrome(11));
console.log('test1: true =>', isPalindrome(1221));
console.log('test1: false =>', isPalindrome(-123));
console.log('test1: false =>', isPalindrome(10));
console.log('test1: false =>', isPalindrome(104));
console.log('test1: false =>', isPalindrome(-121));
console.log('test1: false =>', isPalindrome(123));

export { isPalindrome };
