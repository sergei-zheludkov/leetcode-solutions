// link to problem: https://leetcode.com/problems/length-of-last-word

const test1_str = "Hello World";
const test2_str = "   fly me   to   the moon  ";
const test3_str = "luffy is still joyboy";
const test4_str = "kukarek";

function lengthOfLastWord(str: string): number {
  const trimStr = str.trimEnd();

  let count = 0;

  for (let step = trimStr.length - 1; step >= 0; step--, count++) {
    if (trimStr[step] === " ") {
      break;
    }
  }

  return count;
}

console.log(`test 1: \n Expected: 5 \n Output: ${lengthOfLastWord(test1_str)}`);
console.log(`test 2: \n Expected: 4 \n Output: ${lengthOfLastWord(test2_str)}`);
console.log(`test 3: \n Expected: 6 \n Output: ${lengthOfLastWord(test3_str)}`);
console.log(`test 3: \n Expected: 7 \n Output: ${lengthOfLastWord(test4_str)}`);

export { lengthOfLastWord };
