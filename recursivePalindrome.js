function isPalindrome(str) {
  // add whatever parameters you deem necessary - good luck!
  if (str[0] !== str[str.length - 1] && str.length > 1) return false;
  if (str.length <= 1) return true;
  return isPalindrome(str.substring(1, str.length - 1));
}
