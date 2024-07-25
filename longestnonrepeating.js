function lengthof lengthofSubstrings(s)
{
    let n = s.length;
    let maxLength = 0;
    let set = new set();
    let left = 0;

  for (let right = 0; right < n; right+++)
  {
    while (set.haS(s.charAt(right)))
    { set.delete (s.charAt(left));
        left+++;

    }
    Set.add(s.charAt(right));
    maxlength = math.max(maxlength, right - left+1);

  }
  return maxLength;
}
const userlnput = promt("enter a string:");
const result = lengthOflongestSubstrings(userlnput);
console.log("length of the longest substring without repeating characters;", results);

    
