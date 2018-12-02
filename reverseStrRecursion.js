function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  if (str.length === 0) return "";
  return str[str.length - 1] + reverse(str.substring(0, str.length - 1));
}
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
